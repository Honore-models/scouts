"use client";

import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

/* ─── Types ───────────────────────────────────────────────── */

export interface PieDataItem {
  label: string;
  value: number;
  color?: string;
  fill?: string;
}

export interface LegendItem {
  label: string;
  color: string;
  value?: number | string;
}

/* ─── Pie Chart Context ───────────────────────────────────── */

interface PieContextValue {
  data: PieDataItem[];
  hoveredIndex: number | null;
  onHoverChange: (index: number | null) => void;
  innerRadius: number;
  padAngle: number;
  cornerRadius: number;
  startAngle: number;
  endAngle: number;
  size: number;
  total: number;
  mounted: boolean;
}

const PieContext = createContext<PieContextValue | null>(null);

function usePieContext() {
  const ctx = useContext(PieContext);
  if (!ctx) throw new Error("PieSlice must be used inside PieChart");
  return ctx;
}

/* ─── Spring helper ───────────────────────────────────────── */

function springValue(target: number, velocity: number): { value: number; velocity: number } {
  const stiffness = 0.15;
  const damping = 0.7;
  const diff = target - velocity;
  const newVel = velocity + diff * stiffness;
  const newVal = velocity + (newVel - velocity) * damping;
  return { value: newVal, velocity: newVel };
}

/* ─── PieChart ────────────────────────────────────────────── */

interface PieChartProps {
  data: PieDataItem[];
  size?: number;
  innerRadius?: number;
  padAngle?: number;
  cornerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  hoveredIndex?: number | null;
  onHoverChange?: (index: number | null) => void;
  className?: string;
  children: React.ReactNode;
}

const TAU = Math.PI * 2;

export function PieChart({
  data,
  size = 200,
  innerRadius = 0,
  padAngle = 0,
  cornerRadius = 0,
  startAngle = -Math.PI / 2,
  endAngle = startAngle + TAU,
  hoveredIndex: controlledHover,
  onHoverChange,
  className = "",
  children,
}: PieChartProps) {
  const [internalHover, setInternalHover] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const hoveredIndex = controlledHover !== undefined ? controlledHover : internalHover;
  const handleHoverChange = onHoverChange || setInternalHover;

  const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), [data]);

  const ctx: PieContextValue = {
    data,
    hoveredIndex,
    onHoverChange: handleHoverChange,
    innerRadius,
    padAngle,
    cornerRadius,
    startAngle,
    endAngle,
    size,
    total,
    mounted,
  };

  return (
    <PieContext.Provider value={ctx}>
      <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="overflow-visible"
        >
          {children}
        </svg>
      </div>
    </PieContext.Provider>
  );
}

/* ─── PieSlice ────────────────────────────────────────────── */

interface PieSliceProps {
  index: number;
  color?: string;
  fill?: string;
  animate?: boolean;
  showGlow?: boolean;
  hoverEffect?: "translate" | "grow" | "none";
  hoverOffset?: number;
}

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

function describeArc(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number,
  cornerR: number
): string {
  const clampedInner = Math.max(0, innerR);
  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

  if (clampedInner === 0) {
    // Solid pie
    const s = polarToCartesian(cx, cy, outerR, startAngle);
    const e = polarToCartesian(cx, cy, outerR, endAngle);
    return `M ${cx} ${cy} L ${s.x} ${s.y} A ${outerR} ${outerR} 0 ${largeArc} 1 ${e.x} ${e.y} Z`;
  }

  // Donut
  const os = polarToCartesian(cx, cy, outerR, startAngle);
  const oe = polarToCartesian(cx, cy, outerR, endAngle);
  const is_ = polarToCartesian(cx, cy, clampedInner, startAngle);
  const ie = polarToCartesian(cx, cy, clampedInner, endAngle);

  if (cornerR > 0) {
    const cr = Math.min(cornerR, (outerR - clampedInner) / 2, (endAngle - startAngle) * outerR / 4);
    const outerStart = polarToCartesian(cx, cy, outerR - cr, startAngle);
    const outerEnd = polarToCartesian(cx, cy, outerR - cr, endAngle);
    const innerStart = polarToCartesian(cx, cy, clampedInner + cr, startAngle);
    const innerEnd = polarToCartesian(cx, cy, clampedInner + cr, endAngle);

    return `
      M ${outerStart.x} ${outerStart.y}
      A ${outerR - cr} ${outerR - cr} 0 0 1 ${outerEnd.x} ${outerEnd.y}
      Q ${oe.x} ${oe.y} ${ie.x} ${ie.y}
      A ${clampedInner + cr} ${clampedInner + cr} 0 0 1 ${is_.x} ${is_.y}
      Q ${os.x} ${os.y} ${outerStart.x} ${outerStart.y}
      Z
    `;
  }

  return `
    M ${os.x} ${os.y}
    A ${outerR} ${outerR} 0 ${largeArc} 1 ${oe.x} ${oe.y}
    L ${ie.x} ${ie.y}
    A ${clampedInner} ${clampedInner} 0 ${largeArc} 0 ${is_.x} ${is_.y}
    Z
  `;
}

