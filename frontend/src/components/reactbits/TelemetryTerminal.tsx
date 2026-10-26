import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export const TelemetryTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'drone' | 'mern' | 'eeg'>('drone');
  const [copied, setCopied] = useState(false);

  const snippets = {
    drone: {
      cmd: 'python -m telemetry.mavlink --stream /dev/ttyUSB0 --baud 57600',
      logs: [
        '[0.00s] INITIALIZING MAVLink v2.0 parser on telemetry radio link...',
        '[0.14s] HEARTBEAT received from UAV ID #1 (ArduPilot / PX4 autopilot)',
        '[0.28s] GPS_RAW_INT: Fix: 3D-DGPS | Sats: 14 | Lat: 11.0168° N | Lon: 76.9558° E',
        '[0.42s] ATTITUDE stream: Roll: +1.24° | Pitch: -0.85° | Yaw: 184.2° | Latency: 18ms',
        '[0.58s] SENSORS: Baro Alt: 42.8m | Battery: 15.8V (94%) | Link RSSI: -64dBm',
        '✓ MISSION_STATUS: Autonomous waypoint corridor #4 active & stable.'
      ],
      tag: 'Drone Telemetry Node',
      color: 'text-[#54E7FF]'
    },
    mern: {
      cmd: 'node server.js --env production --cors enabled',
      logs: [
        '[0.01s] [Express] REST API server listening on :5000',
        '[0.08s] [MongoDB] Connected to cluster: notes_cluster.0x2b (SSL verified)',
        '[0.19s] POST /api/auth/login 200 OK - 24ms (JWT issued)',
        '[0.35s] GET /api/notes?category=engineering 200 OK - 18ms (cached)',
        '[0.50s] PUT /api/notes/65f9a 200 OK - 32ms (Optimistic UI sync complete)',
        '✓ STATUS: 3 live commercial client apps deployed during ITBoomi internship.'
      ],
      tag: 'MERN REST Engine',
      color: 'text-[#4D8DFF]'
    },
    eeg: {
      cmd: 'python bio_dsp.py --channel Fp1-A1 --filter bandpass_0.5_50Hz',
      logs: [
        '[0.00s] Streaming raw bio-signal from 24-bit ADC at 250 SPS...',
        '[0.12s] Applying 4th-order Butterworth Notch Filter at 50.0 Hz (Mains attenuation: -42dB)',
        '[0.26s] Fast Fourier Transform (FFT) Window: Hanning (256 samples)',
        '[0.38s] FREQ BANDS: Alpha (8-12Hz): 48.2% | Beta (13-30Hz): 26.1% | Theta: 18.4%',
        '[0.52s] EVENT_DETECTED: Synchronized Alpha rhythm shift (Eyes closed relaxation state)',
        '✓ DSP_STATUS: Bio-signal filtered with high Signal-to-Noise Ratio (SNR).'
      ],
      tag: 'EEG Neural DSP',
      color: 'text-emerald-400'
    }
  };

  const current = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl bg-[#07090F] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#101522] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF454F]/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[11px] text-[#9AA5B5] flex items-center gap-1.5 font-sans">
            <Terminal className="w-3.5 h-3.5 text-[#54E7FF]" />
            <span>sivasudhan@workstation: ~/engineering-stream</span>
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-[#07090F] p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('drone')}
            className={`px-2.5 py-1 rounded text-[10px] font-medium transition-all ${
              activeTab === 'drone'
                ? 'bg-[#4D8DFF]/20 text-[#54E7FF] border border-[#54E7FF]/30'
                : 'text-[#9AA5B5] hover:text-[#F5F7FA]'
            }`}
          >
            Drone Telemetry
          </button>
          <button
            onClick={() => setActiveTab('mern')}
            className={`px-2.5 py-1 rounded text-[10px] font-medium transition-all ${
              activeTab === 'mern'
                ? 'bg-[#4D8DFF]/20 text-[#54E7FF] border border-[#54E7FF]/30'
                : 'text-[#9AA5B5] hover:text-[#F5F7FA]'
            }`}
          >
            MERN API
          </button>
          <button
            onClick={() => setActiveTab('eeg')}
            className={`px-2.5 py-1 rounded text-[10px] font-medium transition-all ${
              activeTab === 'eeg'
                ? 'bg-[#4D8DFF]/20 text-[#54E7FF] border border-[#54E7FF]/30'
                : 'text-[#9AA5B5] hover:text-[#F5F7FA]'
            }`}
          >
            EEG DSP
          </button>
        </div>
      </div>

      {/* Command prompt bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A0E18] border-b border-white/5 text-[#9AA5B5]">
        <div className="flex items-center gap-2 overflow-x-auto truncate">
          <span className="text-[#54E7FF] font-bold">$</span>
          <span className="text-[#F5F7FA] font-mono select-all truncate">{current.cmd}</span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded bg-[#101522] hover:bg-[#171E31] text-[#9AA5B5] hover:text-[#54E7FF] border border-white/10 shrink-0 transition-all ml-2"
          title="Copy command to clipboard"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Real-time Telemetry Log Window */}
      <div className="p-4 sm:p-5 space-y-2 bg-[#07090F]/95 min-h-[170px] select-text">
        {current.logs.map((log, idx) => {
          const isSuccess = log.startsWith('✓');
          return (
            <div
              key={idx}
              className={`flex items-start gap-2 text-[11px] sm:text-xs leading-relaxed ${
                isSuccess
                  ? 'text-emerald-400 font-semibold'
                  : 'text-[#9AA5B5]'
              }`}
            >
              <span className="text-[#4D8DFF] select-none">&gt;</span>
              <span>{log}</span>
            </div>
          );
        })}
        {/* Blinking cursor */}
        <div className="flex items-center gap-2 pt-1 text-[11px] text-[#54E7FF]">
          <span className="text-[#4D8DFF]">&gt;</span>
          <span className="w-2 h-4 bg-[#54E7FF] animate-pulse inline-block" />
        </div>
      </div>
    </div>
  );
};
