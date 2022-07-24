import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
export const Investment = () => {
  return (
    <div className="card bg-brand-blue flex flex-col align-middle items-center p-10 w-auto rounded-3xl gap-6">
      <div className="flex flex-row gap-4 align-middle items-center">
        <div className="bg-icon-blue align-center p-2 rounded-md">
          <AiFillDollarCircle />
        </div>
        <h1 className="font-bold text-lg">Investment</h1>
      </div>
      <span className="text-4xl font-bold">106M</span>
      <p className="text-icon-blue font-semibold">98M From Last Month</p>
    </div>
  );
};
