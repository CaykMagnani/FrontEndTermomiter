// HumidityChart.js

import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

async function fetchHumidities() {
  const token = sessionStorage.getItem("accessToken");
  try {
    const response = await fetch(
      "https://backendt-pi-quarto-semestre-v2.onrender.com/v1/humidities",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      console.error("Erro ao buscar umidades:", data.message);
    }
  } catch (error) {
    console.error("Erro de rede ao buscar umidades:", error);
  }
  return null;
}

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

  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchHumidityData = async () => {
      const data = await fetchHumidities();
      if (data) {
        const validData = data.filter(
          (item) =>
            !isNaN(Date.parse(`${item.date}T${item.time}`)) &&
            !isNaN(parseFloat(item.humidity)),
        );
        const categories = validData.map((item) => `${item.date}T${item.time}`);
        const humidityData = validData.map((item) => parseFloat(item.humidity));

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
      }
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
