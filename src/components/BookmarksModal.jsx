import React from 'react';
import { Bookmark, X, CheckCircle2, Trash2 } from 'lucide-react';

export default function BookmarksModal({ isOpen, onClose, bookmarks, onToggleBookmark }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500" fill="currentColor" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Bookmarked Questions ({bookmarks.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {bookmarks.length === 0 ? (
            <div className="py-16 text-center text-xs sm:text-sm text-slate-400 dark:text-slate-500 space-y-2">
              <Bookmark className="w-8 h-8 text-slate-300 dark:text-slate-700 mx-auto" />
              <p>No questions bookmarked yet.</p>
              <p className="text-xs text-slate-400">
                Tap the bookmark icon on any tricky MCQ during level quizzes or the mock exam to review it here.
              </p>
            </div>
          ) : (
            bookmarks.map((q) => (
              <div 
                key={q.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {q.question}
                  </h4>
                  <button
                    onClick={() => onToggleBookmark(q)}
                    className="text-slate-400 hover:text-rose-500 transition p-1"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Correct Answer Display */}
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/80 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Correct Answer:</strong> {q.options[q.correctIndex]}
                  </div>
                </div>

                {/* Explanation */}
                <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-2 border-l-2 border-indigo-300 dark:border-indigo-700">
                  <strong className="text-slate-800 dark:text-slate-200">Explanation:</strong> {q.explanation}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition"
          >
            Done Reviewing
          </button>
        </div>
      </div>
    </div>
  );
}
