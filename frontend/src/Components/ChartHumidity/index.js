import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const HumidityChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#4F8E04"],
    xaxis: {
      type: "datetime",
      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM yyyy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
      title: {
        text: "Data",
      },
    },
    yaxis: {
      title: {
        text: "Umidade (%)",
      },
      min: 0,
      max: 100,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Umidade ao Longo do Tempo",
      align: "center",
      style: {
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        color: "#4F8E04",
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy HH:mm",
      },
      theme: "dark",
      style: {
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
      },
    },
    legend: {
      labels: {
        colors: ["#000"],
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        radius: 0,
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Umidade",
      data: [
        {
          x: 1618414800000,
          y: 50,
        },
        {
          x: 1618501200000,
          y: 60,
        },
        {
          x: 1618587600000,
          y: 55,
        },
        {
          x: 1618674000000,
          y: 65,
        },
        {
          x: 1618760400000,
          y: 70,
        },
      ],
    },
  ]);

  return (
    <div>
      <Chart options={chartOptions} series={series} type="line" height={350} />
    </div>
  );
};

export default HumidityChart;
