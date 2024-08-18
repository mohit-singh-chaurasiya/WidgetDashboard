import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Failed  ", 1689],
  ["Warning  ", 681],
  ["not available", 360],
  ["Passed", 7253],
   
];

export const options = {
 
  pieHole: 0.4,
  is3D: false,
   
  
};

export default function DonutCharts() {
  return (
    
    <Chart
      chartType="PieChart"
      
      data={data}
      options={options}
    />
  );
}
