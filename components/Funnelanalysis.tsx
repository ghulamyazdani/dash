import React from "react";
import ReactEChart from "echarts-for-react";
export const Funnelanalysis = () => {
  const eChartsOption = {
    title: {
      // title of our chart

      show: false,
    },
    xAxis: {
      // name of X Axis
      axisLabel: { interval: 0, rotate: 30 },
      // Contains the values for XAxis
      data: [
        "Page View",
        "Add to Cart",
        "Initiate Checkout",
        "Add Payment Info",
        "Purchase",
      ],
    },
    yAxis: {
      show: false,
      // name of Y Axis
      name: "Y Axis",
      type: "value",
    },
    //To enable tooltips
    tooltip: {},
    // To enable toolbox

    series: {
      data: [650, 400, 300, 200, 100],
      type: "bar",
      encode: { x: "name", y: "score" },
      datasetIndex: 1,
      lineStyle: {
        color: "#49A7CB",
        width: 2,
      },
      itemStyle: {
        color: " #00a8ff",
        borderColor: "#00a8ff",
        borderWidth: 5,
      },
    },
  };
  return (
    <div className="card bg-brand-blue  items-cente rounded-3xl p-7 ">
      <h1 className="font-bold text-lg">Funnel Analysis</h1>
      <ReactEChart
        style={{
          width: "20rem",
          height: "20rem",
        }}
        option={eChartsOption}
      />
    </div>
  );
};
