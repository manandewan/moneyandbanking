import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, HelpCircle, Award, Sparkles, ChevronRight } from 'lucide-react';
import { LEVELS, GRAND_MOCK_EXAM, FLASHCARDS_DATA } from '../data/syllabusData';

export default function SearchModal({ isOpen, onClose, onSelectLevel }) {
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Aggregate results across levels, FAQs, quiz, and flashcards
  const results = [];

  if (cleanQuery.length >= 2) {
    // 1. Search in Level Briefings & Theories
    LEVELS.forEach(lvl => {
      lvl.briefing.coreTheories.forEach(th => {
        if (th.name.toLowerCase().includes(cleanQuery) || th.detail.toLowerCase().includes(cleanQuery)) {
          results.push({
            type: 'Theory & Concept',
            title: th.name,
            snippet: th.detail.slice(0, 140) + '...',
            levelId: lvl.id,
            unitNumber: lvl.unitNumber,
            icon: BookOpen
          });
        }
      });

      // 2. Search in Level FAQs
      lvl.faqs.forEach(faq => {
        if (faq.question.toLowerCase().includes(cleanQuery) || faq.answer.toLowerCase().includes(cleanQuery)) {
          results.push({
            type: 'Curated FAQ',
            title: faq.question,
            snippet: faq.answer.slice(0, 140) + '...',
            levelId: lvl.id,
            unitNumber: lvl.unitNumber,
            icon: HelpCircle
          });
        }
      });

      // 3. Search in Level Quiz MCQs
      lvl.quiz.forEach(q => {
        if (q.question.toLowerCase().includes(cleanQuery) || q.explanation.toLowerCase().includes(cleanQuery)) {
          results.push({
            type: 'Quiz Question',
            title: q.question,
            snippet: q.explanation.slice(0, 140) + '...',
            levelId: lvl.id,
            unitNumber: lvl.unitNumber,
            icon: Award
          });
        }
      });
    });

    // 4. Search in Flashcards
    FLASHCARDS_DATA.forEach(fc => {
      if (fc.front.toLowerCase().includes(cleanQuery) || fc.back.toLowerCase().includes(cleanQuery)) {
        results.push({
          type: `Flashcard: ${fc.category}`,
          title: fc.front,
          snippet: fc.back.slice(0, 140) + '...',
          unitNumber: fc.unit,
          icon: Sparkles
        });
      }
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search theories, committees, formulas, or FAQs (e.g. MCLR, CD, Vaghul, Multiplier)..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono">ESC</kbd>
          )}
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          {cleanQuery.length < 2 ? (
            <div className="py-12 text-center text-xs sm:text-sm text-slate-400 dark:text-slate-500 space-y-2">
              <Sparkles className="w-8 h-8 text-indigo-400 mx-auto opacity-40" />
              <p>Type at least 2 characters to search across all 10 Levels, FAQs & Flashcards</p>
              <div className="pt-2 flex flex-wrap justify-center gap-1.5 text-xs">
                {['MCLR', 'Commercial Paper', 'Narasimham', 'Multiplier', 'CBDC', 'Kalecki', 'Liquidity Trap'].map(t => (
                  <button
                    key={t}
                    onClick={() => setQuery(t)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-xs sm:text-sm text-slate-400 dark:text-slate-500">
              No syllabus concepts found matching "{query}"
            </div>
          ) : (
            results.slice(0, 15).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (item.levelId) onSelectLevel(item.levelId);
                    onClose();
                  }}
                  className="p-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 transition cursor-pointer space-y-1"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.type}</span>
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Unit {item.unitNumber} {item.levelId ? `• Level ${item.levelId}` : ''}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.snippet}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>Found {results.length} matches</span>
          <button
            onClick={onClose}
            className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
