"use client";

import { forwardRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AdPreview = forwardRef<HTMLDivElement, Props>(
  function AdPreview({ children }, ref) {
    return (
      <div className="flex flex-col items-center">
        <div
          className="relative overflow-hidden rounded-lg shadow-2xl bg-white"
          style={{
            width: 432,
            height: 540,
          }}
        >
          <div
            ref={ref}
            style={{
              transform: "scale(0.4)",
              transformOrigin: "top left",
              width: 1080,
              height: 1350,
            }}
          >
            {children}
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Preview — 1080×1350 actual size
        </p>
      </div>
    );
  }
);
