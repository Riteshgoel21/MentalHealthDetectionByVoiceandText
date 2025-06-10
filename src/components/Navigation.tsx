import React from 'react';
import { Mic, MessageSquare, BarChart3, BookOpen, Shield } from 'lucide-react';

type ActiveTab = 'voice' | 'text' | 'dashboard' | 'diary' | 'privacy';

interface NavigationProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: BarChart3 },
    { id: 'voice' as const, label: 'Voice Analysis', icon: Mic },
    { id: 'text' as const, label: 'Text Analysis', icon: MessageSquare },
    { id: 'diary' as const, label: 'Emotion Diary', icon: BookOpen },
    { id: 'privacy' as const, label: 'Privacy', icon: Shield },
  ];

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex items-center space-x-2 px-4 py-4 border-b-2 whitespace-nowrap transition-colors duration-200 ${
                activeTab === id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-600 hover:text-neutral-800 hover:border-neutral-300'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;