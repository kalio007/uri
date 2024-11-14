import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const ApplicationStatistics = () => {
  const [stats, setStats] = useState({ total: 0, countsByStatus: {} });

  useEffect(() => {
    axios.get('http://localhost:3000/applications/stats')
      .then(response => setStats(response.data))
      .catch(error => console.error(error));
  }, []);

  const data = {
    labels: Object.keys(stats.countsByStatus),
    datasets: [
      {
        data: Object.values(stats.countsByStatus),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
