"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import { curveMonotoneX } from "@visx/curve";
import { scaleLinear, scaleTime } from "@visx/scale";
import { ParentSize } from "@visx/responsive";

/* ─── Types ───────────────────────────────────────────────── */

export interface LiveLinePoint {
  time: number;
  value: number;
}

export interface MomentumColors {
  up: string;
  down: string;
  flat: string;
}

interface ChartContextValue {
  data: LiveLinePoint[];
  value: number;
  xScale: ReturnType<typeof scaleTime> | null;
  yScale: ReturnType<typeof scaleLinear> | null;
  width: number;
  height: number;
  margin: { top: number; right: number; bottom: number; left: number };
  mouseX: number | null;
  mouseY: number | null;
}

const ChartContext = createContext<ChartContextValue | null>(null);

function useChartContext() {
  const ctx = useContext(ChartContext);
  if (!ctx) throw new Error("Must be used inside LiveLineChart");
  return ctx;
}

/* ─── Inner Chart (all hooks here) ────────────────────────── */

interface InnerChartProps {
  data: LiveLinePoint[];
  value: number;
  timeWindow: number;
  margin: { top: number; right: number; bottom: number; left: number };
  children: React.ReactNode;
  width: number;
  height: number;
}

function InnerChart({
  data,
  value,
  timeWindow,
  margin,
  children,
  width,
  height,
}: InnerChartProps) {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
      setMouseY(e.clientY - rect.top);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setMouseX(null);
    setMouseY(null);
  }, []);

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const now = Date.now() / 1000;
  const windowStart = now - timeWindow;

  const visibleData = useMemo(
    () => data.filter((d) => d.time >= windowStart),
    [data, windowStart]
  );

  const xScale = useMemo(() => {
    return scaleTime({
      range: [0, innerWidth],
      domain: [
        new Date((now - timeWindow) * 1000),
        new Date(now * 1000),
      ],
    });
  }, [innerWidth, now, timeWindow]);

  const yScale = useMemo(() => {
    const vals = visibleData.map((d) => d.value);
    const yMin = vals.length > 0 ? Math.min(...vals) : 0;
    const yMax = vals.length > 0 ? Math.max(...vals) : 100;
    const padding = (yMax - yMin) * 0.15 || 10;
    return scaleLinear({
      range: [innerHeight, 0],
      domain: [yMin - padding, yMax + padding],
      nice: true,
    });
  }, [visibleData, innerHeight]);

  const ctx: ChartContextValue = {
    data: visibleData,
    value,
    xScale,
    yScale,
    width: innerWidth,
    height: innerHeight,
    margin,
    mouseX,
    mouseY,
  };

  return (
    <ChartContext.Provider value={ctx}>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#315BFF" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#315BFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Group left={margin.left} top={margin.top}>
          {children}
        </Group>
      </svg>
    </ChartContext.Provider>
  );
}

/* ─── LiveLineChart (wrapper) ─────────────────────────────── */

interface LiveLineChartProps {
  data: LiveLinePoint[];
  value: number;
  dataKey?: string;
  window?: number;
  numXTicks?: number;
  margin?: Partial<{ top: number; right: number; bottom: number; left: number }>;
  children: React.ReactNode;
}

export function LiveLineChart({
  data,
  value,
  window: timeWindow = 30,
  margin: marginProp,
  children,
}: LiveLineChartProps) {
  const margin = useMemo(
    () => ({
      top: 20,
      right: 20,
      bottom: 30,
      left: 50,
      ...marginProp,
    }),
    [marginProp]
  );

  return (
    <ParentSize>
      {({ width, height }) => {
        if (width === 0 || height === 0) return null;
        return (
          <InnerChart
            data={data}
            value={value}
            timeWindow={timeWindow}
            margin={margin}
            width={width}
            height={height}
          >
            {children}
          </InnerChart>
        );
      }}
    </ParentSize>
  );
}

/* ─── LiveLine ────────────────────────────────────────────── */

interface LiveLineProps {
  dataKey?: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: boolean;
  pulse?: boolean;
  dotSize?: number;
  badge?: boolean;
  formatValue?: (v: number) => string;
  momentumColors?: MomentumColors;
}

