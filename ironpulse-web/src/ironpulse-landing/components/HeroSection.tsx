import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection - Biometric Hardcore Edition
 * - 3D Mouse Parallax
 * - Biometric HUD / Digital Pulse Targeter
 * - Glitch Typography & Laser CTA Buttons
 */
export const HeroSection = ({ onFaceScanTrigger }: { onFaceScanTrigger: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hudScan, setHudScan] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      });
    };

    // HUD digital jitter simulation
    const timer = setInterval(() => {
      setHudScan(Math.floor(Math.random() * 100));
    }, 1000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black perspective-[2000px]">

      {/* 1. Deep Parallax Background Grid */}
      <motion.div
        style={{
          transform: `translate3d(${mousePosition.x * -30}px, ${mousePosition.y * -30}px, 0)`,
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-black to-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(220, 38, 38, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        />
      </motion.div>

      {/* 2. Biometric HUD / Targeter Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: 360,
          }}
          transition={{
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 60, repeat: Infinity, ease: "linear" }
          }}
          className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-20"
        >
          {/* HUD Rings */}
          <div className="absolute inset-0 border-[1px] border-red-600/30 rounded-full" />
          <div className="absolute inset-[10%] border-[2px] border-dashed border-red-600/20 rounded-full" />
          <div className="absolute inset-[25%] border-[1px] border-red-600/40 rounded-full animate-pulse" />

          {/* Targeter Crosshair */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-600/20" />
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-red-600/20" />
        </motion.div>

        {/* HUD Data Readouts */}
        <div className="absolute top-1/4 left-10 md:left-20 font-mono text-[8px] md:text-[10px] text-red-600/40 tracking-widest hidden lg:block">
          <p>BIO_METRIC: STATUS_OK</p>
          <p>SCAN_POINT: {mousePosition.x.toFixed(4)}</p>
          <p>PULSE_LOCK: {hudScan}%</p>
          <p>CORE_TEMP: 38.5C</p>
        </div>
        <div className="absolute bottom-1/4 right-10 md:right-20 font-mono text-[8px] md:text-[10px] text-red-600/40 tracking-widest text-right hidden lg:block">
          <p>VLS_ENGINES: ACTIVE</p>
          <p>STRENGTH_COEFF: 9.8</p>
          <p>LIMITER: REMOVED</p>
          <p>TARGET_ID: IRON_PULSE_01</p>
        </div>
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">

        {/* Floating Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-red-500 font-black italic tracking-[0.6em] uppercase text-[10px] md:text-xs mb-6"
        >
          {`// PULSING WITH PURE POWER`}
        </motion.p>

        {/* Aggressive Glitch Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative group mb-8"
        >
          <h1 className="text-7xl md:text-[11rem] font-black italic tracking-tighter leading-none select-none relative">
            {/* Background Glow Base */}
            <span className="absolute inset-0 text-red-600 blur-[80px] opacity-40 select-none pointer-events-none">IRONPULSE</span>

            {/* Real Text */}
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-red-600 to-red-900 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              IRONPULSE
            </span>
          </h1>

          {/* HUD Target Reticle around logo */}
          <div className="absolute -inset-x-10 top-1/2 -translate-y-1/2 h-[1px] bg-red-600/30 w-[calc(100%+80px)] hidden md:block" />
        </motion.div>

        {/* Master Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-4xl md:text-7xl font-black uppercase italic tracking-tight text-white mb-8"
        >
          FORGE YOUR <span className="text-red-600">LIMITS</span>
          <br />
          INTO <span className="bg-white text-black px-2 py-0">POWER</span>
        </motion.h2>

        {/* Description text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto mb-12 tracking-wide font-medium"
        >
          The biometric evolution of strength is here. IRON PULSE isn't just a gym; it's a high-performance system designed for those who demand absolute results.
        </motion.p>

        {/* High-Tech CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Laser Scanned Join Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-red-600 text-white font-black uppercase italic tracking-widest text-lg overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.4)]"
          >
            <span className="relative z-10">Ascend Now</span>

            {/* Scanner Line Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-400 shadow-[0_0_15px_rgba(248,113,113,1)] animate-cta-scan" />
            </div>

            {/* Background shimmer */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.button>

          {/* Biometric FaceScan Button */}
          <motion.button
            onClick={onFaceScanTrigger}
            whileHover={{ scale: 1.05, borderColor: '#dc2626' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 border-2 border-white/20 text-white font-black uppercase italic tracking-widest text-lg backdrop-blur-sm hover:text-red-600 transition-all"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Biometric Scan
            </span>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-600 group-hover:w-full group-hover:h-full transition-all" />
          </motion.button>
        </motion.div>
      </div>

      {/* 4. Bottom Perspective Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_85%)] shadow-[inset_0_0_150px_rgba(0,0,0,1)]" />

      <style>{`
        @keyframes cta-scan {
          0% { top: -10%; }
          50% { top: 110%; }
          100% { top: -10%; }
        }
        .animate-cta-scan {
          animation: cta-scan 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
