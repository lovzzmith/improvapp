'use client';

import { useState, useEffect } from 'react';

const prompts = [
  "A job interview gone wrong",
  "Lost in translation",
  "The last item in the store",
  "A mysterious package",
  "The wrong address",
  "A time traveler's mistake",
  "The secret ingredient",
  "An unexpected guest",
  "The wrong number",
  "A case of mistaken identity"
];

export default function PromptGenerator() {
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const generatePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setCurrentPrompt(prompts[randomIndex]);
  };

  const startTimer = (minutes: number) => {
    setTimeLeft(minutes * 60);
    setIsActive(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold mb-4">Improv Scene Generator</h2>
        
        {/* Prompt Display */}
        <div className="bg-base-200 p-8 rounded-box mb-8">
          <p className="text-2xl text-center font-medium">
            {currentPrompt || "Click 'Generate Prompt' to start"}
          </p>
        </div>

        {/* Timer Display */}
        <div className="text-center mb-8">
          <div className="text-6xl font-mono font-bold text-primary">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={generatePrompt}
            className="btn btn-primary btn-lg"
          >
            Generate Prompt
          </button>
          
          <div className="flex gap-4">
            <button 
              onClick={() => startTimer(1)}
              className="btn btn-outline flex-1"
              disabled={isActive}
            >
              1 Min
            </button>
            <button 
              onClick={() => startTimer(3)}
              className="btn btn-outline flex-1"
              disabled={isActive}
            >
              3 Min
            </button>
            <button 
              onClick={() => startTimer(5)}
              className="btn btn-outline flex-1"
              disabled={isActive}
            >
              5 Min
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 