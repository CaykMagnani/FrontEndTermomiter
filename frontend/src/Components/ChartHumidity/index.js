import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const HumidityChart = () => {
  const initialData = [
    { date: "2024-05-20", humidity: 20 },
    { date: "2024-05-21", humidity: 24 },
    { date: "2024-05-22", humidity: 22 },
    { date: "2024-05-23", humidity: 26 },
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
      name: "Umidade",
      data: initialData.map((item) => item.humidity),
    },
  ]);

  useEffect(() => {
    const fetchHumidityData = async () => {
      // const response = await fetch('https://api.exemplo.com/humidity');
      // const data = await response.json();
      const data = initialData; //apagar depois que consumir a API

      const categories = data.map((item) => item.date);
      const humidityData = data.map((item) => item.humidity);

      setChartOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: categories,
        },
      }));

      setSeries([
        {
          name: "Umidade",
          data: humidityData,
        },
      ]);
    };

    fetchHumidityData();
  }, []);

  return (
    <div>
      <Chart options={chartOptions} series={series} type="line" height={350} />
    </div>
  );
};

export default HumidityChart;
