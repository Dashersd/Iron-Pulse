import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { trainers } from '../data';

/**
 * TrainersSection - Spotlight Carousel
 * Features:
 * - Dynamic centering with spacers
 * - Proximity-based active tracking
 * - High-impact gym visual branding
 */
export const TrainersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Proximity tracking logic
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    // The visual target is the center of the scrollable container
    const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    // Skip spacers (first and last)
    const children = Array.from(container.children).slice(1, -1);

    children.forEach((child, index) => {
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });

    // Initial centering delay
    const timer = setTimeout(() => {
      scrollToIndex(0);
    }, 400);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []); // Only on mount

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    // Map data index to DOM child index (+1 for leading spacer)
    const child = container.children[index + 1] as HTMLElement;

    if (child) {
      const targetScroll = child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-black text-white overflow-hidden relative select-none">
      {/* Aggressive Branding Header */}
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="relative">
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-4">
            EXPERT<br />
            <span className="text-red-600">TRAINERS</span>
          </h2>
          <div className="h-2 w-32 bg-red-600 mb-6" />
          <p className="text-gray-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">
            MEET THE ELITE REAPERS OF PERFORMANCE.
          </p>
        </div>

        {/* Nav Controls */}
        <div className="flex gap-4">
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            className="w-16 h-16 bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:text-red-600 transition-all flex items-center justify-center active:scale-90"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(trainers.length - 1, activeIndex + 1))}
            className="w-16 h-16 bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:text-red-600 transition-all flex items-center justify-center active:scale-90"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Dark Vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-16 overflow-x-auto snap-x snap-mandatory no-scrollbar py-24"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Centering Spacers */}
          <div className="shrink-0 w-[15vw] md:w-[40vw]" />

          {trainers.map((trainer, index) => {
            const isSpotlight = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`
                  snap-center shrink-0 cursor-pointer transition-all duration-700 relative
                  w-[290px] md:w-[480px] h-[580px] md:h-[720px] rounded-sm overflow-hidden border-2
                  ${isSpotlight
                    ? 'scale-110 z-30 border-red-600 shadow-[0_0_120px_rgba(220,38,38,0.5)]'
                    : 'scale-90 z-10 border-zinc-900 opacity-20 grayscale'
                  }
                  hover:opacity-100 hover:grayscale-0
                `}
              >
                {/* Visual Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${trainer.color} transition-transform duration-1000 ${isSpotlight ? 'scale-110' : 'scale-100'}`}>
                  {/* Initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[280px] md:text-[450px] font-black text-black/25 select-none tracking-tighter leading-none">
                      {trainer.initials}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end z-10">
                  <div className={`transition-all duration-700 transform ${isSpotlight ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <p className="text-red-600 font-black uppercase text-[10px] md:text-xs tracking-[0.5em] mb-4">
                      {trainer.specialty}
                    </p>
                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.8] text-white">
                      {trainer.name.split(' ')[0]}<br />
                      <span className="text-red-600">{trainer.name.split(' ')[1]}</span>
                    </h3>

                    <button className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.4em] transition-all shadow-2xl active:scale-95">
                      Explore Full Profile
                    </button>
                  </div>
                </div>

                {/* Spotlight FX */}
                {isSpotlight && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay" />
                    <div className="absolute h-1 w-full bg-red-500 shadow-[0_0_20px_rgba(220,38,38,1)] top-0 left-0"
                      style={{ animation: 'laser-scan 4s linear infinite' }} />
                  </div>
                )}
              </div>
            );
          })}

          <div className="shrink-0 w-[15vw] md:w-[40vw]" />
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes laser-scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(720px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
