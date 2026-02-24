import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { trainers } from '../data';

/**
 * TrainersSpotlight - Final Precision Build
 * - Uses precise child-centering math
 * - Robust scroll snap with dynamic padding
 * - Hardware-accelerated transitions
 */
export const TrainersSpotlight = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Precision centering logic
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;

        // Get the center of the container viewport
        const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        // We skip the first and last children because they are spacers
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

    // Setup scroll listener
    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []); // Run only once on mount

    // Initial centering on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            scrollTo(0);
        }, 500);
        return () => clearTimeout(timer);
    }, []); // Run only once on mount

    const scrollTo = (index: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        // Map index to the actual element (index + 1 because of the spacer)
        const child = container.children[index + 1] as HTMLElement;

        if (child) {
            const containerWidth = container.offsetWidth;
            const childWidth = child.offsetWidth;
            const targetScroll = child.offsetLeft - (containerWidth / 2) + (childWidth / 2);

            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-24 bg-black text-white overflow-hidden relative select-none">
            {/* Dynamic Header Structure */}
            <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="relative">
                    <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-4">
                        EXPERT <br />
                        <span className="text-red-600">TRAINERS</span>
                    </h2>
                    <div className="h-1.5 w-32 bg-red-600 mb-6" />
                    <p className="text-gray-500 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">
                        TRANSFORMING LIMITS INTO LEGACY.
                    </p>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
                        className="w-14 h-14 bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:text-red-600 transition-all flex items-center justify-center active:scale-90"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scrollTo(Math.min(trainers.length - 1, activeIndex + 1))}
                        className="w-14 h-14 bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:text-red-600 transition-all flex items-center justify-center active:scale-90"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Main Spotlight Container */}
            <div className="relative">
                {/* Cinematic Vignettes */}
                <div className="absolute left-0 top-0 bottom-0 w-[10%] md:w-[20%] bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-[10%] md:w-[20%] bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                <div
                    ref={scrollRef}
                    className="flex gap-4 md:gap-16 overflow-x-auto snap-x snap-mandatory no-scrollbar py-20 px-0"
                    style={{
                        scrollBehavior: 'smooth',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {/* Leading Spacer to allow first item centering */}
                    <div className="shrink-0 w-[20vw] md:w-[40vw]" />

                    {trainers.map((trainer, index) => {
                        const isSpotlight = index === activeIndex;

                        return (
                            <div
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`
                  snap-center shrink-0 cursor-pointer transition-all duration-700 relative
                  w-[280px] md:w-[480px] h-[520px] md:h-[680px] rounded-sm overflow-hidden border-2
                  ${isSpotlight
                                        ? 'scale-105 z-30 border-red-600 shadow-[0_0_100px_rgba(220,38,38,0.5)]'
                                        : 'scale-90 z-10 border-zinc-900 opacity-20 grayscale'
                                    }
                  hover:opacity-100 hover:grayscale-0
                `}
                            >
                                {/* Background Branding */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${trainer.color} transition-transform duration-1000 ${isSpotlight ? 'scale-110' : 'scale-100'}`}>
                                    {/* Watermark */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-[280px] md:text-[450px] font-black text-black/25 select-none tracking-tighter leading-none">
                                            {trainer.initials}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10">
                                    <div className={`transition-all duration-700 delay-100 transform ${isSpotlight ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                        <p className="text-red-600 font-black uppercase text-[10px] md:text-xs tracking-[0.6em] mb-4">
                                            {trainer.specialty}
                                        </p>
                                        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.8] text-white">
                                            {trainer.name.split(' ')[0]}<br />
                                            <span className="text-red-600">{trainer.name.split(' ')[1]}</span>
                                        </h3>

                                        <button className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-[0.4em] transition-all shadow-2xl active:scale-95">
                                            Explore Full Profile
                                        </button>
                                    </div>
                                </div>

                                {/* Laser FX */}
                                {isSpotlight && (
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-laser shadow-[0_0_15px_rgba(220,38,38,1)] z-20" />
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Trailing Spacer to allow last item centering */}
                    <div className="shrink-0 w-[20vw] md:w-[40vw]" />
                </div>
            </div>

            <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes laser {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(680px); opacity: 0; }
        }
        .animate-laser {
          animation: laser 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
        </section>
    );
};
