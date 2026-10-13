// DU B.Com (GE) Sem 5 Money and Banking Master Data File
// Thoroughly overhauled based on:
// 1. Official DU Syllabus Readings: Baye & Jansen (Ch 1, 10, 14, 19), Mishkin & Eakins (Ch 15),
//    RBI 1998 Y.V. Reddy Working Group, Rakesh Mohan & Partha Ray (2016), RBI 2017 MCLR Study Group,
//    RBI Functions & Working (Ch 1-3), N. Jadhav (Ch 2.3.3), and T. Rabi Sankar CBDC Address (2021).
// 2. Primary Source Book: DU School of Open Learning (SOL) Reading Material (110 pages).
// 3. Delhi University Past Year Papers (PYQs) from 2024-2025 NEP & CBCS.

export const SYLLABUS_UNITS = [
  {
    id: "unit-1",
    unitNumber: 1,
    title: "Unit 1: Money, Demand, Supply Multipliers & RBI Aggregates",
    subtitle: "Origin of Money, Quantity Theory, Kalecki's Velocity Critique, Keynesian Motives, Multiplier Math & 1998 Aggregates",
    sourceReadings: "SOL pp. 3-17; Baye & Jansen Ch 1 & 14; RBI 1998 Third Working Group Report II",
    badge: "Unit 1",
    levelIds: [1, 2]
  },
  {
    id: "unit-2",
    unitNumber: 2,
    title: "Unit 2: Financial Markets, Asymmetric Information & Indian Financial Sector",
    subtitle: "Lemons Problem, Costly State Verification, Restrictive Covenants, Credit Rationing, Pre-1991 Repression & Narasimham I/II",
    sourceReadings: "SOL pp. 18-51, 75-94; Mishkin Ch 15; Rakesh Mohan & Partha Ray (2016); Vaghul Committee (1987)",
    badge: "Unit 2",
    levelIds: [3, 4]
  },
  {
    id: "unit-3",
    unitNumber: 3,
    title: "Unit 3: Interest Rates, Differentials, Term Structure & Indian Benchmarks",
    subtitle: "Classical vs Loanable Funds vs Liquidity Preference, Indeterminacy & IS-LM, Yield Curves, Pure Expectations Math, Base Rate to MCLR & EBLR",
    sourceReadings: "SOL pp. 52-74; Baye & Jansen Ch 10; RBI 2017 Internal Study Group on MCLR",
    badge: "Unit 3",
    levelIds: [5, 6]
  },
  {
    id: "unit-4",
    unitNumber: 4,
    title: "Unit 4: Central Banking, Monetary Policy Framework & Digital Rupee (CBDC)",
    subtitle: "Balance Sheet & 4 Liquidity Theories, Poole's Instrument Choice, FIT (4%±2%), LAF (Repo, SDF, MSF), Open Economy & Rabi Sankar (2021)",
    sourceReadings: "SOL pp. 95-110; RBI Functions & Working Ch 1-3; N. Jadhav Ch 2.3.3; Baye & Jansen Ch 19; T. Rabi Sankar (2021)",
    badge: "Unit 4",
    levelIds: [7, 8, 9]
  },
  {
    id: "unit-summary",
    unitNumber: 5,
    title: "Unit-Wise Grand Master Summary & Synthesis",
    subtitle: "Unit-by-Unit Examination Matrix, Cross-Unit Linkages & Final Integrative Challenge",
    sourceReadings: "Comprehensive DU Exam Synthesis of all 4 Units & Official Readings",
    badge: "Master",
    levelIds: [10]
  }
];

