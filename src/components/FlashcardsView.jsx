import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowLeft, ArrowRight, RotateCw, Shuffle, Filter, CheckCircle2 } from 'lucide-react';
import { FLASHCARDS_DATA } from '../data/syllabusData';

export default function FlashcardsView() {
  const [selectedUnit, setSelectedUnit] = useState('all'); // 'all' | 1 | 2 | 3 | 4
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const filteredCards = FLASHCARDS_DATA.filter(card => {
    if (selectedUnit === 'all') return true;
    return card.unit === Number(selectedUnit);
  });

  // Reset card index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedUnit]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, filteredCards.length]);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  const currentCard = filteredCards[currentIndex] || FLASHCARDS_DATA[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Active Recall & Flashcard Deck</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Theories, Economists & Committee Milestones
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Tap or press Space to flip card. Use arrow keys to navigate. Perfect for rapid last-minute cramming before walking into the exam hall.
        </p>
      </div>

      {/* Unit Filter Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'all', label: `All Units (${FLASHCARDS_DATA.length})` },
          { id: '1', label: 'Unit 1: Money' },
          { id: '2', label: 'Unit 2: Markets' },
          { id: '3', label: 'Unit 3: Interest Rates' },
          { id: '4', label: 'Unit 4: Central Banking' }
        ].map(filter => (
          <button
            key={filter.id}
            onClick={() => setSelectedUnit(filter.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedUnit === filter.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* The 3D Flip Card */}
      <div className="perspective-1000 py-4 flex justify-center">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full max-w-2xl min-h-[320px] sm:min-h-[360px] cursor-pointer rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-500 flex flex-col justify-between border ${
            isFlipped
              ? 'bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white border-indigo-700/60 shadow-indigo-500/10'
              : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600'
          }`}
        >
          {/* Card Top Details */}
          <div className="flex items-center justify-between text-xs">
            <span className={`px-2.5 py-1 rounded-lg font-bold text-[11px] ${
              isFlipped 
                ? 'bg-indigo-500/30 text-indigo-200 border border-indigo-400/30' 
                : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
            }`}>
              {currentCard.category}
            </span>

            <span className={`text-[11px] font-semibold ${isFlipped ? 'text-indigo-300' : 'text-slate-400'}`}>
              {currentCard.unitTitle}
            </span>
          </div>

          {/* Card Center Content */}
          <div className="py-6 my-auto text-center space-y-4">
            {!isFlipped ? (
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-indigo-600 dark:text-indigo-400">
                  Concept / Question
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                  {currentCard.front}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 pt-2">
                  (Click card to reveal theoretical breakdown)
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-left animate-in fade-in duration-300">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-400">
                  Detailed Answer & Theoretical Mechanism
                </span>
                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line font-medium">
                  {currentCard.back}
                </div>
              </div>
            )}
          </div>

          {/* Card Bottom Controls */}
          <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <span className={`font-mono text-[11px] ${isFlipped ? 'text-indigo-300' : 'text-slate-400'}`}>
              Card {currentIndex + 1} of {filteredCards.length}
            </span>
            <span className={`flex items-center gap-1 font-semibold text-[11px] ${isFlipped ? 'text-indigo-300' : 'text-indigo-600 dark:text-indigo-400'}`}>
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? 'Click to show front' : 'Click to flip'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="p-3 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm transition active:scale-95 flex items-center gap-2 text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <button
          onClick={handleShuffle}
          className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition active:scale-95 flex items-center gap-1 text-xs font-bold"
          title="Shuffle Deck"
        >
          <Shuffle className="w-4 h-4" />
          <span className="hidden sm:inline">Shuffle</span>
        </button>

        <button
          onClick={handleNext}
          className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition active:scale-95 flex items-center gap-2 text-xs font-bold"
        >
          <span>Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
