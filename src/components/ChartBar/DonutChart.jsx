import React from "react";
import ReactApexChart from "react-apexcharts";

// import Chart from "react-apexcharts";
import styled from "styled-components";
const ChartContainer = styled.div`
  display: flex;

  width: 50%;
  align-items: center;
`;

const DonutChart = ({ value }) => {
  console.log(value);
  const series = value;
  const options = {
    labels: [
      `${value[0]}% Intial Surgery`,
      `${value[1]}% Conservative Treatment`,
    ],

    chart: {
      type: "donut",
      width: "100%",
    },

    dataLabels: {
      enabled: false,
      minAngleToShowLabel: 50,
      // offsetY: 1200,
      style: { fontSize: "16px" },
    },
    fill: {
      opacity: 1,
      colors: ["#ED7152", "#99D9EA"],
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "right",
      horizontalAlign: "center",
      floating: false,
      fontSize: "10px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 800,
      formatter: undefined,
      inverseOrder: false,
      width: "200",
      height: "400",
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: ["red"],
        useSeriesColors: true,
      },
    },

    responsive: [
      {
        breakpoint: 280,
        options: {
          // chart: {
          //   width: 100,
          // },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <ChartContainer>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        style={{ fill: "red" }}
        width={420}
        height={350}
      />
    </ChartContainer>
  );
};

export default DonutChart;
