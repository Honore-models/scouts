import * as React from "react";

interface GeminiProps extends React.SVGProps<SVGSVGElement> {}

export default function Gemini({ className, ...props }: GeminiProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
    </svg>
  );
}
