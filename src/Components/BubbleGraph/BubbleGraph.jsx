// src/components/bubbleGraph/BubbleGraph.jsx
import React from 'react';
import {
  ScatterChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from 'recharts';

const BubbleGraph = ({ data }) => {
  const bubbleData = data.map((value, index) => ({
    index,
    value,
    size: value
  }));

  return (
    <div>
      <h3>Scatter Graph</h3>
      <ScatterChart
        width={500}
        height={300}
        data={bubbleData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        <Scatter
          name="Bubble Size"
          data={bubbleData}
          fill="#8884d8"
          shape="circle"
        />
      </ScatterChart>
    </div>
  );
};

export default BubbleGraph;
