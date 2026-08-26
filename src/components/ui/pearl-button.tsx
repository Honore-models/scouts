"use client";

import React from "react";

type PearlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export const PearlButton: React.FC<PearlButtonProps> = ({
  label = "Pearl Button",
  className = "",
  children,
  ...props
}) => {
  return (
    <>
      <style>{`
        .pearl-button {
          --white: #ffe7ff;
          --bg: #315BFF;
          --radius: 100px;
          outline: none;
          cursor: pointer;
          border: 0;
          position: relative;
          border-radius: var(--radius);
          background-color: var(--bg);
          transition: all 0.2s ease;
          box-shadow:
            inset 0 0.3rem 0.9rem rgba(255, 255, 255, 0.35),
            inset 0 -0.1rem 0.3rem rgba(20, 50, 180, 0.5),
            inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.4),
            0 4px 15px rgba(49, 91, 255, 0.35),
            0 1rem 1rem -0.6rem rgba(49, 91, 255, 0.2);
        }
        .pearl-button .wrap {
          font-size: 15px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          padding: 14px 32px;
          border-radius: inherit;
          position: relative;
          overflow: hidden;
        }
        .pearl-button .wrap p span:nth-child(2) {
          display: none;
        }
        .pearl-button:hover .wrap p span:nth-child(1) {
          display: none;
        }
        .pearl-button:hover .wrap p span:nth-child(2) {
          display: inline-block;
        }
        .pearl-button .wrap p {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          transition: all 0.2s ease;
          transform: translateY(2%);
          -webkit-mask-image: linear-gradient(to bottom, white 40%, transparent);
                  mask-image: linear-gradient(to bottom, white 40%, transparent);
        }
        .pearl-button .wrap::before,
        .pearl-button .wrap::after {
          content: "";
          position: absolute;
          transition: all 0.3s ease;
        }
        .pearl-button .wrap::before {
          left: -15%;
          right: -15%;
          bottom: 25%;
          top: -100%;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.12);
        }
        .pearl-button .wrap::after {
          left: 6%;
          right: 6%;
          top: 12%;
          bottom: 40%;
          border-radius: 22px 22px 0 0;
          box-shadow: inset 0 10px 8px -10px rgba(255, 255, 255, 0.8);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        .pearl-button:hover {
          box-shadow:
            inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.45),
            inset 0 -0.1rem 0.3rem rgba(20, 50, 180, 0.5),
            inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.6),
            0 4px 20px rgba(49, 91, 255, 0.45),
            0 1rem 1rem -0.6rem rgba(49, 91, 255, 0.25);
        }
        .pearl-button:hover .wrap::before {
          transform: translateY(-5%);
        }
        .pearl-button:hover .wrap::after {
          opacity: 0.4;
          transform: translateY(5%);
        }
        .pearl-button:hover .wrap p {
          transform: translateY(-4%);
        }
        .pearl-button:active {
          transform: translateY(4px);
          box-shadow:
            inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.5),
            inset 0 -0.1rem 0.3rem rgba(20, 50, 180, 0.6),
            inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.35),
            0 4px 15px rgba(49, 91, 255, 0.3),
            0 1rem 1rem -0.6rem rgba(49, 91, 255, 0.2);
        }
      `}</style>

      <button className={`pearl-button ${className}`} {...props}>
        <div className="wrap">
          <p>
            <span>✧</span>
            <span>✦</span>
            {children || label}
          </p>
        </div>
      </button>
    </>
  );
};
