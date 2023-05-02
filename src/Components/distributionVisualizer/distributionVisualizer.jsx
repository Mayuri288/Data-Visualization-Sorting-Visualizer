// src/components/distributionVisualizer/distributionVisualizer.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DistributionVisualizer = ({ data }) => {
  const distributionData = data.map((value, index) => ({ index, value }));

  return (
    <div>
      <h3>Data Distribution</h3>
      <BarChart
        width={500}
        height={300}
        data={distributionData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default DistributionVisualizer;
