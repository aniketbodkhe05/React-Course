import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import bgAnimation from "../assets/gradient-bg.json";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Lottie animationData={bgAnimation} loop className="lottie_body" />

      <div className="content">
        <div className="card">
          <h1 className="title">Weather Forecast</h1>
          <p className="subtitle">
            Get real-time weather updates for any ci ty in the world
          </p>

          <button className="start_btn" onClick={() => navigate("/weather")}>
            View Cities Weather
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
