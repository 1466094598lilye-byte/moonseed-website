// Copied from Moonseed (private repo) apps/desktop/src/ui/SvgDefs.tsx (snapshot 2026-10-17, e21bb47). 网站的副本，不跟 app 同步。
// Generated from docs/design/defs-main.svg (design export) - regenerate rather than hand-edit.
// Conversion: sc-camel-foo-bar -> fooBar (viewBox / patternUnits / ...), hyphenated SVG attributes
// -> React camelCase props (stroke-width -> strokeWidth), class -> className, style -> object.
//
// Symbols (47): s1a..s15c = 15 species x 3 stages (a sprout / b shoot / c full), sSeed, sX.
// Every plant is drawn with the ground at (0, 0) and grows toward negative y, so
// <use href="#s4c" x={gx} y={groundY} /> plants it on the ground line. See Plant.tsx.
//
// Mount once near the app root; every <use href="#..."> in the document resolves against it.
export function SvgDefs() {
  return (
    <svg width={0} height={0} style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <g id="sSeed">
          <path d="M0 0 c-5 0 -8 -5 -8 -11 c0 -7 4 -12 8 -16 c4 4 8 9 8 16 c0 6 -3 11 -8 11z" fill="#e0a04f" stroke="#e8dfc8" strokeWidth="2.2" />
          <line x1="0" y1="-24" x2="0" y2="0" stroke="#0f1a17" strokeWidth="1.6" />
        </g>
        <g id="s1a" fill="none" stroke="#e8dfc8" strokeWidth="2.4" strokeLinecap="round">
          <path d="M0 0 c-3 -10 4 -14 2 -26" />
          <path d="M2 -20 c8 -2 12 3 14 8" />
          <ellipse cx="16" cy="-10" rx="3.5" ry="5" fill="#4f8a7a" />
        </g>
        <g id="s1b" fill="none" stroke="#e8dfc8" strokeWidth="2.4" strokeLinecap="round">
          <path d="M0 0 c-4 -18 6 -26 2 -46 c-2 -8 3 -12 2 -18" />
          <path d="M1 -34 c-10 -3 -16 3 -18 10" />
          <path d="M2 -52 c10 -2 14 4 16 10" />
          <ellipse cx="-18" cy="-22" rx="4" ry="5.5" fill="#4f8a7a" />
          <ellipse cx="18" cy="-40" rx="4" ry="5.5" fill="#4f8a7a" />
          <ellipse cx="4" cy="-66" rx="6" ry="2.5" />
        </g>
        <g id="s1c" fill="none" stroke="#e8dfc8" strokeWidth="2.6" strokeLinecap="round">
          <path d="M0 0 c-6 -22 8 -32 2 -56 c-4 -16 6 -24 4 -40 c-1 -10 4 -14 2 -22" />
          <path d="M-2 -40 c-12 -4 -20 4 -22 14" />
          <path d="M3 -66 c12 -3 20 4 22 14" />
          <path d="M4 -92 c-10 -3 -16 3 -18 10" />
          <ellipse cx="-24" cy="-24" rx="4.5" ry="6.5" fill="#4f8a7a" />
          <ellipse cx="26" cy="-50" rx="4.5" ry="6.5" fill="#4f8a7a" />
          <ellipse cx="-14" cy="-80" rx="4" ry="6" fill="#4f8a7a" />
          <ellipse cx="8" cy="-120" rx="12" ry="4.5" />
          <ellipse cx="8" cy="-120" rx="6" ry="2" fill="#e0a04f" />
        </g>
        <g id="s2a" fill="none" stroke="#e8dfc8" strokeWidth="2.2" strokeLinecap="round">
          <path d="M0 0 c1 -10 8 -16 16 -14" />
          <ellipse cx="17" cy="-8" rx="3.5" ry="5" fill="#c75b8f" />
          <circle cx="17" cy="-9" r="1" fill="#e8dfc8" stroke="none" />
        </g>
        <g id="s2b" fill="none" stroke="#e8dfc8" strokeWidth="2.2" strokeLinecap="round">
          <path d="M0 0 c-2 -20 4 -30 2 -44" />
          <path d="M1 -30 c-10 -4 -18 2 -20 12" />
          <path d="M2 -44 c10 -4 18 2 20 12" />
          <ellipse cx="-20" cy="-12" rx="4" ry="5.5" fill="#c75b8f" />
          <ellipse cx="22" cy="-26" rx="4" ry="5.5" fill="#c75b8f" />
          <ellipse cx="2" cy="-50" rx="3" ry="4.5" fill="#c75b8f" />
          <g fill="#e8dfc8" stroke="none">
            <circle cx="-20" cy="-13" r="1" />
            <circle cx="22" cy="-27" r="1" />
          </g>
        </g>
        <g id="s2c" fill="none" stroke="#e8dfc8" strokeWidth="2.4" strokeLinecap="round">
          <path d="M0 0 c-4 -30 8 -44 2 -80 c-2 -14 3 -18 2 -26" />
          <path d="M-1 -34 c-14 -4 -22 4 -24 16" />
          <path d="M3 -60 c14 -4 22 4 24 16" />
          <path d="M2 -84 c-12 -4 -18 2 -20 12" />
          <ellipse cx="-25" cy="-12" rx="4.5" ry="6.5" fill="#c75b8f" />
          <ellipse cx="27" cy="-38" rx="4.5" ry="6.5" fill="#c75b8f" />
          <ellipse cx="-18" cy="-66" rx="4" ry="6" fill="#c75b8f" />
          <ellipse cx="2" cy="-112" rx="4.5" ry="7" fill="#c75b8f" />
          <g fill="#e8dfc8" stroke="none">
            <circle cx="-25" cy="-13" r="1.2" />
            <circle cx="27" cy="-39" r="1.2" />
            <circle cx="-18" cy="-67" r="1.1" />
            <circle cx="2" cy="-113" r="1.2" />
          </g>
        </g>
        <g id="s3a" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M-4 0 V-18 a4 2.4 0 0 1 8 0 V0Z" fill="#d96a4b" />
          <ellipse cx="0" cy="-18" rx="4" ry="2.4" fill="#0f1a17" strokeWidth="1.6" />
        </g>
        <g id="s3b" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M-14 0 V-30 a4 2.4 0 0 1 8 0 V0Z" fill="#d96a4b" />
          <path d="M7 0 V-36 a4 2.4 0 0 1 8 0 V0Z" fill="#d96a4b" />
          <path d="M-5 0 V-48 a5 3 0 0 1 10 0 V0Z" fill="#d96a4b" />
          <g fill="#0f1a17" strokeWidth="1.6">
            <ellipse cx="-10" cy="-30" rx="4" ry="2.4" />
            <ellipse cx="11" cy="-36" rx="4" ry="2.4" />
            <ellipse cx="0" cy="-48" rx="5" ry="3" />
          </g>
        </g>
        <g id="s3c" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M-26 0 V-40 a4 2.4 0 0 1 8 0 V0Z" fill="#d96a4b" />
          <path d="M18 0 V-52 a4 2.4 0 0 1 8 0 V0Z" fill="#d96a4b" />
          <path d="M27 0 V-28 a3 1.8 0 0 1 6 0 V0Z" fill="#d96a4b" />
          <path d="M-17 0 V-64 a5 3 0 0 1 10 0 V0Z" fill="#d96a4b" />
          <path d="M7 0 V-78 a5 3 0 0 1 10 0 V0Z" fill="#d96a4b" />
          <path d="M-6 0 V-96 a6 3.6 0 0 1 12 0 V0Z" fill="#d96a4b" />
          <g fill="#0f1a17" strokeWidth="1.6">
            <ellipse cx="-22" cy="-40" rx="4" ry="2.4" />
            <ellipse cx="22" cy="-52" rx="4" ry="2.4" />
            <ellipse cx="30" cy="-28" rx="3" ry="1.8" />
            <ellipse cx="-12" cy="-64" rx="5" ry="3" />
            <ellipse cx="12" cy="-78" rx="5" ry="3" />
            <ellipse cx="0" cy="-96" rx="6" ry="3.6" />
          </g>
        </g>
        <g id="s4a" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M0 0 c1 -10 -1 -16 0 -22" fill="none" />
          <ellipse cx="0" cy="-16" rx="9" ry="3" fill="#8f7ad1" />
          <circle cx="0" cy="-24" r="2" fill="#e8dfc8" />
        </g>
        <g id="s4b" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M0 0 c2 -20 -2 -34 0 -56" fill="none" />
          <ellipse cx="0" cy="-18" rx="14" ry="4.5" fill="#8f7ad1" />
          <ellipse cx="0" cy="-34" rx="10" ry="3.2" fill="#8f7ad1" />
          <ellipse cx="0" cy="-48" rx="6" ry="2" fill="#8f7ad1" />
          <circle cx="0" cy="-58" r="2.5" fill="#e8dfc8" />
        </g>
        <g id="s4c" stroke="#e8dfc8" strokeWidth="2.4">
          <path d="M0 0 c3 -36 -3 -60 0 -104" fill="none" />
          <ellipse cx="0" cy="-22" rx="22" ry="7" fill="#8f7ad1" />
          <ellipse cx="0" cy="-42" rx="18" ry="5.8" fill="#8f7ad1" />
          <ellipse cx="0" cy="-60" rx="14" ry="4.5" fill="#8f7ad1" />
          <ellipse cx="0" cy="-76" rx="10" ry="3.2" fill="#8f7ad1" />
          <ellipse cx="0" cy="-90" rx="6" ry="2" fill="#8f7ad1" />
          <circle cx="0" cy="-108" r="3.5" fill="#8f7ad1" />
        </g>
        <g id="s5a" fill="none" strokeLinecap="round">
          <g stroke="#e8dfc8" strokeWidth="3.6">
            <path d="M0 0 c-4 -8 -10 -12 -14 -16" />
            <path d="M0 0 c0 -10 2 -16 2 -22" />
            <path d="M0 0 c4 -6 10 -10 14 -14" />
          </g>
          <g stroke="#5cc3c9" strokeWidth="1.4">
            <path d="M0 0 c-4 -8 -10 -12 -14 -16" />
            <path d="M0 0 c0 -10 2 -16 2 -22" />
            <path d="M0 0 c4 -6 10 -10 14 -14" />
          </g>
          <g fill="#e8dfc8">
            <circle cx="-14" cy="-16" r="1.8" />
            <circle cx="2" cy="-22" r="1.8" />
            <circle cx="14" cy="-14" r="1.8" />
          </g>
        </g>
        <g id="s5b" fill="none" strokeLinecap="round">
          <g stroke="#e8dfc8" strokeWidth="3.6">
            <path d="M0 0 c-8 -12 -18 -18 -24 -28" />
            <path d="M0 0 c-4 -16 -6 -28 -10 -40" />
            <path d="M0 0 c0 -18 4 -30 2 -46" />
            <path d="M0 0 c6 -14 14 -22 16 -38" />
            <path d="M0 0 c10 -10 20 -14 26 -24" />
          </g>
          <g stroke="#5cc3c9" strokeWidth="1.4">
            <path d="M0 0 c-8 -12 -18 -18 -24 -28" />
            <path d="M0 0 c-4 -16 -6 -28 -10 -40" />
            <path d="M0 0 c0 -18 4 -30 2 -46" />
            <path d="M0 0 c6 -14 14 -22 16 -38" />
            <path d="M0 0 c10 -10 20 -14 26 -24" />
          </g>
          <g fill="#e8dfc8">
            <circle cx="-24" cy="-28" r="2" />
            <circle cx="-10" cy="-40" r="2" />
            <circle cx="2" cy="-46" r="2" />
            <circle cx="16" cy="-38" r="2" />
            <circle cx="26" cy="-24" r="2" />
          </g>
        </g>
        <g id="s5c" fill="none" strokeLinecap="round">
          <g stroke="#e8dfc8" strokeWidth="4">
            <path d="M0 0 c-12 -20 -30 -28 -34 -50" />
            <path d="M0 0 c-8 -26 -16 -44 -22 -68 c-2 -8 4 -12 8 -14" />
            <path d="M0 0 c-2 -30 -4 -52 -6 -84" />
            <path d="M0 0 c2 -30 8 -56 6 -80 c0 -8 6 -10 10 -8" />
            <path d="M0 0 c8 -24 18 -40 22 -64" />
            <path d="M0 0 c14 -16 30 -26 36 -44" />
            <path d="M0 0 c18 -8 32 -12 40 -22" />
          </g>
          <g stroke="#5cc3c9" strokeWidth="1.6">
            <path d="M0 0 c-12 -20 -30 -28 -34 -50" />
            <path d="M0 0 c-8 -26 -16 -44 -22 -68 c-2 -8 4 -12 8 -14" />
            <path d="M0 0 c-2 -30 -4 -52 -6 -84" />
            <path d="M0 0 c2 -30 8 -56 6 -80 c0 -8 6 -10 10 -8" />
            <path d="M0 0 c8 -24 18 -40 22 -64" />
            <path d="M0 0 c14 -16 30 -26 36 -44" />
            <path d="M0 0 c18 -8 32 -12 40 -22" />
          </g>
          <g fill="#e8dfc8">
            <circle cx="-34" cy="-50" r="2.2" />
            <circle cx="-14" cy="-82" r="2.2" />
            <circle cx="-6" cy="-84" r="2.2" />
            <circle cx="16" cy="-88" r="2.2" />
            <circle cx="22" cy="-64" r="2.2" />
            <circle cx="36" cy="-44" r="2.2" />
            <circle cx="40" cy="-22" r="2.2" />
          </g>
        </g>
        <g id="s6a" stroke="#e8dfc8" strokeWidth="2.2">
          <circle cx="0" cy="-6" r="6" fill="#b7c94a" />
          <g fill="#0f1a17" stroke="none">
            <circle cx="-2" cy="-7" r=".9" />
            <circle cx="2" cy="-5" r=".9" />
          </g>
        </g>
        <g id="s6b" stroke="#e8dfc8" strokeWidth="2.2">
          <circle cx="-8" cy="-7" r="7" fill="#b7c94a" />
          <circle cx="8" cy="-8" r="8" fill="#b7c94a" />
          <circle cx="1" cy="-20" r="7" fill="#b7c94a" />
          <g fill="#0f1a17" stroke="none">
            <circle cx="-9" cy="-8" r=".9" />
            <circle cx="7" cy="-10" r=".9" />
            <circle cx="10" cy="-6" r=".9" />
            <circle cx="0" cy="-22" r=".9" />
            <circle cx="3" cy="-18" r=".9" />
          </g>
          <path d="M1 -27 c1 -8 -2 -12 0 -18" fill="none" strokeWidth="1.4" />
          <circle cx="1" cy="-46" r="1.6" fill="#e8dfc8" />
        </g>
        <g id="s6c" stroke="#e8dfc8" strokeWidth="2.4">
          <circle cx="-20" cy="-8" r="8" fill="#b7c94a" />
          <circle cx="-4" cy="-9" r="9" fill="#b7c94a" />
          <circle cx="12" cy="-8" r="8" fill="#b7c94a" />
          <circle cx="26" cy="-6" r="6" fill="#b7c94a" />
          <circle cx="-12" cy="-22" r="8" fill="#b7c94a" />
          <circle cx="6" cy="-24" r="9" fill="#b7c94a" />
          <circle cx="-2" cy="-38" r="8" fill="#b7c94a" />
          <circle cx="0" cy="-52" r="6" fill="#b7c94a" />
          <g fill="#0f1a17" stroke="none">
            <circle cx="-22" cy="-10" r="1" />
            <circle cx="-6" cy="-11" r="1" />
            <circle cx="0" cy="-6" r="1" />
            <circle cx="12" cy="-10" r="1" />
            <circle cx="-14" cy="-24" r="1" />
            <circle cx="6" cy="-26" r="1" />
            <circle cx="9" cy="-21" r="1" />
            <circle cx="-4" cy="-40" r="1" />
            <circle cx="0" cy="-54" r="1" />
          </g>
          <g fill="none" strokeWidth="1.4">
            <path d="M-2 -58 c-2 -10 2 -14 0 -22" />
            <path d="M3 -57 c4 -8 8 -10 10 -18" />
          </g>
          <circle cx="-2" cy="-82" r="1.8" fill="#e8dfc8" />
          <circle cx="13" cy="-77" r="1.8" fill="#e8dfc8" />
        </g>
        <g id="s7a" stroke="#e8dfc8">
          <ellipse cx="0" cy="-1" rx="5" ry="2" fill="#e29aa8" strokeWidth="1.8" />
          <path d="M0 -2 c2 -8 -2 -14 0 -20" fill="none" strokeWidth="1.2" />
          <circle cx="0" cy="-26" r="5" fill="#e29aa8" strokeWidth="2" />
          <circle cx="-2" cy="-28" r="1" fill="#e8dfc8" stroke="none" />
        </g>
        <g id="s7b" stroke="#e8dfc8">
          <ellipse cx="0" cy="-1" rx="6" ry="2.2" fill="#e29aa8" strokeWidth="1.8" />
          <path d="M-2 -2 c-4 -14 -2 -26 -8 -36" fill="none" strokeWidth="1.2" />
          <path d="M2 -2 c4 -18 0 -32 8 -48" fill="none" strokeWidth="1.2" />
          <circle cx="-9" cy="-42" r="6" fill="#e29aa8" strokeWidth="2" />
          <circle cx="9" cy="-55" r="7" fill="#e29aa8" strokeWidth="2" />
          <g fill="#e8dfc8" stroke="none">
            <circle cx="-11" cy="-44" r="1.1" />
            <circle cx="7" cy="-58" r="1.2" />
          </g>
        </g>
        <g id="s7c" stroke="#e8dfc8">
          <ellipse cx="0" cy="-1" rx="8" ry="2.6" fill="#e29aa8" strokeWidth="2" />
          <g fill="none" strokeWidth="1.2">
            <path d="M-3 -2 c-8 -20 -10 -36 -16 -54" />
            <path d="M-1 -2 c-2 -30 -6 -56 -4 -84" />
            <path d="M2 -2 c6 -24 8 -46 12 -68" />
            <path d="M4 -2 c10 -14 16 -26 20 -40" />
          </g>
          <circle cx="-20" cy="-61" r="7" fill="#e29aa8" strokeWidth="2.2" />
          <circle cx="-6" cy="-93" r="9" fill="#e29aa8" strokeWidth="2.2" />
          <circle cx="15" cy="-77" r="8" fill="#e29aa8" strokeWidth="2.2" />
          <circle cx="25" cy="-47" r="6" fill="#e29aa8" strokeWidth="2.2" />
          <g fill="#e8dfc8" stroke="none">
            <circle cx="-23" cy="-64" r="1.2" />
            <circle cx="-9" cy="-97" r="1.5" />
            <circle cx="12" cy="-80" r="1.3" />
            <circle cx="23" cy="-49" r="1.1" />
          </g>
        </g>
        <g id="s8a" fill="none" strokeLinecap="round">
          <path d="M0 0 c-2 -10 6 -14 4 -24" stroke="#e8dfc8" strokeWidth="5" />
          <path d="M0 0 c-2 -10 6 -14 4 -24" stroke="#e0a04f" strokeWidth="2.2" />
          <g stroke="#e8dfc8" strokeWidth="1.6">
            <path d="M-4 -8 h6" />
            <path d="M-1 -15 h6" />
          </g>
          <circle cx="4" cy="-25" r="1.6" fill="#e8dfc8" stroke="none" />
        </g>
        <g id="s8b" fill="none" strokeLinecap="round">
          <path d="M0 0 c-4 -20 10 -26 4 -48 c-2 -8 4 -12 6 -18" stroke="#e8dfc8" strokeWidth="5.4" />
          <path d="M0 0 c-4 -20 10 -26 4 -48 c-2 -8 4 -12 6 -18" stroke="#e0a04f" strokeWidth="2.4" />
          <g stroke="#e8dfc8" strokeWidth="1.6">
            <path d="M-5 -10 h7" />
            <path d="M-3 -20 h8" />
            <path d="M2 -30 h8" />
            <path d="M2 -40 h7" />
            <path d="M0 -50 h7" />
            <path d="M4 -58 h6" />
          </g>
          <circle cx="10" cy="-67" r="1.8" fill="#e8dfc8" stroke="none" />
        </g>
        <g id="s8c" fill="none" strokeLinecap="round">
          <path d="M0 0 c-6 -30 14 -40 6 -74 c-4 -16 8 -22 10 -40 c1 -8 -4 -10 -8 -14" stroke="#e8dfc8" strokeWidth="6" />
          <path d="M0 0 c-6 -30 14 -40 6 -74 c-4 -16 8 -22 10 -40 c1 -8 -4 -10 -8 -14" stroke="#e0a04f" strokeWidth="2.8" />
          <g stroke="#e8dfc8" strokeWidth="1.8">
            <path d="M-7 -12 h8" />
            <path d="M-6 -24 h9" />
            <path d="M-2 -36 h10" />
            <path d="M4 -48 h9" />
            <path d="M5 -60 h8" />
            <path d="M3 -72 h9" />
            <path d="M3 -84 h9" />
            <path d="M6 -96 h9" />
            <path d="M10 -108 h8" />
          </g>
          <circle cx="8" cy="-129" r="2" fill="#e8dfc8" stroke="none" />
        </g>
        <g id="s9a" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M0 0 v-12" fill="none" />
          <path d="M0 -12 l-9 -14 h18z" fill="#6fa8dc" />
          <g fill="#e8dfc8" stroke="none">
            <circle cx="-6" cy="-27" r="1.2" />
            <circle cx="0" cy="-27" r="1.2" />
            <circle cx="6" cy="-27" r="1.2" />
          </g>
        </g>
        <g id="s9b" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M0 0 c1 -14 -1 -26 0 -40" fill="none" />
          <path d="M0 -20 l-10 -14 h20z" fill="#6fa8dc" />
          <path d="M0 -40 l-14 -18 h28z" fill="#6fa8dc" />
          <g fill="#e8dfc8" stroke="none">
            <circle cx="-7" cy="-35" r="1.2" />
            <circle cx="7" cy="-35" r="1.2" />
            <circle cx="-10" cy="-59" r="1.3" />
            <circle cx="-3" cy="-59" r="1.3" />
            <circle cx="4" cy="-59" r="1.3" />
            <circle cx="11" cy="-59" r="1.3" />
          </g>
        </g>
        <g id="s9c" stroke="#e8dfc8" strokeWidth="2.4">
          <path d="M0 0 c2 -30 -2 -60 0 -90" fill="none" />
          <path d="M0 -50 c-8 -6 -18 -8 -26 -6" fill="none" />
          <path d="M0 -26 l-12 -16 h24z" fill="#6fa8dc" />
          <path d="M-26 -56 l-9 -13 h18z" fill="#6fa8dc" />
          <path d="M0 -58 l-16 -20 h32z" fill="#6fa8dc" />
          <path d="M0 -90 l-22 -26 h44z" fill="#6fa8dc" />
          <g fill="#e8dfc8" stroke="none">
            <circle cx="-8" cy="-43" r="1.3" />
            <circle cx="0" cy="-43" r="1.3" />
            <circle cx="8" cy="-43" r="1.3" />
            <circle cx="-11" cy="-79" r="1.4" />
            <circle cx="-4" cy="-79" r="1.4" />
            <circle cx="4" cy="-79" r="1.4" />
            <circle cx="11" cy="-79" r="1.4" />
            <circle cx="-16" cy="-117" r="1.5" />
            <circle cx="-8" cy="-117" r="1.5" />
            <circle cx="0" cy="-117" r="1.5" />
            <circle cx="8" cy="-117" r="1.5" />
            <circle cx="16" cy="-117" r="1.5" />
            <circle cx="-30" cy="-70" r="1.2" />
            <circle cx="-22" cy="-70" r="1.2" />
          </g>
        </g>
        <g id="s10a" stroke="#e8dfc8" strokeWidth="2">
          <ellipse cx="0" cy="-6" rx="5" ry="4" fill="#d9c78a" />
          <ellipse cx="0" cy="-16" rx="4" ry="3.5" fill="#d9c78a" />
          <g fill="none" strokeWidth="1.8" strokeLinecap="round">
            <path d="M-4 -16 c-6 -2 -8 -6 -8 -10" />
            <path d="M4 -16 c6 -2 8 -6 8 -10" />
          </g>
        </g>
        <g id="s10b" stroke="#e8dfc8" strokeWidth="2">
          <ellipse cx="0" cy="-6" rx="6" ry="4.5" fill="#d9c78a" />
          <ellipse cx="0" cy="-18" rx="5.5" ry="4.2" fill="#d9c78a" />
          <ellipse cx="0" cy="-30" rx="5" ry="4" fill="#d9c78a" />
          <ellipse cx="0" cy="-41" rx="4" ry="3.5" fill="#d9c78a" />
          <g fill="none" strokeWidth="1.8" strokeLinecap="round">
            <path d="M-5 -18 c-8 -2 -12 -8 -12 -14" />
            <path d="M5 -18 c8 -2 12 -8 12 -14" />
            <path d="M-5 -30 c-7 -2 -10 -8 -10 -13" />
            <path d="M5 -30 c7 -2 10 -8 10 -13" />
            <path d="M-4 -41 c-5 -2 -7 -6 -7 -10" />
            <path d="M4 -41 c5 -2 7 -6 7 -10" />
          </g>
        </g>
        <g id="s10c" stroke="#e8dfc8" strokeWidth="2.2">
          <ellipse cx="0" cy="-7" rx="7" ry="5.5" fill="#d9c78a" />
          <ellipse cx="1" cy="-20" rx="6.5" ry="5" fill="#d9c78a" />
          <ellipse cx="1" cy="-33" rx="6" ry="4.8" fill="#d9c78a" />
          <ellipse cx="0" cy="-46" rx="5.5" ry="4.5" fill="#d9c78a" />
          <ellipse cx="-1" cy="-58" rx="5" ry="4.2" fill="#d9c78a" />
          <ellipse cx="-1" cy="-70" rx="4.5" ry="4" fill="#d9c78a" />
          <ellipse cx="0" cy="-81" rx="4" ry="3.5" fill="#d9c78a" />
          <ellipse cx="0" cy="-92" rx="3.5" ry="3" fill="#d9c78a" />
          <g fill="none" strokeWidth="2" strokeLinecap="round">
            <path d="M-6 -20 c-10 -2 -16 -10 -16 -18" />
            <path d="M7 -20 c10 -2 16 -10 16 -18" />
            <path d="M-5 -33 c-10 -2 -14 -10 -14 -17" />
            <path d="M6 -33 c10 -2 14 -10 14 -17" />
            <path d="M-5 -46 c-9 -2 -12 -9 -12 -15" />
            <path d="M5 -46 c9 -2 12 -9 12 -15" />
            <path d="M-5 -58 c-8 -2 -10 -8 -10 -13" />
            <path d="M4 -58 c8 -2 10 -8 10 -13" />
            <path d="M-4 -70 c-6 -2 -8 -7 -8 -11" />
            <path d="M3 -70 c6 -2 8 -7 8 -11" />
            <path d="M-3 -92 c-4 -6 -2 -12 2 -16 M3 -92 c4 -6 2 -12 -2 -16" />
          </g>
        </g>
        <g id="s11a" fill="none" strokeLinecap="round">
          <path d="M0 0 c-2 -8 6 -12 8 -20" stroke="#e8dfc8" strokeWidth="4.6" />
          <path d="M0 0 c-2 -8 6 -12 8 -20" stroke="#b8433f" strokeWidth="2" />
          <circle cx="8" cy="-21" r="4.5" fill="#b8433f" stroke="#e8dfc8" strokeWidth="2" />
        </g>
        <g id="s11b" fill="none" strokeLinecap="round">
          <path d="M0 0 c-6 -12 10 -18 4 -32 c-4 -10 6 -14 8 -24" stroke="#e8dfc8" strokeWidth="5" />
          <path d="M0 0 c-6 -12 10 -18 4 -32 c-4 -10 6 -14 8 -24" stroke="#b8433f" strokeWidth="2.2" />
          <path d="M12 -56 c8 -2 14 4 12 10 c-2 4 -8 4 -8 0" stroke="#e8dfc8" strokeWidth="1.6" />
          <circle cx="-2" cy="-10" r="5" fill="#b8433f" stroke="#e8dfc8" strokeWidth="2" />
          <circle cx="5" cy="-33" r="5.5" fill="#b8433f" stroke="#e8dfc8" strokeWidth="2" />
          <circle cx="12" cy="-56" r="4.5" fill="#b8433f" stroke="#e8dfc8" strokeWidth="2" />
        </g>
        <g id="s11c" fill="none" strokeLinecap="round">
          <path d="M0 0 c-10 -18 14 -26 6 -48 c-6 -16 10 -22 10 -40 c0 -12 -8 -18 -4 -28" stroke="#e8dfc8" strokeWidth="5.6" />
          <path d="M0 0 c-10 -18 14 -26 6 -48 c-6 -16 10 -22 10 -40 c0 -12 -8 -18 -4 -28" stroke="#b8433f" strokeWidth="2.6" />
          <path d="M12 -116 c10 -4 20 4 18 14 c-2 8 -12 8 -12 2 c0 -4 6 -4 6 0" stroke="#e8dfc8" strokeWidth="1.8" />
          <path d="M8 -70 c-12 4 -20 14 -18 26" stroke="#e8dfc8" strokeWidth="1.8" />
          <circle cx="-4" cy="-14" r="6" fill="#b8433f" stroke="#e8dfc8" strokeWidth="2.2" />
          <circle cx="6" cy="-48" r="6.5" fill="#b8433f" stroke="#e8dfc8" strokeWidth="2.2" />
          <circle cx="16" cy="-88" r="6" fill="#b8433f" stroke="#e8dfc8" strokeWidth="2.2" />
          <circle cx="12" cy="-116" r="5" fill="#b8433f" stroke="#e8dfc8" strokeWidth="2.2" />
          <circle cx="-10" cy="-44" r="2" fill="#e8dfc8" stroke="none" />
        </g>
        <g id="s12a" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M0 0 v-18" fill="none" />
          <path d="M0 -12 l10 -10 l12 4 l-10 8z" fill="#5b6bd6" />
          <path d="M0 -12 l12 -3" fill="none" strokeWidth="1" />
        </g>
        <g id="s12b" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M0 0 c1 -16 -1 -34 0 -52" fill="none" />
          <path d="M0 -14 l-12 -12 l-14 4 l12 10z" fill="#5b6bd6" />
          <path d="M0 -28 l12 -12 l14 4 l-12 10z" fill="#5b6bd6" />
          <path d="M0 -42 l-10 -10 l-12 3 l10 9z" fill="#5b6bd6" />
          <path d="M0 -52 l-5 -9 h10z" fill="#5b6bd6" />
          <g fill="none" strokeWidth="1">
            <path d="M0 -14 l-14 -4" />
            <path d="M0 -28 l14 -4" />
            <path d="M0 -42 l-12 -4" />
          </g>
        </g>
        <g id="s12c" stroke="#e8dfc8" strokeWidth="2.4">
          <path d="M0 0 c2 -30 -2 -66 0 -100" fill="none" />
          <path d="M0 -16 l-16 -14 l-18 5 l16 12z" fill="#5b6bd6" />
          <path d="M0 -32 l16 -14 l18 5 l-16 12z" fill="#5b6bd6" />
          <path d="M0 -48 l-14 -12 l-16 4 l14 11z" fill="#5b6bd6" />
          <path d="M0 -62 l14 -12 l16 4 l-14 11z" fill="#5b6bd6" />
          <path d="M0 -76 l-11 -10 l-12 3 l11 9z" fill="#5b6bd6" />
          <path d="M0 -88 l10 -9 l11 3 l-10 8z" fill="#5b6bd6" />
          <path d="M0 -100 l-7 -14 h14z" fill="#5b6bd6" />
          <g fill="none" strokeWidth="1">
            <path d="M0 -16 l-18 -6" />
            <path d="M0 -32 l18 -6" />
            <path d="M0 -48 l-16 -5" />
            <path d="M0 -62 l16 -5" />
            <path d="M0 -76 l-12 -4" />
            <path d="M0 -88 l11 -4" />
          </g>
        </g>
        <g id="s13a" stroke="#e8dfc8" strokeWidth="2">
          <path d="M0 0 c-6 -8 -8 -18 -4 -26 c4 6 6 16 4 26z" fill="#8fd6a8" />
          <path d="M0 0 c6 -6 10 -14 8 -22 c-4 4 -8 12 -8 22z" fill="#8fd6a8" />
          <g fill="none" strokeWidth=".9">
            <path d="M0 0 c-4 -8 -5 -16 -4 -22" />
            <path d="M0 0 c4 -6 6 -12 7 -18" />
          </g>
        </g>
        <g id="s13b" stroke="#e8dfc8" strokeWidth="2">
          <path d="M0 0 c-14 -10 -22 -24 -18 -38 c8 8 14 22 18 38z" fill="#8fd6a8" />
          <path d="M0 0 c-6 -14 -8 -30 -2 -46 c6 12 6 30 2 46z" fill="#8fd6a8" />
          <path d="M0 0 c6 -12 12 -26 10 -40 c-8 10 -12 24 -10 40z" fill="#8fd6a8" />
          <path d="M0 0 c14 -8 20 -20 18 -30 c-10 6 -16 16 -18 30z" fill="#8fd6a8" />
          <g fill="none" strokeWidth=".9">
            <path d="M0 0 c-10 -10 -15 -22 -16 -32" />
            <path d="M0 0 c-4 -14 -4 -28 -2 -40" />
            <path d="M0 0 c4 -12 8 -24 9 -34" />
            <path d="M0 0 c10 -8 14 -16 16 -26" />
          </g>
        </g>
        <g id="s13c" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M0 0 c-24 -14 -36 -36 -30 -56 c14 12 24 34 30 56z" fill="#8fd6a8" />
          <path d="M0 0 c-16 -24 -22 -50 -12 -76 c10 20 14 50 12 76z" fill="#8fd6a8" />
          <path d="M0 0 c-4 -30 -2 -62 6 -92 c8 30 6 62 -6 92z" fill="#8fd6a8" />
          <path d="M0 0 c10 -24 20 -48 16 -74 c-12 20 -16 48 -16 74z" fill="#8fd6a8" />
          <path d="M0 0 c20 -14 32 -34 30 -54 c-16 12 -26 32 -30 54z" fill="#8fd6a8" />
          <path d="M0 0 c28 -6 40 -18 42 -30 c-18 4 -32 14 -42 30z" fill="#8fd6a8" />
          <path d="M0 0 c-30 -4 -42 -14 -44 -26 c18 2 34 12 44 26z" fill="#8fd6a8" />
          <g fill="none" strokeWidth="1">
            <path d="M0 0 c-18 -14 -26 -32 -28 -48" />
            <path d="M0 0 c-12 -24 -14 -46 -10 -66" />
            <path d="M0 0 c-2 -30 0 -56 4 -80" />
            <path d="M0 0 c8 -22 14 -44 14 -64" />
            <path d="M0 0 c16 -14 24 -30 28 -46" />
          </g>
        </g>
        <g id="s14a" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M-9 0 c-2 -8 4 -14 9 -14 c5 0 11 6 9 14z" fill="#7d8fa6" />
          <path d="M-4 -8 q4 -3 8 0" fill="none" stroke="#e0a04f" strokeWidth="1.6" />
        </g>
        <g id="s14b" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M-14 0 c-2 -10 6 -18 14 -18 c8 0 16 8 14 18z" fill="#7d8fa6" />
          <path d="M-8 -18 c-1 -8 5 -14 10 -14 c5 0 10 6 8 14z" fill="#7d8fa6" />
          <path d="M-6 -10 q6 -4 12 0" fill="none" stroke="#e0a04f" strokeWidth="1.8" />
          <path d="M-3 -26 q4 -3 8 0" fill="none" stroke="#e0a04f" strokeWidth="1.6" />
          <path d="M2 -32 c-2 -8 2 -12 0 -18" fill="none" strokeWidth="1.4" />
          <circle cx="2" cy="-51" r="1.8" fill="#e0a04f" />
        </g>
        <g id="s14c" stroke="#e8dfc8" strokeWidth="2.4">
          <path d="M-22 0 c-2 -12 8 -22 20 -22 c12 0 22 10 20 22z" fill="#7d8fa6" />
          <path d="M-30 0 c-4 -6 0 -14 6 -14 c4 0 6 4 6 8 l-4 6z" fill="#7d8fa6" />
          <path d="M-14 -22 c-2 -10 6 -20 14 -20 c8 0 16 10 14 20z" fill="#7d8fa6" />
          <path d="M-8 -42 c-1 -8 5 -14 8 -14 c4 0 9 6 8 14z" fill="#7d8fa6" />
          <path d="M-12 -12 q10 -6 22 0" fill="none" stroke="#e0a04f" strokeWidth="2.2" />
          <path d="M-6 -32 q6 -4 12 0" fill="none" stroke="#e0a04f" strokeWidth="1.8" />
          <path d="M-3 -49 q3 -2 6 0" fill="none" stroke="#e0a04f" strokeWidth="1.6" />
          <g fill="none" strokeWidth="1.5">
            <path d="M0 -56 c-4 -12 4 -20 0 -34" />
            <path d="M2 -70 c8 -4 12 -10 12 -18" />
          </g>
          <circle cx="0" cy="-92" r="2.4" fill="#e0a04f" />
          <circle cx="14" cy="-89" r="1.8" fill="#e0a04f" />
          <g fill="#e0a04f" stroke="none">
            <circle cx="-6" cy="-12" r="1.2" />
            <circle cx="8" cy="-13" r="1.2" />
          </g>
        </g>
        <g id="s15a" stroke="#e8dfc8" strokeWidth="2">
          <path d="M0 0 v-14" fill="none" />
          <path d="M-7 -14 a7 5 0 0 1 14 0z" fill="#7a3b6e" />
          <g fill="none" strokeWidth="1.2">
            <path d="M-5 -14 v6" />
            <path d="M0 -14 v7" />
            <path d="M5 -14 v6" />
          </g>
        </g>
        <g id="s15b" stroke="#e8dfc8" strokeWidth="2.2">
          <path d="M0 0 c1 -14 -1 -26 0 -40" fill="none" />
          <path d="M-13 -40 a13 9 0 0 1 26 0z" fill="#7a3b6e" />
          <g fill="none" strokeWidth="1.2" strokeLinecap="round">
            <path d="M-10 -40 c-1 6 1 10 0 16" />
            <path d="M-5 -40 c1 6 -1 12 0 18" />
            <path d="M0 -40 c-1 6 1 12 0 20" />
            <path d="M5 -40 c1 6 -1 12 0 18" />
            <path d="M10 -40 c-1 6 1 10 0 16" />
          </g>
          <g fill="#e8dfc8" stroke="none">
            <circle cx="-5" cy="-21" r="1.2" />
            <circle cx="5" cy="-21" r="1.2" />
          </g>
        </g>
        <g id="s15c" stroke="#e8dfc8" strokeWidth="2.4">
          <path d="M0 0 c2 -30 -2 -60 0 -90" fill="none" />
          <path d="M-10 -50 a10 7 0 0 1 20 0z" fill="#7a3b6e" />
          <path d="M-24 -90 a24 16 0 0 1 48 0z" fill="#7a3b6e" />
          <g fill="none" strokeWidth="1.3" strokeLinecap="round">
            <path d="M-20 -90 c-2 10 2 20 -1 32" />
            <path d="M-13 -90 c2 12 -2 24 1 38" />
            <path d="M-6 -90 c-2 12 2 26 -1 42" />
            <path d="M0 -90 c2 14 -2 28 1 44" />
            <path d="M6 -90 c-2 12 2 26 -1 42" />
            <path d="M13 -90 c2 12 -2 24 1 38" />
            <path d="M20 -90 c-2 10 2 20 -1 32" />
            <path d="M-7 -50 c1 6 -1 10 0 14 M7 -50 c-1 6 1 10 0 14" />
          </g>
          <g fill="#e8dfc8" stroke="none">
            <circle cx="-13" cy="-51" r="1.3" />
            <circle cx="1" cy="-45" r="1.3" />
            <circle cx="13" cy="-51" r="1.3" />
            <circle cx="0" cy="-108" r="2" />
          </g>
        </g>
        <g id="sX">
          <path d="M0 -14 l7 10 -7 12 -7 -12z" fill="#e0a04f" stroke="#e8dfc8" strokeWidth="2" />
          <path d="M0 -14 v22" stroke="#0f1a17" strokeWidth="1.2" />
          <ellipse cx="0" cy="30" rx="6" ry="1.6" fill="#e8dfc8" opacity=".35" />
        </g>
      </defs>
    </svg>
  );
}
