import React, { useState } from 'react';
import { CheckCircle2, XCircle, Bookmark, Award, RotateCcw, AlertTriangle, ArrowRight, ArrowLeft, Filter, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GRAND_MOCK_EXAM } from '../data/syllabusData';
import { saveMockAttempt } from '../utils/storage';

export default function MockExamView({ bookmarkedIds, onToggleBookmark, onOpenSummary }) {
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [qId]: selectedIndex }
  const [activeUnitFilter, setActiveUnitFilter] = useState('all'); // 'all' | 1 | 2 | 3 | 4
  const [showScorecard, setShowScorecard] = useState(false);
  const [scoreData, setScoreData] = useState(null);

  const filteredQuestions = GRAND_MOCK_EXAM.filter(q => {
    if (activeUnitFilter === 'all') return true;
    return q.unit === Number(activeUnitFilter);
  });

  const handleSelectOption = (qId, optionIdx) => {
    if (selectedAnswers[qId] !== undefined) return; // Prevent changing after selection
    const updated = { ...selectedAnswers, [qId]: optionIdx };
    setSelectedAnswers(updated);

    // If all 25 questions are answered, automatically trigger scorecard
    if (Object.keys(updated).length === GRAND_MOCK_EXAM.length) {
      calculateAndShowScorecard(updated);
    }
  };

  const calculateAndShowScorecard = (answers = selectedAnswers) => {
    let totalScore = 0;
    const unitBreakdown = {
      1: { correct: 0, total: 0, title: 'Unit 1: Money & Aggregates' },
      2: { correct: 0, total: 0, title: 'Unit 2: Financial Markets & Reforms' },
      3: { correct: 0, total: 0, title: 'Unit 3: Interest Rates & Term Structure' },
      4: { correct: 0, total: 0, title: 'Unit 4: Central Banking & CBDC' }
    };

    GRAND_MOCK_EXAM.forEach(q => {
      unitBreakdown[q.unit].total += 1;
      if (answers[q.id] === q.correctIndex) {
        totalScore += 1;
        unitBreakdown[q.unit].correct += 1;
      }
    });

    const data = {
      score: totalScore,
      total: GRAND_MOCK_EXAM.length,
      percentage: Math.round((totalScore / GRAND_MOCK_EXAM.length) * 100),
      unitBreakdown
    };

    setScoreData(data);
    setShowScorecard(true);
    saveMockAttempt(data);

    if (totalScore >= 18) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestartMock = () => {
    setSelectedAnswers({});
    setShowScorecard(false);
    setScoreData(null);
  };

  const handleRetryMissed = () => {
    // Keep answers that were correct, clear answers that were wrong
    const corrected = {};
    GRAND_MOCK_EXAM.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        corrected[q.id] = selectedAnswers[q.id];
      }
    });
    setSelectedAnswers(corrected);
    setShowScorecard(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border border-indigo-800/40 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Delhi University 25-Mark Objective Simulator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              25-Mark Grand Mock Exam
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Untimed mock test covering all 4 Units with instant question-by-question feedback. Sourced directly from DU past year exam papers and official SOL reading material.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => calculateAndShowScorecard()}
              disabled={answeredCount === 0}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white shadow-md shadow-indigo-600/30 transition"
            >
              Finish & View Scorecard ({answeredCount}/25)
            </button>
            <button
              onClick={handleRestartMock}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
              title="Reset Mock Exam"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar & Counter */}
        <div className="pt-2 space-y-1.5">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Overall Progress: {answeredCount} of 25 answered</span>
            <span>{Math.round((answeredCount / 25) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-indigo-500 h-full transition-all duration-300"
              style={{ width: `${(answeredCount / 25) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Diagnostic Scorecard (When Triggered or Finished) */}
      {showScorecard && scoreData && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Exam Diagnostic Report Card
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Your Score: <span className="text-indigo-600 dark:text-indigo-400">{scoreData.score} / 25</span> ({scoreData.percentage}%)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {scoreData.score >= 22 
                  ? "🌟 Outstanding! You are in prime condition to score a full 25/25 on tomorrow's exam."
                  : scoreData.score >= 17
                    ? "👍 Strong foundation! Review your incorrect questions below and drill the specific weak unit."
                    : "⚠️ Target remediation needed! Focus on the weak units highlighted below before tomorrow morning."}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRetryMissed}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition"
              >
                Retry Missed Questions
              </button>
              <button
                onClick={() => setShowScorecard(false)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
              >
                Review Answers
              </button>
            </div>
          </div>

          {/* Unit-by-Unit Diagnostic Breakdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Unit-Wise Diagnostic Mastery
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.keys(scoreData.unitBreakdown).map(uKey => {
                const item = scoreData.unitBreakdown[uKey];
                const pct = Math.round((item.correct / item.total) * 100);
                const isWeak = pct < 70;

                return (
                  <div key={uKey} className={`p-4 rounded-2xl border ${
                    isWeak 
                      ? 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-300 dark:border-rose-900/60' 
                      : 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-900/60'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </span>
                      <span className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                        isWeak ? 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                      }`}>
                        {item.correct}/{item.total} ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                      <div 
                        className={`h-full ${isWeak ? 'bg-rose-500' : 'bg-emerald-500'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    {isWeak && (
                      <p className="text-[11px] text-rose-700 dark:text-rose-300 mt-2 font-medium">
                        ⚠️ Recommend reviewing Unit {uKey} summary notes.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Question Palette & Unit Filter */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Filter By Unit:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Units (25)' },
              { id: '1', label: 'Unit 1 (Q1-6)' },
              { id: '2', label: 'Unit 2 (Q7-12)' },
              { id: '3', label: 'Unit 3 (Q13-18)' },
              { id: '4', label: 'Unit 4 (Q19-25)' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveUnitFilter(f.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  activeUnitFilter === f.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 25-Question Number Badges Palette */}
        <div className="pt-2 flex flex-wrap gap-2">
          {GRAND_MOCK_EXAM.map((q, idx) => {
            const selectedIdx = selectedAnswers[q.id];
            const isAnswered = selectedIdx !== undefined;
            const isCorrect = isAnswered && selectedIdx === q.correctIndex;
            const isWrong = isAnswered && selectedIdx !== q.correctIndex;
            const isBookmarked = bookmarkedIds.includes(q.id);

            let badgeStyle = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700";
            if (isCorrect) badgeStyle = "bg-emerald-500 text-white border-emerald-600";
            if (isWrong) badgeStyle = "bg-rose-500 text-white border-rose-600";

            return (
              <a
                key={q.id}
                href={`#${q.id}`}
                className={`relative w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs border transition transform active:scale-95 ${badgeStyle}`}
              >
                {idx + 1}
                {isBookmarked && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-white dark:ring-slate-900" />
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* List of 25 Questions */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          // Find original global index 1..25
          const globalIndex = GRAND_MOCK_EXAM.findIndex(item => item.id === q.id) + 1;
          const selectedIdx = selectedAnswers[q.id];
          const isAnswered = selectedIdx !== undefined;
          const isBookmarked = bookmarkedIds.includes(q.id);

          return (
            <div
              id={q.id}
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
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      Q{globalIndex}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {q.unitTitle}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug pt-1">
                    {q.question}
                  </h4>
                </div>

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

              {/* Instant Detailed Answer Explanation */}
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
  );
}
