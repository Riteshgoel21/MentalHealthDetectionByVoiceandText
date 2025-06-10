import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Heart, Brain, Calendar, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import EmotionChart from './EmotionChart';

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  // Mock data
  const trendData = [
    { date: '2024-01-01', anxiety: 0.3, depression: 0.2, mood: 0.7 },
    { date: '2024-01-02', anxiety: 0.4, depression: 0.3, mood: 0.6 },
    { date: '2024-01-03', anxiety: 0.2, depression: 0.1, mood: 0.8 },
    { date: '2024-01-04', anxiety: 0.5, depression: 0.4, mood: 0.5 },
    { date: '2024-01-05', anxiety: 0.3, depression: 0.2, mood: 0.7 },
    { date: '2024-01-06', anxiety: 0.6, depression: 0.5, mood: 0.4 },
    { date: '2024-01-07', anxiety: 0.4, depression: 0.3, mood: 0.6 },
  ];

  const currentEmotions = {
    happy: 0.25,
    sad: 0.35,
    angry: 0.10,
    anxious: 0.20,
    neutral: 0.10
  };

  const wellnessScore = 65;
  const riskLevel = 'Moderate';

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">Mental Health Dashboard</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Track your emotional patterns and mental health trends over time. This overview combines insights from your voice and text analyses.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Wellness Score</p>
              <p className="text-3xl font-bold text-primary-600">{wellnessScore}%</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+5% from last week</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Risk Level</p>
              <p className="text-xl font-bold text-yellow-600">{riskLevel}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-neutral-600">Requires attention</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Anxiety Level</p>
              <p className="text-3xl font-bold text-red-600">20%</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">-3% from yesterday</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Analysis Count</p>
              <p className="text-3xl font-bold text-neutral-800">127</p>
            </div>
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-neutral-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-neutral-600">This month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trend Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-neutral-800">Emotional Trends</h3>
            <div className="flex space-x-2">
              {['7d', '30d', '90d'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedPeriod === period
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="anxiety" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="depression" stroke="#f59e0b" strokeWidth={2} />
                <Line type="monotone" dataKey="mood" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current Emotions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-neutral-800 mb-6">Current Emotional State</h3>
          <EmotionChart data={currentEmotions} />
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-6">Personalized Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">🧘 Mindfulness</h4>
            <p className="text-sm text-blue-700">
              Your anxiety levels have been elevated. Try 10 minutes of meditation or breathing exercises daily.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">🏃 Physical Activity</h4>
            <p className="text-sm text-green-700">
              Regular exercise can improve mood. Consider a 20-minute walk or your favorite physical activity.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">👥 Social Connection</h4>
            <p className="text-sm text-purple-700">
              Reach out to friends or family. Social support is crucial for mental wellbeing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;