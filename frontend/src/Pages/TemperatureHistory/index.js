import React, { useState, useEffect } from "react";
import "./index.css";
import Sidebar from "../../Components/SideBar";
import TemperaturaIcon from "../../Midias/TemperaturaIcon.svg";

const TemperatureHistory = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [visibleRecords, setVisibleRecords] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      const token = sessionStorage.getItem("accessToken");
      if (!token) {
        setError("Token de acesso não encontrado.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://backendt-pi-quarto-semestre-v2.onrender.com/v1/temperatures",
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
          setError(errorData.message || "Erro ao buscar dados de temperatura.");
          setLoading(false);
          return;
        }

        const data = await response.json();
        setTemperatureData(data);
        setLoading(false);
      } catch (error) {
        setError("Erro de rede ao buscar dados de temperatura.");
        setLoading(false);
      }
    };

    fetchTemperatureData();
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
    <div className="temperature-history">
      <Sidebar />
      <h1>Histórico de Temperatura</h1>
      <div className="temperature-list">
        {temperatureData.slice(0, visibleRecords).map((record, index) => (
          <div key={index} className="temperature-block">
            <img
              src={TemperaturaIcon}
              alt="TemperaturaIcon"
              className="TemperaturaIcon"
            />
            <h2>{record.date}</h2>
            <p>{record.temperature} °C</p>
          </div>
        ))}
      </div>
      {visibleRecords < temperatureData.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Carregar mais registros
        </button>
      )}
    </div>
  );
};

export default TemperatureHistory;
