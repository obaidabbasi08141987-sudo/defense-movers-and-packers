import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showTagline = true }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Premium SVG Icon / Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Shield / Crest Base */}
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="truckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Shield Boundary */}
          <path
            d="M24 3L40 9V22C40 32.8 33.2 41.5 24 45C14.8 41.5 8 32.8 8 22V9L24 3Z"
            fill="url(#shieldGrad)"
          />
          {/* Inner Shield Inset */}
          <path
            d="M24 5.5L38 10.8V21.5C38 31 32 38.8 24 42C16 38.8 10 31 10 21.5V10.8L24 5.5Z"
            fill="#09101F"
            opacity="0.95"
          />

          {/* Stylized Moving Box with Forward Arrow */}
          {/* Box outline */}
          <path
            d="M24 13L33 18V28L24 33L15 28V18L24 13Z"
            fill="#1E293B"
            stroke="#F59E0B"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Box top face */}
          <path
            d="M24 13L33 18L24 23L15 18L24 13Z"
            fill="#334155"
            stroke="#F59E0B"
            strokeWidth="1.2"
          />
          {/* Box center vertical divider */}
          <path
            d="M24 23V33"
            stroke="#F59E0B"
            strokeWidth="1.4"
          />

          {/* Dynamic Forward Motion Swift Arrow (Symbolizing Movers) */}
          <path
            d="M20 23L27 23M27 23L23.5 20M27 23L23.5 26"
            stroke="#FBBF24"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stars / Cantt Defence insignia dots */}
          <circle cx="24" cy="9.5" r="1.3" fill="#F59E0B" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="leading-tight">
        <div className={`font-extrabold tracking-tight text-white font-heading ${titleSizes[size]} flex items-center`}>
          <span>Defence</span>
          <span className="text-amber-400 ml-1.5 font-bold">Movers</span>
          <span className="text-slate-400 ml-1 font-light">&amp;</span>
          <span className="text-white ml-1">Packers</span>
        </div>
        {showTagline && (
          <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 tracking-wider uppercase flex items-center gap-1.5 mt-0.5">
            <span className="text-amber-400/90">Karachi</span>
            <span className="text-slate-600">&bull;</span>
            <span>DHA &amp; Cantt</span>
            <span className="text-slate-600">&bull;</span>
            <span>Intercity</span>
          </div>
        )}
      </div>
    </div>
  );
};
