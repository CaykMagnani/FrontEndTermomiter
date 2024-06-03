import React, { useState } from "react";
import "./index.css";
import Sidebar from "../../Components/SideBar";
import TemperaturaIcon from "../../Midias/TemperaturaIcon.svg";

const fakeTemperatureData = [
  { date: "2023-06-01", temperature: 25 },
  { date: "2023-06-02", temperature: 26 },
  { date: "2023-06-03", temperature: 27 },
  { date: "2023-06-04", temperature: 28 },
  { date: "2023-06-05", temperature: 29 },
  { date: "2023-06-06", temperature: 30 },
  { date: "2023-06-07", temperature: 31 },
  { date: "2023-06-08", temperature: 32 },
  { date: "2023-06-09", temperature: 33 },
  { date: "2023-06-10", temperature: 34 },
  { date: "2023-06-11", temperature: 35 },
  { date: "2023-06-12", temperature: 36 },
  { date: "2023-06-13", temperature: 37 },
  { date: "2023-06-14", temperature: 38 },
  { date: "2023-06-15", temperature: 39 },
  { date: "2023-06-16", temperature: 40 },
];

function TemperatureHistory() {
  const [visibleRecords, setVisibleRecords] = useState(10);

  const handleLoadMore = () => {
    setVisibleRecords((prevVisibleRecords) => prevVisibleRecords + 10);
  };

  return (
    <div className="temperature-history">
      <Sidebar />
      <h1>Histórico de Temperatura</h1>
      <div className="temperature-list">
        {fakeTemperatureData.slice(0, visibleRecords).map((record, index) => (
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
      {visibleRecords < fakeTemperatureData.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Carregar mais registros
        </button>
      )}
    </div>
  );
}

export default TemperatureHistory;
