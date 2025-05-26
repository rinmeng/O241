"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const size = 800; // Total canvas size in pixels
  const gridSize = 50; // Number of cells in each dimension
  const cellSize = size / gridSize; // Size of each cell

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Draw grid
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 0.5;

    for (let i = 0; i <= gridSize; i++) {
      // Draw horizontal lines
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(size, i * cellSize);
      ctx.stroke();

      // Draw vertical lines
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, size);
      ctx.stroke();
    }
  }, [cellSize]);

  return (
    <Card className="my-10 w-3/4 mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          Grid Canvas ({gridSize}x{gridSize})
        </CardTitle>
      </CardHeader>

      <CardContent>
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="z-10 p-10 flex justify-center items-center mx-auto border rounded-3xl"
        />
      </CardContent>
    </Card>
  );
}
