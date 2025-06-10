import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import VoiceAnalysis from './components/VoiceAnalysis';
import TextAnalysis from './components/TextAnalysis';
import Dashboard from './components/Dashboard';
import EmotionDiary from './components/EmotionDiary';
import PrivacyNotice from './components/PrivacyNotice';
import PanicMode from './components/PanicMode';

type ActiveTab = 'voice' | 'text' | 'dashboard' | 'diary' | 'privacy';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [showPanicMode, setShowPanicMode] = useState(false);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'voice':
        return <VoiceAnalysis />;
      case 'text':
        return <TextAnalysis />;
      case 'dashboard':
        return <Dashboard />;
      case 'diary':
        return <EmotionDiary />;
      case 'privacy':
        return <PrivacyNotice />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Header onPanicMode={() => setShowPanicMode(true)} />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          {renderActiveComponent()}
        </div>
      </main>

      {showPanicMode && (
        <PanicMode onClose={() => setShowPanicMode(false)} />
      )}
    </div>
  );
}

export default App;