export function PieSlice({
  index,
  color,
  fill,
  animate = true,
  showGlow = true,
  hoverEffect = "translate",
  hoverOffset = 10,
}: PieSliceProps) {
  const {
    data,
    hoveredIndex,
    onHoverChange,
    innerRadius,
    padAngle,
    cornerRadius,
    startAngle,
    endAngle,
    size,
    total,
    mounted,
  } = usePieContext();

  const slice = data[index];
  if (!slice || total === 0) return null;

  // Calculate angles
  let currentAngle = startAngle;
  for (let i = 0; i < index; i++) {
    currentAngle += ((data[i].value / total) * (endAngle - startAngle));
  }

  const sliceAngle = (slice.value / total) * (endAngle - startAngle);
  const sliceStart = currentAngle + padAngle / 2;
  const sliceEnd = currentAngle + sliceAngle - padAngle / 2;

  if (sliceEnd <= sliceStart) return null;

  const isHovered = hoveredIndex === index;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 4;
  const sliceColor = color || slice.color || `var(--chart-${(index % 5) + 1})`;

  // Hover offset (translate outward from center)
  const midAngle = (sliceStart + sliceEnd) / 2;
  const hoverDx = isHovered && hoverEffect === "translate" ? Math.cos(midAngle) * hoverOffset : 0;
  const hoverDy = isHovered && hoverEffect === "translate" ? Math.sin(midAngle) * hoverOffset : 0;
  const scale = isHovered && hoverEffect === "grow" ? 1.05 : 1;

  // Animation: staggered mount
  const animDelay = animate ? index * 60 : 0;
  const animDuration = animate ? 400 : 0;

  const d = describeArc(cx, cy, outerR, innerRadius, sliceStart, sliceEnd, cornerRadius);

  return (
    <g
      style={{
        transform: `translate(${hoverDx}px, ${hoverDy}px) scale(${scale})`,
        transformOrigin: `${cx}px ${cy}px`,
        transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        opacity: mounted ? 1 : 0,
      }}
    >
      {/* Glow on hover */}
      {showGlow && isHovered && (
        <path
          d={d}
          fill={sliceColor}
          opacity={0.25}
          style={{ filter: "blur(8px)" }}
        />
      )}

      {/* Main slice */}
      <path
        d={d}
        fill={fill || sliceColor}
        stroke="white"
        strokeWidth={2}
        style={{
          cursor: "pointer",
          opacity: mounted ? 1 : 0,
          transition: `opacity ${animDuration}ms ease ${animDelay}ms`,
        }}
        onMouseEnter={() => onHoverChange(index)}
        onMouseLeave={() => onHoverChange(null)}
      />
    </g>
  );
}

/* ─── PieCenter ───────────────────────────────────────────── */

interface PieCenterProps {
  defaultLabel?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  children?: (value: number, label: string) => React.ReactNode;
}

