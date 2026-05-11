"use client";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="p-5 text-3xl bg-amber-500"
      >
        {count}
      </button>
    </div>
  );
}
