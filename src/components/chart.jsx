import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip, 
  LineController,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController
);

const labels = ['Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan'];

export const data = {
  labels,
  datasets: [
    {
      label: "Lorem Ipsum",
      data: [20, 30, 10, 35, 50, 32, 25, 35, 45, 20, 30, 20],
      backgroundColor: "#D99382",
      borderWidth: 0,
      barThickness: 6,
      order: 0,
    },
    {
      label: "Lorem Ipsum",
      data: [30, 40, 20, 45, 60, 42, 35, 45, 55, 30, 40, 30],
      borderWidth: 1,
      borderColor: "#707070",
      fill: false,
      type: "line",
      order: 1,
    },
  ],
};

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      display: true,
      ticks: {
        major: {
          fontStyle: "bold",
          fontColor: "#FF0000",
        },
      },
    },

    y: {
      display: true,
      position: "left",
      grid: {
        display: false,
      },
      title: {
        display: true,
        text: "Total Orders",
        color: "#464646",
        font: {
          family: "Product Sans Bold",
          size: 14,
          style: "normal",
          color: "#464646",
        },
      },
    },
  },

  plugins: {
    legend: {
      position: "bottom",
      align: "center",
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        padding: 20,
        borderColor: "#fff",
      },
    },
    title: {
      display: false,
      text: "",
    },
  },
};

export default function BarChart() {
  return <Bar width={900} height={600} options={options} data={data} />;
}