export const LEVELS = [
  // ==========================================
  // LEVEL 1: UNIT 1A
  // ==========================================
  {
    id: 1,
    unitId: "unit-1",
    unitNumber: 1,
    levelNumber: 1,
    title: "Money Concepts, Demand Theories & The Velocity Debate",
    subtitle: "Evolution of Money, Legal Tender vs Optional Money, Fisher's Quantity Theory, Kalecki's Velocity Critique & Keynesian Speculative Motive",
    durationEstimate: "8 min",
    briefing: {
      coreTheories: [
        {
          name: "Origin & Legal Classification of Money",
          detail: "• Origin Theories: Spalding argued money evolved accidentally from barter hardships. Geoffrey Crowther argued money was a deliberate invention requiring conscious human reasoning to transition from barter to accounting. Adam Smith argued it arose rationally as a medium of exchange.\n• The Classic Couplet: 'Money is a matter of functions four: A medium, a measure, a standard, a store.'\n• Legal Tender vs Optional / Non-Legal Money: Legal tender is backed by sovereign law and cannot be legally refused in settlement of debt (currency notes and coins). Bank money (cheques, bank drafts, hundis, bills of exchange) is optional money: generally accepted on trust and convenience (~50% of money supply in India), but creditors have a legal right to demand legal tender."
        },
        {
          name: "Fisher's Quantity Theory of Money (Equation of Exchange)",
          detail: "• Basic Equation: MV = PT. Extended Equation: MV + M'V' = PT, where M' = volume of bank demand deposits and V' = velocity of bank deposits.\n• Classical Assumptions: Velocity of circulation (V) and physical transactions (T) are constant in the short run under full employment.\n• Conclusion: General price level P varies directly and proportionately with the quantity of money in circulation M."
        },
        {
          name: "Michal Kalecki's Critique of Constant Velocity",
          detail: "• Famous economist Michal Kalecki proved that the velocity of money V is NOT constant over short periods.\n• Kalecki showed that V fluctuates directly with the interest rate: when interest rates are high, holding idle cash is costly (high opportunity cost), prompting people to manage transactions with smaller cash balances by turning money over more frequently (raising V). When interest rates fall, people hold more idle cash, reducing V. Hence, Fisher's constant V assumption breaks down."
        },
        {
          name: "Keynesian Tripartite Motives & The Liquidity Trap",
          detail: "• 1. Transaction Motive (MT = f(Y)): Active balances held to bridge the time lag between receipt of income and expenditure.\n• 2. Precautionary Motive (MP = f(Y)): Idle balances held to meet unexpected emergencies and contingencies (illness, accidents).\n• 3. Speculative Motive (MSp = f(r)): Idle cash held to make capital gains from anticipated fluctuations in bond prices. Because bond prices vary inversely with interest rates (P_bond = C / r), when interest rates are low and bond prices are high, wealth-holders expect interest rates to rise and bond prices to tumble; hence they hold cash.\n• Liquidity Trap: At the floor interest rate r_min, the speculative demand curve becomes perfectly horizontal (infinitely interest-elastic). All newly injected money is absorbed into idle cash balances, rendering monetary policy completely ineffective."
        }
      ],
      examTraps: [
        "EXAM TRAP: Money in bank vaults and government/central bank cash is STRICTLY EXCLUDED from money supply measures because they represent money producers/suppliers, not users/holders.",
        "EXAM TRAP: Fisher's Quantity Theory assumes money performs ONLY ONE function: medium of exchange. It ignores money's role as a store of value (which Keynes reintroduced via the speculative motive).",
        "EXAM TRAP: A cheque is NOT legal tender; a merchant can lawfully refuse a cheque and insist on currency notes or coins."
      ]
    },
    faqs: [
      {
        question: "Why did Michal Kalecki argue that money velocity (V) is a function of the interest rate?",
        answer: "When market interest rates rise, the opportunity cost of holding non-interest-bearing cash increases. Wealth-holders minimize cash balances and turn over each rupee more rapidly to finance transactions, driving up velocity V. Conversely, at low interest rates, individuals willingly hold idle cash, causing V to decline."
      },
      {
        question: "Why is speculative demand for money inversely related to market interest rates in Keynesian theory?",
        answer: "Because bond prices and market interest rates move in opposite directions (P = C / r). When interest rates are low, bond prices are at their peak. Rational investors expect interest rates to rise in the future and bond prices to crash. To prevent capital losses on bond holdings, investors sell bonds and hold liquid cash."
      },
      {
        question: "What is the crucial difference between full-bodied standard coins and token coins?",
        answer: "Standard full-bodied coins have an intrinsic metallic value exactly equal to their face value (e.g. historical gold sovereigns under the gold standard). Token coins have an intrinsic metallic worth much lower than their stamped face value (e.g. current 1, 2, 5, and 10 rupee coins in India)."
      }
    ],
    quiz: [
      {
        id: "q1_1",
        question: "According to the Reserve Bank of India, which of the following is STRICTLY EXCLUDED when compiling the money supply in India?",
        options: [
          "Currency notes held by the general public",
          "Cash reserves held in the vaults of commercial banks",
          "Net demand deposits of scheduled commercial banks",
          "Other deposits of quasi-governmental institutions held with the RBI"
        ],
        correctIndex: 1,
        explanation: "Correct: Vault cash of commercial banks and cash held by the government/RBI are excluded because they represent suppliers of money. Only money held by the public (users) is counted."
      },
      {
        id: "q1_2",
        question: "Which economist criticized Irving Fisher's Quantity Theory by proving that money velocity (V) is not constant, but fluctuates directly with the market interest rate?",
        options: [
          "Irving Fisher",
          "Michal Kalecki",
          "Adam Smith",
          "Geoffrey Crowther"
        ],
        correctIndex: 1,
        explanation: "Correct: As explicitly highlighted on page 15 of the SOL text, Michal Kalecki demonstrated that high interest rates increase the opportunity cost of holding idle cash, speeding up money turnover and raising V."
      },
      {
        id: "q1_3",
        question: "In Fisher's extended equation of exchange MV + M'V' = PT, the term M' represents:",
        options: [
          "The velocity of currency in circulation",
          "Total physical output produced in the economy",
          "The volume of bank demand deposits (credit money)",
          "High-powered monetary base held by the central bank"
        ],
        correctIndex: 2,
        explanation: "Correct: M' represents bank demand deposits or credit money, while V' represents the velocity of circulation of these bank deposits."
      },
      {
        id: "q1_4",
        question: "Keynes formulated the speculative demand for money as an inverse function of the rate of interest because:",
        options: [
          "Higher interest rates automatically reduce transaction volume",
          "Bond prices and market interest rates move in opposite directions",
          "Commercial banks refuse to issue demand deposits at low interest rates",
          "Individuals convert all their physical assets into gold when interest rates rise"
        ],
        correctIndex: 1,
        explanation: "Correct: Bond yields are inversely related to bond market prices (P = C/r). When interest rates are low, bond prices are high, so investors anticipate falling bond prices and hold cash to avoid capital losses."
      },
      {
        id: "q1_5",
        question: "In the Keynesian 'Liquidity Trap', what happens to the speculative demand for money curve at the floor rate of interest (r_min)?",
        options: [
          "It becomes perfectly vertical and completely interest-inelastic",
          "It shifts upward with a positive unitary elasticity",
          "It becomes perfectly horizontal and infinitely interest-elastic",
          "It becomes a rectangular hyperbola identical to the transaction demand curve"
        ],
        correctIndex: 2,
        explanation: "Correct: At the liquidity trap floor r_min, people expect bond prices will only fall, so they hold all additional liquidity in cash, making speculative demand perfectly elastic."
      },
      {
        id: "q1_6",
        question: "Why is a bank cheque classified as 'optional money' rather than 'legal tender' in the Indian financial system?",
        options: [
          "Because cheques can only be written by registered corporate entities",
          "Because cheques are not backed by statutory legal tender law and a creditor can lawfully refuse to accept them",
          "Because cheques cannot be cleared through the RBI clearing house",
          "Because cheques do not represent bank demand deposits"
        ],
        correctIndex: 1,
        explanation: "Correct: Legal tender is backed by statute and cannot be legally refused. Cheques are credit instruments accepted on trust and mutual convenience; a payee has the legal right to demand currency notes."
      }
    ]
  },

  // ==========================================
  // LEVEL 2: UNIT 1B
  // ==========================================
  {
    id: 2,
    unitId: "unit-1",
    unitNumber: 1,
    levelNumber: 2,
    title: "RBI Monetary Aggregates & Money Multiplier Mechanics",
    subtitle: "Old M1-M4 vs 1998 Y.V. Reddy Aggregates (NM1-NM3, L1-L3), Complete Multiplier Derivation m=(1+c)/(r+e+c) & OMO Shocks",
    durationEstimate: "9 min",
    briefing: {
      coreTheories: [
        {
          name: "Old RBI Aggregates (1977 Second Working Group)",
          detail: "• M1 (Narrow Money) = Currency with Public (C) + Demand Deposits with Banking System (DD) + Other Deposits with RBI (OD).\n• M2 = M1 + Post Office Savings Bank Deposits.\n• M3 (Broad Money / Aggregate Monetary Resources, AMR) = M1 + Net Time Deposits of commercial banks.\n• M4 = M3 + Total Post Office Deposits (excluding National Savings Certificates, NSC).\nNote: Net bank deposits exclude inter-bank deposits to prevent double counting."
        },
        {
          name: "1998 Y.V. Reddy Third Working Group on Money Supply",
          detail: "Why revised? Financial liberalization, opening of capital markets, emergence of FIs and NBFCs, and differentiation between short-term vs long-term deposits.\n• NM1 = Currency with Public + Demand Deposits with Banks + Other Deposits with RBI.\n• NM2 = NM1 + Short-term Time Deposits of residents (contractual maturity up to 1 year).\n• NM3 = NM2 + Long-term Time Deposits of residents (maturity > 1 year) + Call/Term borrowings from Financial Institutions.\n• Liquidity Aggregates: L1 = NM3 + All Post Office Deposits (excl. NSC); L2 = L1 + Term Deposits & CDs of Financial Institutions (IDBI, EXIM, NABARD, SIDBI, NHB); L3 = L2 + Public Deposits with NBFCs."
        },
        {
          name: "Complete Money Multiplier Formula Derivation (Baye & Jansen Ch 14)",
          detail: "• Monetary Base (High-Powered Money): MB = C + R, where C = currency in circulation and R = total bank reserves (Required Reserves RR + Excess Reserves ER).\n• Money Supply: M = C + D.\n• Divide by deposits D: Let c = C/D (currency-to-deposit ratio), r = RR/D (required reserve ratio), and e = ER/D (excess reserve ratio).\n• Then M = (1 + c) * D, and MB = (c + r + e) * D.\n• Complete Money Multiplier: m = M / MB = (1 + c) / (r + e + c).\n• Total Money Supply: M = m * MB. Since r + e < 1, the multiplier m > 1."
        },
        {
          name: "Determinants of Multiplier & Open Market Operations (OMO)",
          detail: "• Currency-Deposit Ratio (c): Decided by the non-bank public. A rise in c causes cash leakage from the banking system, reducing secondary credit creation and lowering m.\n• Excess Reserve Ratio (e): Decided by commercial banks. When market interest rates rise, opportunity cost of holding idle cash rises, banks reduce e, and m expands endogenously.\n• Required Reserve Ratio (r): Dictated by the RBI (CRR). Higher r reduces m.\n• OMO Shock Math: When RBI purchases Rs. 1,00,000 of government bonds, MB rises by Rs. 1,00,000. Total money supply changes by ΔM = m * ΔMB. Deposit change ΔD = ΔMB / (c + r + e). Currency change ΔC = c * ΔD."
        }
      ],
      examTraps: [
        "EXAM TRAP: An increase in public preference for physical currency (higher c) REDUCES the money multiplier m. Cash held in hand cannot be multiplied through fractional reserve banking.",
        "EXAM TRAP: L3 includes public deposits of NBFCs, but NOT their bank borrowings. L2 includes term deposits and CDs of development financial institutions (FIs)."
      ]
    },
    faqs: [
      {
        question: "Why was the Third Working Group (1998) needed to create NM1-NM3 and L1-L3?",
        answer: "The old 1977 framework lumped all time deposits into M3 regardless of maturity and ignored non-bank financial intermediaries. With financial deregulation, short-term fixed deposits (<1 yr) behaved like near-money, and NBFCs/FIs grew into massive deposit-taking entities. NM2 separated short-term deposits, while L1-L3 created liquidity measures encompassing post offices, FIs, and NBFCs."
      },
      {
        question: "Why is the complete money multiplier (1+c)/(r+e+c) smaller than the simple deposit multiplier (1/r)?",
        answer: "The simple deposit multiplier (1/r) assumes zero cash leakage into public hands (c = 0) and zero excess reserves held by banks (e = 0). In reality, whenever banks create credit, depositors withdraw a fraction as physical currency (c > 0) and banks retain excess reserves for clearing (e > 0), absorbing high-powered money and lowering m."
      },
      {
        question: "If r = 10%, e = 5%, and c = 25%, what happens to total money supply if RBI sells Rs. 50,000 of government securities?",
        answer: "Multiplier m = (1 + 0.25) / (0.10 + 0.05 + 0.25) = 1.25 / 0.40 = 3.125. An open market sale contracts the monetary base by Rs. 50,000. Total money supply contracts by ΔM = 3.125 * (-50,000) = -Rs. 1,56,250."
      }
    ],
    quiz: [
      {
        id: "q2_1",
        question: "Under the 1998 Y.V. Reddy Third Working Group on Money Supply, which liquidity aggregate includes public deposits with Non-Banking Financial Companies (NBFCs)?",
        options: [
          "NM3",
          "L1",
          "L2",
          "L3"
        ],
        correctIndex: 3,
        explanation: "Correct: L3 = L2 + Public deposits of NBFCs. L1 covers postal deposits and NM3, while L2 incorporates term deposits/CDs of financial institutions."
      },
      {
        id: "q2_2",
        question: "If required reserve ratio r = 0.10, excess reserve ratio e = 0.05, and currency-deposit ratio c = 0.25, the complete money multiplier (m) is:",
        options: [
          "2.50",
          "3.125",
          "4.00",
          "6.67"
        ],
        correctIndex: 1,
        explanation: "Correct: m = (1 + c) / (r + e + c) = (1 + 0.25) / (0.10 + 0.05 + 0.25) = 1.25 / 0.40 = 3.125."
      },
      {
        id: "q2_3",
        question: "If depositors lose confidence in the banking system and begin holding more physical cash relative to deposits (i.e. 'c' increases), what is the direct impact on the money multiplier 'm'?",
        options: [
          "The money multiplier increases because currency is legal tender",
          "The money multiplier decreases due to currency drain from bank fractional reserve creation",
          "The money multiplier remains unchanged because the monetary base is fixed",
          "The money multiplier doubles because excess reserves drop to zero"
        ],
        correctIndex: 1,
        explanation: "Correct: Higher c represents a currency drain out of the banking sector, shrinking bank reserves available for multi-stage credit creation and reducing m."
      },
      {
        id: "q2_4",
        question: "In the 1998 monetary aggregates framework, NM2 differs from NM1 by explicitly adding:",
        options: [
          "Long-term time deposits of residents with maturity over 5 years",
          "Short-term time deposits of residents with contractual maturity up to 1 year",
          "Total deposits with the Post Office Savings Banks",
          "Public deposits held with Non-Banking Financial Companies"
        ],
        correctIndex: 1,
        explanation: "Correct: NM2 = NM1 + Short-term time deposits of residents with contractual maturity up to 1 year."
      },
      {
        id: "q2_5",
        question: "When market interest rates increase, commercial banks tend to reduce their excess reserve ratio 'e' because:",
        options: [
          "The opportunity cost of holding idle non-earning reserves has increased",
          "The RBI automatically raises the Cash Reserve Ratio to 25%",
          "Currency with the public expands to equal the monetary base",
          "The central bank discount rate falls to zero"
        ],
        correctIndex: 0,
        explanation: "Correct: Excess reserves earn zero or negligible return. When market lending rates rise, the opportunity cost of holding idle funds climbs, inducing banks to lend them out (lowering e and increasing m)."
      },
      {
        id: "q2_6",
        question: "If the RBI purchases Rs. 1,00,000 of government securities in an OMO when r = 10%, e = 10%, and c = 25%, the ultimate expansion in the money supply is:",
        options: [
          "Rs. 1,25,000",
          "Rs. 2,50,000",
          "Rs. 2,77,778",
          "Rs. 5,00,000"
        ],
        correctIndex: 2,
        explanation: "Correct: Multiplier m = (1 + 0.25) / (0.10 + 0.10 + 0.25) = 1.25 / 0.45 = 2.7778. Change in money supply ΔM = 2.7778 * 1,00,000 = Rs. 2,77,778."
      }
    ]
  },

  // ==========================================
  // LEVEL 3: UNIT 2A
  // ==========================================
  {
    id: 3,
    unitId: "unit-2",
    unitNumber: 2,
    levelNumber: 3,
    title: "Asymmetric Information, Financial Contracts & Credit Rationing",
    subtitle: "Akerlof's Lemons Problem, Costly State Verification (Why Debt Dominates Equity), Restrictive Covenants, Stiglitz-Weiss Credit Rationing & Pecking Order Theory",
    durationEstimate: "9 min",
    briefing: {
      coreTheories: [
        {
          name: "Asymmetric Information: Adverse Selection vs Moral Hazard (Mishkin Ch 15)",
          detail: "• Adverse Selection (Pre-contractual): George Akerlof's 'Lemons Problem' (1970). Because lenders have less information about borrower creditworthiness than borrowers themselves, lenders charge an average interest rate. Good, conservative borrowers find this rate too high and exit, leaving behind bad risks ('lemons').\n• Moral Hazard (Post-contractual): Once funds are disbursed, borrowers have incentives to undertake unapproved, high-risk gambles ('heads I win, tails the lender loses')."
        },
        {
          name: "Costly State Verification & Why Debt Dominates Equity",
          detail: "• Principal-Agent Problem in Equity: Shareholders are principals; managers are agents. Managers may divert profits toward perquisites and empire-building rather than maximizing shareholder net present value (NPV).\n• Costly State Verification: Auditing and monitoring managers is expensive and time-consuming. Because of the Free-Rider Problem, individual small stockholders will not incur monitoring costs.\n• The Debt Contract Solution: Under a standard debt contract, the borrower pays a fixed contractual return. The lender incurs auditing costs ONLY IF the borrower defaults! Thus, debt contracts dramatically minimize verification costs, explaining why debt contracts dominate external financing."
        },
        {
          name: "Tools to Mitigate Moral Hazard: Restrictive Covenants",
          detail: "Four types of loan covenants in debt contracts:\n1. Covenants to prevent undesirable behavior: Prohibiting engagement in speculative ventures or taking on additional senior debt.\n2. Covenants to encourage desirable behavior: Requiring the borrower to maintain minimum working capital ratios (e.g. current ratio ≥ 1.33:1) and maintain insurance on facilities.\n3. Covenants to keep collateral in good condition: Restricting sale or pledging of designated collateral assets.\n4. Covenants to provide information: Mandating quarterly audited balance sheets and financial disclosure."
        },
        {
          name: "Stiglitz-Weiss Model of Credit Rationing & Myers-Majluf Pecking Order",
          detail: "• Stiglitz-Weiss (1981): Why don't commercial banks raise interest rates to clear excess loan demand? Higher interest rates worsen adverse selection (only reckless borrowers apply) and moral hazard (borrowers switch to higher-risk projects to cover high interest). Beyond an optimal interest rate, bank expected return DECLINES. Hence, banks ration credit instead of raising rates.\n• Pecking Order Theory (Myers & Majluf 1984): Because of asymmetric information, firms finance investments hierarchically: (1) Internal retained earnings first (zero information asymmetry), (2) Debt financing second (low verification cost), (3) External equity last (heavily penalized by market as a signal of overvaluation)."
        }
      ],
      examTraps: [
        "EXAM TRAP: Adverse Selection is a PRE-contractual screening problem; Moral Hazard is a POST-contractual monitoring problem.",
        "EXAM TRAP: The presence of collateral mitigates lender loss upon default, but it does NOT eliminate moral hazard. In fact, collateral overvaluation can encourage reckless borrowing."
      ]
    },
    faqs: [
      {
        question: "Why do honest borrowers subsidize dishonest borrowers when information is asymmetric?",
        answer: "When banks cannot verify borrower risk profiles prior to lending, they charge a single pooled average interest rate. This average rate forces honest, low-risk borrowers to pay more than their fair actuarial risk, effectively subsidizing the default losses generated by high-risk borrowers."
      },
      {
        question: "What is the Free-Rider Problem in financial market monitoring?",
        answer: "If an individual investor spends money and time auditing corporate management, all other investors enjoy the benefits of improved governance without paying anything. Anticipating this, no individual investor spends the resources, allowing managerial abuse to flourish. Commercial banks resolve this by keeping loans private, capturing all the monitoring returns."
      },
      {
        question: "Why does the Pecking Order Theory prioritize debt over equity?",
        answer: "When a firm issues new equity, outside investors suspect that managers believe the company's stock is overvalued, leading to a drop in share prices. Debt contracts involve much less information sensitivity, making debt financing far cheaper and preferred over new share issues."
      }
    ],
    quiz: [
      {
        id: "q3_1",
        question: "In financial economics, George Akerlof's 'Lemons Problem' demonstrates that when pre-contractual asymmetric information exists:",
        options: [
          "Low-risk (high-quality) borrowers are driven out of the loan market because lenders charge an average interest rate",
          "Borrowers automatically take on excessive gambles after receiving loan funds",
          "Commercial banks reduce their reserve ratios to zero",
          "Stock exchanges replace rolling settlements with forward contracts"
        ],
        correctIndex: 0,
        explanation: "Correct: Adverse selection causes lenders to charge an average interest rate to compensate for hidden risk. High-quality borrowers find this rate too expensive and leave, leaving behind bad risks ('lemons')."
      },
      {
        id: "q3_2",
        question: "The economic concept of 'Costly State Verification' explains why:",
        options: [
          "Equity contracts are far more prevalent than debt contracts in external corporate financing",
          "Debt contracts dominate external finance because lenders need to audit the borrower only upon default",
          "Central banks must conduct daily open market purchases to verify bank reserves",
          "The classical Quantity Theory of Money fails to explain long-run price levels"
        ],
        correctIndex: 1,
        explanation: "Correct: Under debt contracts, lenders only incur the cost of auditing and verifying financial health when the borrower fails to make scheduled payments (defaults), significantly reducing monitoring costs compared to equity."
      },
      {
        id: "q3_3",
        question: "According to the Stiglitz-Weiss credit rationing model, commercial banks do not raise interest rates to clear excess loan demand because:",
        options: [
          "Statutory interest ceilings are permanently mandated by the IMF",
          "Higher interest rates worsen adverse selection and induce borrowers to undertake riskier projects, reducing bank expected returns",
          "Bank balance sheet assets would instantly become zero",
          "The money multiplier is completely independent of bank lending rates"
        ],
        correctIndex: 1,
        explanation: "Correct: Raising interest rates attracts riskier borrowers (adverse selection) and incentivizes borrowers to gamble on high-variance projects (moral hazard), ultimately lowering the bank's expected net return."
      },
      {
        id: "q3_4",
        question: "Under the Myers-Majluf Pecking Order Theory, how do corporations hierarchically finance new investment projects?",
        options: [
          "External Equity first, Bank Debt second, Retained Earnings last",
          "Internal Retained Earnings first, Debt second, External Equity last",
          "Government Subsidies first, Venture Capital second, Trade Credit last",
          "Commercial Paper first, Treasury Bills second, Corporate Bonds last"
        ],
        correctIndex: 1,
        explanation: "Correct: Internal funds avoid asymmetric information; debt has low information sensitivity; external equity is issued last because markets perceive new equity issues as a sign of overvaluation."
      },
      {
        id: "q3_5",
        question: "Which of the following is an example of a 'covenant to encourage desirable behavior' in a bank loan agreement?",
        options: [
          "A clause prohibiting the borrower from issuing subordinated debt without lender consent",
          "A requirement that the borrowing firm maintain adequate property insurance and minimum net working capital",
          "A clause barring the borrower from merging with another firm",
          "A rule forbidding the firm from paying cash dividends to shareholders"
        ],
        correctIndex: 1,
        explanation: "Correct: Requiring insurance and minimum working capital encourages positive financial health, whereas prohibiting debt or mergers is a negative covenant preventing undesirable behavior."
      },
      {
        id: "q3_6",
        question: "The Free-Rider Problem in financial markets prevents private information-producing firms from solving adverse selection because:",
        options: [
          "Other investors copy the trading choices of those who purchase private rating reports without paying for the information",
          "Stock exchanges charge 100% tax on private credit rating agencies",
          "Commercial banks are forbidden from inspecting audited corporate accounts",
          "Government bond yields are permanently fixed by the central bank"
        ],
        correctIndex: 0,
        explanation: "Correct: When an individual buys private credit research, other investors observe their purchases and mimic them for free, preventing information agencies from recovering their costs."
      }
    ]
  },

  // ==========================================
  // LEVEL 4: UNIT 2B
  // ==========================================
  {
    id: 4,
    unitId: "unit-2",
    unitNumber: 2,
    levelNumber: 4,
    title: "Financial Crises & Indian Financial Sector Reforms",
    subtitle: "Crisis Anatomy (Mishkin Ch 15), Pre-1991 Financial Repression, Narasimham I & II, NPA Waves, Vaghul Committee & Money Market Instruments",
    durationEstimate: "9 min",
    briefing: {
      coreTheories: [
        {
          name: "Dynamics & Anatomy of Financial Crises (Mishkin Ch 15)",
          detail: "• Stage 1 (Initiation): Mismanagement of financial liberalization/innovation leading to credit boom and asset price bubbles (e.g. 2007-08 subprime mortgage bubble, 'pass-the-trash'). When asset prices crash, balance sheets deteriorate.\n• Stage 2 (Banking Crisis): Deteriorating balance sheets cause bank runs, solvency concerns, fire sales of assets, and credit freezes.\n• Stage 3 (Debt Deflation): Unanticipated decline in price levels increases the real value of nominal debt obligations, triggering mass corporate insolvencies."
        },
        {
          name: "Pre-1991 Indian Financial Repression (Rakesh Mohan & Partha Ray 2016)",
          detail: "• Extreme Statutory Pre-emptions: Cash Reserve Ratio (CRR) was raised up to 15%; Statutory Liquidity Ratio (SLR) reached a peak of 38.5%. Combined pre-emption exceeded 53% of bank deposits, diverted to finance government deficits at below-market interest rates.\n• Administered Interest Rates: Opaque ceilings and floor rates dictated by RBI, crippling bank profitability.\n• Directed Priority Sector Credit: Mandated at 40%, leaving commercial banks burdened with non-performing loans and weak capital bases."
        },
        {
          name: "Narasimham Committee I (Nov 1991) & II (1998)",
          detail: "• Narasimham I (Nov 1991 - Committee on Financial System CFS, 9 members): Blue-print of first-generation reforms: 8% Capital Adequacy Ratio (CAR), objective 4-tier asset classification (Standard, Substandard, Doubtful, Loss), reduction of CRR/SLR, suggested reducing directed credit to 10%, setup of Debt Recovery Tribunals (DRT) and Asset Reconstruction Fund (ARF), and licensing of new private sector banks (HDFC, ICICI, Axis).\n• Narasimham II (1998 - Banking Sector Reforms): Second-generation reforms: Tightened NPA recognition to 90 days (phased in by 2002 from 180 days), general provisioning on standard assets, marked-to-market G-Sec valuation (5% market risk weight), branch licensing deregulation, and Basel norms adoption."
        },
        {
          name: "Indian NPA Waves: 1997-2002 vs Post-2008 Comparison",
          detail: "• 1997-2002 NPA Surge: Triggered by post-liberalization industrial slowdown, trade tariff cuts, and strict introduction of prudential classification. Gross NPAs peaked at ~14-15%. Solved by restructuring, CDR, and enactment of SARFAESI Act 2002.\n• Post-2008 NPA Crisis: Triggered by infrastructure lending boom, project delays, governance issues, and the 'Twin Balance Sheet' problem (over-leveraged corporate balance sheets + stressed bank balance sheets). Resolved via RBI Asset Quality Review (AQR 2015), Insolvency and Bankruptcy Code (IBC 2016), recapitalization, and Bad Bank (NARCL)."
        },
        {
          name: "Vaghul Committee (1987) & Money Market Instruments",
          detail: "• Setup of Discount and Finance House of India (DFHI) in April 1988 (paid-up capital Rs. 150 cr) as an apex secondary market maker.\n• Certificates of Deposit (CD - March 1989): Min Rs. 1 cr (multiples of 25L); maturity 3 months to 1 yr. Banks cannot lend against their own CDs.\n• Commercial Paper (CP - Jan 1990): Net worth ≥ Rs. 10 cr, working capital limit ≥ Rs. 25 cr, P1+ rating, current ratio ≥ 1.33:1. Maturity 3 to 6 months; max issue 20% of working capital limit."
        }
      ],
      examTraps: [
        "EXAM TRAP: Narasimham I recommended reducing priority sector credit from 40% to 10%, but the Government DID NOT ACCEPT this recommendation due to socio-political compulsions.",
        "EXAM TRAP: Narasimham II introduced the 90-day NPA norm in 1998, but it was implemented in a phased manner by 2002 (replacing the old 180-day norm)."
      ]
    },
    faqs: [
      {
        question: "What characterized 'Financial Repression' in pre-1991 India according to Rakesh Mohan & Partha Ray?",
        answer: "Financial repression was defined by excessive statutory pre-emptions (CRR up to 15% and SLR up to 38.5%, locking up over 53% of bank deposits in low-yielding government debt), tightly administered interest rates with zero price discovery, and directed lending quotas that undermined commercial bank viability."
      },
      {
        question: "How did the 1997-2002 NPA crisis differ from the post-2008 NPA crisis in Indian banking?",
        answer: "The 1997-2002 NPA crisis stemmed from industrial restructuring following economic opening and the initial shock of applying objective prudential accounting. The post-2008 crisis was driven by massive infrastructure project lending, aggressive corporate over-leverage, and regulatory forbearance, culminating in the Twin Balance Sheet challenge resolved by the 2016 IBC."
      },
      {
        question: "Why was the Discount and Finance House of India (DFHI) created in 1988?",
        answer: "Following the N. Vaghul Committee (1987) recommendations, DFHI was established in April 1988 to provide two-way bid/ask quotes and activate liquidity in the secondary money market for Treasury Bills, commercial bills, and call money."
      }
    ],
    quiz: [
      {
        id: "q4_1",
        question: "Prior to the 1991 economic reforms, Indian banking suffered from 'Financial Repression' characterized by combined CRR and SLR pre-emptions that reached a peak of:",
        options: [
          "Around 20% of net bank deposits",
          "Around 35% of net bank deposits",
          "Over 50% (CRR 15% and SLR 38.5%) of net bank deposits",
          "Exactly 75% of net bank deposits"
        ],
        correctIndex: 2,
        explanation: "Correct: As documented by Rakesh Mohan & Partha Ray (2016), combined statutory pre-emptions exceeded 53.5% (SLR 38.5% + CRR 15%), locking up more than half of bank deposits in government financing."
      },
      {
        id: "q4_2",
        question: "Which landmark reform was recommended by Narasimham Committee II (1998) to upgrade Indian loan classification to global standards?",
        options: [
          "Abolishing the Reserve Bank of India",
          "Tightening the past-due norm for Non-Performing Asset (NPA) classification from 180 days to 90 days",
          "Increasing the Cash Reserve Ratio to 25%",
          "Re-establishing the Badla share trading system"
        ],
        correctIndex: 1,
        explanation: "Correct: Narasimham Committee II recommended introducing the 90-day delinquency norm for NPAs in a phased manner by 2002, replacing the old 180-day norm."
      },
      {
        id: "q4_3",
        question: "The Discount and Finance House of India (DFHI) was established in April 1988 based on the recommendations of which expert group?",
        options: [
          "Sukhamoy Chakravarty Committee",
          "N. Vaghul Working Group",
          "M. Narasimham Committee",
          "Y.V. Reddy Working Group"
        ],
        correctIndex: 1,
        explanation: "Correct: The N. Vaghul Working Group on the Money Market (1987) recommended establishing DFHI as an apex market maker to impart liquidity to short-term instruments."
      },
      {
        id: "q4_4",
        question: "Under the RBI guidelines specified in the SOL text, which of the following is a MANDATORY eligibility condition for a corporate firm to issue Commercial Paper (CP)?",
        options: [
          "Net worth of at least Rs. 10 crores, working capital limit of not less than Rs. 25 crores, and current ratio of at least 1.33:1",
          "Net worth of Rs. 100 crores and zero debt liabilities",
          "Current ratio of exactly 2.5:1 and AAA credit rating",
          "Maturity of 5 years with mandatory bank underwriting"
        ],
        correctIndex: 0,
        explanation: "Correct: Page 40 of the SOL reading specifies: Net worth ≥ Rs. 10 cr, working capital limit ≥ Rs. 25 cr, P1+ rating, and current ratio ≥ 1.33:1."
      },
      {
        id: "q4_5",
        question: "According to Frederic Mishkin's framework, what is 'Debt Deflation' during a severe financial crisis?",
        options: [
          "The complete cancellation of sovereign public debt by the central bank",
          "An unanticipated decline in the price level that increases the real burden of nominal debt on borrowers, triggering mass insolvencies",
          "Commercial banks refusing to accept deposits from the public",
          "A sharp depreciation of the exchange rate that eliminates foreign debt"
        ],
        correctIndex: 1,
        explanation: "Correct: Debt deflation occurs when falling general prices increase the real value of debts, reducing debtor net worth and worsening adverse selection and bank solvency."
      },
      {
        id: "q4_6",
        question: "The 'Twin Balance Sheet' problem that afflicted the Indian economy post-2008 referred to simultaneous distress on the balance sheets of:",
        options: [
          "The Reserve Bank of India and the Ministry of Finance",
          "Over-leveraged corporate borrowers and Non-Performing Asset (NPA)-burdened commercial banks",
          "Foreign Institutional Investors and domestic mutual funds",
          "Primary Agricultural Credit Societies and Land Development Banks"
        ],
        correctIndex: 1,
        explanation: "Correct: The Twin Balance Sheet problem arose from stressed balance sheets of corporate infrastructure borrowers combined with the rising bad debt burdens of Indian public sector banks."
      }
    ]
  },

  // ==========================================
  // LEVEL 5: UNIT 3A
  // ==========================================
  {
    id: 5,
    unitId: "unit-3",
    unitNumber: 3,
    levelNumber: 5,
    title: "Theories of Interest Rate Determination & Differentials",
    subtitle: "Classical Theory (S=I), Knut Wicksell Loanable Funds (LD vs LS), Keynesian Liquidity Preference, The Indeterminacy Problem & 7 Differentials",
    durationEstimate: "9 min",
    briefing: {
      coreTheories: [
        {
          name: "Classical Theory of Rate of Interest (Real Theory)",
          detail: "• Propounded by Marshall, Fisher, Pigou, Cassel, Knight, Taussig.\n• Real theory: Interest is determined solely by real factors: Demand for Investment (I) and Supply of Savings (S).\n• Investment Demand (I): Derived demand. Slopes downward because physical capital is subject to the law of diminishing marginal productivity.\n• Supply of Savings (S): Excess of income over consumption. Slopes upward because higher interest rates incentivize postponing consumption.\n• Equilibrium: Where S = I. Criticisms: (1) Indeterminate: Keynes proved savings depend on the level of income S = f(Y), which cannot be known without knowing the interest rate; (2) Assumes permanent full employment; (3) Completely ignores monetary factors."
        },
        {
          name: "Loanable Funds Theory (Neoclassical Synthesis)",
          detail: "• Originated by Swedish economist Knut Wicksell; expanded by Ohlin, Myrdal, Lindahl, Robertson, Viner.\n• Neoclassical synthesis of real and monetary factors.\n• Demand for Loanable Funds: LD = I (Investment) + H (Hoarding of idle cash balances) + DS (Dissaving). All vary inversely with the interest rate.\n• Supply of Loanable Funds: LS = S (Voluntary savings) + DH (Dishoarding of past idle cash) + DI (Disinvestment / unreplaced depreciation) + BM (Bank Money credit creation). All vary directly with interest rate.\n• Equilibrium: Where LD = LS. Improvement: Integrates bank credit and hoarding. Criticism: Still indeterminate without knowing the level of national income."
        },
        {
          name: "Keynesian Liquidity Preference Theory (Pure Monetary)",
          detail: "• Propounded by J.M. Keynes. Interest is purely a monetary phenomenon—the reward for parting with liquidity for a specified period.\n• Demand for Money: DM = MT(Y) (Transaction) + MP(Y) (Precautionary) + MSp(r) (Speculative).\n• Supply of Money: SM is institutionally fixed by the central bank (vertical line).\n• Equilibrium: Where DM = SM. Indeterminacy Critique: MT depends on income Y. Hicks & Hansen solved the indeterminacy of both Classical and Keynesian theories by determining income Y and interest rate r simultaneously in the IS-LM framework."
        },
        {
          name: "Seven Major Sources of Interest Rate Differentials in India",
          detail: "1. Default Risk / Net Worth: Pure default-free rate (gilt-edged govt securities) vs risk premium on corporate debt based on credit ratings (AAA, AA, BBB).\n2. Period / Tenor of Loan: Longer maturity carries greater capital uncertainty.\n3. Volume of Loan: Fixed loan appraisal and documentation costs per rupee are higher on small loans.\n4. Nature of Security: Liquid securities (gold, gilts) carry low rates; illiquid assets (land, immovable property) carry high rates.\n5. Financial Standing of Borrower: Prime borrowers enjoy lower rates.\n6. Market Imperfections: Local monopoly of rural moneylenders and indigenous bankers over captive borrowers.\n7. Differential Interest Rate (DIR) Scheme: Policy-mandated concessional lending by commercial banks to priority and weaker sections."
        }
      ],
      examTraps: [
        "EXAM TRAP: Both Classical and Keynesian theories are INDETERMINATE when viewed alone. Hicks and Hansen's IS-LM model resolved this.",
        "EXAM TRAP: In Loanable Funds theory, Dishoarding (DH) is part of SUPPLY of funds, while Hoarding (H) is part of DEMAND for funds."
      ]
    },
    faqs: [
      {
        question: "Why did Keynes argue that the Classical Theory of Interest is indeterminate?",
        answer: "Classical theory states interest is determined by Saving = Investment. But saving depends on national income (S = f(Y)). As income changes, the saving curve shifts. Without knowing income, we cannot know the saving curve; but we cannot know income without knowing investment, which depends on the interest rate. Hence, the theory is indeterminate."
      },
      {
        question: "How did Hicks and Hansen resolve the indeterminacy of interest rate determination?",
        answer: "Hicks and Hansen constructed the IS-LM model: the IS curve represents goods market equilibrium (real factors: S = I) across various income and interest rate pairs, while the LM curve represents money market equilibrium (monetary factors: DM = SM). The intersection of IS and LM simultaneously determines the equilibrium interest rate and national income."
      },
      {
        question: "Why do rural moneylenders in India charge exorbitant rates compared to commercial banks?",
        answer: "As explained on pages 66-67 of the SOL text, moneylenders exploit localized monopoly power over small borrowers who have no alternative institutional credit, possess no bankable collateral, and borrow under duress."
      }
    ],
    quiz: [
      {
        id: "q5_1",
        question: "The Loanable Funds Theory of interest rate determination was originally formulated by which Swedish economist?",
        options: [
          "Irving Fisher",
          "Knut Wicksell",
          "John Maynard Keynes",
          "James Tobin"
        ],
        correctIndex: 1,
        explanation: "Correct: Neoclassical loanable funds theory owes its origin to Swedish economist Knut Wicksell (later expanded by Bertil Ohlin, Gunnar Myrdal, and Erik Lindahl)."
      },
      {
        id: "q5_2",
        question: "In the Loanable Funds Theory, which of the following is a constituent of the DEMAND for loanable funds (LD)?",
        options: [
          "Dishoarding of past cash balances (DH)",
          "Bank Credit Creation (BM)",
          "Hoarding of idle cash balances (H)",
          "Disinvestment of worn-out capital (DI)"
        ],
        correctIndex: 2,
        explanation: "Correct: Demand for loanable funds LD = Investment (I) + Hoarding (H) + Dissaving (DS). Dishoarding, disinvestment, and bank credit belong to the supply side."
      },
      {
        id: "q5_3",
        question: "What fundamental defect was identified by Keynes in the Classical Theory of Interest ($S = I$)?",
        options: [
          "It is indeterminate because the level of savings depends on national income, which cannot be known without knowing the interest rate",
          "It ignores the law of diminishing returns on physical capital",
          "It assumes that commercial banks create money out of thin air",
          "It defines interest as the reward for parting with liquidity"
        ],
        correctIndex: 0,
        explanation: "Correct: Classical theory cannot determine the interest rate uniquely without already knowing the level of income because S is a function of income."
      },
      {
        id: "q5_4",
        question: "How did neo-Keynesian economists J.R. Hicks and A.H. Hansen solve the indeterminacy problem of interest rate determination?",
        options: [
          "By abolishing the speculative demand for money",
          "By developing the IS-LM framework to determine the interest rate and national income simultaneously",
          "By fixing the policy repo rate at zero",
          "By replacing debt contracts with equity contracts"
        ],
        correctIndex: 1,
        explanation: "Correct: The IS curve (real sector S=I) and LM curve (monetary sector DM=SM) intersect to simultaneously determine the equilibrium interest rate and output."
      },
      {
        id: "q5_5",
        question: "Under the Differential Interest Rate (DIR) Scheme operating in the Indian banking system:",
        options: [
          "All borrowers pay market rates determined by the call money market",
          "Concessional, subsidized credit is extended to weaker sections and low-income target groups",
          "Commercial banks are forbidden from charging interest on mortgage loans",
          "Foreign banks are exempt from CRR regulations"
        ],
        correctIndex: 1,
        explanation: "Correct: As highlighted on page 67 of the SOL text, under the DIR scheme, commercial banks lend to priority sectors and low-income groups at concessional rates."
      },
      {
        id: "q5_6",
        question: "James Tobin extended Keynes' liquidity preference theory by demonstrating that:",
        options: [
          "Investors face risk and uncertainty, inducing them to hold a diversified portfolio of BOTH cash and bonds",
          "The speculative demand for money is completely nonexistent",
          "The money multiplier is always equal to 1/r",
          "The yield curve is always flat in developing nations"
        ],
        correctIndex: 0,
        explanation: "Correct: Page 61 of the SOL text notes that James Tobin resolved Keynes' restrictive assumption (all cash or all bonds) by showing that risk aversion leads investors to hold diversified asset portfolios."
      }
    ]
  },

  // ==========================================
  // LEVEL 6: UNIT 3B
  // ==========================================
  {
    id: 6,
    unitId: "unit-3",
    unitNumber: 3,
    levelNumber: 6,
    title: "Term Structure Hypotheses, Yield Curves & Indian Benchmark Rates",
    subtitle: "Pure Expectations Math, Segmented Markets, Preferred Habitat (Modigliani-Sutch), Campbell Harvey Inversion & Evolution from BPLR to MCLR & EBLR",
    durationEstimate: "9 min",
    briefing: {
      coreTheories: [
        {
          name: "Yield Curves & Campbell Harvey Inversion (Baye & Jansen Ch 10)",
          detail: "• Definition: The yield curve plots yields on default-free debt instruments (Treasuries) against term to maturity, holding risk, liquidity, and tax treatment constant.\n• Three Shapes: Normal (upward sloping: long rates > short rates), Inverted (downward sloping: short rates > long rates), and Flat.\n• Recession Predictor: Campbell Harvey (Duke University) demonstrated that inverted yield curves preceded every modern US recession (signaling market expectations of severe future slowdown and massive central bank rate cuts)."
        },
        {
          name: "Three Competing Theories of Term Structure",
          detail: "1. Pure Expectations Theory: Long-term interest rate equals the geometric average of current and expected future short-term interest rates: (1 + i_2t)^2 = (1 + i_1t) * (1 + i^e_{1,t+1}). Assumes bonds of different maturities are perfect substitutes. Explains why rates move together, but fails to explain why yield curves are typically upward sloping.\n2. Segmented Markets Theory: Markets for different maturities are completely separate (imperfect substitutes). Driven by institutional preferences (banks want short, pension funds want long). Explains upward slope (higher demand for short-term debt), but fails to explain why short and long rates move together.\n3. Liquidity Premium / Preferred Habitat Theory (Modigliani-Sutch): Combines both! Long rate is average of expected future short rates PLUS a positive liquidity/term premium (k_nt) that increases with maturity. Explains both co-movement and typical upward slope."
        },
        {
          name: "Forward Interest Rate Calculations",
          detail: "• Formula: Expected 1-year rate next year i^e_{t+1} = [(1 + i_2t)^2 / (1 + i_1t)] - 1.\n• Example: If 1-year bond rate is 4% and 2-year bond rate is 7%: (1.07)^2 / (1.04) = 1.1449 / 1.04 = 1.10086 -> expected 1-year rate next year is ~10.09%."
        },
        {
          name: "Evolution of Indian Lending Rate Systems (RBI 2017 Internal Study Group)",
          detail: "1. Prime Lending Rate (PLR): Discretionary, lacked transparency.\n2. Benchmark Prime Lending Rate (BPLR, 2003): Failed because banks lent below BPLR to prime corporates (Sub-BPLR lending was >60%) while retail borrowers paid high rates.\n3. Base Rate (July 2010): Minimum lending rate based on average cost of funds. Delayed transmission.\n4. Marginal Cost of Funds based Lending Rate (MCLR, April 2016): Mandated by RBI based on 4 components: (i) Marginal Cost of Funds (92% weight on incremental deposits), (ii) Negative Carry on CRR, (iii) Operating Costs, (iv) Tenor Premium. Flaws: Asymmetric transmission, long reset periods, internal spread discretion.\n5. External Benchmark Lending Rate (EBLR, Oct 2019): Mandated for retail and MSME loans linked directly to external benchmarks (RBI Repo Rate, T-Bills) to ensure instant, transparent transmission."
        }
      ],
      examTraps: [
        "EXAM TRAP: The Expectations Theory assumes bonds of different maturities are PERFECT substitutes. Segmented Markets assumes they are NOT substitutes at all. Preferred Habitat assumes they are substitutes, but IMPERFECT ones.",
        "EXAM TRAP: The 4 components of the MCLR formula are: Marginal Cost of Funds, Negative carry on CRR, Operating costs, and Tenor premium. It does NOT use average historical deposit cost."
      ]
    },
    faqs: [
      {
        question: "Why did the Benchmark Prime Lending Rate (BPLR) system fail in India?",
        answer: "BPLR was designed as a floor for prime borrowers, but competition led banks to extend over 60-75% of their total loans below BPLR to large corporate clients (sub-BPLR lending), while retail borrowers and small businesses were charged non-transparent, high rates."
      },
      {
        question: "What are the four statutory components of the MCLR formula?",
        answer: "Under RBI guidelines: (1) Marginal Cost of Funds (incremental borrowing and deposit cost), (2) Negative Carry on CRR (return forgone on cash reserves held with RBI), (3) Operating Costs, and (4) Tenor Premium (cost of lending for longer tenors)."
      },
      {
        question: "Why did the RBI replace MCLR with External Benchmark Lending Rates (EBLR) in 2019?",
        answer: "As exposed by the RBI Internal Study Group (2017), MCLR suffered from internal discretion: banks delayed passing on repo rate cuts by tweaking internal spreads and setting 1-year reset periods. EBLR links retail loan rates directly and automatically to external benchmarks (Repo Rate or T-Bills)."
      }
    ],
    quiz: [
      {
        id: "q6_1",
        question: "The Preferred Habitat Theory of the term structure of interest rates is considered an analytical synthesis of:",
        options: [
          "The Classical Theory and Keynesian Liquidity Preference Theory",
          "The Pure Expectations Theory and the Segmented Markets Theory",
          "The Real Bills Doctrine and the Shiftability Theory",
          "Fisher's Quantity Theory and Cambridge Cash-Balance Approach"
        ],
        correctIndex: 1,
        explanation: "Correct: Preferred Habitat Theory combines the Expectation Theory's forward-looking rate averaging with the Segmented Markets Theory's recognition of maturity preferences and liquidity risk premia."
      },
      {
        id: "q6_2",
        question: "If the 1-year government bond rate is 4% and the 2-year government bond rate is 7%, what is the market's forecast of the 1-year rate next year under the Pure Expectations Hypothesis?",
        options: [
          "5.50%",
          "7.00%",
          "10.09%",
          "11.00%"
        ],
        correctIndex: 2,
        explanation: "Correct: Under pure expectations: (1 + i_2)^2 = (1 + i_1) * (1 + i^e_{1,t+1}) -> (1.07)^2 = (1.04) * (1 + x) -> 1.1449 / 1.04 = 1.10086 -> x = 10.09%."
      },
      {
        id: "q6_3",
        question: "Duke University Professor Campbell Harvey identified that which yield curve phenomenon preceded the last five major U.S. economic recessions?",
        options: [
          "A steeply upward sloping yield curve",
          "An inverted yield curve (short rates higher than long rates)",
          "A perfectly flat yield curve pegged at zero",
          "A parallel upward shift of 500 basis points"
        ],
        correctIndex: 1,
        explanation: "Correct: Campbell Harvey proved that inverted yield curves reliably anticipate economic recessions because markets expect future economic contractions and central bank rate cuts."
      },
      {
        id: "q6_4",
        question: "Which of the following is NOT one of the four statutory components of the Marginal Cost of Funds based Lending Rate (MCLR) prescribed by the RBI?",
        options: [
          "Marginal cost of funds",
          "Historical average cost of deposits",
          "Negative carry on Cash Reserve Ratio (CRR)",
          "Tenor premium"
        ],
        correctIndex: 1,
        explanation: "Correct: Historical average cost of deposits was used under the old Base Rate system. MCLR replaced it with the Marginal cost of funds."
      },
      {
        id: "q6_5",
        question: "Under the Segmented Markets Theory, the shape of the yield curve is determined entirely by:",
        options: [
          "The expected future path of short-term interest rates",
          "The relative supply and demand for bonds within specific maturity categories",
          "The rate of growth of high-powered monetary base",
          "The central bank's foreign exchange intervention in the spot market"
        ],
        correctIndex: 1,
        explanation: "Correct: Segmented Markets assumes investors and borrowers have rigid institutional maturity preferences, making bonds of different maturities non-substitutable."
      },
      {
        id: "q6_6",
        question: "From October 1, 2019, the RBI mandated that all commercial banks must link new floating-rate personal, retail, and MSME loans to:",
        options: [
          "The bank's internal Base Rate",
          "The 1-year internal MCLR",
          "An External Benchmark (such as the RBI Repo Rate or Treasury Bill yields)",
          "The Consumer Price Index (CPI) inflation rate"
        ],
        correctIndex: 2,
        explanation: "Correct: To eliminate opaque internal spreads and delay, RBI mandated linking all new retail and MSME loans to External Benchmark Lending Rates (EBLR) such as the RBI Repo Rate."
      }
    ]
  },

  // ==========================================
  // LEVEL 7: UNIT 4A
  // ==========================================
  {
    id: 7,
    unitId: "unit-4",
    unitNumber: 4,
    levelNumber: 7,
    title: "Central Bank Balance Sheet & Liquidity Management Theories",
    subtitle: "RBI Functions & Working (Ch 1-3), Balance Sheet Structure, Real Bills Doctrine, Moulton's Shiftability, Prochanow's Anticipated Income & Liabilities Management",
    durationEstimate: "9 min",
    briefing: {
      coreTheories: [
        {
          name: "Central Bank Balance Sheet Structure (RBI Report III)",
          detail: "• Assets: Government of India Securities, Foreign Exchange Reserves (foreign currency assets & bonds), Loans and advances to commercial banks, Gold coin and bullion.\n• Liabilities: Currency in circulation (banknotes held by public + vault cash), Deposits of commercial banks (bank reserves to meet CRR), Deposits of Central and State Governments.\n• Departmental Structure of RBI: Divided by statute into the Issue Department (exclusively handles banknote issue; backed under the Minimum Reserve System by at least Rs. 200 crore of assets, of which at least Rs. 115 crore must be in gold) and the Banking Department (handles government banking, bank accounts, and loans)."
        },
        {
          name: "Theory 1: The Real Bills Doctrine (Commercial Loan Theory)",
          detail: "• Core Premise: Commercial banks should advance only short-term, self-liquidating productive loans to finance trade and inventory goods.\n• Self-liquidating Mechanism: When goods are sold, loans liquidate themselves automatically from sales proceeds.\n• Defects: (1) Pro-cyclical: in depressions, demand falls, goods remain unsold, and loans fail to self-liquidate; (2) Fails to prevent spiraling inflations or recessions based on 'needs of trade'."
        },
        {
          name: "Theory 2: The Shiftability Theory (H.G. Moulton)",
          detail: "• Propounded by H.G. Moulton.\n• Core Premise: Bank liquidity depends not on loan maturities, but on holding a substantial stock of assets that can be shifted/sold to other banks or rediscounted with the central bank without capital loss.\n• Defect: In a systemic financial panic, all banks try to shift assets simultaneously; with no buyers, markets freeze unless the central bank acts as lender of last resort."
        },
        {
          name: "Theory 3: The Anticipated Income Theory (H.V. Prochanow 1944)",
          detail: "• Developed by H.V. Prochanow in 1944 based on US term-lending practices.\n• Core Premise: Banks extend medium-term loans (1-5 years) against hypothecation of capital equipment, planning liquidation out of the borrower's anticipated future net income stream in regular installments.\n• Merit: Fulfills liquidity, safety, and profitability simultaneously; pioneered modern term-lending and installment credit."
        },
        {
          name: "Theory 4: The Liabilities Management Theory (1960s)",
          detail: "• Emerged in the 1960s with the development of negotiable CDs and Eurodollar markets.\n• Core Premise: Banks do not need to rely solely on asset liquidity; they can acquire liquidity on demand by issuing liabilities in the money market (negotiable CDs, interbank borrowings, call money, repos).\n• Defect: In crises or when interest rates exceed statutory ceilings, liability sources dry up instantly."
        }
      ],
      examTraps: [
        "EXAM TRAP: Under the Minimum Reserve System, the RBI must maintain total backing assets of at least Rs. 200 crore, of which at least Rs. 115 crore must be in gold bullion and gold coins.",
        "EXAM TRAP: The Shiftability Theory was propounded by H.G. Moulton. The Anticipated Income Theory was propounded by H.V. Prochanow (1944)."
      ]
    },
    faqs: [
      {
        question: "Why is currency in circulation recorded on the LIABILITY side of the central bank's balance sheet?",
        answer: "Historically, banknotes were promissory notes redeemable for precious metal. Today, fiat currency remains a statutory sovereign obligation of the central bank backed by its assets (government bonds, foreign exchange, and gold)."
      },
      {
        question: "What is the primary defect of the Real Bills Doctrine?",
        answer: "It assumes loans are automatically self-liquidating. However, if an economic depression occurs, consumers stop purchasing goods, inventories remain unsold, and the borrower defaults. Furthermore, following 'needs of trade' makes money supply pro-cyclical, amplifying booms and busts."
      },
      {
        question: "How does the Anticipated Income Theory differ from the Real Bills Doctrine?",
        answer: "Real Bills restricts lending strictly to short-term working capital (30-90 days) self-liquidated upon sale of goods. Prochanow's Anticipated Income Theory permits medium-term loans (1-5 years) for capital assets, liquidated in scheduled installments from the borrower's future earning power."
      }
    ],
    quiz: [
      {
        id: "q7_1",
        question: "On the balance sheet of the Reserve Bank of India, which of the following is classified as an ASSET?",
        options: [
          "Currency notes in circulation held by the public",
          "Deposits maintained by commercial banks to meet CRR",
          "Foreign exchange assets and holdings of Government of India securities",
          "Deposits of the Central and State Governments"
        ],
        correctIndex: 2,
        explanation: "Correct: Government securities, foreign exchange assets, loans to banks, and gold are assets. Notes in circulation and bank/government deposits are liabilities."
      },
      {
        id: "q7_2",
        question: "The Shiftability Theory of commercial bank liquidity, which asserts that liquidity depends on holding assets easily transferable without capital loss, was propounded by:",
        options: [
          "H.G. Moulton",
          "H.V. Prochanow",
          "George Akerlof",
          "Knut Wicksell"
        ],
        correctIndex: 0,
        explanation: "Correct: Page 78 of the SOL reading specifies that the shiftability theory of bank liquidity was propounded by H.G. Moulton."
      },
      {
        id: "q7_3",
        question: "The Anticipated Income Theory developed by H.V. Prochanow in 1944 states that commercial bank term loans should be liquidated through:",
        options: [
          "Immediate sale of collateral assets in the secondary stock market",
          "Regular installment repayments funded out of the anticipated future earnings of the borrower",
          "Borrowing high-powered money from the central bank discount window",
          "Issuing negotiable Certificates of Deposit"
        ],
        correctIndex: 1,
        explanation: "Correct: Prochanow's anticipated income theory plans loan liquidation from the future income stream of the borrower in installments."
      },
      {
        id: "q7_4",
        question: "The Liabilities Management Theory of banking, which emerged during the 1960s, argued that banks can maintain liquidity by:",
        options: [
          "Holding 100% of their deposits in non-interest-bearing physical vault cash",
          "Restricting advances exclusively to 30-day agricultural real trade bills",
          "Acquiring reserve money in the market by creating new liabilities like negotiable CDs and inter-bank borrowings",
          "Liquidating long-term government bonds only during economic depressions"
        ],
        correctIndex: 2,
        explanation: "Correct: As discussed on page 80 of the SOL reading, liabilities management theory asserts that banks can purchase liquidity by issuing liabilities (negotiable CDs, interbank borrowings, Eurodollars) rather than holding excess liquid assets."
      },
      {
        id: "q7_5",
        question: "Under the statutory Minimum Reserve System governing the RBI's note issue, the minimum reserve backing required is Rs. 200 crore, of which at least how much must be in gold?",
        options: [
          "Rs. 50 crore",
          "Rs. 85 crore",
          "Rs. 115 crore",
          "Rs. 150 crore"
        ],
        correctIndex: 2,
        explanation: "Correct: Under the RBI Act, the Issue Department must hold at least Rs. 200 crore in reserves, of which at least Rs. 115 crore must be in gold coin and bullion (the remainder in foreign securities)."
      },
      {
        id: "q7_6",
        question: "What is the primary operational defect of the Real Bills Doctrine?",
        options: [
          "It forces banks to charge compound interest on small loans",
          "It is pro-cyclical: it expands credit during booms and contracts credit during depressions when goods fail to sell",
          "It mandates that commercial banks invest 100% of deposits in Treasury Bills",
          "It was banned by the Basel Committee in 1991"
        ],
        correctIndex: 1,
        explanation: "Correct: Real Bills doctrine ties credit expansion to trade needs; in depressions, trade collapses and inventories remain unsold, causing the doctrine to fail."
      }
    ]
  },

  // ==========================================
  // LEVEL 8: UNIT 4B
  // ==========================================
  {
    id: 8,
    unitId: "unit-4",
    unitNumber: 4,
    levelNumber: 8,
    title: "Monetary Policy Strategy: Targets, Instruments & William Poole's Rule",
    subtitle: "Taxonomy of Targets (Instruments to Goals), Poole's Instrument Choice under IS vs LM Shocks, and Nominal Income Targeting",
    durationEstimate: "9 min",
    briefing: {
      coreTheories: [
        {
          name: "Taxonomy of Monetary Policy Conduct (Baye & Jansen Ch 19)",
          detail: "• 1. Policy Instruments / Tools: Directly set by central bank (Repo rate, CRR, SLR, OMO, SDF, MSF).\n• 2. Operating Targets: Daily responsive variables closely guided by tools (Overnight Weighted Average Call Rate WACR, Non-borrowed bank reserves).\n• 3. Intermediate Targets: Variables further down the transmission chain with stable links to final goals (Broad Money M3 growth, total bank credit).\n• 4. Ultimate Goals / Final Targets: Macroeconomic end-points (Price stability, GDP growth, full employment, balance of payments equilibrium)."
        },
        {
          name: "William Poole's Classic Instrument Choice Rule (1970)",
          detail: "Should a central bank target the Interest Rate or the Money Stock?\n• Case 1: Shocks in the Real Sector / Goods Market (IS Shocks): Caused by volatile investment, consumer confidence, or fiscal swings. The central bank should TARGET THE MONEY SUPPLY. When aggregate demand surges, fixing money supply causes interest rates to rise automatically, choking off excess demand and stabilizing income.\n• Case 2: Shocks in the Monetary Sector / Money Demand (LM Shocks): Caused by unstable liquidity preference or financial innovations. The central bank should TARGET THE INTEREST RATE. By pegging interest rates, the central bank automatically expands or contracts money supply to meet shifting liquidity demand, completely insulating output."
        },
        {
          name: "Nominal Income Targeting: AD vs AS Shocks",
          detail: "• Targeting Nominal GDP (P * Y):\n• Under an Aggregate Demand (AD) Shock: An increase in AD pushes both P and Y upward, increasing nominal income above target. The central bank tightens monetary policy, shifting AD back to restore initial price and output levels.\n• Under an Aggregate Supply (AS) Shock: An adverse supply shock (e.g. oil crisis) causes prices P to rise and output Y to fall. Because nominal income P * Y remains relatively stable, the central bank does not need to over-tighten, preventing severe recessions."
        },
        {
          name: "Taylor Rule Formulation",
          detail: "• John Taylor's Rule guides policy interest rates: i = r* + π + 0.5(π - π*) + 0.5(y - y*), where r* = neutral real interest rate, π = inflation, π* = inflation target, and (y - y*) = output gap."
        }
      ],
      examTraps: [
        "EXAM TRAP: When money demand is unstable (LM shocks), targeting money supply causes severe output instability. The central bank MUST target interest rates.",
        "EXAM TRAP: The Call Money Rate is an OPERATING target; Money Supply (M3) is an INTERMEDIATE target; Inflation is a FINAL goal."
      ]
    },
    faqs: [
      {
        question: "Why is an interest rate target superior to a money supply target when money demand is volatile?",
        answer: "If money demand fluctuates erratically, maintaining a rigid money supply target would cause sharp, unpredictable fluctuations in market interest rates, disrupting investment and employment. An interest rate target automatically accommodates shifts in liquidity preference, insulating the real economy."
      },
      {
        question: "What are the three criteria for choosing an operating target?",
        answer: "According to Baye & Jansen: (1) Measurability (data must be available rapidly and accurately), (2) Controllability (the central bank must be able to influence it precisely with its tools), and (3) Predictable impact on intermediate targets and final goals."
      },
      {
        question: "How does nominal income targeting respond to an adverse supply shock?",
        answer: "Under an adverse supply shock, price P rises while real output Y declines. Because P and Y move in opposite directions, nominal income (P * Y) changes very little. This prevents the central bank from aggressively hiking rates during supply bottlenecks, cushioning the real economy against stagflation."
      }
    ],
    quiz: [
      {
        id: "q8_1",
        question: "In the taxonomy of monetary policy conduct, the overnight Weighted Average Call Rate (WACR) is classified as an:",
        options: [
          "Operating instrument",
          "Operating target",
          "Intermediate target",
          "Ultimate final goal"
        ],
        correctIndex: 1,
        explanation: "Correct: WACR is the operating target that the central bank steers on a day-to-day basis to align with the policy repo rate."
      },
      {
        id: "q8_2",
        question: "According to William Poole's analysis, if unpredictable macroeconomic shocks originate in the REAL SECTOR / AGGREGATE DEMAND (IS curve), the central bank should:",
        options: [
          "Target an intermediate monetary aggregate (money supply)",
          "Target the market interest rate",
          "Permanently fix the nominal exchange rate to gold",
          "Abolish all open market operations"
        ],
        correctIndex: 0,
        explanation: "Correct: When aggregate demand is unstable, fixing the money supply allows interest rates to rise automatically during booms (and fall during recessions), stabilizing output."
      },
      {
        id: "q8_3",
        question: "Under William Poole's rule, if unpredictable shocks originate in the MONETARY SECTOR / MONEY DEMAND (LM curve), the central bank should:",
        options: [
          "Target the interest rate",
          "Target the broad money stock (M3)",
          "Raise the Cash Reserve Ratio to 50%",
          "Fix the volume of commercial paper"
        ],
        correctIndex: 0,
        explanation: "Correct: When money demand is unstable, an interest rate target insulates the real economy by automatically accommodating shifting liquidity demand."
      },
      {
        id: "q8_4",
        question: "Which of the following variables is classified as an INTERMEDIATE TARGET of monetary policy?",
        options: [
          "The policy repo rate",
          "Non-borrowed bank reserves",
          "The broad money supply (M3)",
          "Headline CPI inflation"
        ],
        correctIndex: 2,
        explanation: "Correct: Money supply (M3) is an intermediate target. Repo rate is an instrument; non-borrowed reserves is an operating target; inflation is a final goal."
      },
      {
        id: "q8_5",
        question: "Under a policy of Nominal Income Targeting, if Aggregate Demand unexpectedly increases, the central bank responds by:",
        options: [
          "Tightening monetary policy to shift Aggregate Demand back to its target level",
          "Reducing interest rates to encourage further durable spending",
          "Abolishing the Statutory Liquidity Ratio",
          "Issuing unbacked fiat currency"
        ],
        correctIndex: 0,
        explanation: "Correct: An AD surge increases both P and Y, raising nominal income (P*Y) above target; the central bank contracts credit to pull AD back to target."
      },
      {
        id: "q8_6",
        question: "The Taylor Rule specifies that the central bank should raise its policy interest rate whenever:",
        options: [
          "The exchange rate appreciates against the US dollar",
          "Inflation exceeds the target inflation rate or real GDP exceeds potential GDP (positive output gap)",
          "Commercial bank excess reserves rise above 10%",
          "Government deficits drop to zero"
        ],
        correctIndex: 1,
        explanation: "Correct: John Taylor's rule prescribes raising rates when inflation exceeds target or when the output gap is positive (overheating economy)."
      }
    ]
  },

  // ==========================================
  // LEVEL 9: UNIT 4C
  // ==========================================
  {
    id: 9,
    unitId: "unit-4",
    unitNumber: 4,
    levelNumber: 9,
    title: "Indian Monetary Policy Framework & Central Bank Digital Currency",
    subtitle: "Evolution (Multiple Indicator to FIT 4%±2%), MPC, LAF Corridor (Repo, SDF, MSF), Open Economy Transmission & T. Rabi Sankar (2021) CBDC Address",
    durationEstimate: "9 min",
    briefing: {
      coreTheories: [
        {
          name: "Evolution of Indian Monetary Policy Framework (N. Jadhav Ch 2.3.3)",
          detail: "• Phase 1 (1950s-1960s): Credit planning and selective credit controls.\n• Phase 2 (1985-1997): Monetary Targeting with Feedback (Sukhamoy Chakravarty Committee 1985): targeted M3 growth based on expected GDP growth and acceptable inflation.\n• Phase 3 (1998-2015): Multiple Indicator Approach (Bimal Jalan / Y.V. Reddy): monitored a broad basket of indicators (credit, output, trade, fiscal deficit, exchange rate). Criticized for being opaque with no nominal anchor.\n• Phase 4 (2014-Present): Flexible Inflation Targeting (FIT). Recommended by the Urjit Patel Committee (2014) and formalized in May 2016 via amendment to the RBI Act, 1934. Statutory target: Headline CPI inflation of 4% with a tolerance band of +/- 2% (2% to 6%)."
        },
        {
          name: "Monetary Policy Committee (MPC) & Modern LAF Corridor",
          detail: "• MPC Structure: 6 members (3 RBI members: Governor as ex-officio chair with casting vote, Deputy Governor in charge of monetary policy, one RBI officer; + 3 external independent experts appointed by the Central Government). Meets bi-monthly.\n• Statutory Failure: Inflation remaining above 6% or below 2% for THREE CONSECUTIVE QUARTERS.\n• Modern LAF Corridor (50 bps width):\n  • Policy Repo Rate: Benchmark lending rate against G-Sec collateral.\n  • Standing Deposit Facility (SDF, April 2022): Floor of corridor (-25 bps). Absorbs surplus liquidity WITHOUT pledging government securities.\n  • Marginal Standing Facility (MSF): Penal ceiling (+25 bps). Overnight emergency borrowing against SLR quota G-Secs."
        },
        {
          name: "Monetary Transmission in an Open Economy (SOL pp. 107-108)",
          detail: "• Dual Transmission Channels: (1) Interest rate channel (stimulates domestic durable spending), (2) Exchange rate channel (rate cut -> capital outflow -> INR depreciates -> Indian exports become cheaper and imports costlier -> net exports expand aggregate demand).\n• International Spillovers: Open market operations by the US Federal Reserve or ECB impact global capital flows, requiring domestic monetary responses."
        },
        {
          name: "Central Bank Digital Currency (CBDC) - T. Rabi Sankar (2021 Address)",
          detail: "• Definition: Digital legal tender issued by the central bank; liability on central bank balance sheet; exchangeable 1:1 with physical cash.\n• Wholesale (CBDC-W) vs Retail (CBDC-R): Wholesale for inter-bank G-Sec settlement; retail for general public daily transactions via two-tier model (RBI -> commercial banks -> public digital wallets).\n• Motivations in India: High currency-to-GDP ratio (~14%); huge physical cash handling costs; protecting sovereign payments against private crypto; cross-border speed; offline financial inclusion.\n• Bank Disintermediation Risk: If CBDC paid interest, panicked depositors would flee commercial bank deposits into risk-free CBDC ('digital bank run'). Hence, CBDC is non-interest bearing."
        }
      ],
      examTraps: [
        "EXAM TRAP: Standing Deposit Facility (SDF) does NOT require collateral of government securities! It replaced reverse repo as the uncollateralized LAF floor in April 2022.",
        "EXAM TRAP: Retail CBDC is NON-INTEREST BEARING in India to prevent commercial bank disintermediation."
      ]
    },
    faqs: [
      {
        question: "What constitutes statutory failure of the inflation target for the RBI's MPC?",
        answer: "Under the RBI Act, failure occurs if headline CPI inflation breaches the tolerance band (exceeds 6% or falls below 2%) for three consecutive quarters. The RBI must write a formal report to Parliament detailing causes, remedial actions, and an expected time horizon for restoration."
      },
      {
        question: "Why was the Standing Deposit Facility (SDF) introduced in April 2022?",
        answer: "Under conventional reverse repo, the RBI had to pledge government bonds to absorb surplus liquidity. In times of massive liquidity surpluses, the RBI faced a shortage of G-Secs to pledge. The SDF enables the RBI to absorb unlimited surplus liquidity with zero collateral backing."
      },
      {
        question: "Why did RBI Deputy Governor T. Rabi Sankar highlight reducing cash management costs as a primary driver of CBDC?",
        answer: "India has a high currency-to-GDP ratio (around 14-14.5%). Physical currency requires enormous recurring expenditure on printing, security paper import, armed logistics, storage, sorting, and ATM replenishment. CBDC drastically cuts these operational costs."
      }
    ],
    quiz: [
      {
        id: "q9_1",
        question: "Under the amended Reserve Bank of India Act (2016), India's Flexible Inflation Target is defined as:",
        options: [
          "Wholesale Price Index (WPI) inflation of 5% +/- 1%",
          "Consumer Price Index (CPI) headline inflation of 4% with a tolerance band of +/- 2%",
          "GDP deflator inflation of 3% flat",
          "Core CPI inflation maintained at exactly 0%"
        ],
        correctIndex: 1,
        explanation: "Correct: The statutory inflation target under the Urjit Patel Committee framework is 4% CPI headline inflation with a tolerance band of 2% to 6%."
      },
      {
        id: "q9_2",
        question: "The Monetary Policy Committee (MPC) in India consists of how many members, and who exercises the casting vote in the event of a tie?",
        options: [
          "5 members; Finance Minister exercises casting vote",
          "6 members; RBI Governor exercises casting vote",
          "7 members; Chief Economic Advisor exercises casting vote",
          "9 members; Deputy Governor exercises casting vote"
        ],
        correctIndex: 1,
        explanation: "Correct: The MPC has 6 members (3 RBI, 3 external). In case of a 3-3 tie, the RBI Governor has a casting vote."
      },
      {
        id: "q9_3",
        question: "Which liquidity instrument functions as the non-collateralized FLOOR of the RBI's modern Liquidity Adjustment Facility (LAF) corridor?",
        options: [
          "Marginal Standing Facility (MSF)",
          "Bank Rate",
          "Standing Deposit Facility (SDF)",
          "Targeted Long Term Repo Operation (TLTRO)"
        ],
        correctIndex: 2,
        explanation: "Correct: Introduced in April 2022, the Standing Deposit Facility (SDF) replaced fixed-rate reverse repo as the uncollateralized floor of the LAF corridor."
      },
      {
        id: "q9_4",
        question: "In his seminal June 2021 address on CBDC, RBI Deputy Governor T. Rabi Sankar emphasized that CBDC is particularly urgently needed in India to:",
        options: [
          "Completely abolish all physical commercial banks",
          "Reduce the huge operational costs of physical cash management and protect monetary sovereignty",
          "Ensure that private cryptocurrencies become India's sole legal tender",
          "Raise the CRR requirement for non-bank finance companies to 50%"
        ],
        correctIndex: 1,
        explanation: "Correct: Rabi Sankar highlighted reducing the heavy fiscal cost of printing/distributing physical currency and safeguarding the sovereign payments ecosystem from private cryptos."
      },
      {
        id: "q9_5",
        question: "Why is Retail CBDC designed to be non-interest bearing in most proposed architectures?",
        options: [
          "Because the law prohibits central banks from holding financial assets",
          "To mitigate the risk of commercial bank disintermediation and sudden digital runs from bank deposits into CBDC",
          "Because electronic currency is incapable of calculating interest yields",
          "To force all citizens to invest in corporate debentures instead"
        ],
        correctIndex: 1,
        explanation: "Correct: If CBDC paid interest, depositors would pull money out of commercial bank savings accounts into risk-free CBDC, depriving commercial banks of funds to lend."
      },
      {
        id: "q9_6",
        question: "In an open economy with flexible exchange rates, a reduction in the domestic policy interest rate stimulates aggregate demand through which dual channels?",
        options: [
          "Lower domestic borrowing costs for durables/investment AND currency depreciation boosting net exports",
          "Increased government tax receipts AND an immediate increase in foreign exchange reserves",
          "A mandatory reduction in bank reserve requirements AND currency appreciation",
          "Zero capital mobility AND higher import tariffs"
        ],
        correctIndex: 0,
        explanation: "Correct: Interest rate cuts lower borrowing costs (domestic channel) and trigger capital outflow leading to currency depreciation, which makes exports cheaper and expands net exports (exchange rate channel)."
      }
    ]
  },

  // ==========================================
  // LEVEL 10: MASTER GRAND SUMMARY & SYNTHESIS
  // ==========================================
  {
    id: 10,
    unitId: "unit-summary",
    unitNumber: 5,
    levelNumber: 10,
    title: "Master Grand Summary & Cross-Unit Synthesis",
    subtitle: "Complete Unit-Wise Examination Matrix, Inter-Unit Transmission Links & Master Challenge",
    durationEstimate: "12 min",
    briefing: {
      coreTheories: [
        {
          name: "Unit 1 Master Synthesis (Money, Demand & Multiplier)",
          detail: "• Couplet: Medium of exchange, measure of value, standard of deferred payments, store of value.\n• Classical Quantity Theory (MV=PT) vs Kalecki's critique (velocity varies with r) vs Keynesian speculative demand (inversely related to interest rate and bond prices; liquidity trap r_min).\n• Aggregates: Old M1 (C + DD + OD) to M4; New NM1-NM3 and L1-L3 (Y.V. Reddy 1998).\n• Complete Multiplier: m = (1+c)/(r+e+c). Expansion ΔM = m * ΔMB."
        },
        {
          name: "Unit 2 Master Synthesis (Markets, Asymmetric Info & Reforms)",
          detail: "• Information failures: Adverse Selection (pre-contractual; Lemons problem; credit rationing) and Moral Hazard (post-contractual; principal-agent problem in equity; mitigated via costly state verification and restrictive covenants).\n• Debt contracts dominate equity because lenders monitor only upon default.\n• Indian Reforms: Vaghul Committee (1987) -> DFHI (1988), CD (1989), CP (1990); Pre-1991 Repression (CRR 15%, SLR 38.5%); Narasimham I (1991: CAR 8%, prudential norms, DRT, private bank licensing) and II (1998: 90-day NPA norm, Basel implementation)."
        },
        {
          name: "Unit 3 Master Synthesis (Interest Rates & Term Structure)",
          detail: "• Theories of rate determination: Classical (real S vs I), Loanable Funds (Wicksell/Ohlin: LD = I+H+DS, LS = S+DH+DI+BM), Keynesian Liquidity Preference (pure monetary: DM vs SM; indeterminate until IS-LM).\n• Term structure: Pure Expectations ((1+i_2)^2 = (1+i_1)(1+i^e_2)), Segmented Markets (institutional habitats), Preferred Habitat (Modigliani-Sutch: expectations + liquidity premium).\n• Indian Lending Benchmark evolution: PLR -> BPLR -> Base Rate -> MCLR (4 components: marginal cost, negative carry on CRR, operating cost, tenor premium) -> EBLR (2019)."
        },
        {
          name: "Unit 4 Master Synthesis (Central Banking, Policy & CBDC)",
          detail: "• Central Bank Balance Sheet: Assets (G-Secs, Forex, Loans to banks) vs Liabilities (Currency in circulation, bank reserves).\n• 4 Liquidity Theories: Real Bills, Shiftability (Moulton), Anticipated Income (Prochanow), Liabilities Management.\n• Poole's Rule: Money target for IS shocks, Interest rate target for LM shocks.\n• Indian FIT Framework: Urjit Patel 2014, MPC 6 members (Gov casting vote), CPI 4% +/- 2%. LAF Corridor: Repo, SDF (uncollateralized floor), MSF (ceiling).\n• CBDC: Digital sovereign legal tender; wholesale vs retail; two-tier model; non-interest-bearing to prevent bank disintermediation."
        }
      ],
      examTraps: [
        "MASTER TRAP 1: Memorize committee names and dates: Chakravarty (1985), Vaghul (1987), DFHI (1988), Narasimham I (1991), Narasimham II (1998), Y.V. Reddy (1998), Urjit Patel (2014).",
        "MASTER TRAP 2: Inverted yield curve = market expectation of recession and future rate cuts. Liquidity trap = monetary policy becomes powerless because speculative demand is infinitely elastic at r_min.",
        "MASTER TRAP 3: Complete multiplier m decreases when currency ratio c rises, required reserve ratio r rises, or excess reserve ratio e rises."
      ]
    },
    faqs: [
      {
        question: "How does the Money Multiplier (Unit 1) link to Central Bank Open Market Operations (Unit 4)?",
        answer: "When the central bank buys government bonds in an OMO, it injects high-powered money into commercial bank reserve accounts, increasing the Monetary Base (MB). The banking system then expands total money supply by a multiple ΔM = m * ΔMB, where m is governed by public currency habits (c) and bank reserve behavior (r, e)."
      },
      {
        question: "How do Term Structure Theories (Unit 3) explain the transmission of RBI Repo Rate cuts (Unit 4)?",
        answer: "When the RBI cuts the overnight repo rate, it directly reduces short-term money market rates. Under the Expectations and Preferred Habitat theories, if market participants expect short rates to remain low, long-term bond yields will also decline, lowering borrowing costs across corporate loans and mortgages."
      },
      {
        question: "Why do Debt Contracts (Unit 2) and Commercial Bank Liquidity Theories (Unit 4) interact in financial crises?",
        answer: "Debt contracts require fixed repayment. During a crisis, borrowers suffer debt deflation and default. Under Moulton's Shiftability Theory, banks attempt to sell liquid assets simultaneously; when everyone sells and no one buys, asset prices crash, freezing interbank markets and triggering a systemic banking crisis."
      }
    ],
    quiz: [
      {
        id: "q10_1",
        question: "Connecting Unit 1 and Unit 4: If the RBI conducts an Open Market Sale of government bonds while the public's currency-deposit ratio 'c' increases simultaneously, what is the combined effect on total money supply M?",
        options: [
          "Money supply increases unambiguously",
          "Money supply decreases unambiguously because both the monetary base (MB) and the multiplier (m) contract",
          "Money supply remains completely unchanged",
          "The commercial banking system automatically abolishes the Cash Reserve Ratio"
        ],
        correctIndex: 1,
        explanation: "Correct: An open market sale reduces the monetary base (MB), while higher c shrinks the money multiplier (m). Since M = m * MB, both effects reinforce each other to decrease money supply."
      },
      {
        id: "q10_2",
        question: "Connecting Unit 2 and Unit 3: Why does high asymmetric information in loan markets prevent banks from raising interest rates to match high long-term yields?",
        options: [
          "Because higher rates worsen adverse selection and induce moral hazard, reducing the bank's net recovery (Stiglitz-Weiss credit rationing)",
          "Because long-term bond yields are legally mandated to equal zero",
          "Because commercial banks are prohibited from investing in Treasury Bills",
          "Because all loans are guaranteed by the Central Bank Digital Currency"
        ],
        correctIndex: 0,
        explanation: "Correct: Stiglitz-Weiss credit rationing demonstrates that beyond a certain interest rate, the worsening of adverse selection and moral hazard lowers expected bank profits."
      },
      {
        id: "q10_3",
        question: "Connecting Unit 3 and Unit 4: If the RBI's MPC unexpected cuts the policy Repo Rate by 50 bps and signals an 'accommodative stance' for the next two years, the Preferred Habitat Theory predicts that:",
        options: [
          "The entire yield curve will shift downward as expected future short rates fall",
          "The yield curve will invert immediately to minus 10%",
          "Long-term bond yields will instantly triple due to credit risk",
          "The money multiplier will collapse to zero"
        ],
        correctIndex: 0,
        explanation: "Correct: Under Preferred Habitat Theory, long rates reflect the average of current and expected future short rates plus term premia; lower expected short rates pull down long yields."
      },
      {
        id: "q10_4",
        question: "Connecting Unit 1 and Unit 2: Which committee was responsible for modernizing India's monetary aggregates in 1998, and which committee pioneered the 90-day NPA prudential norm in the same year?",
        options: [
          "Y.V. Reddy Third Working Group (Aggregates) and M. Narasimham Committee II (NPAs)",
          "Sukhamoy Chakravarty Committee (both)",
          "N. Vaghul Committee (Aggregates) and C. Rangarajan (NPAs)",
          "Urjit Patel Committee (both)"
        ],
        correctIndex: 0,
        explanation: "Correct: Both landmark reports occurred in 1998: Y.V. Reddy chaired the Third Working Group on Money Supply, and M. Narasimham chaired the Committee on Banking Sector Reforms (Narasimham II)."
      },
      {
        id: "q10_5",
        question: "Connecting Unit 4A and 4C: If retail depositors panic and convert Rs. 50,000 crores of commercial bank deposits into non-interest-bearing Retail CBDC tokens, what happens to the total Monetary Base (MB) and commercial bank reserves?",
        options: [
          "Monetary Base remains unchanged, but commercial bank reserves decline as CBDC currency liability replaces bank deposit liabilities at the RBI",
          "Monetary Base doubles and commercial bank credit quadruples",
          "Total money supply automatically expands by the simple multiplier 1/r",
          "The central bank balance sheet is forced into immediate liquidation"
        ],
        correctIndex: 0,
        explanation: "Correct: MB = Currency + Bank Reserves. Depositors exchanging bank deposits for CBDC shifts central bank liabilities from bank reserves to currency in circulation (MB stays constant), but commercial banks lose primary reserves, contracting their credit creation capacity."
      },
      {
        id: "q10_6",
        question: "Connecting all 4 Units: In the event of a severe economic downturn accompanied by a 'Liquidity Trap' (Keynes), which policy response is recognized as effective according to the DU readings?",
        options: [
          "Further reductions in the policy repo rate because monetary policy is most potent at r_min",
          "Direct fiscal expansion and government investment expenditure because monetary policy becomes ineffective at the liquidity trap floor",
          "Mandatory increase in the Cash Reserve Ratio to 30%",
          "Reverting to the pre-1989 administered interest rate ceiling"
        ],
        correctIndex: 1,
        explanation: "Correct: At the liquidity trap floor (r_min), speculative money demand is infinitely elastic and lowering interest rates fails to stimulate investment; hence monetary policy is useless and fiscal policy must intervene."
      }
    ]
  }
];

