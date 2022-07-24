import React from "react";
import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts";

const data = {
  totalView: [
    { name: "Core Site", value: 24688 },
    { name: "Other", value: 98745 },
  ],
  totalIp: [
    { name: "Core Site", value: 214 },
    { name: "Other", value: 1213 },
  ],
  totalAttack: [
    { name: "Core Site", value: 195 },
    { name: "Other", value: 1760 },
  ],
  todayAttack: [
    { name: "Core Site", value: 31 },
    { name: "Other", value: 281 },
  ],
  sensitiveArea: {
    name: [
      "Turkey",
      "Syria",
      "Iran",
      "Iraq",
      "Afghanistan",
      "Saudi Arabia",
      "Nigeria",
    ],
    value: [40, 4, 27, 19, 32, 15, 9],
  },
};
const option = (title: any, data: any, color: any): any => ({
  color: ["#515c61", color],
  title: {
    text: `${data
      .map((x: any) => x.value)
      .reduce((a: any, b: any) => a + b, 0)}`,
    top: "middle",
    left: "center",
    textStyle: {
      color: "#ffffff",
      fontSize: 14,
    },
  },
  tooltip: {
    position: [10, 10],
  },
  series: [
    {
      type: "pie",
      radius: ["60%", "75%"],
      clockwise: false,
      label: {
        normal: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      hoverAnimation: false,
      data,
    },
  ],
});

export const Donut = () => {
  return (
    <div>
      <ReactEchartsCore
        option={option("just check", data.totalView, "#346E8C")}
        echarts={echarts}
      />
    </div>
  );
};
