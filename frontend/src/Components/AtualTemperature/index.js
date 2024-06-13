import React, { useState, useEffect } from "react";

const CurrentTemperatureDisplay = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentTemperature = async () => {
      const token = sessionStorage.getItem("accessToken");
      if (!token) {
        console.error("Token de acesso não encontrado.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://backendt-pi-quarto-semestre-v2.onrender.com/v1/temperatures?latest=true",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error(
            "Erro ao buscar a temperatura atual:",
            errorData.message,
          );
          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log("Dados recebidos:", data);
        setTemperature(data.temperature);
        setLoading(false);
      } catch (error) {
        console.error("Erro de rede ao buscar a temperatura atual:", error);
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
      <h1 className="Descricao">{temperature}</h1>
    </div>
  );
};

export default CurrentTemperatureDisplay;
