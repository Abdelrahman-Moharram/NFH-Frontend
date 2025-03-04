import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Resolves charts dependancy
ReactFC.fcRoot(FusionCharts, Charts);

const SimpleChart: React.FC = () => {
  const chartConfigs = {
    type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json', // Data type
    dataSource: {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "Gammel"
      },
      "data": [
        {
          "label": "Venezuela",
          "value": "290"
        },
        {
          "label": "Saudi",
          "value": "260"
        },
        {
          "label": "Canada",
          "value": "180"
        },
        {
          "label": "Iran",
          "value": "140"
        },
        {
          "label": "Russia",
          "value": "115"
        },
        {
          "label": "UAE",
          "value": "100"
        },
        {
          "label": "US",
          "value": "30"
        },
        {
          "label": "China",
          "value": "30"
        }
      ]
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default SimpleChart;
