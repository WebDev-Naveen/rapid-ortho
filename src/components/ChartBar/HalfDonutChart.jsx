import React from "react";
import Chart from "react-apexcharts";

const HalfDonutChart = ({ colors, rate }) => {
  const series = [rate];
  const options = {
    chart: {
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 0,
        color: '#000',
        opacity: 0
    },
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        colors: ["#99d9ea", "#ED7152"],
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
        },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      opacity: 1,
      colors,
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
          margin: 5,
          size: '50%',
          background: 'transparent',
          image: undefined,
          imageWidth: 150,
          imageHeight: 150,
          imageOffsetX: 0,
          imageOffsetY: 0,
          imageClipped: true,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
          }
      },
    },
  };
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        width={400}
        height={400}
      />
    </div>
  );
};

export default HalfDonutChart;
