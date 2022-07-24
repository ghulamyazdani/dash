import React from "react";
import * as echarts from "echarts";
import ReactEchartsCore from "echarts-for-react/lib/core";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
export const Line = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <div>
      <ReactEchartsCore
        echarts={echarts}
        option={option}
        style={{ minHeight: "18.75rem" }}
      />
    </div>
  );
};
