// src/components/composedChart/ComposedChartComponent.jsx
import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ComposedChartComponent = ({ data }) => {
  const composedData = data.map((value, index) => ({ index, value }));

  return (
    <div>
      <h3>Composed Chart</h3>
      <ComposedChart
        width={500}
        height={300}
        data={composedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Bar dataKey="value" barSize={20} fill="#413ea0" />
        <Area type="monotone" dataKey="value" fill="#ff7300" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default ComposedChartComponent;
