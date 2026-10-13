import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import LevelRoadmap from './components/LevelRoadmap';
import LevelView from './components/LevelView';
import MockExamView from './components/MockExamView';
import FlashcardsView from './components/FlashcardsView';
import UnitSummaryView from './components/UnitSummaryView';
import SearchModal from './components/SearchModal';
import BookmarksModal from './components/BookmarksModal';
import { LEVELS } from './data/syllabusData';
import { 
  getStoredProgress, 
  resetAllProgress, 
  getStoredBookmarks, 
  toggleBookmark 
} from './utils/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap' | 'mock' | 'flashcards' | 'summary'
  const [selectedLevelId, setSelectedLevelId] = useState(null);
  const [progress, setProgress] = useState(getStoredProgress());
  const [bookmarks, setBookmarks] = useState(getStoredBookmarks());
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Theme State
  const [theme, setTheme] = useState(() => {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mb_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mb_theme', 'light');
    }
  };

  // Keyboard shortcut Cmd/Ctrl + K for Search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleBookmark = (q) => {
    const updated = toggleBookmark(q);
    setBookmarks(updated);
  };

  const handleResetProgress = () => {
    const fresh = resetAllProgress();
    setProgress(fresh);
  };

  const handleLevelComplete = (lvlId, score, total) => {
    setProgress(getStoredProgress());
  };

  // Find active level object
  const activeLevel = LEVELS.find(l => l.id === selectedLevelId);

  const completedCount = Object.keys(progress.completedLevels || {}).length;
  const bookmarkedIds = bookmarks.map(b => b.id);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-indigo-500 selection:text-white">
      
      {/* Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        bookmarkCount={bookmarks.length}
        openBookmarks={() => setIsBookmarksOpen(true)}
        openSearch={() => setIsSearchOpen(true)}
        onResetProgress={handleResetProgress}
        completedCount={completedCount}
        totalLevels={LEVELS.length}
      />

      {/* Navigation Tabs (Visible when not deep inside a level) */}
      {!selectedLevelId && (
        <Navigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedLevelId && activeLevel ? (
          <LevelView
            level={activeLevel}
            onBack={() => setSelectedLevelId(null)}
            onNextLevel={() => {
              if (selectedLevelId < LEVELS.length) {
                setSelectedLevelId(selectedLevelId + 1);
              }
            }}
            onPrevLevel={() => {
              if (selectedLevelId > 1) {
                setSelectedLevelId(selectedLevelId - 1);
              }
            }}
            hasNext={selectedLevelId < LEVELS.length}
            hasPrev={selectedLevelId > 1}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onLevelComplete={handleLevelComplete}
          />
        ) : (
          <>
            {activeTab === 'roadmap' && (
              <LevelRoadmap
                onSelectLevel={(id) => setSelectedLevelId(id)}
                progress={progress}
                onOpenMock={() => setActiveTab('mock')}
                onOpenSummary={() => setActiveTab('summary')}
              />
            )}

            {activeTab === 'mock' && (
              <MockExamView
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={handleToggleBookmark}
                onOpenSummary={() => setActiveTab('summary')}
              />
            )}

            {activeTab === 'flashcards' && (
              <FlashcardsView />
            )}

            {activeTab === 'summary' && (
              <UnitSummaryView
                onSelectLevel={(id) => setSelectedLevelId(id)}
              />
            )}
          </>
        )}
      </main>

      {/* Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLevel={(lvlId) => {
          setSelectedLevelId(lvlId);
          setActiveTab('roadmap');
        }}
      />

      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500 dark:text-slate-400 space-y-1">
        <p>
          DU B.Com (Hons / Prog) Generic Elective Semester 5 • Money and Banking
        </p>
        <p className="text-[11px] text-slate-400 dark:text-slate-500">
          Curated from School of Open Learning (SOL) Reading Material, Baye & Jansen, Mishkin, and RBI Official Bulletins.
        </p>
      </footer>
    </div>
  );
}
