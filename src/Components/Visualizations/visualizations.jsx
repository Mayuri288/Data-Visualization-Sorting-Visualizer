// src/components/visualizations/Visualizations.jsx
import React from 'react';
import DistributionVisualizer from '../distributionVisualizer/distributionVisualizer';
import BubbleGraph from '../BubbleGraph/BubbleGraph';
import './Visualizations.css';
import ComposedChartComponent from '../composedChart/ComposedChartComponent';

const Visualizations = ({ data }) => {
  return (
    <div className="visualizations">
      <DistributionVisualizer data={data} />
      <BubbleGraph data={data} />
      <ComposedChartComponent data={data} />
    </div>
  );
};

export default Visualizations;
