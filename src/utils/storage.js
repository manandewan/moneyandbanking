// LocalStorage management utility for Money and Banking Exam App

const STORAGE_KEY_PROGRESS = 'mb_quiz_progress_v1';
const STORAGE_KEY_BOOKMARKS = 'mb_quiz_bookmarks_v1';
const STORAGE_KEY_THEME = 'mb_theme';

export function getStoredProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (!raw) return { completedLevels: {}, levelScores: {}, mockAttempts: [] };
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load progress from localStorage', e);
    return { completedLevels: {}, levelScores: {}, mockAttempts: [] };
  }
}

export function saveLevelScore(levelId, score, total) {
  try {
    const current = getStoredProgress();
    current.completedLevels[levelId] = true;
    current.levelScores[levelId] = { score, total, percentage: Math.round((score / total) * 100), timestamp: Date.now() };
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(current));
    return current;
  } catch (e) {
    console.error('Failed to save score', e);
  }
}

export function saveMockAttempt(attemptData) {
  try {
    const current = getStoredProgress();
    current.mockAttempts = current.mockAttempts || [];
    current.mockAttempts.unshift({ ...attemptData, timestamp: Date.now() });
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(current));
    return current;
  } catch (e) {
    console.error('Failed to save mock attempt', e);
  }
}

export function resetAllProgress() {
  localStorage.removeItem(STORAGE_KEY_PROGRESS);
  return { completedLevels: {}, levelScores: {}, mockAttempts: [] };
}

export function getStoredBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function toggleBookmark(questionObj) {
  try {
    const bookmarks = getStoredBookmarks();
    const existsIndex = bookmarks.findIndex(b => b.id === questionObj.id);
    let updated;
    if (existsIndex >= 0) {
      updated = bookmarks.filter(b => b.id !== questionObj.id);
    } else {
      updated = [...bookmarks, questionObj];
    }
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return [];
  }
}
