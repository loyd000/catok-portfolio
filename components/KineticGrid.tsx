"use client";

import { useEffect, useRef } from "react";

type KineticGridProps = {
  className?: string;
  fixed?: boolean;
  variant?: "page" | "loader";
};

type Point = {
  x: number;
  y: number;
  pull: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function KineticGrid({
  className = "",
  fixed = true,
  variant = "page",
}: KineticGridProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!root || !canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cell = variant === "loader" ? 42 : 48;
    const radius = variant === "loader" ? 180 : 260;
    const strength = variant === "loader" ? 0.2 : 0.24;
    const pointer = { x: 0, y: 0, active: false };
    const eased = { x: 0, y: 0 };
    let animationFrame = 0;
    let magnetPower = 0;
    let running = false;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = root.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;
      pointer.x = pointer.x || width * 0.5;
      pointer.y = pointer.y || height * 0.5;
      eased.x = eased.x || pointer.x;
      eased.y = eased.y || pointer.y;

      canvas.width = Math.max(1, Math.floor(width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(height * pixelRatio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw();
    };

    const warpPoint = (x: number, y: number): Point => {
      if (prefersReducedMotion || magnetPower < 0.001) return { x, y, pull: 0 };

      const deltaX = eased.x - x;
      const deltaY = eased.y - y;
      const distance = Math.hypot(deltaX, deltaY);
      const pull = clamp(1 - distance / radius, 0, 1) ** 2 * magnetPower;

      return {
        x: x + deltaX * pull * strength,
        y: y + deltaY * pull * strength,
        pull,
      };
    };

    const drawSegment = (start: Point, end: Point) => {
      const pull = Math.max(start.pull, end.pull);
      const alpha = 0.12 + pull * 0.36;

      ctx.strokeStyle = `rgba(149, 213, 178, ${alpha})`;
      ctx.lineWidth = 0.75 + pull * 0.9;
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const startX = -cell * 2;
      const startY = -cell * 2;
      const columns = Math.ceil(width / cell) + 5;
      const rows = Math.ceil(height / cell) + 5;
      const points: Point[][] = [];

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let row = 0; row <= rows; row += 1) {
        points[row] = [];

        for (let column = 0; column <= columns; column += 1) {
          const x = startX + column * cell;
          const y = startY + row * cell;
          points[row][column] = warpPoint(x, y);
        }
      }

      for (let row = 0; row <= rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          drawSegment(points[row][column], points[row][column + 1]);
        }
      }

      for (let column = 0; column <= columns; column += 1) {
        for (let row = 0; row < rows; row += 1) {
          drawSegment(points[row][column], points[row + 1][column]);
        }
      }

      if (!prefersReducedMotion && pointer.active) {
        for (let row = 0; row <= rows; row += 1) {
          for (let column = 0; column <= columns; column += 1) {
            const point = points[row][column];
            if (point.pull < 0.12) continue;

            ctx.fillStyle = `rgba(216, 243, 220, ${point.pull * 0.7})`;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 0.75 + point.pull * 1.6, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const tick = () => {
      const targetPower = pointer.active ? 1 : 0;

      magnetPower += (targetPower - magnetPower) * 0.16;
      eased.x += (pointer.x - eased.x) * 0.14;
      eased.y += (pointer.y - eased.y) * 0.14;
      draw();

      if (pointer.active || magnetPower > 0.006) {
        animationFrame = window.requestAnimationFrame(tick);
        return;
      }

      magnetPower = 0;
      running = false;
      draw();
    };

    const startLoop = () => {
      if (prefersReducedMotion || running) return;

      running = true;
      animationFrame = window.requestAnimationFrame(tick);
    };

    const updatePointer = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 && pointer.x <= rect.width && pointer.y >= 0 && pointer.y <= rect.height;
      startLoop();
    };

    const releasePointer = () => {
      pointer.active = false;
      startLoop();
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) releasePointer();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(root);
    resize();

    if (!prefersReducedMotion) {
      window.addEventListener("pointermove", updatePointer, { passive: true });
      window.addEventListener("pointerout", handlePointerOut);
      window.addEventListener("blur", releasePointer);
    }

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", releasePointer);
    };
  }, [variant]);

  const classes = [
    "kinetic-grid pointer-events-none overflow-hidden bg-catok-darkest",
    fixed ? "fixed inset-0 -z-10" : "absolute inset-0",
    variant === "loader" ? "kinetic-grid--loader" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={rootRef} aria-hidden="true" className={classes}>
      <canvas ref={canvasRef} className="kinetic-grid__canvas" />
      <div className="kinetic-grid__vignette" />
    </div>
  );
}
