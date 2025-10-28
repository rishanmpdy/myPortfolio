
import React, { useState } from 'react';
import { generateDesignIdea } from '../services/geminiService';
import { WandSparkles } from './icons';

const DesignIdeaGenerator: React.FC = () => {
  const [idea, setIdea] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    setIdea('');
    try {
      const newIdea = await generateDesignIdea();
      setIdea(newIdea);
    } catch (err) {
      setError('Failed to generate an idea. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-dark-card border border-border-color rounded-2xl p-8 sticky top-28">
      <div className="flex items-center gap-4 mb-4">
        <WandSparkles className="w-8 h-8 text-secondary" />
        <h3 className="text-2xl font-bold text-white">Design Idea Generator</h3>
      </div>
      <p className="text-medium-text mb-6">
        Stuck in a creative rut? Use the power of AI to generate a unique design prompt and get your ideas flowing.
      </p>

      <button
        onClick={handleGenerate}
        disabled={isLoading}
        className="w-full bg-secondary text-dark-bg font-bold py-3 px-6 rounded-lg hover:bg-secondary-hover transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
        ) : (
          'Generate a New Idea'
        )}
      </button>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      
      {idea && (
        <div className="mt-6 bg-dark-bg p-4 rounded-lg border border-border-color">
            <p className="text-light-text text-center font-medium">"{idea}"</p>
        </div>
      )}
    </div>
  );
};

export default DesignIdeaGenerator;