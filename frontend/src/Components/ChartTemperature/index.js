import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const TemperatureChart = () => {
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
        text: "Temperatura (ºC)",
      },
      min: 0,
      max: 100,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Temperatura ao Longo do Tempo",
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
        format: "dd MMM yyyy",
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
      name: "Temperatura",
      data: [
        {
          x: new Date("2024-06-01T00:00:00Z").getTime(),
          y: 19,
        },
        {
          x: new Date("2024-06-01T01:00:00Z").getTime(),
          y: 21.8,
        },
        {
          x: new Date("2024-06-01T02:00:00Z").getTime(),
          y: 22,
        },
        {
          x: new Date("2024-06-01T03:00:00Z").getTime(),
          y: 29.7,
        },
        {
          x: new Date("2024-06-01T04:00:00Z").getTime(),
          y: 25.8,
        },
        {
          x: new Date("2024-06-01T05:00:00Z").getTime(),
          y: 19.5,
        },
        {
          x: new Date("2024-06-01T06:00:00Z").getTime(),
          y: 26,
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

export default TemperatureChart;
