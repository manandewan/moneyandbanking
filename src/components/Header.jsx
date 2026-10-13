import React from 'react';
import { Sun, Moon, Bookmark, Search, RotateCcw, Award, BookOpen, Sparkles } from 'lucide-react';

export default function Header({ 
  theme, 
  toggleTheme, 
  bookmarkCount, 
  openBookmarks, 
  openSearch, 
  onResetProgress,
  completedCount,
  totalLevels
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Main Title */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0 flex-1 mr-2">
            <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 font-bold text-lg sm:text-xl">
              🏦
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base md:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white truncate">
                  Money & Banking <span className="text-indigo-600 dark:text-indigo-400">Quiz Master</span>
                </h1>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                  DU Sem 5 GE
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block truncate">
                SOL Book & Official Syllabus • 25-Mark MCQ Quiz Exam Prep
              </p>
            </div>
          </div>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
            
            {/* Global Search Button */}
            <button
              onClick={openSearch}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition"
              title="Search all FAQs and Concepts"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline text-[10px] px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-mono">⌘K</kbd>
            </button>

            {/* Bookmarks Drawer Trigger */}
            <button
              onClick={openBookmarks}
              className="relative p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition"
              title="View Bookmarked Questions"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {bookmarkCount}
                </span>
              )}
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Reset Progress */}
            <button
              onClick={() => {
                if (window.confirm("Reset all quiz scores and completed levels? This cannot be undone.")) {
                  onResetProgress();
                }
              }}
              className="p-2 rounded-lg text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition"
              title="Reset All Progress"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="py-1.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target: 25/25 Objective Marks Tomorrow</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <span>Levels Mastered: <strong className="text-slate-900 dark:text-white font-bold">{completedCount}/{totalLevels}</strong></span>
            <div className="w-16 sm:w-24 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-500" 
                style={{ width: `${(completedCount / totalLevels) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
