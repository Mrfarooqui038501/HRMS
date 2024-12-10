import React from 'react';
import { BarChart } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const stages = [
  { name: 'Pipeline', value: 400 },
  { name: 'Follow Up', value: 35 },
  { name: 'Schedule', value: 248 },
  { name: 'Conversation', value: 470 },
  { name: 'Won', value: 470 },
  { name: 'Lost', value: 190 }
];

export function DealsByStage() {
  const chartData = {
    labels: stages.map(stage => stage.name),
    datasets: [
      {
        data: stages.map(stage => stage.value),
        backgroundColor: '#FBD38D',
        borderRadius: 4,
        barThickness: 40,
        maxBarThickness: 40
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: 'black',
        bodyColor: 'black',
        borderColor: '#E2E8F0',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return context.parsed.y;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        }
      },
      y: {
        grid: {
          color: '#F3F4F6'
        },
        border: {
          display: false,
          dash: [4, 4]
        },
        ticks: {
          stepSize: 100
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          Deals By Stage
          <span className="text-gray-400">
            <BarChart size={20} />
          </span>
        </h2>
        <div className="flex gap-3">
          <select className="border rounded-md px-3 py-1.5 text-sm">
            <option>Sales Pipeline</option>
            <option>Marketing Pipeline</option>
          </select>
          <select className="border rounded-md px-3 py-1.5 text-sm">
            <option>Last 30 days</option>
            <option>Last 60 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>
      
      <div className="h-[400px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
