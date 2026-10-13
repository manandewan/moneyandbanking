# DU B.Com (GE) Sem 5 | Money & Banking 25-Mark MCQ Quiz Master

A high-yield examination preparation web application built specifically for Delhi University B.Com (Hons / Prog) Generic Elective Semester 5 students to ace their **25-mark Objective/MCQ examination**.

---

## 📚 Primary Syllabus Sources & Reference Materials
1. **School of Open Learning (SOL) Reading Material**: Included directly in this folder as [`DU_SOL_Money_and_Banking_Reading_Material.pdf`](./DU_SOL_Money_and_Banking_Reading_Material.pdf) (110 pages).
2. **Baye & Jansen**: *Money, Banking, and Financial Markets* (Chapters 1, 10, 14, 19).
3. **Mishkin & Eakins**: *Financial Markets and Institutions* (Chapter 15).
4. **RBI Reports & Committees**:
   - Sukhamoy Chakravarty Committee (1985)
   - N. Vaghul Working Group (1987) & DFHI (1988)
   - M. Narasimham Committee I (1991) & II (1998)
   - Y.V. Reddy Third Working Group on Money Supply (1998: NM1-NM3, L1-L3)
   - Urjit Patel Committee on Monetary Policy Framework (2014)
   - RBI Internal Study Group on MCLR System (2017)
   - Keynote Address on Central Bank Digital Currency (CBDC) by Deputy Governor T. Rabi Sankar (2021)
5. **Delhi University Examination Papers (PYQs)**:
   - NEP Semester 5 (Dec 2024 - Jan 2025, Paper Code 3153)
   - CBCS Semester 3 / 5 (Paper Code 3674 / 12275303)

---

## 🚀 How to Run the Web App

In this folder, run:

```bash
npm run dev
```

Open your browser at:
`http://localhost:3000` (or the port Vite prints in your terminal).

To create a static production build:
```bash
npm run build
npm run preview
```

---

## 🎯 Key Features & Modes

### 1. 10-Level Unit-by-Unit Progression
- **Unit 1 (Levels 1 & 2):** Money Concepts, Motives of Demand, Money Multiplier ($m = \frac{1+c}{r+e+c}$) & RBI Aggregates ($M_0-M_3$ vs $NM_1-NM_3$, $L_1-L_3$).
- **Unit 2 (Levels 3 & 4):** Asymmetric Information (Akerlof's Lemons, Moral Hazard, Costly State Verification, Credit Rationing) & Indian Money/Banking Market Evolution (DFHI, CDs, CPs, T-Bills, Narasimham I & II).
- **Unit 3 (Levels 5 & 6):** Interest Rate Theories (Classical $S/I$, Loanable Funds $LD/LS$, Keynesian Liquidity Preference), Differentials & Term Structure (Expectations, Segmented Markets, Preferred Habitat, BPLR $\to$ Base Rate $\to$ MCLR $\to$ EBLR).
- **Unit 4 (Levels 7, 8 & 9):** Central Banking Balance Sheet, Poole's Rule, Flexible Inflation Targeting ($4\% \pm 2\%$), MPC, LAF Corridor (Repo, SDF, MSF), Open Economy Transmission & Central Bank Digital Currency (CBDC-R vs CBDC-W).
- **Level 10:** Grand Unit-Wise Master Synthesis & Cross-Unit Integrative Challenge.

Each level contains:
- **Crash Briefing:** High-yield theory summaries focusing on economists, models, and DU exam traps.
- **Tricky FAQs:** Explaining the subtle "Why" and "How" questions favored by DU examiners.
- **Level Quiz:** 6 targeted conceptual MCQs with immediate feedback, explaining both why the right option is correct and why the distractors are wrong.

### 2. 25-Mark Untimed Grand Mock Exam
- Exactly 25 exam-standard MCQs proportionally distributed across Units 1 to 4 (6 to 7 questions per unit).
- **Instant feedback per question:** Selecting any option immediately explains the answer.
- **Diagnostic Scorecard:** Provides overall score out of 25, percentage, and a unit-by-unit breakdown showing your exact strengths and weaknesses.
- **Retry Missed Questions button:** Lets you drill the questions you got wrong without starting from scratch.

### 3. Unit-Wise Master Summary & Comparative Matrices
- Partitioned distinctly into Unit 1, Unit 2, Unit 3, and Unit 4.
- Includes comprehensive cross-unit comparative tables (Interest theories compared, Yield curve theories compared, Lending rate benchmark evolution compared).
- One-click print/PDF export for offline revision.

### 4. High-Yield Flashcards Deck
- 19 interactive flippable cards covering named theories, economists, formulas, and RBI committees.
- Filterable by Unit 1, 2, 3, or 4.
- Keyboard support (Space to flip, Arrow keys to navigate).

### 5. Study Aids & Persistence
- **Global Instant Search (`Cmd/Ctrl + K`):** Instant search across all 10 levels, FAQs, questions, and flashcards.
- **Bookmarking:** Save tricky questions during quizzes and review them anytime in the Bookmarks Drawer.
- **Dark / Light Theme:** Modern sleek theme toggle with FOUC prevention.
- **Local Storage:** Automatically saves your completed levels, scores, mock attempts, and bookmarks.
