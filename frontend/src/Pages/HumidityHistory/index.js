import React, { useState } from "react";
import "./index.css";
import Sidebar from "../../Components/SideBar";
import Humidity from "../../Midias/Humidity.svg";

const fakeHumidityData = [
  { date: "2023-06-01", Humidity: 25 },
  { date: "2023-06-02", Humidity: 26 },
  { date: "2023-06-03", Humidity: 27 },
  { date: "2023-06-04", Humidity: 28 },
  { date: "2023-06-05", Humidity: 29 },
  { date: "2023-06-06", Humidity: 30 },
  { date: "2023-06-07", Humidity: 31 },
  { date: "2023-06-08", Humidity: 32 },
  { date: "2023-06-09", Humidity: 33 },
  { date: "2023-06-10", Humidity: 34 },
  { date: "2023-06-11", Humidity: 35 },
  { date: "2023-06-12", Humidity: 36 },
  { date: "2023-06-13", Humidity: 37 },
  { date: "2023-06-14", Humidity: 38 },
  { date: "2023-06-15", Humidity: 39 },
  { date: "2023-06-16", Humidity: 40 },
];

function HumidityHistory() {
  const [visibleRecords, setVisibleRecords] = useState(10);

  const handleLoadMore = () => {
    setVisibleRecords((prevVisibleRecords) => prevVisibleRecords + 10);
  };

  return (
    <div className="Humidity-history">
      <Sidebar />
      <h1>Histórico de Humidade</h1>
      <div className="Humidity-list">
        {fakeHumidityData.slice(0, visibleRecords).map((record, index) => (
          <div key={index} className="Humidity-block">
            <img src={Humidity} alt="HumidityIcon" className="HumidityIcon" />
            <h2>{record.date}</h2>
            <p>{record.Humidity}%</p>
          </div>
        ))}
      </div>
      {visibleRecords < fakeHumidityData.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Carregar mais registros
        </button>
      )}
    </div>
  );
}

export default HumidityHistory;