export function PieCenter({
  defaultLabel = "Total",
  prefix = "",
  suffix = "",
  className = "",
  children,
}: PieCenterProps) {
  const { data, hoveredIndex, innerRadius, size } = usePieContext();
  const cx = size / 2;
  const cy = size / 2;

  if (innerRadius <= 0) return null;

  const hovered = hoveredIndex !== null ? data[hoveredIndex] : null;
  const displayValue = hovered ? hovered.value : data.reduce((s, d) => s + d.value, 0);
  const displayLabel = hovered ? hovered.label : defaultLabel;

  if (children) {
    return (
      <foreignObject x={cx - 60} y={cy - 30} width={120} height={60}>
        <div className={`flex items-center justify-center h-full ${className}`}>
          {children(displayValue, displayLabel)}
        </div>
      </foreignObject>
    );
  }

  return (
    <foreignObject x={cx - 60} y={cy - 30} width={120} height={60}>
      <div className={`flex flex-col items-center justify-center h-full text-center ${className}`}>
        <span className="text-[22px] font-bold text-[#111] leading-tight">
          {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
        <span className="text-[11px] text-[#888] leading-tight">
          {displayLabel}
        </span>
      </div>
    </foreignObject>
  );
}

/* ─── Legend Context ───────────────────────────────────────── */

interface LegendContextValue {
  hoveredIndex: number | null;
  onHoverChange: (index: number | null) => void;
  items: LegendItem[];
}

const LegendContext = createContext<LegendContextValue | null>(null);

function useLegendContext() {
  const ctx = useContext(LegendContext);
  if (!ctx) throw new Error("Legend components must be used inside Legend");
  return ctx;
}

/* ─── Legend ───────────────────────────────────────────────── */

interface LegendProps {
  hoveredIndex?: number | null;
  items: LegendItem[];
  onHoverChange?: (index: number | null) => void;
  children: React.ReactNode;
}

export function Legend({
  hoveredIndex: controlledHover,
  items,
  onHoverChange,
  children,
}: LegendProps) {
  const [internalHover, setInternalHover] = useState<number | null>(null);
  const hoveredIndex = controlledHover !== undefined ? controlledHover : internalHover;
  const handleHoverChange = onHoverChange || setInternalHover;

  const ctx: LegendContextValue = {
    hoveredIndex,
    onHoverChange: handleHoverChange,
    items,
  };

  return (
    <LegendContext.Provider value={ctx}>
      <div className="space-y-2.5">{children}</div>
    </LegendContext.Provider>
  );
}

/* ─── LegendItemComponent ──────────────────────────────────── */

interface LegendItemComponentProps {
  index: number;
  children: React.ReactNode;
}

const ItemDataContext = createContext<{ item: LegendItem; isHovered: boolean } | null>(null);

function useItemData() {
  const ctx = useContext(ItemDataContext);
  if (!ctx) throw new Error("LegendMarker/Label must be inside LegendItemComponent");
  return ctx;
}

export function LegendItemComponent({
  index,
  children,
}: LegendItemComponentProps) {
  const { items, hoveredIndex, onHoverChange } = useLegendContext();
  const item = items[index];
  if (!item) return null;

  const isHovered = hoveredIndex === index;

  return (
    <ItemDataContext.Provider value={{ item, isHovered }}>
      <div
        className={`flex items-center justify-between cursor-pointer transition-all duration-200 ${
          hoveredIndex !== null && !isHovered ? "opacity-30 scale-[0.98]" : "opacity-100 scale-100"
        }`}
        onMouseEnter={() => onHoverChange(index)}
        onMouseLeave={() => onHoverChange(null)}
      >
        <div className="flex items-center gap-2">
          {children}
        </div>
        {item.value !== undefined && (
          <span className="text-[13px] font-semibold text-[#111]">
            {item.value}%
          </span>
        )}
      </div>
    </ItemDataContext.Provider>
  );
}

/* ─── LegendMarker ─────────────────────────────────────────── */

export function LegendMarker() {
  const { item } = useItemData();
  return (
    <div
      className="w-2.5 h-2.5 rounded-full shrink-0"
      style={{ backgroundColor: item.color }}
    />
  );
}

/* ─── LegendLabel ──────────────────────────────────────────── */

export function LegendLabel() {
  const { item } = useItemData();
  return (
    <span className="text-[13px] text-[#555]">
      {item.label}
    </span>
  );
}
