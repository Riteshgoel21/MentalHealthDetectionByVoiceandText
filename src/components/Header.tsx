import React from 'react';
import { Brain, AlertCircle } from 'lucide-react';

interface HeaderProps {
  onPanicMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPanicMode }) => {
  return (
    <header className="bg-white shadow-sm border-b border-neutral-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-neutral-800">MindSense</h1>
              <p className="text-sm text-neutral-600">AI-Powered Mental Health Analysis</p>
            </div>
          </div>
          
          <button
            onClick={onPanicMode}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            <AlertCircle className="w-4 h-4" />
            <span>Need Help?</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;