import React from 'react';
import { X, Phone, MessageCircle, Heart, Headphones, Activity } from 'lucide-react';

interface PanicModeProps {
  onClose: () => void;
}

const PanicMode: React.FC<PanicModeProps> = ({ onClose }) => {
  const emergencyContacts = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support",
      icon: Phone
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Text-based crisis counseling",
      icon: MessageCircle
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Mental health and substance abuse",
      icon: Phone
    }
  ];

  const copingStrategies = [
    {
      title: "Deep Breathing",
      description: "Breathe in for 4 counts, hold for 4, breathe out for 6",
      icon: Activity,
      color: "bg-blue-50 text-blue-700"
    },
    {
      title: "Grounding Exercise",
      description: "Name 5 things you can see, 4 you can touch, 3 you can hear",
      icon: Heart,
      color: "bg-green-50 text-green-700"
    },
    {
      title: "Calming Sounds",
      description: "Listen to nature sounds or calming music",
      icon: Headphones,
      color: "bg-purple-50 text-purple-700"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-800">Crisis Support</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Emergency Notice */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-800 mb-2">🚨 If you're in immediate danger</h3>
              <p className="text-red-700 text-sm">
                Call 911 (US) or your local emergency number immediately. 
                Your safety is the most important thing right now.
              </p>
            </div>

            {/* Emergency Contacts */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Crisis Helplines</h3>
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <contact.icon className="w-5 h-5 text-neutral-600" />
                      <h4 className="font-semibold text-neutral-800">{contact.name}</h4>
                    </div>
                    <p className="text-lg font-mono text-neutral-800 mb-1">{contact.number}</p>
                    <p className="text-sm text-neutral-600">{contact.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Coping Strategies */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Quick Coping Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {copingStrategies.map((strategy, index) => (
                  <div key={index} className={`${strategy.color} rounded-lg p-4`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <strategy.icon className="w-5 h-5" />
                      <h4 className="font-semibold">{strategy.title}</h4>
                    </div>
                    <p className="text-sm">{strategy.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Breathing Exercise */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Guided Breathing Exercise</h3>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-gentle">
                  <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-blue-700 mb-2">Follow the breathing pattern:</p>
                <p className="text-sm text-blue-600">
                  Inhale slowly for 4 seconds → Hold for 4 seconds → Exhale slowly for 6 seconds
                </p>
              </div>
            </div>

            {/* Supportive Message */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">💚 You're Not Alone</h3>
              <p className="text-green-700 text-sm">
                It's okay to ask for help. Reaching out is a sign of strength, not weakness. 
                These difficult feelings are temporary, and support is available.
              </p>
            </div>

            {/* Close Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium"
              >
                I'm Feeling Better
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanicMode;