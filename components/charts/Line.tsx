import ReactEChart from "echarts-for-react";

export const Line = () => {
  const eChartsOption = {
    title: {},
    xAxis: {
      // name of X Axis
      show: false,
      name: "X Axis",
      type: "category",
      // Contains the values for XAxis
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
      data: [200, 100, 200],
      type: "line",
      smooth: true,
      lineStyle: {
        color: "#49A7CB",
        width: 2,
      },
      itemStyle: {
        color: " #00a8ff",
        borderColor: "#00a8ff",
        borderWidth: 5,
      },

      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(0, 168, 255, 0.2)",
            },
            {
              offset: 1,
              color: "rgba(0, 168, 255, 0)",
            },
          ],
        },
      },
    },
  };
  return (
    <div className="w-full">
      <ReactEChart
        style={{
          width: "100%",
          height: "100%",
        }}
        option={eChartsOption}
      />
    </div>
  );
};