export function LiveLine({
  stroke = "#315BFF",
  strokeWidth = 2.5,
  fill = true,
  pulse = true,
  dotSize = 5,
  badge = true,
  formatValue,
  momentumColors,
}: LiveLineProps) {
  const { data, value, xScale, yScale, width, height } = useChartContext();

  if (!xScale || !yScale || data.length < 2) return null;

  const currentStroke = useMemo(() => {
    if (!momentumColors) return stroke;
    if (data.length < 2) return momentumColors.flat;
    const prev = data[data.length - 2].value;
    if (value > prev) return momentumColors.up;
    if (value < prev) return momentumColors.down;
    return momentumColors.flat;
  }, [momentumColors, data, value, stroke]);

  const lastPoint = data[data.length - 1];
  const lastX = xScale(new Date(lastPoint.time * 1000)) as number;
  const lastY = yScale(lastPoint.value) as number;

  const xAccessor = (d: LiveLinePoint): number =>
    xScale(new Date(d.time * 1000)) as number;
  const yAccessor = (d: LiveLinePoint): number =>
    yScale(d.value) as number;

  const areaPath = `
    M${data.map((d) => `${xAccessor(d)},${yAccessor(d)}`).join(" L")}
    L${lastX},${height}
    L${xAccessor(data[0])},${height}
    Z
  `;

  return (
    <g>
      {fill && <path d={areaPath} fill="url(#lineGradient)" />}

      <LinePath<LiveLinePoint>
        data={data}
        x={xAccessor}
        y={yAccessor}
        curve={curveMonotoneX}
        stroke={currentStroke}
        strokeWidth={strokeWidth}
      />

      {pulse && (
        <g>
          <circle cx={lastX} cy={lastY} r={dotSize + 6} fill={currentStroke} opacity={0.15}>
            <animate attributeName="r" values={`${dotSize + 4};${dotSize + 10};${dotSize + 4}`} dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx={lastX} cy={lastY} r={dotSize} fill="white" stroke={currentStroke} strokeWidth={2.5} />
        </g>
      )}

      {badge && formatValue && (
        <g>
          <rect
            x={lastX + 10}
            y={lastY - 14}
            width={formatValue(value).length * 8 + 16}
            height={24}
            rx={6}
            fill="white"
            stroke="#e0dff0"
            strokeWidth={1}
          />
          <text x={lastX + 18} y={lastY + 2} fontSize={12} fontWeight={600} fill="#111" fontFamily="Inter, sans-serif">
            {formatValue(value)}
          </text>
        </g>
      )}
    </g>
  );
}

/* ─── LiveXAxis ───────────────────────────────────────────── */

interface LiveXAxisProps {
  numTicks?: number;
}

export function LiveXAxis({ numTicks = 5 }: LiveXAxisProps) {
  const { xScale, height, width } = useChartContext();
  if (!xScale) return null;

  const ticks = xScale.ticks(numTicks);

  return (
    <g>
      <line x1={0} y1={height} x2={width} y2={height} stroke="#e0dff0" strokeWidth={1} />
      {ticks.map((tick, i) => {
        const x = xScale(tick) as number;
        const label = tick.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return (
          <g key={i}>
            <line x1={x} y1={height} x2={x} y2={height + 4} stroke="#ccc" strokeWidth={1} />
            <text x={x} y={height + 18} textAnchor="middle" fontSize={11} fill="#999" fontFamily="Inter, sans-serif">
              {label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

/* ─── LiveYAxis ───────────────────────────────────────────── */

interface LiveYAxisProps {
  position?: "left" | "right";
  numTicks?: number;
  formatValue?: (v: number) => string;
}

export function LiveYAxis({ position = "left", numTicks = 5, formatValue }: LiveYAxisProps) {
  const { yScale, width, height } = useChartContext();
  if (!yScale) return null;

  const ticks = yScale.ticks(numTicks);

  return (
    <g>
      {ticks.map((tick, i) => {
        const y = yScale(tick) as number;
        const label = formatValue ? formatValue(tick) : tick.toLocaleString();
        return (
          <g key={i}>
            <line x1={0} y1={y} x2={width} y2={y} stroke="#f0eef5" strokeWidth={1} />
            <text
              x={position === "left" ? -8 : width + 8}
              y={y + 4}
              textAnchor={position === "left" ? "end" : "start"}
              fontSize={11}
              fill="#999"
              fontFamily="Inter, sans-serif"
            >
              {label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

/* ─── ChartTooltip ────────────────────────────────────────── */

interface ChartTooltipProps {
  showDatePill?: boolean;
  content?: (value: number, time: Date) => React.ReactNode;
}

export function ChartTooltip({ showDatePill = false, content }: ChartTooltipProps) {
  const { data, xScale, yScale, mouseX, mouseY } = useChartContext();
  if (mouseX === null || mouseY === null || !xScale || !yScale) return null;

  const xDate = xScale.invert(mouseX);
  const xTime = xDate.getTime() / 1000;

  let nearest = data[0];
  let minDist = Infinity;
  for (const d of data) {
    const dist = Math.abs(d.time - xTime);
    if (dist < minDist) {
      minDist = dist;
      nearest = d;
    }
  }

  if (!nearest) return null;

  const px = xScale(new Date(nearest.time * 1000)) as number;
  const py = yScale(nearest.value) as number;
  const yRange = yScale.range() as number[];
  const xRange = xScale.range() as number[];

  return (
    <g>
      <line x1={px} y1={0} x2={px} y2={yRange[0]} stroke="#d0ccee" strokeWidth={1} strokeDasharray="4 4" />
      <line x1={0} y1={py} x2={xRange[1]} y2={py} stroke="#d0ccee" strokeWidth={1} strokeDasharray="4 4" />
      <circle cx={px} cy={py} r={4} fill="white" stroke="#315BFF" strokeWidth={2} />
      {showDatePill && (
        <g>
          <rect x={px - 40} y={-24} width={80} height={20} rx={10} fill="#315BFF" />
          <text x={px} y={-10} textAnchor="middle" fontSize={10} fill="white" fontFamily="Inter, sans-serif">
            {new Date(nearest.time * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </text>
        </g>
      )}
      {content && (
        <foreignObject x={px + 10} y={py - 30} width={160} height={44}>
          <div>
            {content(nearest.value, new Date(nearest.time * 1000))}
          </div>
        </foreignObject>
      )}
    </g>
  );
}
