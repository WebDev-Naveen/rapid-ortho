import React from "react";
import Chart from "react-apexcharts";

const StackBar = ({ text, value }) => {
  const options = {
    series: [
      {
        name: "Sane",
        data: value?.sane,
      },
      {
        name: "Constant",
        data: value?.constant,
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },

      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadius: 3,
        endingShape: "rounded",
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
      categories: [
        "SANE",
        "CONSTANT",
        "SANE",
        "CONSTANT",
        "SANE",
        "CONSTANT",
        "SANE",
        "CONSTANT",
      ],
      labels: {
        rotate: 0,
      },

      yaxis: {
        min: 4500,
        max: 5000,
      },
    },
    grid: {
      padding: {
        left: 10,
      },
    },
    yaxis: [
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
            fontSize: "18px",

            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
      {
        logBase: 10,
        tickAmount: 4,
        min: 0,
        max: 100,
        opposite: true,
        title: {
          text: "",
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "14px",
            fontFamily: "PoppinsSemiBold",
            fontWeight: 800,
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
    ],
    legend: {
      show: false,
    },

    fill: {
      opacity: 1,
      colors: ["#A4A1FB", "#56D9FE"],
      endingShape: "rounded",
      type: "bar",
      bar: {
        style: "verticalLines",
        width: 6,
        height: 6,
        strokeWidth: 1,
      },
    },
    title: {
      text,
      align: "center",
      margin: 10,
      offsetX: 10,
      offsetY: 0,
      floating: true,
      style: {
        fontSize: "20px",
        fontWeight: "normal",
        fontFamily: "PoppinsSemiBold",
        color: "#263238",
      },
    },

    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: true,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: true,
        format: "dd MMM",
        formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
      z: {
        formatter: undefined,
        title: "Size: ",
      },
      marker: {
        show: true,
      },
      items: {},
      fixed: {
        enabled: true,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
  };
  return (
    <>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        width={800}
        height={300}
      />
    </>
  );
};
//<Chart options={options} series={series} type="bar" width={500} height={320}/>

export default StackBar;
