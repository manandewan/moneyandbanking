import React, { useState } from 'react';
import { ArrowLeft, BookOpen, HelpCircle, CheckCircle2, XCircle, Bookmark, AlertTriangle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveLevelScore } from '../utils/storage';

export default function LevelView({ 
  level, 
  onBack, 
  onNextLevel, 
  onPrevLevel,
  hasPrev, 
  hasNext,
  bookmarkedIds,
  onToggleBookmark,
  onLevelComplete
}) {
  const [activeSubTab, setActiveSubTab] = useState('briefing'); // 'briefing' | 'faqs' | 'quiz'
  
  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [qId]: selectedIndex }
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  const handleSelectOption = (qId, optionIndex) => {
    // Instant feedback: record the answer
    if (selectedAnswers[qId] !== undefined) return; // prevent changing once chosen
    const updated = { ...selectedAnswers, [qId]: optionIndex };
    setSelectedAnswers(updated);

    // If all questions are answered, calculate score and trigger confetti
    if (Object.keys(updated).length === level.quiz.length) {
      let score = 0;
      level.quiz.forEach(q => {
        if (updated[q.id] === q.correctIndex) score += 1;
      });
      setCurrentScore(score);
      setQuizSubmitted(true);
      saveLevelScore(level.id, score, level.quiz.length);
      if (onLevelComplete) onLevelComplete(level.id, score, level.quiz.length);

      if (score >= 4) {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setCurrentScore(0);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Level Roadmap</span>
        </button>

        <div className="flex items-center gap-2">
          {hasPrev && (
            <button
              onClick={onPrevLevel}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition"
            >
              Previous Level
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNextLevel}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 transition flex items-center gap-1"
            >
              <span>Next Level</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Level Title Card */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-indigo-600 text-white shadow-sm">
            Level {level.levelNumber}
          </span>
          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            Unit {level.unitNumber}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {level.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {level.subtitle}
        </p>
      </div>

      {/* Sub-Tabs: Briefing, FAQs, Quiz */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 space-x-2 sm:space-x-4">
        <button
          onClick={() => setActiveSubTab('briefing')}
          className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition ${
            activeSubTab === 'briefing'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>High-Yield Briefing</span>
        </button>

        <button
          onClick={() => setActiveSubTab('faqs')}
          className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition ${
            activeSubTab === 'faqs'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Tricky FAQs ({level.faqs.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('quiz')}
          className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition ${
            activeSubTab === 'quiz'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Level Quiz ({level.quiz.length} MCQs)</span>
          {quizSubmitted && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-extrabold">
              {currentScore}/{level.quiz.length}
            </span>
          )}
        </button>
      </div>

      {/* Tab 1: High-Yield Briefing */}
      {activeSubTab === 'briefing' && (
        <div className="space-y-6">
          
          {/* Core Theories */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>Core Theoretical Mechanics & Institutional Norms</span>
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {level.briefing.coreTheories.map((theory, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                  <h4 className="text-sm sm:text-base font-bold text-indigo-700 dark:text-indigo-300">
                    {theory.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {theory.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Traps Alert */}
          {level.briefing.examTraps && level.briefing.examTraps.length > 0 && (
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/80 space-y-3">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Delhi University Exam Traps & Examiner Pitfalls</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                {level.briefing.examTraps.map((trap, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{trap}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action button to proceed to FAQs or Quiz */}
          <div className="pt-4 flex justify-end gap-3">
            <button
              onClick={() => setActiveSubTab('faqs')}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition"
            >
              Review Tricky FAQs →
            </button>
            <button
              onClick={() => setActiveSubTab('quiz')}
              className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition"
            >
              Start Level Quiz ({level.quiz.length} MCQs) →
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Curated Tricky FAQs */}
      {activeSubTab === 'faqs' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200">
            <strong>Exam Tip:</strong> These FAQs answer the exact conceptual "Why" and "How" questions frequently posed in DU examinations and past papers.
          </div>

          <div className="space-y-3">
            {level.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">Q{idx + 1}.</span>
                  <span>{faq.question}</span>
                </h4>
                <div className="pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-indigo-100 dark:border-indigo-900/60">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setActiveSubTab('quiz')}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition"
            >
              Ready! Take Level Quiz →
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Level Quiz */}
      {activeSubTab === 'quiz' && (
        <div className="space-y-8">
          
          {/* Quiz Header & Score Card */}
          {quizSubmitted ? (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-900/40 via-emerald-800/30 to-slate-900 border border-emerald-500/30 text-white space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold flex items-center gap-2">
                    <Award className="w-6 h-6 text-amber-400" />
                    <span>Level {level.levelNumber} Quiz Complete!</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200">
                    You scored <strong className="text-white text-base">{currentScore}</strong> out of <strong className="text-white text-base">{level.quiz.length}</strong> ({Math.round((currentScore / level.quiz.length) * 100)}%)
                  </p>
                </div>
                <button
                  onClick={handleResetQuiz}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>

              {hasNext && (
                <div className="pt-2">
                  <button
                    onClick={onNextLevel}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Next Level (Level {level.levelNumber + 1})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-2">
              <span>Select an answer for each question for instant feedback:</span>
              <span>Answered: {Object.keys(selectedAnswers).length}/{level.quiz.length}</span>
            </div>
          )}

          {/* List of Questions */}
          <div className="space-y-6">
            {level.quiz.map((q, qIndex) => {
              const selectedIdx = selectedAnswers[q.id];
              const isAnswered = selectedIdx !== undefined;
              const isBookmarked = bookmarkedIds.includes(q.id);

              return (
                <div 
                  key={q.id}
                  className={`p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border transition ${
                    isAnswered
                      ? selectedIdx === q.correctIndex
                        ? 'border-emerald-300 dark:border-emerald-800/80 shadow-sm'
                        : 'border-rose-300 dark:border-rose-800/80 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-2">Q{qIndex + 1}.</span>
                      {q.question}
                    </h4>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => onToggleBookmark(q)}
                      className={`p-1.5 rounded-lg transition ${
                        isBookmarked 
                          ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' 
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                    >
                      <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  {/* Options */}
                  <div className="mt-4 space-y-2.5">
                    {q.options.map((option, optIdx) => {
                      const isOptionSelected = selectedIdx === optIdx;
                      const isCorrectOption = optIdx === q.correctIndex;

                      let btnStyle = "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 hover:border-indigo-400";

                      if (isAnswered) {
                        if (isCorrectOption) {
                          btnStyle = "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold";
                        } else if (isOptionSelected) {
                          btnStyle = "bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-200";
                        } else {
                          btnStyle = "bg-slate-50/50 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-700/30 text-slate-400 dark:text-slate-500 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isAnswered}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm text-left flex items-start gap-3 transition ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-current opacity-70">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="flex-1">{option}</span>
                          {isAnswered && isCorrectOption && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          )}
                          {isAnswered && isOptionSelected && !isCorrectOption && (
                            <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Detailed Feedback */}
                  {isAnswered && (
                    <div className="mt-4 p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-xs sm:text-sm space-y-1">
                      <div className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                        {selectedIdx === q.correctIndex ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓ Correct!</span>
                        ) : (
                          <span className="text-rose-600 dark:text-rose-400 font-bold">✗ Incorrect</span>
                        )}
                        <span>Explanation:</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