// ==========================================
// 25-MARK UNTIMED GRAND MOCK EXAM
// Balanced representation across Units 1 to 4
// ==========================================
export const GRAND_MOCK_EXAM = [
  // --- Unit 1 (Questions 1 to 6) ---
  {
    id: "mock_1",
    unit: 1,
    unitTitle: "Unit 1: Money & Supply",
    question: "Under the classical Quantity Theory of Money (Fisher's equation MV = PT), a doubling of the quantity of money (M) leads to an exact doubling of the price level (P) because:",
    options: [
      "Real transactions (T) and the velocity of circulation (V) are assumed constant in the short run under full employment",
      "Commercial banks hold 100% of their deposits as excess cash reserves",
      "The rate of interest is held constant at the liquidity trap minimum",
      "Government deficits are financed exclusively by external commercial borrowings"
    ],
    correctIndex: 0,
    explanation: "Correct: Classical theory assumes full employment (T is fixed at potential output) and institutional payment habits determine a stable V. Thus, changes in M directly and proportionately alter P."
  },
  {
    id: "mock_2",
    unit: 1,
    unitTitle: "Unit 1: Money & Supply",
    question: "Which of the following items is included in the Reserve Bank of India's 'M1' (Narrow Money) aggregate?",
    options: [
      "Total deposits with the Post Office Savings Bank",
      "Net time deposits of all scheduled commercial banks",
      "Currency with the public + Demand deposits with banks + Other deposits with the RBI",
      "Certificates of Deposit issued by Term Lending Institutions"
    ],
    correctIndex: 2,
    explanation: "Correct: M1 = C + DD + OD with the RBI. Time deposits belong to M3; post office savings belong to M2 and M4."
  },
  {
    id: "mock_3",
    unit: 1,
    unitTitle: "Unit 1: Money & Supply",
    question: "If required reserve ratio r = 0.10, desired excess reserve ratio e = 0.05, and currency-deposit ratio c = 0.25, the complete money multiplier (m) is equal to:",
    options: [
      "2.50",
      "3.125",
      "4.00",
      "6.67"
    ],
    correctIndex: 1,
    explanation: "Correct: Formula: m = (1 + c) / (r + e + c) = (1 + 0.25) / (0.10 + 0.05 + 0.25) = 1.25 / 0.40 = 3.125."
  },
  {
    id: "mock_4",
    unit: 1,
    unitTitle: "Unit 1: Money & Supply",
    question: "Why did the 1998 Y.V. Reddy Third Working Group propose the introduction of 'NM2' as an intermediate monetary aggregate?",
    options: [
      "To include postal time deposits that were previously ignored",
      "To separate short-term time deposits of residents (maturity up to 1 year) from long-term contractual deposits",
      "To incorporate foreign currency external deposits into narrow money",
      "To eliminate the concept of high-powered monetary base"
    ],
    correctIndex: 1,
    explanation: "Correct: NM2 captures NM1 plus short-term time deposits of residents with contractual maturity up to 1 year, reflecting liquidity differences across deposit tenors."
  },
  {
    id: "mock_5",
    unit: 1,
    unitTitle: "Unit 1: Money & Supply",
    question: "According to John Maynard Keynes, the demand for money under the 'Precautionary Motive' is primarily a function of:",
    options: [
      "The prevailing bond market interest rate",
      "The level of money income (Y)",
      "The marginal productivity of physical capital",
      "The inflation rate in international markets"
    ],
    correctIndex: 1,
    explanation: "Correct: In Keynesian theory, precautionary demand (Mp = f(Y)) is held to guard against unexpected contingencies and depends directly on the level of income."
  },
  {
    id: "mock_6",
    unit: 1,
    unitTitle: "Unit 1: Money & Supply",
    question: "In the Keynesian 'Liquidity Trap', the speculative demand for money curve becomes:",
    options: [
      "Perfectily vertical and completely inelastic to interest rate changes",
      "Upward sloping with a positive unitary elasticity",
      "Perfectily horizontal and infinitely elastic at the minimum floor interest rate",
      "A rectangular hyperbola identical to the transaction demand curve"
    ],
    correctIndex: 2,
    explanation: "Correct: At the liquidity trap floor r_min, everyone expects interest rates to rise in the future (bond prices to fall), so wealth-holders absorb all additional money as idle cash (infinitely elastic)."
  },

  // --- Unit 2 (Questions 7 to 12) ---
  {
    id: "mock_7",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets & Reforms",
    question: "In financial economics, George Akerlof's 'Lemons Problem' demonstrates that when asymmetric information exists prior to a transaction:",
    options: [
      "Low-risk (high quality) borrowers are driven out of the market because lenders charge an average interest rate",
      "Borrowers automatically take on excessive gambles after receiving funds",
      "Commercial banks reduce their reserve ratios to zero",
      "Stock exchanges replace rolling settlements with forward contracts"
    ],
    correctIndex: 0,
    explanation: "Correct: Because lenders cannot distinguish good from bad risks, they price credit at an average rate. Honest low-risk borrowers find this rate too high and exit, leaving behind 'lemons' (adverse selection)."
  },
  {
    id: "mock_8",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets & Reforms",
    question: "Why do external corporate financiers overwhelmingly prefer debt contracts over equity contracts according to Mishkin?",
    options: [
      "Because equity contracts are exempt from taxation in all OECD nations",
      "Because debt contracts reduce costly state verification by requiring lenders to audit management only upon default",
      "Because corporate managers have a fiduciary duty to maximize employee wages over profits",
      "Because banks are statutorily prohibited from owning government securities"
    ],
    correctIndex: 1,
    explanation: "Correct: Debt contracts stipulate a fixed payment. As long as payments are met, lenders incur zero auditing costs. Monitoring/state verification is required only if the borrower defaults."
  },
  {
    id: "mock_9",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets & Reforms",
    question: "Commercial Paper (CP) was introduced into the Indian money market in 1990 based on the recommendations of the:",
    options: [
      "N. Vaghul Working Group",
      "Urjit Patel Committee",
      "M. Narasimham Committee II",
      "S. L. Kirloskar Committee"
    ],
    correctIndex: 0,
    explanation: "Correct: CP was introduced in 1990 following the 1987 Vaghul Working Group report on activating short-term money market instruments."
  },
  {
    id: "mock_10",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets & Reforms",
    question: "What is the maximum permissible maturity and minimum denomination for Certificates of Deposit (CDs) issued by Indian commercial banks as stated in the SOL reading?",
    options: [
      "Maturity up to 1 year, issued in multiples of Rs. 25 lakhs subject to a minimum of Rs. 1 crore",
      "Maturity up to 5 years, issued in multiples of Rs. 1 lakh subject to a minimum of Rs. 10 lakhs",
      "Maturity of 364 days, issued in multiples of Rs. 50,000 without any ceiling",
      "Maturity of 90 days, issued exclusively to foreign institutional investors"
    ],
    correctIndex: 0,
    explanation: "Correct: As stated on page 40 of the SOL text, CDs are issued in multiples of Rs. 25 lakhs (min Rs. 1 crore) with maturity ranging between 3 months and 1 year."
  },
  {
    id: "mock_11",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets & Reforms",
    question: "Which major reform was enacted by SEBI to eliminate settlement delays and opaque broker manipulations in Indian stock exchanges?",
    options: [
      "Re-establishing the Badla system across all regional exchanges",
      "Banning the Badla system and introducing the Rolling Settlement system",
      "Mandating that only foreign institutional investors can trade equities",
      "Fixing stock prices at historical book value"
    ],
    correctIndex: 1,
    explanation: "Correct: Page 48 of the SOL text specifies that SEBI banned the notorious Badla system and introduced the transparent Rolling Settlement system."
  },
  {
    id: "mock_12",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets & Reforms",
    question: "Narasimham Committee I (1991) recommended establishing which specialized institutional framework to take over bad and doubtful bank debts at a discount?",
    options: [
      "Asset Reconstruction Fund (ARF)",
      "National Bank for Agriculture and Rural Development (NABARD)",
      "Securities Trading Corporation of India (STCI)",
      "Deposit Insurance Corporation of India"
    ],
    correctIndex: 0,
    explanation: "Correct: As documented on page 91 of the SOL text, Narasimham I recommended setting up an Asset Reconstruction Fund (ARF) to purchase bad debts at a discount and clean bank balance sheets."
  },

  // --- Unit 3 (Questions 13 to 18) ---
  {
    id: "mock_13",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates & Term Structure",
    question: "In the Classical Theory of Interest, the demand for investment capital slopes downward because:",
    options: [
      "The marginal productivity of capital is subject to the law of diminishing returns",
      "Commercial banks reduce interest rates when liquidity preference rises",
      "The velocity of money fluctuates directly with government spending",
      "Consumer price inflation increases the real cost of debt"
    ],
    correctIndex: 0,
    explanation: "Correct: Classical theory treats capital demand as derived demand based on productivity; as more capital is invested, its marginal productivity declines, so firms invest more only at lower interest rates."
  },
  {
    id: "mock_14",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates & Term Structure",
    question: "In Knut Wicksell's Loanable Funds Theory, which of the following actions represents DISHOARDING (DH)?",
    options: [
      "Withdrawing idle cash balances accumulated in the past and placing them into the active lending stream",
      "Allowing physical factory machinery to wear out without replacement",
      "Commercial banks creating new demand deposits through fractional reserves",
      "Households saving a higher fraction of their current monthly salary"
    ],
    correctIndex: 0,
    explanation: "Correct: Dishoarding means mobilizing past idle cash hoardings and supplying them into the loanable funds market when interest rates become attractive."
  },
  {
    id: "mock_15",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates & Term Structure",
    question: "The Pure Expectations Theory of the term structure of interest rates ASSUMES that bonds of different maturities are:",
    options: [
      "Completely non-substitutable due to rigid institutional regulations",
      "Perfect substitutes, implying investors care only about expected return and not maturity risk",
      "Imperfect substitutes that always require a positive liquidity risk premium",
      "Issued exclusively by the central bank at administered discount yields"
    ],
    correctIndex: 1,
    explanation: "Correct: Pure Expectations Theory assumes investors are risk-neutral and view bonds of different maturities as perfect substitutes, so long rates are simple geometric averages of expected short rates."
  },
  {
    id: "mock_16",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates & Term Structure",
    question: "If interest rates on 1-year, 2-year, and 3-year government bonds are 4%, 7%, and 9% respectively, what is the shape of the yield curve?",
    options: [
      "Inverted (downward sloping)",
      "Normal (upward sloping)",
      "Flat (horizontal)",
      "Humped with a peak at 1 year"
    ],
    correctIndex: 1,
    explanation: "Correct: Since yields increase as maturity lengthens (4% < 7% < 9%), the yield curve slopes upward, which is the normal yield curve shape."
  },
  {
    id: "mock_17",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates & Term Structure",
    question: "Why was the Benchmark Prime Lending Rate (BPLR) deemed ineffective by the RBI, prompting its replacement by the Base Rate in 2010?",
    options: [
      "Because commercial banks charged all borrowers an identical 20% interest rate",
      "Because banks engaged in widespread sub-BPLR lending to prime corporate clients while keeping retail loans artificially high",
      "Because foreign exchange reserves had dropped below statutory limits",
      "Because BPLR was calculated using the overnight call money rate"
    ],
    correctIndex: 1,
    explanation: "Correct: More than 60% of bank lending occurred below the BPLR to large corporates, creating opacity and penalizing small retail borrowers."
  },
  {
    id: "mock_18",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates & Term Structure",
    question: "Under the Marginal Cost of Funds based Lending Rate (MCLR) framework, why does a mandatory Cash Reserve Ratio (CRR) create a 'Negative Carry' for commercial banks?",
    options: [
      "Because the RBI charges banks an exorbitant fee for holding vault cash",
      "Because commercial banks earn ZERO interest from the RBI on statutory CRR balances while paying interest to depositors on those funds",
      "Because CRR balances are automatically converted into 10-year equity shares",
      "Because CRR balances reduce the capital adequacy ratio below 8%"
    ],
    correctIndex: 1,
    explanation: "Correct: Banks pay interest to acquire deposits, but the statutory CRR portion locked with the RBI yields zero return, resulting in a negative carry that must be factored into lending rates."
  },

  // --- Unit 4 (Questions 19 to 25) ---
  {
    id: "mock_19",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    question: "Which of the following theories of commercial bank portfolio management asserts that banks can maintain liquidity by purchasing funds in the money market rather than holding short-term liquid assets?",
    options: [
      "The Real Bills Doctrine",
      "The Shiftability Theory (Moulton)",
      "The Anticipated Income Theory (Prochanow)",
      "The Liabilities Management Theory"
    ],
    correctIndex: 3,
    explanation: "Correct: Liabilities Management Theory (1960s) posits that modern banks can meet liquidity needs by borrowing in the interbank market, issuing negotiable CDs, and accessing repos."
  },
  {
    id: "mock_20",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    question: "In the central banking balance sheet, when the RBI conducts an Open Market PURCHASE of securities from commercial banks:",
    options: [
      "Central bank assets (Securities) increase and central bank liabilities (Bank Reserves) increase equally",
      "Central bank liabilities fall and commercial bank vault cash falls to zero",
      "Both assets and liabilities of the central bank contract by the multiplier ratio",
      "Only the government's tax account is credited"
    ],
    correctIndex: 0,
    explanation: "Correct: When the RBI buys securities, it adds government debt to its asset portfolio and pays by crediting commercial bank reserve balances (its liabilities), expanding the monetary base."
  },
  {
    id: "mock_21",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    question: "Under William Poole's analysis of monetary policy instruments, if unpredictable shocks originate in the REAL SECTOR / AGGREGATE DEMAND (IS curve), the central bank should adopt:",
    options: [
      "An interest rate target",
      "A money supply (monetary aggregate) target",
      "A fixed foreign exchange peg",
      "A zero cash reserve requirement"
    ],
    correctIndex: 1,
    explanation: "Correct: When aggregate demand shifts unpredictably, fixing the money supply allows interest rates to rise automatically during booms (and fall during slumps), stabilizing output."
  },
  {
    id: "mock_22",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    question: "In the Reserve Bank of India's Flexible Inflation Targeting (FIT) framework, the headline inflation target is set at:",
    options: [
      "2% with a tolerance band of +/- 1%",
      "4% with a tolerance band of +/- 2%",
      "6% with a tolerance band of +/- 3%",
      "5% flat with zero tolerance"
    ],
    correctIndex: 1,
    explanation: "Correct: The statutory target is 4% CPI headline inflation with an upper tolerance limit of 6% and a lower tolerance limit of 2%."
  },
  {
    id: "mock_23",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    question: "The Standing Deposit Facility (SDF) introduced by the RBI in April 2022 serves as the floor of the LAF corridor. Its critical innovation is that:",
    options: [
      "It requires commercial banks to provide physical gold bullion as security",
      "The RBI can absorb surplus liquidity from commercial banks WITHOUT pledging government securities as collateral",
      "It carries a higher interest rate than the Marginal Standing Facility",
      "It can only be accessed by foreign institutional investors"
    ],
    correctIndex: 1,
    explanation: "Correct: Unlike traditional reverse repo, the SDF enables the RBI to absorb unlimited liquidity without being constrained by its own holding of government securities."
  },
  {
    id: "mock_24",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    question: "In an open economy with free capital flows, if the central bank reduces its policy interest rate, the exchange rate channel transmits this impulse by:",
    options: [
      "Appreciating the domestic currency, which expands imports",
      "Triggering capital outflow, depreciating the domestic currency, making exports cheaper, and increasing net exports",
      "Freezing all international trade transactions at the World Trade Organization",
      "Causing an automatic doubling of the required reserve ratio"
    ],
    correctIndex: 1,
    explanation: "Correct: Rate cuts prompt capital outflows, causing currency depreciation. A weaker currency boosts export competitiveness and dampens imports, expanding net exports and aggregate output."
  },
  {
    id: "mock_25",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    question: "What is the primary systemic financial stability concern associated with introducing an interest-bearing Retail Central Bank Digital Currency (CBDC)?",
    options: [
      "It would make printing paper currency mandatory for all citizens",
      "It could trigger commercial bank disintermediation as depositors rapidly flee commercial bank deposits for risk-free central bank digital cash during distress",
      "It would cause the money multiplier to expand to infinity",
      "It would eliminate the Reserve Bank of India's sovereign right to issue banknotes"
    ],
    correctIndex: 1,
    explanation: "Correct: Because CBDC has zero credit risk, if it paid interest or allowed frictionless conversion, depositors in panicked banks could instantly transfer deposits to CBDC, triggering rapid digital bank runs and starving the real economy of credit."
  }
];

