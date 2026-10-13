import React from 'react';
import { CheckCircle2, ChevronRight, BookOpen, Clock, Award, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { SYLLABUS_UNITS, LEVELS } from '../data/syllabusData';

export default function LevelRoadmap({ onSelectLevel, progress, onOpenMock, onOpenSummary }) {
  const completedLevels = progress.completedLevels || {};
  const levelScores = progress.levelScores || {};

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
      
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-indigo-700/40">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>High-Yield Cramming System for Delhi University B.Com (GE)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            10-Level Unit-by-Unit Progression
          </h2>
          <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed">
            Each level condenses core theoretical mechanisms, mathematical multiplier derivations, and official DU SOL reading material into an actionable 
            <strong> Crash Briefing</strong>, <strong>Curated FAQs</strong>, and a targeted <strong>6-question Level Quiz</strong> with instant trap analysis.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenMock}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition transform active:scale-95"
            >
              <span>Launch 25-Mark Grand Mock</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenSummary}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition"
            >
              <BookOpen className="w-4 h-4" />
              <span>Unit-Wise Master Summary</span>
            </button>
          </div>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Syllabus Units Accordion / Sections */}
      <div className="space-y-8">
        {SYLLABUS_UNITS.map((unit) => {
          const unitLevels = LEVELS.filter(l => unit.levelIds.includes(l.id));

          return (
            <div key={unit.id} className="space-y-4">
              
              {/* Unit Title Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-1 sm:gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {unit.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {unit.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {unit.subtitle} • <span className="italic text-slate-400 dark:text-slate-500">Readings: {unit.sourceReadings}</span>
                  </p>
                </div>
              </div>

              {/* Grid of Levels in this Unit */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                {unitLevels.map((lvl) => {
                  const isCompleted = completedLevels[lvl.id];
                  const scoreInfo = levelScores[lvl.id];

                  return (
                    <div
                      key={lvl.id}
                      onClick={() => onSelectLevel(lvl.id)}
                      className={`group cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-200 border text-left flex flex-col justify-between ${
                        isCompleted 
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/80 shadow-sm'
                          : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/5'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            Level {lvl.levelNumber}
                          </span>
                          
                          {/* Completion / Score Badge */}
                          {isCompleted ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              <span>Score: {scoreInfo?.score}/{scoreInfo?.total} ({scoreInfo?.percentage}%)</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                              <Clock className="w-3 h-3" />
                              <span>{lvl.durationEstimate}</span>
                            </span>
                          )}
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                            {lvl.title}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                            {lvl.subtitle}
                          </p>
                        </div>

                        {/* High-Yield Topics Snippet */}
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {lvl.briefing.coreTheories.slice(0, 3).map((th, i) => (
                            <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400">
                              {th.name.split(':')[0]}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Call to Action */}
                      <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        <span>{isCompleted ? 'Review Briefing & Retake Quiz' : 'Study Briefing & Start Quiz'}</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
