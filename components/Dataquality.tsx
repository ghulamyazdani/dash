import React from "react";

import { Donut } from "./charts";
export const Dataquality = () => {
  return (
    <div className="card bg-brand-blue  items-cente rounded-3xl p-7 ">
      <h1 className="font-bold text-lg">Data Quality</h1>
      <div className="flex">
        <Donut />
        <div>Line</div>
      </div>
    </div>
  );
};
