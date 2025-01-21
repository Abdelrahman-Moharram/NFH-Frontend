import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { chartTypes } from './Types';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const chartComponents = {
    bar: Bar,
    line: Line,
    pie: Pie,
    doughnut: Doughnut,

};

const DynamicChart = ({ type, data, options }:chartTypes) => {
    const ChartComponent = chartComponents[type];
    if (!ChartComponent) {
      return <p>Invalid chart type specified</p>;
    }
  
    return <ChartComponent data={data} options={options} />;
}

export default DynamicChart
