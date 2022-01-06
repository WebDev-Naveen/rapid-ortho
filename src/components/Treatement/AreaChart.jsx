import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { ChartValuesContext } from "../../utils/Contexts/ChartValues";

import getRateByMonth from "../../utils/TrendIntialSurgry";

const AreaChart = () => {
  const { filteredChartValues } = useContext(ChartValuesContext);
  const [chartValues, setChartValues] = React.useState({
    initialSurg: [0, 0, 0, 0, 0, 0, 0, 0],
    conservManagement: [0, 0, 0, 0, 0, 0, 0, 0],
  });
  React.useEffect(() => {
    setChartValues({
      initialSurg: getRateByMonth(filteredChartValues, "Trt_surg"),
      conservManagement: getRateByMonth(filteredChartValues, "Trt_conserv"),
    });
  }, [filteredChartValues]);
  const series = [
    {
      name: "My Surgeries",
      data: chartValues?.initialSurg,
    },
    {
      name: "Average Sergeries",
      data: chartValues?.conservManagement,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },

    markers: {
      size: 3,
      colors: ["#FFFFFF"],

      strokeWidth: 1,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#54D8FF", "#A4A1FB"],
    },
    xaxis: {
      categories: ["Q1", "Q2", "Q3", "Q4"],
      labels: {
        rotate: 0,
      },
    },
    yaxis: {
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

          fontWeight: 200,
          cssClass: "apexcharts-yaxis-title",
          formatter: (value) => value.toFixed(0) + "%",
        },
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "right",

      fontWeight: 200,
      cssClass: "apexcharts-yaxis-title",
    },
    fill: {
      opacity: 1,
      colors: ["#C9F3FF", "#D9E9FF"],
    },
  };

  // legend: {
  //   show: true,
  //   showForSingleSeries: true,
  //   showForNullSeries: true,
  //   showForZeroSeries: true,
  //   position: "right",

  //   labels: {
  //     colors: ["#54D8FF", "#A4A1FB"],
  //     useSeriesColors: true,
  //   },
  // },

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        height={330}
        width={950}
      />
    </div>
  );
};

export default AreaChart;
