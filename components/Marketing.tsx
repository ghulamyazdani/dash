import React from "react";
import { ImBullhorn } from "react-icons/im";
export const Marketing = () => {
  return (
    <div className="card bg-brand-blue flex flex-col align-middle items-center p-10 w-auto rounded-3xl gap-6">
      <div className="flex flex-row gap-4 align-middle items-center">
        <div className="bg-icon-blue align-center p-2 rounded-md">
          <ImBullhorn />
        </div>
        <h1 className="font-bold text-lg">Marketing</h1>
      </div>
      <span className="text-4xl font-bold">98%</span>
      <p className="text-icon-blue font-semibold">96% From Last Month</p>
    </div>
  );
};
