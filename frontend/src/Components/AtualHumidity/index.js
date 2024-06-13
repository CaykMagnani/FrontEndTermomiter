import React, { useState, useEffect } from "react";

const CurrentHumidityDisplay = () => {
  const [humidity, setHumidity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentHumidity = async () => {
      const token = sessionStorage.getItem("accessToken");
      if (!token) {
        console.error("Token de acesso não encontrado.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://backendt-pi-quarto-semestre-v2.onrender.com/v1/humidities?latest=true",
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
          console.error("Erro ao buscar a umidade atual:", errorData.message);
          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log("Dados recebidos:", data);
        setHumidity(data.humidity);
        setLoading(false);
      } catch (error) {
        console.error("Erro de rede ao buscar a umidade atual:", error);
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
      <p>Umidade Atual</p>
      <h1 className="Descricao">{humidity}</h1>
    </div>
  );
};

export default CurrentHumidityDisplay;
