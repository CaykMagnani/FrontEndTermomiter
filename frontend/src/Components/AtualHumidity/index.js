import React, { useState, useEffect } from "react";

const CurrentHumidityDisplay = () => {
  const [humidity, setHumidity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentHumidity = async () => {
      try {
        //const response = await fetch(
        //   "https://api.exemplo.com/current-humidity",
        // );
        // const data = await response.json();
        const data = { humidity: 37 };
        setHumidity(data.humidity); // Supondo que a resposta tenha uma propriedade `humidity`
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar a umidade atual:", error);
        setLoading(false);
      }
    };

    fetchCurrentHumidity();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Umidade Atual</h1>
      <p>{humidity} %</p>
    </div>
  );
};

export default CurrentHumidityDisplay;
