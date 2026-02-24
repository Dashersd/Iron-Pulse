import { useState } from 'react';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { trainers } from '../data';

/**
 * TrainersCoverflow - Clockwise Swap Edition
 * - Implements a circular swapping effect
 * - Compact layout (cards don't move far apart)
 * - Premium Gojo-style white cards with red accents
 */
export const TrainersCoverflow = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const nextTrainer = () => {
        setActiveIndex((prev) => (prev + 1) % trainers.length);
    };

    const prevTrainer = () => {
        setActiveIndex((prev) => (prev - 1 + trainers.length) % trainers.length);
    };

    return (
        <section className="py-24 bg-black text-white overflow-hidden relative select-none flex flex-col items-center">
            {/* Header stays Iron Pulse Red/Black */}
            <div className="container mx-auto px-6 mb-2 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-4">
                    EXPERT <span className="text-red-600 border-b-4 border-red-600">TRAINERS</span>
                </h2>
                <div className="h-1.5 w-24 bg-red-600 mx-auto mb-12" />
            </div>

            {/* Carousel Stage */}
            <div className="relative w-full max-w-5xl h-[550px] md:h-[650px] flex items-center justify-center perspective-[1500px]">

                {/* Navigation Arrows - Bolted to the sides with tighter grouping */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-50 px-4 md:px-10">
                    <button
                        onClick={(e) => { e.stopPropagation(); prevTrainer(); }}
                        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-md border-2 border-red-600 text-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-600 hover:text-white transition-all active:scale-90 pointer-events-auto"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextTrainer(); }}
                        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-md border-2 border-red-600 text-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-600 hover:text-white transition-all active:scale-90 pointer-events-auto"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* 3D Scene */}
                <div className="relative w-full h-full flex items-center justify-center transform-style-3d">

                    {/* Active Radial Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[450px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

                    {trainers.map((trainer, index) => {
                        // Logic to calculate circular distance for 3 items
                        let diff = index - activeIndex;
                        if (diff > 1) diff -= 3;
                        if (diff < -1) diff += 3;

                        const isActive = diff === 0;

                        // "Circular Swap" Math:
                        // Cards stay close, swapping positions behind/front
                        let xPos = diff * 160; // Very tight horizontal spreading
                        let rotation = diff * -12; // Slight elegant tilt
                        let zPos = isActive ? 100 : -150; // Main card is pushed forward, others back
                        let scale = isActive ? 1 : 0.85;
                        let opacity = isActive ? 1 : 0.35;

                        // Clockwise transition feeling: 
                        // We add a slight additional rotation based on the diff to enhance the "swapped" feel
                        let rotateZ = diff * -2;

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    absolute w-[280px] md:w-[380px] h-[450px] md:h-[580px] rounded-[3rem] overflow-hidden
                                    transition-all duration-[800ms] cubic-bezier(0.19, 1, 0.22, 1) cursor-pointer
                                    ${isActive
                                        ? 'z-40 border-4 border-red-600 shadow-[0_30px_60px_-15px_rgba(220,38,38,0.5)] ring-12 ring-red-600/5'
                                        : 'z-20 border-2 border-zinc-800'
                                    }
                                    bg-black flex flex-col
                                `}
                                style={{
                                    transform: `translateX(${xPos}px) translateZ(${zPos}px) rotateY(${rotation}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                                    transformStyle: 'preserve-3d',
                                    opacity: opacity,
                                    filter: isActive ? 'none' : 'blur(4px) ',
                                }}
                            >
                                {/* Top Image Section (Gojo Style) */}
                                <div className="h-[72%] p-5 relative">
                                    <div className="w-full h-full rounded-[2.5rem] bg-zinc-950 flex items-center justify-center overflow-hidden shadow-inner relative">
                                        <img
                                            src={trainer.image}
                                            alt={trainer.name}
                                            className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'scale-110 grayscale-0' : 'scale-100 grayscale opacity-40'}`}
                                        />

                                        {/* Yellow Trophy Badge from Ref */}
                                        {isActive && (
                                            <div className="absolute top-6 right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-black rotate-12 z-20">
                                                <Trophy size={24} className="text-black fill-black" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content Section (Clean Typography) */}
                                <div className="h-[28%] px-8 pb-8 flex flex-col items-center justify-center text-center">
                                    <h3 className="text-3xl font-black text-white leading-none uppercase tracking-tight mb-2">
                                        {trainer.name}
                                    </h3>
                                    <p className="text-[11px] font-bold text-red-600 uppercase tracking-[0.4em] leading-none">
                                        {trainer.specialty.split(' ')[0]} REAPER
                                    </p>
                                    <div className={`h-1 bg-red-600/40 mt-5 transition-all duration-700 ${isActive ? 'w-12' : 'w-0'}`} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
