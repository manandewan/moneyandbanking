import React, { useState } from 'react';
import { BookOpen, Layers, Award, Printer, Download, Sparkles, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export default function UnitSummaryView({ onSelectLevel }) {
  const [activeUnitTab, setActiveUnitTab] = useState('u1'); // 'u1' | 'u2' | 'u3' | 'u4' | 'matrix'

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white border border-indigo-700/40 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unit-by-Unit Separation • Official DU SOL Textbook Primary Source</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Unit-Wise Master Revision Notes
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Thoroughly structured summaries clearly partitioned unit-by-unit. Covers exact terminology, theories, economist debates, committee dates, and institutional mechanisms required to ace tomorrow's 25-mark exam.
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition self-start sm:self-auto"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* Unit Selection Pills */}
        <div className="pt-2 flex flex-wrap gap-2 border-t border-indigo-800/60">
          {[
            { id: 'u1', label: 'Unit 1: Money & Aggregates' },
            { id: 'u2', label: 'Unit 2: Markets, Info & Reforms' },
            { id: 'u3', label: 'Unit 3: Interest Rates & Term Structure' },
            { id: 'u4', label: 'Unit 4: Central Banking & Policy' },
            { id: 'matrix', label: 'Cross-Unit Comparative Matrix' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveUnitTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeUnitTab === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-indigo-950/80 text-indigo-200 hover:bg-indigo-900 border border-indigo-800/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* UNIT 1 SUMMARY */}
      {/* ========================================================= */}
      {activeUnitTab === 'u1' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Unit 1 Comprehensive Summary
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Money, Motives of Demand, Supply Multipliers & RBI Aggregates
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Primary Reference: DU SOL Reading Material (Pages 3–17) & Baye & Jansen Ch 1 & 14
              </p>
            </div>
            <button
              onClick={() => onSelectLevel(1)}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>Practice Unit 1 Quizzes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Section 1: Concept & Couplet */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              1. Origin, Nature & Couplet of Functions
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Origin Debate:</strong> Spalding argued money emerged accidentally from barter difficulties; Geoffrey Crowther argued it was a conscious human invention required to transition from barter to accounting; Adam Smith viewed it as a rational discovery of a medium of exchange.
              </p>
              <p>
                • <strong>The Classic Couplet:</strong> <em>"Money is a matter of functions four: A medium, a measure, a standard, a store."</em>
              </p>
              <p>
                • <strong>Primary Functions:</strong> (i) <em>Medium of Exchange:</em> breaks transaction into distinct sale and purchase, eliminating the double coincidence of wants; (ii) <em>Measure of Value (Unit of Account):</em> yardstick for economic pricing.
              </p>
              <p>
                • <strong>Secondary Functions:</strong> (i) <em>Standard of Deferred Payments:</em> facilitates lending and future obligations; (ii) <em>Store of Value:</em> Keynes emphasized money acts as a bridge between present and future.
              </p>
              <p>
                • <strong>Legal Tender vs Optional Money:</strong> Legal tender is backed by law and cannot be legally refused (coins & currency notes). Cheques, drafts, and hundis are optional/credit money—widely accepted for convenience (~50% of money in India) but not legally binding.
              </p>
            </div>
          </div>

          {/* Section 2: Classical vs Keynesian Demand & Kalecki */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              2. Demand for Money: Classical Quantity Theory vs Keynesian Liquidity Preference
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Fisher's Identity & Theory:</strong> Equation of Exchange is $MV = PT$ (extended to $MV + M'V' = PT$ by incorporating bank deposits $M'$ and deposit velocity $V'$). Classical theory assumes $V$ and $T$ are constant in the short run under full employment, concluding that changes in money supply $M$ cause proportionate changes in the general price level $P$.
              </p>
              <p>
                • <strong>Michal Kalecki's Critique:</strong> Velocity of money $V$ is NOT constant. Kalecki showed $V$ fluctuates directly with the interest rate: at high interest rates, holding idle cash is costly, so people manage transactions with smaller cash balances, turning money over faster (higher $V$).
              </p>
              <p>
                • <strong>Keynesian Tripartite Motives:</strong> 
                (i) <em>Transaction Motive ($M_T = f(Y)$):</em> active balance for day-to-day spending; 
                (ii) <em>Precautionary Motive ($M_P = f(Y)$):</em> idle balance for unforeseen contingencies; 
                (iii) <em>Speculative Motive ($M_sp = f(r)$):</em> idle cash held to speculate on bond prices. Because bond prices fluctuate inversely with interest rates (P_bond = C / r), when interest rates are low, people hold cash (expecting rates to rise and bond prices to tumble).
              </p>
              <p>
                • <strong>Liquidity Trap:</strong> At the floor interest rate $r_min$, speculative demand becomes perfectly elastic (horizontal). People absorb all extra liquidity into cash, rendering expansionary monetary policy powerless to reduce rates further.
              </p>
            </div>
          </div>

          {/* Section 3: RBI Monetary Aggregates */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              3. Measurement of Money Supply: Old vs New RBI Aggregates
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Who is the 'Public'?</strong> Money supply includes money held by households, firms, and local bodies. It STRICTLY EXCLUDES cash held by producers/suppliers of money (vault cash of commercial banks and cash held by the Central/State Governments & RBI).
              </p>
              <p>
                • <strong>Old Aggregates (1977 Second Working Group):</strong><br />
                • M1 = Currency with Public + Demand Deposits + Other Deposits with RBI<br />
                • M2 = M1 + Post Office Savings Bank Deposits<br />
                • M3 (Aggregate Monetary Resources, AMR) = M1 + Net Time Deposits of Banks<br />
                • M4 = M3 + Total Post Office Deposits (excluding National Savings Certificates)
              </p>
              <p>
                • <strong>New Aggregates (1998 Y.V. Reddy Third Working Group):</strong><br />
                • NM1 = Currency with Public + Demand Deposits + Other Deposits with RBI<br />
                • NM2 = NM1 + Short-term Time Deposits of residents (contractual maturity up to 1 year)<br />
                • NM3 = NM2 + Long-term Time Deposits of residents + Call/Term borrowings from FIs<br />
                • <em>Liquidity Aggregates:</em> L1 = NM3 + All Post Office Deposits; L2 = L1 + Term Deposits & CDs of FIs (IDBI, EXIM, NABARD); L3 = L2 + Public Deposits of NBFCs.
              </p>
            </div>
          </div>

          {/* Section 4: Money Multiplier */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              4. High-Powered Money & Complete Multiplier Mechanics
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Monetary Base (MB = C + R):</strong> Currency in circulation with public + Total reserves of banks (required statutory reserves RR + excess reserves ER).
              </p>
              <p>
                • <strong>Complete Multiplier Formula:</strong> m = (1 + c) / (r + e + c)<br />
                Where c = C/D (currency-deposit ratio), r = RR/D (required reserve ratio), and e = ER/D (excess reserve ratio).<br />
                Total money stock: M = m × MB.
              </p>
              <p>
                • <strong>Behavioral Levers:</strong> (i) A rise in public preference for cash (higher c) reduces m due to currency leakage; (ii) A rise in market interest rates raises the opportunity cost of idle funds, lowering bank excess reserves e, which endogenously expands m; (iii) An open market purchase of securities by the RBI expands MB, increasing money supply by ΔM = m × ΔMB.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* UNIT 2 SUMMARY */}
      {/* ========================================================= */}
      {activeUnitTab === 'u2' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Unit 2 Comprehensive Summary
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Financial Markets, Asymmetric Information, Banking Evolution & Structural Reforms
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Primary Reference: DU SOL Reading Material (Pages 18–51, 75–94) & Mishkin Ch 15
              </p>
            </div>
            <button
              onClick={() => onSelectLevel(3)}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>Practice Unit 2 Quizzes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Section 1: Functions of Markets, Asymmetric Information & Pecking Order */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              1. Market Functions, Asymmetric Information & Myers-Majluf Pecking Order (Mishkin Ch 15)
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Economic Functions:</strong> Mobilize savings, allocate capital to highest risk-adjusted returns, risk sharing (diversifiable vs non-diversifiable risk), separation of ownership and management, and corporate governance through stock prices.
              </p>
              <p>
                • <strong>Adverse Selection (Pre-Contractual):</strong> Akerlof's Lemons problem (1970). When lenders cannot screen borrower quality, they charge an average interest rate, causing high-quality low-risk borrowers to exit and leaving bad credit risks behind. Mitigated by collateral, net worth, relationship banking, and credit rating agencies.
              </p>
              <p>
                • <strong>Moral Hazard (Post-Contractual):</strong> Once funds are disbursed, borrowers have incentives to gamble on high-risk projects ('pass-the-trash', as in the 2007-08 subprime crisis). In equity, managers pursue perks and empire-building rather than shareholder NPV (Principal-Agent conflict).
              </p>
              <p>
                • <strong>Why Debt Dominates Equity (Costly State Verification):</strong> Monitoring management is expensive. Debt contracts require a fixed payment and only necessitate costly auditing if the borrower defaults.
              </p>
              <p>
                • <strong>Stiglitz-Weiss Credit Rationing:</strong> Banks do not raise interest rates to clear excess demand because higher rates worsen adverse selection and moral hazard, reducing the bank's net return.
              </p>
              <p>
                • <strong>Myers-Majluf Pecking Order Theory:</strong> Due to asymmetric information, firms finance investments hierarchically: (1) Internal retained earnings first (zero information asymmetry), (2) Debt second (low verification cost), (3) External equity last (heavily penalized by markets as a signal of overvaluation).
              </p>
            </div>
          </div>

          {/* Section 2: Indian Money Market Structure & Instruments */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              2. Indian Money Market: Sub-Markets & Statutory Norms (Vaghul Committee 1987)
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Dualistic Structure:</strong> Organised sector (RBI, SBI, nationalized banks, RRBs, DFHI) vs Unorganised sector (indigenous bankers like Shroffs/Chettis and moneylenders).
              </p>
              <p>
                • <strong>Call Money Market:</strong> Interbank overnight/short notice market (up to 14 days). Highly sensitive indicator of market liquidity. SBI is a persistent lender.
              </p>
              <p>
                • <strong>Treasury Bills (T-Bills):</strong> 91, 182, and 364 days. Risk-free short-term sovereign paper sold at discount by the RBI. Ad-hoc bills were discontinued and replaced by regular auction-based bills.
              </p>
              <p>
                • <strong>Certificates of Deposit (CD - March 1989):</strong> Issued by scheduled commercial banks in multiples of Rs. 25 lakhs (minimum issue Rs. 1 crore). Maturity: 3 months to 1 year. Subject to reserve requirements. <em>Banks cannot grant loans against CDs nor buy their own CDs.</em>
              </p>
              <p>
                • <strong>Commercial Paper (CP - Jan 1990):</strong> Unsecured promissory notes issued by listed corporate borrowers. Eligibility: Net worth ≥ Rs. 10 cr, working capital limit ≥ Rs. 25 cr, P1+ credit rating from CRISIL, current ratio ≥ 1.33:1. Minimum issue Rs. 1 cr (in multiples of Rs. 25 lakhs); maturity 3 to 6 months; max issue 20% of working capital limits.
              </p>
              <p>
                • <strong>Vaghul Committee (1987) & DFHI:</strong> Discount and Finance House of India (DFHI) was established in April 1988 (paid-up capital Rs. 150 cr) as an apex market maker to provide liquidity to short-term instruments. Interest rate ceilings in the money market were abolished on May 1, 1989.
              </p>
            </div>
          </div>

          {/* Section 3: Banking Evolution, Pre-1991 Repression & Narasimham Committee I & II */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              3. Banking Structure, Pre-1991 Repression & Narasimham Committee Reforms (Rakesh Mohan & Partha Ray 2016)
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Pre-1991 Financial Repression:</strong> High statutory pre-emptions (CRR reached 15%, SLR reached 38.5% = combined pre-emption &gt;53% of bank deposits locked into financing government deficits at below-market interest rates), administered interest rates, directed priority sector credit (40%), and lack of modern financial markets.
              </p>
              <p>
                • <strong>Narasimham Committee I (Nov 1991):</strong> Addressed 1991 BOP crisis. Blueprint of first-generation reforms: 8% Capital Adequacy Ratio (CAR), objective 4-tier prudential norms (Standard, Substandard, Doubtful, Loss), reduction of CRR/SLR, suggested reducing directed credit to 10% (not accepted), setup of Debt Recovery Tribunals (DRT) and Asset Reconstruction Fund (ARF), and licensing of new private sector banks (HDFC, ICICI, Axis).
              </p>
              <p>
                • <strong>Narasimham Committee II (1998):</strong> Second-generation reforms: Tightened NPA recognition to 90 days (phased in by 2002 from 180 days), general provisioning on standard assets, branch licensing deregulation, marked-to-market G-Sec valuation (5% market risk weight), and Basel norm implementation.
              </p>
              <p>
                • <strong>NPA Waves Comparison:</strong> (i) <em>1997-2002 NPA Crisis:</em> Triggered by post-liberalization industrial shakeout, tariff cuts, and introduction of prudential norms (peaked at ~15%); resolved via CDR and SARFAESI Act 2002. (ii) <em>Post-2008 NPA Crisis:</em> Triggered by aggressive infrastructure lending, delays, and the Twin Balance Sheet problem (over-leveraged corporate balance sheets + stressed bank balance sheets); resolved via RBI Asset Quality Review (AQR 2015), Insolvency and Bankruptcy Code (IBC 2016), and Bad Bank (NARCL).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* UNIT 3 SUMMARY */}
      {/* ========================================================= */}
      {activeUnitTab === 'u3' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Unit 3 Comprehensive Summary
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Interest Rate Determination, Differentials, Term Structure & Indian Lending Benchmarks
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Primary Reference: DU SOL Reading Material (Pages 52–74), Baye & Jansen Ch 10 & RBI MCLR Report
              </p>
            </div>
            <button
              onClick={() => onSelectLevel(5)}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>Practice Unit 3 Quizzes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Section 1: Theories of Interest Determination */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              1. Three Competing Theories of Interest Rate Determination
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Classical Theory (Marshall, Fisher, Pigou):</strong> Real theory. Rate determined by intersection of Investment demand ($I$, downward sloping due to diminishing marginal productivity of capital) and Supply of Savings ($S$, upward sloping). <em>Criticism:</em> Indeterminate because savings depend on income level ($S = f(Y)$); assumes full employment; ignores monetary factors.
              </p>
              <p>
                • <strong>Loanable Funds Theory (Knut Wicksell, Ohlin, Myrdal, Lindahl):</strong> Neoclassical synthesis of real and monetary factors. Demand for Loanable Funds: LD = I (Investment) + H (Hoarding) + DS (Dissaving). Supply of Loanable Funds: LS = S (Savings) + DH (Dishoarding) + DI (Disinvestment) + BM (Bank Credit Creation). Equilibrium where LD = LS. <em>Improvement:</em> Integrates bank credit and hoarding. <em>Criticism:</em> Indeterminate without knowing income.
              </p>
              <p>
                • <strong>Keynesian Liquidity Preference Theory:</strong> Pure monetary phenomenon. Interest is the reward for parting with liquidity. Demand for money: $D_M = M_T(Y) + M_P(Y) + M_sp(r)$. Money supply $S_M$ is fixed by the central bank. <em>Indeterminacy:</em> Solved simultaneously by Hicks & Hansen in the IS-LM framework.
              </p>
            </div>
          </div>

          {/* Section 2: Sources of Differentials & Term Structure */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              2. Interest Rate Differentials & Term Structure Theories
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>7 Sources of Differentials:</strong> Default risk (pure rate on gilt-edged vs risk premium), loan duration, loan volume (fixed appraisal costs per rupee are higher on small loans), nature of collateral security, borrower net worth, market imperfections (local monopoly of rural moneylenders), and policy concessional schemes (DIR).
              </p>
              <p>
                • <strong>Yield Curve Shapes:</strong> Normal (upward sloping), Inverted (downward sloping: short rates &gt; long rates), and Flat. Duke Prof. Campbell Harvey proved inverted yield curves reliably precede economic recessions.
              </p>
              <p>
                • <strong>Term Structure Hypotheses:</strong><br />
                (i) <em>Pure Expectations Theory:</em> Long-term rate is the geometric average of expected future short rates: $(1 + i_2t)^2 = (1 + i_1t)(1 + i^e_t+1)$. Assumes bonds of different maturities are perfect substitutes.<br />
                (ii) <em>Segmented Markets Theory:</em> Maturity markets are completely separate; institutional preferences dictate rates. Assumes bonds are NOT substitutes.<br />
                (iii) <em>Preferred Habitat / Liquidity Premium (Modigliani & Sutch):</em> Synthesis! Long rate equals expected short rates plus a term liquidity premium $k_nt$ that grows with maturity. Bonds are imperfect substitutes.
              </p>
            </div>
          </div>

          {/* Section 3: Indian Lending Rate Benchmarks */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              3. Evolution of Indian Bank Lending Benchmarks (PLR → BPLR → Base Rate → MCLR → EBLR)
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>BPLR (2003):</strong> Failed because banks lent below BPLR to large corporates (&gt;60% sub-BPLR lending) while retail borrowers subsidized them with high rates.
              </p>
              <p>
                • <strong>Base Rate (2010):</strong> Calculated based on average historical cost of funds. Banks delayed passing on RBI repo rate cuts.
              </p>
              <p>
                • <strong>MCLR (April 2016):</strong> Marginal Cost of Funds based Lending Rate. Mandated by RBI with 4 formula components: (1) Marginal cost of funds (92% weight on incremental deposits), (2) Negative carry on CRR (zero return on cash held with RBI), (3) Operating costs, (4) Tenor premium.
              </p>
              <p>
                • <strong>EBLR (Oct 2019):</strong> External Benchmark Lending Rate. Because MCLR transmission remained slow and asymmetric, RBI mandated linking all new floating-rate personal/retail/MSME loans directly to external benchmarks (RBI Repo Rate or T-Bill yields).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* UNIT 4 SUMMARY */}
      {/* ========================================================= */}
      {activeUnitTab === 'u4' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Unit 4 Comprehensive Summary
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Central Banking, Monetary Policy Framework, Open Economy & Central Bank Digital Currency
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Primary Reference: DU SOL Reading Material (Pages 95–110), N. Jadhav, Baye & Jansen Ch 19, T. Rabi Sankar
              </p>
            </div>
            <button
              onClick={() => onSelectLevel(7)}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>Practice Unit 4 Quizzes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Section 1: Central Bank Functions & Balance Sheet */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              1. Central Bank Functions, Balance Sheet & Portfolio Theories
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>History & Definition:</strong> Bank of England established 1694. Brussels Conference 1920 recommended central banks worldwide. Hawtrey emphasized "lender of last resort"; Kisch & Elkins emphasized "maintenance of monetary standard stability."
              </p>
              <p>
                • <strong>Balance Sheet Architecture:</strong> <em>Assets:</em> Government Securities, Foreign Exchange Reserves, Loans to commercial banks, Gold coin & bullion. <em>Liabilities:</em> Currency in circulation (direct sovereign liability), Deposits of commercial banks (bank reserves), Government deposits.
              </p>
              <p>
                • <strong>Traditional Banking Liquidity Theories:</strong><br />
                (i) <em>Real Bills Doctrine:</em> Only short-term self-liquidating trade loans. Flaw: Pro-cyclical; fails in depressions.<br />
                (ii) <em>Shiftability Theory (H.G. Moulton):</em> Liquidity depends on holding assets saleable to other banks or central bank without loss.<br />
                (iii) <em>Anticipated Income Theory (H.V. Prochanow 1944):</em> Term loans (1-5 yrs) repaid in regular installments from borrower's anticipated future income stream.<br />
                (iv) <em>Liabilities Management Theory (1960s):</em> Banks acquire liquidity by issuing market liabilities (negotiable CDs, interbank borrowings).
              </p>
            </div>
          </div>

          {/* Section 2: Policy Taxonomy, Poole's Rule & Indian FIT */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              2. Monetary Policy Conduct, William Poole's Rule & Flexible Inflation Targeting
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Taxonomy:</strong> Instruments (Repo, CRR, OMO, SDF) → Operating Targets (Overnight Call Money Rate / WACR, bank reserves) → Intermediate Targets ($M_3$ growth) → Ultimate Goals (Price stability, employment, GDP growth).
              </p>
              <p>
                • <strong>William Poole's Analysis (1970):</strong> Target the <em>Money Supply</em> if shocks originate in the real sector / aggregate demand (IS shocks); target the <em>Interest Rate</em> if shocks originate in money demand (LM shocks).
              </p>
              <p>
                • <strong>Indian Flexible Inflation Targeting (FIT):</strong> Urjit Patel Committee (2014) led to RBI Act amendment (May 2016). Target is headline CPI inflation of 4% with a tolerance band of ± 2% (2% to 6%). Failure is defined as remaining outside the band for 3 consecutive quarters.
              </p>
              <p>
                • <strong>Monetary Policy Committee (MPC):</strong> 6 members (3 RBI including Governor with casting vote, 3 external experts). Meets bi-monthly.
              </p>
              <p>
                • <strong>LAF Corridor:</strong> Repo Rate (benchmark) with SDF as uncollateralized floor (-25 bps) and MSF as penal ceiling (+25 bps).
              </p>
            </div>
          </div>

          {/* Section 3: Open Economy & CBDC */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-300">
              3. Open Economy Transmission & Central Bank Digital Currency (CBDC)
            </h4>
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>Open Economy Channels:</strong> Domestic policy rate cuts transmit via: (i) Interest rate channel (stimulates domestic durable spending), and (ii) Exchange rate channel (capital outflow → currency depreciation → cheaper exports and costlier imports → net exports expand aggregate demand).
              </p>
              <p>
                • <strong>CBDC (Digital Rupee):</strong> Sovereign legal tender in digital form issued by the RBI; liability on RBI balance sheet; exchangeable 1:1 with physical cash.
              </p>
              <p>
                • <strong>Wholesale (CBDC-W) vs Retail (CBDC-R):</strong> CBDC-W is for interbank secondary G-Sec settlements; CBDC-R is for public daily cash transactions via bank digital wallets (two-tier distribution model).
              </p>
              <p>
                • <strong>T. Rabi Sankar (2021) Insights:</strong> Motivations: drastically cut cash management costs, enhance cross-border speed, facilitate offline financial inclusion, and defend monetary sovereignty against volatile private crypto. Designed as non-interest-bearing to prevent bank disintermediation.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* COMPARATIVE MATRIX & SYNTHESIS */}
      {/* ========================================================= */}
      {activeUnitTab === 'matrix' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              High-Yield Synthesis Matrices
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Cross-Unit Comparative Cheat-Sheet
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Direct comparisons of overlapping concepts across Units 1 to 4 commonly targeted in objective questions.
            </p>
          </div>

          {/* Matrix 1: Interest Rate Theories */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm overflow-x-auto">
            <h4 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 flex items-center justify-between">
              <span>Table 1: Three Core Theories of Interest Rate Determination</span>
              <span className="text-[10px] font-normal text-slate-400 sm:hidden">Swipe →</span>
            </h4>
            <table className="min-w-[640px] w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-2.5">Theory</th>
                  <th className="p-2.5">Nature</th>
                  <th className="p-2.5">Key Economists</th>
                  <th className="p-2.5">Demand Side</th>
                  <th className="p-2.5">Supply Side</th>
                  <th className="p-2.5">Major Limitation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-2.5 font-bold">Classical</td>
                  <td className="p-2.5">Real</td>
                  <td className="p-2.5">Marshall, Fisher, Pigou</td>
                  <td className="p-2.5">Investment ($I$, diminishing returns)</td>
                  <td className="p-2.5">Savings ($S$)</td>
                  <td className="p-2.5">Indeterminate; ignores money & income feedback</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold">Loanable Funds</td>
                  <td className="p-2.5">Neoclassical Synthesis</td>
                  <td className="p-2.5">Wicksell, Ohlin, Lindahl, Robertson</td>
                  <td className="p-2.5">$LD = I + H + DS$</td>
                  <td className="p-2.5">$LS = S + DH + DI + BM$</td>
                  <td className="p-2.5">Indeterminate without national income level</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold">Liquidity Preference</td>
                  <td className="p-2.5">Pure Monetary</td>
                  <td className="p-2.5">J.M. Keynes</td>
                  <td className="p-2.5">$D_M = M_T + M_P + M_sp$</td>
                  <td className="p-2.5">$S_M$ (Central bank exogenous)</td>
                  <td className="p-2.5">Indeterminate without income; solved by IS-LM</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Matrix 2: Term Structure Theories */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm overflow-x-auto">
            <h4 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 flex items-center justify-between">
              <span>Table 2: Theories of the Term Structure of Interest Rates</span>
              <span className="text-[10px] font-normal text-slate-400 sm:hidden">Swipe →</span>
            </h4>
            <table className="min-w-[580px] w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-2.5">Theory</th>
                  <th className="p-2.5">Substitutability Assumption</th>
                  <th className="p-2.5">Explains Co-movement?</th>
                  <th className="p-2.5">Explains Upward Slope?</th>
                  <th className="p-2.5">Core Formula / Mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-2.5 font-bold">Pure Expectations</td>
                  <td className="p-2.5">Perfect Substitutes</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Yes</td>
                  <td className="p-2.5 text-rose-500 font-bold">No (requires rising rates)</td>
                  <td className="p-2.5">$(1+i_2)^2 = (1+i_1)(1+i^e_2)$</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold">Segmented Markets</td>
                  <td className="p-2.5">Zero Substitution</td>
                  <td className="p-2.5 text-rose-500 font-bold">No</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Yes (higher short demand)</td>
                  <td className="p-2.5">Independent supply-demand in each maturity</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold">Preferred Habitat</td>
                  <td className="p-2.5">Imperfect Substitutes</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Yes</td>
                  <td className="p-2.5 text-emerald-600 font-bold">Yes (liquidity premium)</td>
                  <td className="p-2.5">Expected short rate average + Term premium $k_nt$</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Matrix 3: Evolution of Indian Lending Rates */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm overflow-x-auto">
            <h4 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 flex items-center justify-between">
              <span>Table 3: Chronological Evolution of Bank Lending Benchmarks in India</span>
              <span className="text-[10px] font-normal text-slate-400 sm:hidden">Swipe →</span>
            </h4>
            <table className="min-w-[540px] w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-2.5">System</th>
                  <th className="p-2.5">Introduced</th>
                  <th className="p-2.5">Pricing Methodology</th>
                  <th className="p-2.5">Critical Weakness / Flaw</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-2.5 font-bold">BPLR</td>
                  <td className="p-2.5">2003</td>
                  <td className="p-2.5">Benchmark Prime Lending Rate</td>
                  <td className="p-2.5">&gt;60% lending occurred below BPLR to large corporates</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold">Base Rate</td>
                  <td className="p-2.5">July 2010</td>
                  <td className="p-2.5">Historical average cost of deposits</td>
                  <td className="p-2.5">Delayed transmission; banks protected legacy deposit margins</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold">MCLR</td>
                  <td className="p-2.5">April 2016</td>
                  <td className="p-2.5">4 marginal components (Marginal cost, Negative carry on CRR, Op costs, Tenor)</td>
                  <td className="p-2.5">Asymmetric transmission; banks tweaked internal spreads</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold">EBLR</td>
                  <td className="p-2.5">Oct 2019</td>
                  <td className="p-2.5">External market benchmark (RBI Repo Rate, 91/182-day T-Bill)</td>
                  <td className="p-2.5">Current regime: fast, transparent, zero discretion for retail/MSME</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
