import React, { useState } from 'react';
import { Send, FileText, Sparkles } from 'lucide-react';
import EmotionChart from './EmotionChart';

const TextAnalysis: React.FC = () => {
  const [textInput, setTextInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!textInput.trim()) return;
    
    setIsAnalyzing(true);
    
    // Mock analysis based on text content
    setTimeout(() => {
      const words = textInput.toLowerCase();
      let emotions = {
        happy: 0.2,
        sad: 0.3,
        angry: 0.1,
        anxious: 0.25,
        neutral: 0.15
      };

      // Simple keyword-based mock analysis
      if (words.includes('sad') || words.includes('depressed') || words.includes('down')) {
        emotions.sad += 0.3;
      }
      if (words.includes('worried') || words.includes('anxious') || words.includes('nervous')) {
        emotions.anxious += 0.3;
      }
      if (words.includes('happy') || words.includes('good') || words.includes('great')) {
        emotions.happy += 0.3;
      }

      // Normalize
      const total = Object.values(emotions).reduce((a, b) => a + b, 0);
      Object.keys(emotions).forEach(key => {
        emotions[key as keyof typeof emotions] /= total;
      });

      const riskScore = emotions.sad + emotions.anxious - emotions.happy;

      setAnalysisResult({
        emotions,
        riskScore: Math.max(0, Math.min(1, riskScore)),
        textMetrics: {
          wordCount: textInput.split(' ').length,
          sentimentScore: emotions.happy - emotions.sad,
          keyPhrases: ['feeling overwhelmed', 'need support', 'difficult time']
        }
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">Text Emotion Analysis</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Share your thoughts or feelings in text form. Our AI analyzes your writing to detect emotional patterns and potential mental health indicators.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-neutral-800 mb-6">Share Your Thoughts</h3>
          
          <div className="space-y-4">
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="How are you feeling today? Share your thoughts, experiences, or anything on your mind..."
              className="w-full h-64 p-4 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
            
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-500">
                {textInput.length} characters • {textInput.split(' ').filter(w => w.length > 0).length} words
              </p>
              
              <button
                onClick={handleAnalyze}
                disabled={!textInput.trim() || isAnalyzing}
                className="flex items-center space-x-2 px-6 py-2 bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-300 text-white rounded-lg transition-colors duration-200"
              >
                {isAnalyzing ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
                <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Text'}</span>
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Tips for Better Analysis</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Be honest about your feelings</li>
              <li>• Write at least a few sentences</li>
              <li>• Include specific emotions or experiences</li>
              <li>• Your privacy is always protected</li>
            </ul>
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
                  <p className="text-sm text-neutral-600">Sentiment</p>
                  <p className={`text-2xl font-bold ${
                    analysisResult.textMetrics.sentimentScore > 0 ? 'text-green-500' : 
                    analysisResult.textMetrics.sentimentScore < -0.2 ? 'text-red-500' : 'text-yellow-500'
                  }`}>
                    {analysisResult.textMetrics.sentimentScore > 0 ? 'Positive' : 
                     analysisResult.textMetrics.sentimentScore < -0.2 ? 'Negative' : 'Neutral'}
                  </p>
                </div>
              </div>

              <EmotionChart data={analysisResult.emotions} />

              <div className="bg-neutral-50 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-800 mb-2">Text Insights</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="text-neutral-600">Word Count:</span> {analysisResult.textMetrics.wordCount}</p>
                  <p><span className="text-neutral-600">Key Themes:</span> {analysisResult.textMetrics.keyPhrases.join(', ')}</p>
                </div>
              </div>

              {analysisResult.riskScore > 0.6 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Elevated Risk Detected</h4>
                  <p className="text-sm text-red-700">
                    Your text analysis suggests you may be experiencing emotional distress. 
                    Consider reaching out to a mental health professional or trusted friend.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-neutral-400">
              <p>Enter text above to see analysis results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextAnalysis;