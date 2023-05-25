"use client";
import React, { memo } from "react";
import { useState } from "react";
import Swatch from "./Swatch";

const MemoedSwatch = memo(Swatch);

function MemoPage() {
  const [appRenderIndex, SetAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  console.log(`App rendered ${appRenderIndex}`);
  return (
    <div>
      <div className="flex gap-2">
        <button
          className="border border-slate-900 p-2"
          onClick={() => SetAppRenderIndex((prev) => prev + 1)}
        >
          Re-Render App
        </button>
        <button
          className="border border-slate-900 p-2"
          onClick={() => setColor(color === "red" ? "blue" : "red")}
        >
          Change Color
        </button>
      </div>
      <div>
        <MemoedSwatch color={color} />
        <MemoedSwatch color={color === "red" ? "blue" : "red"} />
      </div>
    </div>
  );
}

export default MemoPage;