// ==========================================
// FLASHCARDS DATASET: NAMED THEORIES,
// ECONOMISTS, COMMITTEES & KEY FORMULAS
// ==========================================
export const FLASHCARDS_DATA = [
  // --- Unit 1 ---
  {
    id: "fc_1",
    unit: 1,
    unitTitle: "Unit 1: Money & Aggregates",
    category: "Theorist & Concept",
    front: "George Crowther vs Adam Smith on the Origin of Money",
    back: "Crowther argued money was a deliberate invention requiring conscious human reasoning to move from barter to accounting. Adam Smith argued it arose rationally as a medium of exchange, not primarily as a unit of account."
  },
  {
    id: "fc_2",
    unit: 1,
    unitTitle: "Unit 1: Money & Aggregates",
    category: "Formula",
    front: "Complete Money Multiplier Formula (Baye & Jansen Ch 14)",
    back: "m = (1 + c) / (r + e + c)\nWhere:\n• c = Currency-to-deposit ratio (C/D)\n• r = Statutory required reserve ratio (RR/D)\n• e = Desired excess reserve ratio (ER/D)\nTotal Money Supply M = m × MB (Monetary Base)."
  },
  {
    id: "fc_3",
    unit: 1,
    unitTitle: "Unit 1: Money & Aggregates",
    category: "Committee",
    front: "1998 Y.V. Reddy Third Working Group on Money Supply",
    back: "Proposed New Monetary Aggregates (NM1, NM2, NM3) and Liquidity Aggregates (L1, L2, L3) to reflect deregulation, distinguishing short-term time deposits (<1 yr) from long-term deposits and including post office, FI, and NBFC deposits."
  },
  {
    id: "fc_4",
    unit: 1,
    unitTitle: "Unit 1: Money & Aggregates",
    category: "Theory Critique",
    front: "Michal Kalecki's Critique of Fisher's Quantity Theory",
    back: "Kalecki disproved Fisher's assumption of constant velocity V. He showed V varies directly with the interest rate: high interest rates make holding idle cash expensive, forcing people to economize cash and turn over money faster (raising V)."
  },

  // --- Unit 2 ---
  {
    id: "fc_5",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets",
    category: "Theorist & Model",
    front: "George Akerlof's 'Lemons Problem' in Credit Markets",
    back: "Pre-contractual asymmetric information leads to Adverse Selection. Lenders unable to identify borrower quality charge an average interest rate. Good borrowers drop out; bad credit risks dominate the applicant pool."
  },
  {
    id: "fc_6",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets",
    category: "Theorist & Model",
    front: "Stiglitz-Weiss Model of Credit Rationing",
    back: "Banks do not raise interest rates to clear excess loan demand because higher rates induce adverse selection and moral hazard, ultimately lowering expected bank returns. Banks ration credit instead."
  },
  {
    id: "fc_7",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets",
    category: "Committee",
    front: "N. Vaghul Working Group (1987)",
    back: "Recommended widening Indian money market instruments: established DFHI in April 1988, introduced Certificates of Deposit (CD) in 1989, Commercial Paper (CP) in 1990, and deregulated money market interest ceilings in May 1989."
  },
  {
    id: "fc_8",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets",
    category: "Committee",
    front: "Narasimham Committee I (1991) vs II (1998)",
    back: "Narasimham I (1991): 8% CAR, objective asset classification (Standard, Substandard, Doubtful, Loss), reduction in CRR/SLR, DRTs, private bank licenses.\nNarasimham II (1998): 90-day NPA norm by 2002, general provisioning on standard assets, marked-to-market G-Secs."
  },
  {
    id: "fc_9",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets",
    category: "Historical Period",
    front: "Pre-1991 'Financial Repression' (Rakesh Mohan & Partha Ray)",
    back: "High statutory pre-emptions (CRR peaked at 15%, SLR peaked at 38.5% = >53% pre-emption for govt deficit financing), administered interest rates, directed priority credit (40%), and lack of modern financial markets."
  },
  {
    id: "fc_10",
    unit: 2,
    unitTitle: "Unit 2: Financial Markets",
    category: "Regulation",
    front: "Indian Commercial Paper (CP) Eligibility Rules",
    back: "Listed company with net worth ≥ Rs. 10 cr, working capital limit ≥ Rs. 25 cr, P1+ rating, current ratio ≥ 1.33:1. Minimum issue Rs. 1 cr in multiples of Rs. 25 lakhs. Maturity 3 to 6 months. Max 20% of working capital limit."
  },

  // --- Unit 3 ---
  {
    id: "fc_11",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates",
    category: "Theorist & Concept",
    front: "Classical Theory vs Loanable Funds vs Liquidity Preference",
    back: "• Classical (Marshall/Fisher): Real theory, S = I.\n• Loanable Funds (Wicksell/Ohlin): Neoclassical, LD (I+H+DS) = LS (S+DH+DI+BM).\n• Liquidity Preference (Keynes): Pure monetary, DM (MT+MP+MSp) = SM. Interest is reward for parting with liquidity."
  },
  {
    id: "fc_12",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates",
    category: "Theorist & Concept",
    front: "Preferred Habitat Theory (Modigliani & Sutch)",
    back: "Synthesis of Expectations Theory and Segmented Markets. Long-term rate equals expected average future short rates PLUS a term/liquidity risk premium that increases with maturity. Investors have preferred habitats but will migrate for a yield premium."
  },
  {
    id: "fc_13",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates",
    category: "Formula",
    front: "Forward Interest Rate (Pure Expectations Hypothesis)",
    back: "(1 + i_2t)^2 = (1 + i_1t) × (1 + i^e_{1,t+1})\nRearranged:\ni^e_{1,t+1} = [(1 + i_2t)^2 / (1 + i_1t)] - 1\nExample: If i_1 = 4% and i_2 = 7%, expected 1-yr rate next year is 10.09%."
  },
  {
    id: "fc_14",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates",
    category: "Institutional Milestone",
    front: "Evolution of Bank Lending Benchmarks in India",
    back: "PLR (Opaque) → BPLR (2003, failed due to >60% sub-BPLR lending) → Base Rate (2010, average cost of funds) → MCLR (2016, 4 marginal components) → EBLR (Oct 2019, direct external benchmark link like Repo or T-Bills)."
  },
  {
    id: "fc_15",
    unit: 3,
    unitTitle: "Unit 3: Interest Rates",
    category: "Formula Components",
    front: "Four Statutory Components of MCLR (RBI 2016)",
    back: "1. Marginal Cost of Funds (borrowing & incremental deposit costs)\n2. Negative Carry on CRR (zero return on required statutory reserves)\n3. Operating Costs of the bank\n4. Tenor Premium (liquidity cost of lending for longer durations)."
  },

  // --- Unit 4 ---
  {
    id: "fc_16",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    category: "Theorist & Policy Rule",
    front: "William Poole's Instrument Choice Rule (1970)",
    back: "• If economic shocks originate in the REAL sector (IS curve / aggregate demand volatile), target the MONEY SUPPLY.\n• If shocks originate in the MONETARY sector (LM curve / money demand volatile), target the INTEREST RATE."
  },
  {
    id: "fc_17",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    category: "Theorist & Concept",
    front: "Four Classical Bank Liquidity Theories (SOL Reading)",
    back: "1. Real Bills Doctrine: Short-term self-liquidating trade bills.\n2. Shiftability Theory (H.G. Moulton): Assets saleable to other banks/central bank without loss.\n3. Anticipated Income Theory (H.V. Prochanow): Term loans repaid in installments from borrower income.\n4. Liabilities Management Theory (1960s): Buying liquidity in money markets (CDs, borrowings)."
  },
  {
    id: "fc_18",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    category: "Institutional Milestone",
    front: "Urjit Patel Committee (2014) & Monetary Policy Committee (MPC)",
    back: "Shifted India to Flexible Inflation Targeting (4% CPI ± 2%). Established 6-member MPC (3 RBI, 3 Govt-appointed). RBI Governor has casting vote in 3-3 ties. Failure = 3 consecutive quarters outside 2%-6% band."
  },
  {
    id: "fc_19",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    category: "Liquidity Tool",
    front: "Standing Deposit Facility (SDF) vs Marginal Standing Facility (MSF)",
    back: "• SDF (April 2022): Floor of LAF (Repo - 25 bps). Absorbs surplus liquidity from banks WITHOUT collateral of G-Secs.\n• MSF: Ceiling of LAF (Repo + 25 bps). Penal overnight emergency borrowing against SLR quota G-Secs."
  },
  {
    id: "fc_20",
    unit: 4,
    unitTitle: "Unit 4: Central Banking & Policy",
    category: "Digital Frontier",
    front: "T. Rabi Sankar (2021) & Central Bank Digital Currency (CBDC)",
    back: "CBDC is sovereign legal tender, direct central bank liability, exchangeable 1:1 with cash. Wholesale (CBDC-W) for interbank settlement; Retail (CBDC-R) distributed in a two-tier model via bank wallets. Non-interest-bearing to prevent bank disintermediation."
  }
];
