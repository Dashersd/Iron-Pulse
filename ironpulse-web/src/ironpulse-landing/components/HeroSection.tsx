import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection - Biometric Hardcore Edition
 * - 3D Mouse Parallax
 * - Biometric HUD / Digital Pulse Targeter
 * - High-Visibility Iron Dust Particles
 * - Energetic Digital Pulse Lines (EKG)
 */
export const HeroSection = ({ onFaceScanTrigger }: { onFaceScanTrigger: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hudScan, setHudScan] = useState(0);

  const particles = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 10, // Faster, more energetic
      size: 2 + Math.random() * 3, // Larger particles
      delay: Math.random() * 5
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      });
    };

    const timer = setInterval(() => {
      setHudScan(Math.floor(Math.random() * 100));
    }, 500); // Faster jitter

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black flex-col">

      {/* 1. LAYER: Base Atmosphere & Glowing Grid (Stronger Visibility) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-black to-black opacity-50" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(220, 38, 38, 0.5) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1.5px, transparent 1.5px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
          }}
        />
        {/* Animated Moving Scanline Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(220,38,38,0.05)_50%)] bg-[length:100%_4px] animate-scanline pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,1)]" />
      </div>

      {/* 2. LAYER: Digital Pulse EKG Lines (High Contrast) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[15, 45, 75].map((top, idx) => (
          <div key={idx} className="absolute w-full h-[2px] bg-red-600/20" style={{ top: `${top}%` }}>
            <motion.div
              animate={{ x: ['-20%', '120%'] }}
              transition={{ duration: 8 + idx * 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center pointer-events-none"
            >
              <div className="w-64 h-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent blur-[2px]" />
              <svg viewBox="0 0 100 20" className="w-24 h-12 -ml-12 text-red-500 fill-none stroke-current stroke-[3px] opacity-80">
                <path d="M0,10 L30,10 L35,0 L45,20 L50,10 L100,10" />
              </svg>
            </motion.div>
          </div>
        ))}
      </div>

      {/* 3. LAYER: Floating Iron Sparks (Bright & Reactive) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -200],
              x: mousePosition.x * 60,
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: '#ef4444',
              boxShadow: '0 0 15px #ef4444, 0 0 30px #dc2626',
              borderRadius: '50%',
            }}
          />
        ))}
      </div>

      {/* 4. LAYER: HUD & Targeter (Increased Opacity) */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: 360,
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" }
          }}
          className="relative w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-40"
        >
          <div className="absolute inset-0 border-[2px] border-red-600/50 rounded-full" />
          <div className="absolute inset-[8%] border-[3px] border-dashed border-red-600/20 rounded-full" />
          <div className="absolute inset-[25%] border-[1px] border-red-600/60 rounded-full animate-pulse blur-[1px]" />

          {/* Large Crosshair */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-600/40" />
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-red-600/40" />
        </motion.div>

        {/* HUD Real-time Data Labels */}
        <div className="absolute top-1/4 left-6 md:left-16 font-mono text-[10px] text-red-500 shadow-red-900/50 drop-shadow-md hidden lg:block uppercase tracking-tighter">
          <p className="bg-red-600 text-black px-1 mb-1 font-black underline">SYSTEM_ONLINE</p>
          <p>SCAN_REFR: {hudScan}%</p>
          <p>LOC_X: {mousePosition.x.toFixed(2)}</p>
          <p>LOC_Y: {mousePosition.y.toFixed(2)}</p>
          <p className="animate-pulse">WAITING_FOR_FACEID...</p>
        </div>
        <div className="absolute bottom-1/4 right-6 md:right-16 font-mono text-[10px] text-red-500 text-right hidden lg:block uppercase tracking-tighter">
          <p className="bg-red-600 text-black px-1 mb-1 font-black underline">LIMITER_V2</p>
          <p>PWR_OUTPUT: MAX</p>
          <p>ADAPTIVE_S: ON</p>
          <p>IRON_CORE: ENGAGED</p>
        </div>
      </div>

      {/* 5. LAYER: Main Content Hero */}
      <div className="relative z-40 container mx-auto px-6 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 font-black italic tracking-[0.8em] uppercase text-xs mb-8 flex items-center justify-center gap-2"
        >
          <span className="w-8 h-[1px] bg-red-600" />
          BIOMETRIC EVOLUTION
          <span className="w-8 h-[1px] bg-red-600" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-12"
        >
          <h1 className="text-8xl md:text-[12rem] font-black italic tracking-tighter leading-none select-none relative group transition-all">
            <span className="absolute inset-0 text-red-600 blur-[100px] opacity-60 animate-pulse pointer-events-none">IRONPULSE</span>
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-red-600 to-red-900 drop-shadow-[0_0_50px_rgba(220,38,38,0.7)]">
              IRONPULSE
            </span>
          </h1>
          <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-[2px] bg-red-600/40 w-[calc(100%+160px)] blur-[1px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-10 leading-[0.9]"
        >
          FORGE YOUR <span className="text-red-600 text-outlined-red">LIMITS</span>
          <br />
          INTO <span className="bg-white text-black px-3 py-1 scale-110 inline-block rotate-[-2deg]">POWER</span>
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 60px rgba(220,38,38,0.6)' }}
            whileTap={{ scale: 0.9 }}
            className="group relative px-14 py-6 bg-red-600 text-white font-black uppercase italic tracking-[0.2em] text-xl overflow-hidden"
          >
            <span className="relative z-10">Ascend Now</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            <div className="absolute top-0 left-0 w-full h-[3px] bg-white shadow-[0_0_20px_rgba(255,255,255,1)] animate-cta-scan" />
          </motion.button>

          <button
            onClick={onFaceScanTrigger}
            className="group relative px-12 py-6 border-4 border-white text-white font-black uppercase italic tracking-[0.2em] text-xl hover:bg-white hover:text-black transition-all"
          >
            <span className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_15px_rgba(220,38,38,1)]" />
              Face ID Scan
            </span>
          </button>
        </motion.div>
      </div>

      <style>{`
        @keyframes cta-scan {
          0% { top: -10%; }
          50% { top: 110%; }
          100% { top: -10%; }
        }
        @keyframes scanline {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }
        .animate-scanline {
          animation: scanline 10s linear infinite;
        }
        .animate-cta-scan {
          animation: cta-scan 2.5s ease-in-out infinite;
        }
        .text-outlined-red {
          -webkit-text-stroke: 2px #dc2626;
          color: transparent;
        }
      `}</style>
    </section>
  );
};
