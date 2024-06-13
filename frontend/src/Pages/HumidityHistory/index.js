import React, { useState, useEffect } from "react";
import "./index.css";
import Sidebar from "../../Components/SideBar";
import HumidityIcon from "../../Midias/Humidity.svg";

const HumidityHistory = () => {
  const [humidityData, setHumidityData] = useState([]);
  const [visibleRecords, setVisibleRecords] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHumidityData = async () => {
      const token = sessionStorage.getItem("accessToken");
      if (!token) {
        setError("Token de acesso não encontrado.");
        setLoading(false);
        return;
      }

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

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || "Erro ao buscar dados de umidade.");
          setLoading(false);
          return;
        }

        const data = await response.json();
        setHumidityData(data);
        setLoading(false);
      } catch (error) {
        setError("Erro de rede ao buscar dados de umidade.");
        setLoading(false);
      }
    };

    fetchHumidityData();
  }, []);

  const handleLoadMore = () => {
    setVisibleRecords((prevVisibleRecords) => prevVisibleRecords + 10);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="Humidity-history">
      <Sidebar />
      <h1>Histórico de Umidade</h1>
      <div className="Humidity-list">
        {humidityData.slice(0, visibleRecords).map((record, index) => (
          <div key={index} className="Humidity-block">
            <img
              src={HumidityIcon}
              alt="umidadeIcon"
              className="HumidityIcon"
            />
            <h2>{record.date}</h2>
            <p>{record.humidity}%</p>
          </div>
        ))}
      </div>
      {visibleRecords < humidityData.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Carregar mais registros
        </button>
      )}
    </div>
  );
};

export default HumidityHistory;
