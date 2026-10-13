import React from 'react';
import { Layers, GraduationCap, Sparkles, BookOpen } from 'lucide-react';

export default function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: 'roadmap',
      label: 'Level Roadmap',
      shortLabel: 'Roadmap',
      badge: '10 Levels',
      shortBadge: '10 Lvls',
      icon: Layers,
      description: 'Unit-by-unit clusters & quizzes'
    },
    {
      id: 'mock',
      label: '25-Mark Grand Mock',
      shortLabel: 'Grand Mock',
      badge: 'Untimed + Instant Feedback',
      shortBadge: '25 Qs',
      icon: GraduationCap,
      description: 'Simulate tomorrow\'s exam'
    },
    {
      id: 'flashcards',
      label: 'Theory & Committee Flashcards',
      shortLabel: 'Flashcards',
      badge: 'Rapid Revision',
      shortBadge: '20 Cards',
      icon: Sparkles,
      description: 'Named theories & milestones'
    },
    {
      id: 'summary',
      label: 'Unit-Wise Master Summary',
      shortLabel: 'Master Summary',
      badge: 'High-Yield Notes',
      shortBadge: 'Notes',
      icon: BookOpen,
      description: 'Comprehensive unit breakdowns'
    }
  ];

  return (
    <nav className="bg-slate-100/80 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 p-2 sm:p-3">
      <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto gap-2 no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/60 dark:border-slate-700/60'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`} />
              <span className="sm:hidden">{tab.shortLabel}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                isActive 
                  ? 'bg-white/20 text-white' 
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}>
                <span className="sm:hidden">{tab.shortBadge}</span>
                <span className="hidden sm:inline">{tab.badge}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
