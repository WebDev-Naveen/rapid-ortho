import React from "react";
import Chart from "react-apexcharts";

const RangeOfMotion = ({ text, series }) => {
  const options = {
    series: series,
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 250,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "13%",
        endingShape: "rounded",
        borderRadius: 3,

        barHeight: "70%",
        color: ["blue"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Three Months", "Six Months", "One year", "Two year"],
    },
    yaxis: 
      {
        show: true,
        showAlways: true,
        showForNullSeries: true,
        logBase: 10,
        tickAmount: 4,
        min: 0,
        max: 100,
        title: {
          text: "",
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "12px",
            fontFamily: "PoppinsSemiBold",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-title",
          },
        }
      },
      legend: {
        show: false,
      },

    fill: {
      colors: ["#56D9FE","#A4A1FB"],
      opacity: 1,
    },
    title: {
      text,
      align: "center",
      margin: 10,
      offsetX: 10,
      offsetY: 0,
      floating: true,
      style: {
        fontSize: "18px",
        fontWeight: "normal",
        fontFamily: "PoppinsSemiBold",
        color: "#263238",
      },
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        width={560}
        height={250}
      />
    </div>
  );
};

export default RangeOfMotion;
