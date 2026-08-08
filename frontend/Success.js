import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-box">
        <h1>🎉 Login Successful!</h1>

        <p>Welcome to the Full Stack Internship Project.</p>

        <button
          onClick={() => navigate("/")}
          className="btn"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Success;