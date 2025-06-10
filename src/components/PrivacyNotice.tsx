import React from 'react';
import { Shield, Lock, Eye, Server, Trash2, CheckCircle } from 'lucide-react';

const PrivacyNotice: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">Privacy & Security</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Your privacy and mental health data security are our top priorities. Learn how we protect your information.
        </p>
      </div>

      {/* Key Privacy Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">Local Processing</h3>
          <p className="text-neutral-600 text-sm">
            All analysis happens on your device. Your voice and text data never leaves your computer.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">End-to-End Encryption</h3>
          <p className="text-neutral-600 text-sm">
            Any data that is stored is encrypted with AES-256 encryption for maximum security.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">No Tracking</h3>
          <p className="text-neutral-600 text-sm">
            We don't track your usage, collect analytics, or share data with third parties.
          </p>
        </div>
      </div>

      {/* Data Handling */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-6">How We Handle Your Data</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-800 mb-1">Voice Recordings</h4>
              <p className="text-neutral-600 text-sm">
                Audio recordings are processed locally and automatically deleted after analysis. 
                Only the emotional analysis results are retained (if you choose to save them).
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-800 mb-1">Text Analysis</h4>
              <p className="text-neutral-600 text-sm">
                Your written content is analyzed locally. We only store anonymized emotional patterns, 
                not the actual text you enter.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-800 mb-1">Emotional Patterns</h4>
              <p className="text-neutral-600 text-sm">
                Only aggregated emotional data (like "anxiety: 30%") is stored to track trends. 
                This data is encrypted and cannot be linked back to specific content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Disclaimers */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-amber-800 mb-4">⚠️ Important Medical Disclaimer</h3>
        <div className="space-y-3 text-sm text-amber-700">
          <p>
            <strong>This tool is NOT a substitute for professional medical advice, diagnosis, or treatment.</strong> 
            MindSense is designed to provide insights and support, but it cannot replace the expertise of qualified mental health professionals.
          </p>
          <p>
            If you are experiencing thoughts of self-harm, suicidal ideation, or a mental health crisis, 
            please contact a mental health professional immediately or call your local emergency services.
          </p>
          <p>
            The AI analysis provided by this tool should be used as a supplement to, not a replacement for, 
            professional mental health care and your own judgment about your wellbeing.
          </p>
        </div>
      </div>

      {/* Data Control */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-6">Your Data Control</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Server className="w-5 h-5 text-neutral-600" />
              <span className="font-medium text-neutral-800">Export Your Data</span>
            </div>
            <p className="text-sm text-neutral-600 ml-8">
              Download all your emotional analysis data and diary entries in JSON format at any time.
            </p>
            <button className="ml-8 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm">
              Export Data
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Trash2 className="w-5 h-5 text-red-600" />
              <span className="font-medium text-neutral-800">Delete All Data</span>
            </div>
            <p className="text-sm text-neutral-600 ml-8">
              Permanently delete all stored emotional data and diary entries from your device.
            </p>
            <button className="ml-8 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm">
              Delete All Data
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-neutral-50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-neutral-800 mb-4">Questions About Privacy?</h3>
        <p className="text-neutral-600 mb-4">
          If you have any questions about how we handle your data or our privacy practices, 
          please don't hesitate to reach out to us.
        </p>
        <div className="space-y-2 text-sm text-neutral-600">
          <p><strong>Email:</strong> privacy@mindsense.app</p>
          <p><strong>Last Updated:</strong> January 2024</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice;