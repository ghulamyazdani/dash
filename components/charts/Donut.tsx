import React from "react";
import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const Donut = ({ percentage }: any) => {
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        // styles={buildStyles({
        //   strokeLinecap: "butt",
        //   textColor: "white",
        //   pathColor: "#4FB7DD",
        //   trailColor: "#343E53",
        // })}
        styles={{
          // Customize the root svg element
          root: {
            width: "60px",
          },
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `#4FB7DD`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "#343E53",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Rotate the trail
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the text
          text: {
            // Text color
            fill: "white",
            // Text size
            fontSize: "26px",
            fontWeight: "bold",
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: "#343E53",
          },
        }}
      />
    </div>
  );
};
