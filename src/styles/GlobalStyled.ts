import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  :root {
    /* ── paleta bold roxo ── */
    --bg:           #0b0714;
    --bg-surface:   #0e0a1a;
    --bg-elevated:  #14101f;
    --border:       rgba(255,255,255,0.08);
    --border-light: rgba(255,255,255,0.05);
    --text:         #f4f1fb;
    --text-muted:   rgba(244,241,251,0.45);
    --text-subtle:  rgba(244,241,251,0.66);

    --accent:       #e879f9;
    --accent-2:     #a78bfa;
    --accent-3:     #818cf8;
    --accent-dim:   rgba(232,121,249,0.14);
    --accent-hover: #f0abfc;
    --green:        #34d399;
    --green-dim:    rgba(52,211,153,0.15);

    --grad-bold:    linear-gradient(135deg,#3b0a63 0%,#6d28d9 46%,#a21caf 100%);

    --font-display: 'Space Grotesk', sans-serif;
    --font-body:    'Plus Jakarta Sans', sans-serif;
    --font-mono:    'JetBrains Mono', monospace;

    /* legados */
    --colorPrimary: #e879f9;
    --colorSecond:  #f4f1fb;
    --bgcolor:      rgba(0,0,0,0.5);
    --bgcolor2:     rgba(11,7,20,0.85);
    --bgsecond:     #0e0a1a;
    --Color-gray-150: #14101f;
    --Color-gray-100: #0b0714;
    --Color-grey-50:  rgba(244,241,251,0.45);
    --Color-grey-20:  rgba(255,255,255,0.08);
    --Color-grey-05:  #0e0a1a;
    --Color-grey-0:   #f4f1fb;
    --Color-Negative: #f85149;
    --Color-Warning:  #e3b341;
    --Color-Sucess:   #34d399;
    --Color-Information: #e879f9;
  }

  @keyframes gridPan { from { background-position: 0 0; } to { background-position: 56px 56px; } }
  @keyframes floaty { 0%,100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-16px) rotate(-4deg); } }
  @keyframes auroraA { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(60px,-40px) scale(1.15); } 66% { transform: translate(-30px,50px) scale(0.92); } }
  @keyframes auroraB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-70px,40px) scale(1.2); } }
  @keyframes gradText { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
  @keyframes pulseDot { 0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(52,211,153,0.5); } 50% { opacity: 0.7; box-shadow: 0 0 0 7px rgba(52,211,153,0); } }

  *, *::before, *::after { box-sizing: border-box; }

  #root { display: flex; }

  body {
    font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: var(--bg);
    color: var(--text);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar { width: 0px; }

  .container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    padding: 0 40px;
  }

  @media (max-width: 1000px) {
    .container { padding: 0 24px; }
  }
`;
