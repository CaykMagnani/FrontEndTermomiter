import React, { useState, useEffect } from "react";

const CurrentTemperatureDisplay = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentTemperature = async () => {
      try {
        // const response = await fetch(
        //   "https://api.exemplo.com/current-temperature",
        // );
        // const data = await response.json();
        const data = { temperature: 55 };
        setTemperature(data.temperature);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar a temperatura atual:", error);
        setLoading(false);
      }
    };

    fetchCurrentTemperature();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <p>Temperatura Atual</p>
      <h1 className="Descricao">{temperature} °C</h1>
    </div>
  );
};

export default CurrentTemperatureDisplay;
