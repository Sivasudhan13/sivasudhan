import React from 'react';

export const SceneFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      {/* Background glow */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#4D8DFF]/20 to-[#54E7FF]/10 blur-3xl animate-pulse-slow" />

      {/* Futuristic concentric CSS rings */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-[#54E7FF]/30 animate-[spin_30s_linear_infinite]" />
        
        {/* Middle ring with node markers */}
        <div className="absolute inset-6 rounded-full border border-[#4D8DFF]/40 animate-[spin_20s_linear_infinite_reverse]">
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#54E7FF] shadow-[0_0_12px_#54E7FF]" />
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#4D8DFF] shadow-[0_0_12px_#4D8DFF]" />
        </div>

        {/* Inner ring */}
        <div className="absolute inset-14 rounded-full border border-dashed border-[#54E7FF]/20 animate-[spin_15s_linear_infinite]" />

        {/* Core sphere */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#101522] via-[#171E31] to-[#4D8DFF]/30 border border-[#54E7FF]/50 shadow-[0_0_30px_rgba(77,141,255,0.4)] flex items-center justify-center backdrop-blur-md">
          <div className="w-8 h-8 rounded-full bg-[#54E7FF]/20 border border-[#54E7FF] animate-pulse flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#54E7FF] shadow-[0_0_10px_#54E7FF]" />
          </div>
        </div>

        {/* Drone telemetry axis crosshairs */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#54E7FF]/20 to-transparent" />
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#54E7FF]/20 to-transparent" />
      </div>
    </div>
  );
};
