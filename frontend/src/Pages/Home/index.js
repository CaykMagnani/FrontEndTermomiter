import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Header from "../../Components/Header";
import HumidityChart from "../../Components/ChartHumidity";
import TemperatureChart from "../../Components/ChartTemperature";
import CurrentTemperatureDisplay from "../../Components/AtualTemperature";
import CurrentHumidityDisplay from "../../Components/AtualHumidity";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn === "false") {
      navigate("/login");
    }
  }, [navigate]);

  const humidityData = [];
  const TemperatureData = [];

  return (
    <>
      <Header />
      <div className="Home">
        <div className="Atual">
          <CurrentTemperatureDisplay />
          <CurrentHumidityDisplay />
        </div>
        <div className="LongoDoTempo">
          <HumidityChart data={humidityData} />
          <TemperatureChart data={TemperatureData} />
        </div>
      </div>
    </>
  );
}

export default Home;
