import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Header from "../../Components/Header";
import Sidebar from "../../Components/SideBar";
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
      <div className="container">
        <Sidebar />
        <div className="content">
          <div className="current-display">
            <div className="chart">
              <CurrentTemperatureDisplay />
            </div>
            <div className="chart">
              <CurrentHumidityDisplay />
            </div>
          </div>
          <div className="charts-display">
            <div className="chart">
              <HumidityChart data={humidityData} />
            </div>
            <div className="chart">
              <TemperatureChart data={TemperatureData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
