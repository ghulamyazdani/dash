import React from "react";

import { Donut, Line } from "./charts";
export const Dataquality = () => {
  return (
    <div className="card bg-brand-blue  items-cente rounded-3xl p-7 ">
      <h1 className="font-bold text-lg">Data Quality</h1>
      <div className="flex">
        <div className="flex flex-row align-center items-center gap-4">
          <Donut percentage={20} />
          <h1 className="text-chart-text font-bold">Excellent</h1>
        </div>
        <div>
          <Line></Line>
        </div>
      </div>
    </div>
  );
};
