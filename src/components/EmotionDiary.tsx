import React, { useState } from 'react';
import { Plus, Calendar, Smile, Frown, Meh, Heart, Zap } from 'lucide-react';

const EmotionDiary: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [mood, setMood] = useState(3);
  const [note, setNote] = useState('');
  const [entries, setEntries] = useState([
    {
      date: '2024-01-07',
      mood: 4,
      note: 'Had a great day at work. Felt productive and accomplished several tasks.',
      emotions: { happy: 0.6, sad: 0.1, anxious: 0.2, angry: 0.05, neutral: 0.05 }
    },
    {
      date: '2024-01-06',
      mood: 2,
      note: 'Feeling overwhelmed with deadlines. Struggled to focus and felt anxious.',
      emotions: { happy: 0.1, sad: 0.3, anxious: 0.5, angry: 0.05, neutral: 0.05 }
    },
    {
      date: '2024-01-05',
      mood: 3,
      note: 'Average day. Nothing particularly good or bad happened.',
      emotions: { happy: 0.3, sad: 0.2, anxious: 0.2, angry: 0.1, neutral: 0.2 }
    }
  ]);

  const handleAddEntry = () => {
    if (!note.trim()) return;
    
    const newEntry = {
      date: selectedDate,
      mood,
      note,
      emotions: { happy: 0.4, sad: 0.2, anxious: 0.2, angry: 0.1, neutral: 0.1 } // Mock emotions
    };
    
    setEntries([newEntry, ...entries.filter(e => e.date !== selectedDate)]);
    setNote('');
    setMood(3);
  };

  const getMoodIcon = (moodValue: number) => {
    switch (moodValue) {
      case 1: return <Frown className="w-6 h-6 text-red-500" />;
      case 2: return <Frown className="w-6 h-6 text-orange-500" />;
      case 3: return <Meh className="w-6 h-6 text-yellow-500" />;
      case 4: return <Smile className="w-6 h-6 text-green-500" />;
      case 5: return <Heart className="w-6 h-6 text-green-600" />;
      default: return <Meh className="w-6 h-6 text-gray-500" />;
    }
  };

  const getMoodLabel = (moodValue: number) => {
    const labels = ['', 'Very Low', 'Low', 'Neutral', 'Good', 'Excellent'];
    return labels[moodValue];
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">Emotion Diary</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Track your daily emotions and thoughts. Regular journaling helps identify patterns and improve self-awareness.
        </p>
      </div>

      {/* Add New Entry */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-6">Add Daily Entry</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Overall Mood</label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={mood}
                  onChange={(e) => setMood(Number(e.target.value))}
                  className="flex-1"
                />
                <div className="flex items-center space-x-2">
                  {getMoodIcon(mood)}
                  <span className="text-sm font-medium text-neutral-700">
                    {getMoodLabel(mood)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">How was your day?</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Describe your day, feelings, thoughts, or any significant events..."
              className="w-full h-32 p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>

          <button
            onClick={handleAddEntry}
            disabled={!note.trim()}
            className="flex items-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-300 text-white rounded-lg transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Entry</span>
          </button>
        </div>
      </div>

      {/* Diary Entries */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-800">Recent Entries</h3>
        
        {entries.map((entry, index) => (
          <div key={entry.date} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-neutral-500" />
                <span className="font-medium text-neutral-800">
                  {new Date(entry.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {getMoodIcon(entry.mood)}
                <span className="text-sm text-neutral-600">{getMoodLabel(entry.mood)}</span>
              </div>
            </div>
            
            <p className="text-neutral-700 leading-relaxed mb-4">{entry.note}</p>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Smile className="w-4 h-4 text-green-500" />
                <span className="text-neutral-600">Happy: {Math.round(entry.emotions.happy * 100)}%</span>
              </div>
              <div className="flex items-center space-x-1">
                <Frown className="w-4 h-4 text-blue-500" />
                <span className="text-neutral-600">Sad: {Math.round(entry.emotions.sad * 100)}%</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-neutral-600">Anxious: {Math.round(entry.emotions.anxious * 100)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionDiary;