import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface EmotionChartProps {
  data: {
    happy: number;
    sad: number;
    angry: number;
    anxious: number;
    neutral: number;
  };
}

const EmotionChart: React.FC<EmotionChartProps> = ({ data }) => {
  const colors = {
    happy: '#22c55e',
    sad: '#3b82f6',
    angry: '#ef4444',
    anxious: '#f59e0b',
    neutral: '#6b7280'
  };

  const chartData = Object.entries(data).map(([emotion, value]) => ({
    name: emotion.charAt(0).toUpperCase() + emotion.slice(1),
    value: Math.round(value * 100),
    color: colors[emotion as keyof typeof colors]
  }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, 'Probability']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmotionChart;