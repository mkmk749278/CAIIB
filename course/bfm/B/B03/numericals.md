# B03 numericals

Every sum is checked two ways by `check_b03.py` (way 1: exact formula; way 2: the basic-calculator key presses,
12-digit display). All data illustrative. Keys: the IIBF-allowed calculator (+ − × ÷ % √); running totals written in
the notebook table; squares keyed "d × d =".

## N1 · Two branches, same mean, different swing (worked, N013–N038)
Daily cash shortfalls, ₹ thousand. A: 4, 6, 5, 3, 7. B: 1, 9, 2, 10, 3.
- Mean A: `4 + 6 + 5 + 3 + 7 = 25 ÷ 5 = 5`. Mean B: `1 + 9 + 2 + 10 + 3 = 25 ÷ 5 = 5`.
- A: deviations −1, +1, 0, −2, +2; squares `1×1=1, 1×1=1, 0, 2×2=4, 2×2=4`; `1+1+0+4+4 = 10 ÷ 5 = 2` (variance);
  `2 √` = **1.4142** (SD).
- B: deviations −4, +4, −3, +5, −2; squares 16, 16, 9, 25, 4; `16+16+9+25+4 = 70 ÷ 5 = 14` (variance); `14 √` =
  **3.7417** (SD). B is riskier.

## N2 · Bond returns (learner's own try, N040–N045)
Returns %: 3, −2, 4, 1, −1. Mean `3 − 2 + 4 + 1 − 1 = 5 ÷ 5 = 1`. Deviations 2, −3, 3, 0, −2; squares 4, 9, 9, 0, 4;
`4+9+9+0+4 = 26 ÷ 5 = 5.2` (variance, %²); `5.2 √` = **2.2804%**.
- Error line: ÷ 4 (n − 1, sample) gives 6.5 and SD **2.5495** — only if the question says "sample".
- Shortcut: squares of values 9, 4, 16, 1, 1; `9+4+16+1+1 = 31 ÷ 5 = 6.2 − 1 = 5.2` (mean² = 1 × 1 = 1).

## N3 · Mean–variance choice (N052–N055; check N066–N067)
P: mean 10%, SD 5%; Q: mean 15%, SD 9%. CV `5 ÷ 10 = 0.5`, `9 ÷ 15 = 0.6` → **P** (lower risk per unit of return).
Check: X mean 20, SD 8 → `8 ÷ 20 = 0.4`; Y mean 10, SD 5 → `5 ÷ 10 = 0.5` → **X**.

## N4 · Daily to annual (worked, N079)
Daily σ 1.2%, 250 days. `250 √ = 15.8114 × 1.2 = 18.9737` → **18.97%** a year. (Error line N075/N072: 1% × 250 =
250% forgets the root.)

## N5 · Annual to 10-day (faded, N080–N083)
Annual σ 20%, 250 days. `10 ÷ 250 = 0.04 √ = 0.2 × 20 = 4` → **4%**. Check: `250 ÷ 10 = 25 √ = 5`, `20 ÷ 5 = 4`.
Error line: 20 ÷ 25 = 0.8 divides by the days, not by their root.

## N6 · n-day to 1-day (learner alone, N084–N085)
49-day σ 35%. `49 √ = 7`, `35 ÷ 7 = 5` → **5%**.

## N7 · Check (N089–N090)
Daily σ 0.8%, 16 days. `16 √ = 4 × 0.8 = 3.2` → **3.2%**.

## N8 · Normal range (N061–N062)
Mean 5, SD 2, about 95% within ± 2 SD: `2 × 2 = 4`, `5 − 4 = 1`, `5 + 4 = 9` → **1 to 9** (₹ thousand).

## Mixed round (N093–N098) and homework (N106)
- Values 2, 4, 6: mean 4; squares of deviations 4, 0, 4; `8 ÷ 3 = 2.6667`; `√ = 1.63` (1.6330).
- 36-day σ 18%: `36 √ = 6`, `18 ÷ 6 = 3` → 3%.
- Variance 25 (₹²) → SD 5 ₹.
- Homework: 8, 10, 12 → mean 10, squares 4, 0, 4, variance 2.6667, SD 1.6330; 0.5% a day × √250 (15.8114) =
  7.9057% a year.
