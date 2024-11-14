"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ApplicationStatistics = () => {
  const [stats, setStats] = useState({ total: 0, countsByStatus: {} });

  useEffect(() => {
    axios
      .get("http://localhost:3001/applications/stats")
      .then((response) => setStats(response.data))
      .catch((error) => console.error(error));
  }, []);

  const data = {
    labels: Object.keys(stats.countsByStatus),
    datasets: [
      {
        data: Object.values(stats.countsByStatus),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <h2>Total Applications: {stats.total}</h2>
      <Pie data={data} />
    </div>
  );
};

export default ApplicationStatistics;
