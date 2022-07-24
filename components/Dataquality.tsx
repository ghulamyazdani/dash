import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Donut, Line, Arrowprogress } from "./charts";
export const Dataquality = ({ prog }: any) => {
  return (
    <div className="card bg-brand-blue  items-cente rounded-3xl p-7 ">
      <h1 className="font-bold text-lg">Data Quality</h1>
      <div className="flex flex-row gap-8">
        <div className="flex flex-row align-center items-center gap-4">
          <Donut percentage={prog} size={60} />
          <h1 className="text-chart-text font-bold">Excellent</h1>
        </div>
        <div className="w-full">
          <Line></Line>
        </div>
      </div>
      <div className="bg-chart-text w-full h-[1px] opacity-30"></div>
      <div className="flex flex-row items-center mt-4  ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <div>
              <h3 className="text-xs font-bold">Frontend Tracking</h3>
              <p className="text-chart-text font-bold">Excellent</p>
            </div>
            <div>
              <Donut percentage={90} size={50} />
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div>
              <h3 className="text-xs font-bold">Backend Tracking</h3>
              <p className="text-chart-text font-bold">Excellent</p>
            </div>
            <div>
              <Donut percentage={79} size={50} />
            </div>
          </div>
        </div>
        <div className="w-2/3 pl-20">
          <Arrowprogress progress={200} />
        </div>
      </div>
    </div>
  );
};
