import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Play, Pause, Upload } from 'lucide-react';
import EmotionChart from './EmotionChart';

const VoiceAnalysis: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Mock audio level animation
  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRecording]);

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setIsAnalyzing(true);
      
      // Mock analysis
      setTimeout(() => {
        setAnalysisResult({
          emotions: {
            happy: 0.15,
            sad: 0.45,
            angry: 0.10,
            anxious: 0.25,
            neutral: 0.05
          },
          riskScore: 0.7,
          audioFeatures: {
            pitch: 'Lower than average',
            energy: 'Moderate',
            tempo: 'Slower speech'
          }
        });
        setIsAnalyzing(false);
      }, 2000);
    } else {
      setIsRecording(true);
      setAnalysisResult(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">Voice Emotion Analysis</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Record your voice or upload an audio file to analyze emotional patterns and detect potential signs of anxiety or depression.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recording Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-neutral-800 mb-6">Record Audio</h3>
          
          <div className="text-center space-y-6">
            <div className="relative">
              <button
                onClick={handleRecord}
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isRecording
                    ? 'bg-red-500 hover:bg-red-600 text-white scale-110'
                    : 'bg-primary-500 hover:bg-primary-600 text-white hover:scale-105'
                }`}
              >
                {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
              </button>
              
              {isRecording && (
                <div className="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping"></div>
              )}
            </div>

            {isRecording && (
              <div className="space-y-4">
                <p className="text-red-600 font-medium">Recording...</p>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-100"
                    style={{ width: `${audioLevel}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="border-t pt-6">
              <p className="text-sm text-neutral-600 mb-4">Or upload an audio file</p>
              <label className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg cursor-pointer transition-colors">
                <Upload className="w-4 h-4" />
                <span>Upload .wav or .mp3</span>
                <input type="file" accept="audio/*" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-neutral-800 mb-6">Analysis Results</h3>
          
          {isAnalyzing ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          ) : analysisResult ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-sm text-neutral-600">Risk Score</p>
                  <p className={`text-2xl font-bold ${
                    analysisResult.riskScore > 0.6 ? 'text-red-500' : 
                    analysisResult.riskScore > 0.3 ? 'text-yellow-500' : 'text-green-500'
                  }`}>
                    {Math.round(analysisResult.riskScore * 100)}%
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-sm text-neutral-600">Dominant Emotion</p>
                  <p className="text-2xl font-bold text-neutral-800 capitalize">
                    {Object.entries(analysisResult.emotions).reduce((a, b) => 
                      analysisResult.emotions[a[0]] > analysisResult.emotions[b[0]] ? a : b
                    )[0]}
                  </p>
                </div>
              </div>

              <EmotionChart data={analysisResult.emotions} />

              <div className="bg-neutral-50 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-800 mb-2">Audio Features</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="text-neutral-600">Pitch:</span> {analysisResult.audioFeatures.pitch}</p>
                  <p><span className="text-neutral-600">Energy:</span> {analysisResult.audioFeatures.energy}</p>
                  <p><span className="text-neutral-600">Speech Pattern:</span> {analysisResult.audioFeatures.tempo}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-neutral-400">
              <p>Start recording to see analysis results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceAnalysis;