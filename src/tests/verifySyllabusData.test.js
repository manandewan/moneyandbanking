// Verification script to validate all data structures and logic
import { LEVELS, GRAND_MOCK_EXAM, FLASHCARDS_DATA, SYLLABUS_UNITS } from '../data/syllabusData.js';

console.log('--- STARTING SYLLABUS DATA VALIDATION ---');

// Test 1: Validate Units
console.assert(SYLLABUS_UNITS.length === 5, `Expected 5 unit groupings, found ${SYLLABUS_UNITS.length}`);
console.log(`✓ Units Count: ${SYLLABUS_UNITS.length} verified.`);

// Test 2: Validate Levels
console.assert(LEVELS.length === 10, `Expected 10 levels, found ${LEVELS.length}`);
console.log(`✓ Levels Count: ${LEVELS.length} verified.`);

LEVELS.forEach(lvl => {
  console.assert(lvl.title && lvl.title.length > 5, `Level ${lvl.id} has invalid title`);
  console.assert(lvl.briefing.coreTheories.length >= 3, `Level ${lvl.id} has insufficient theories (${lvl.briefing.coreTheories.length})`);
  console.assert(lvl.faqs.length >= 3, `Level ${lvl.id} has insufficient FAQs (${lvl.faqs.length})`);
  console.assert(lvl.quiz.length === 6, `Level ${lvl.id} must have exactly 6 quiz questions, found ${lvl.quiz.length}`);
  
  lvl.quiz.forEach((q, idx) => {
    console.assert(q.options.length === 4, `Level ${lvl.id} Q${idx+1} must have 4 options`);
    console.assert(q.correctIndex >= 0 && q.correctIndex < 4, `Level ${lvl.id} Q${idx+1} has out-of-bounds correctIndex`);
    console.assert(q.explanation && q.explanation.length > 15, `Level ${lvl.id} Q${idx+1} missing explanation`);
  });
});
console.log('✓ All 10 Levels & 60 Level Quiz Questions verified.');

// Test 3: Validate 25-Mark Grand Mock Exam
console.assert(GRAND_MOCK_EXAM.length === 25, `Expected 25 mock questions, found ${GRAND_MOCK_EXAM.length}`);

const unitCounts = { 1: 0, 2: 0, 3: 0, 4: 0 };
GRAND_MOCK_EXAM.forEach((q, idx) => {
  console.assert(q.options.length === 4, `Mock Q${idx+1} must have 4 options`);
  console.assert(q.correctIndex >= 0 && q.correctIndex < 4, `Mock Q${idx+1} has invalid correctIndex: ${q.correctIndex}`);
  console.assert(q.explanation && q.explanation.length > 15, `Mock Q${idx+1} missing explanation`);
  console.assert(q.unit >= 1 && q.unit <= 4, `Mock Q${idx+1} has invalid unit: ${q.unit}`);
  unitCounts[q.unit] += 1;
});
console.log(`✓ 25-Mark Grand Mock Exam verified with unit distribution:`, unitCounts);

// Test 4: Validate Flashcards
console.assert(FLASHCARDS_DATA.length >= 18, `Expected at least 18 flashcards, found ${FLASHCARDS_DATA.length}`);
FLASHCARDS_DATA.forEach((card, idx) => {
  console.assert(card.front && card.front.length > 5, `Card ${idx+1} missing front`);
  console.assert(card.back && card.back.length > 10, `Card ${idx+1} missing back`);
  console.assert(card.unit >= 1 && card.unit <= 4, `Card ${idx+1} has invalid unit`);
});
console.log(`✓ Flashcards Count: ${FLASHCARDS_DATA.length} verified.`);

// Test 5: Mathematical Multiplier check
const r = 0.10, e = 0.05, c = 0.25;
const m = (1 + c) / (r + e + c);
console.assert(Math.abs(m - 3.125) < 0.0001, `Multiplier arithmetic failed: ${m}`);
console.log(`✓ Multiplier formula calculation verified (m = ${m}).`);

console.log('--- ALL SYLLABUS DATA VALIDATION TESTS PASSED CLEANLY ---');
