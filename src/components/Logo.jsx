import React from 'react';

const Logo = ({ size = 36 }) => {
  return (
    <div
      className="relative grid place-items-center rounded-xl shadow-lg"
      style={{ width: size, height: size, background: 'black' }}
      aria-label="VIYAN FASHION WORLD logo"
   >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 via-blue-600 to-sky-500 opacity-60 mix-blend-overlay" />
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-violet-500/30 via-blue-500/30 to-sky-400/30 blur-[2px]" />
      <span className="relative select-none text-white font-semibold tracking-tight" style={{ fontSize: size * 0.42 }}>
        VF
      </span>
    </div>
  );
};

export default Logo;
