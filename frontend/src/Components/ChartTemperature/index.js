import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const TemperatureChart = () => {
  const initialData = [
    { date: "2024-05-20", Temperature: 20 },
    { date: "2024-05-21", Temperature: 24 },
    { date: "2024-05-22", Temperature: 22 },
    { date: "2024-05-23", Temperature: 26 },
    // Adicione mais dados conforme necessário
  ];
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#704fd3"],
    xaxis: {
      type: "datetime",
      categories: initialData.map((item) => item.date),
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
        text: "Temperatura (%)",
      },
      min: 0,
      max: 100,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Temperatura ao Longo do Tempo",
      align: "left",
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
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
      data: initialData.map((item) => item.Temperature),
    },
  ]);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      // const response = await fetch('https://api.exemplo.com/Temperature');
      // const data = await response.json();
      const data = initialData; //apagar depois que consumir a API

      const categories = data.map((item) => item.date);
      const TemperatureData = data.map((item) => item.Temperature);

      setChartOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: categories,
        },
      }));

      setSeries([
        {
          name: "Temperatura",
          data: TemperatureData,
        },
      ]);
    };

    fetchTemperatureData();
  }, []);

  return (
    <div>
      <Chart options={chartOptions} series={series} type="line" height={350} />
    </div>
  );
};

export default TemperatureChart;
