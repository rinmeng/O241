"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const size = 600; // Total canvas size in pixels
  const gridSize = 50; // Number of cells in each dimension
  const cellSize = size / gridSize; // Size of each cell

  const [isPlaying, setIsPlaying] = useState(false);

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
    <Card className="my-10 mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          Grid Canvas ({gridSize}x{gridSize})
        </CardTitle>
        <CardDescription className="flex justify-center gap-4">
          <Button variant={"default"} onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause /> : <Play />}
            {isPlaying ? "Pause" : "Start"}
          </Button>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center items-center mx-auto">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="z-10 p-10 border rounded-3xl"
        />
      </CardContent>
    </Card>
  );
}
