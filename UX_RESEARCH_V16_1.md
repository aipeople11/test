# V16.1 UI/UX Research Basis

This build borrows interaction/editorial principles, not visual copies, from strong public web patterns.

## Editorial/data storytelling
- **Our World in Data — Data Insights:** one takeaway, one chart, short explanation, deeper link.
  https://ourworldindata.org/launching-data-insights
- **Stanford HAI — AI Index:** numbered findings, visual evidence and concise interpretation.
  https://hai.stanford.edu/ai-index/2026-ai-index-report/public-opinion

Applied in V16.1 through the homepage signal stage and the principle that each data point should communicate a human implication rather than act as decoration.

## Interaction and premium motion
- **Vercel Web Interface Guidelines:** visible focus, 44px mobile hit targets, transform/opacity motion, reduced motion, layered shadows and deliberate interaction states.
  https://vercel.com/design/guidelines
- **Framer animation guidance:** motion should support hierarchy/continuity, be tested across breakpoints and remain understandable if the animation is skipped.
  https://www.framer.com/academy/lessons/framer-animations-scroll-transform
- **W3C WCAG motion guidance:** non-essential motion should respect `prefers-reduced-motion`.
  https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions

Applied in V16.1 through subtle reveal motion, GPU-friendly transforms, animated data fills, sticky story navigation, reduced-motion fallbacks and progressive View Transitions.

## Community discovery
- **Friends of Figma:** connects global identity with local groups, events, learning and participation.
  https://friends.figma.com/

Applied by keeping recurring global/local/topic/open connection formats visible without claiming local chapters before they exist.

## V16.1 visual rule
The premium effect should come from hierarchy, rhythm and restrained motion — not from gratuitous animation. Static comprehension remains the baseline; motion only adds orientation or deliberate delight.
