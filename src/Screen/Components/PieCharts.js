import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Connected (2)", 50],
  ["Notconnected (2)", 50],
 
];

export const options = {
 
  pieHole: 0.4,
  is3D: false,
   
  
};

export default function PieCharts() {
  return (
    
    <Chart
      chartType="PieChart"
       
      data={data}
      options={options}
    />
  );
}
