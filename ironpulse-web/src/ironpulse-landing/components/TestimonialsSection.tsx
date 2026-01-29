import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data';

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const orbs = useMemo(
    () =>
      [...Array(6)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        duration: 8 + Math.random() * 4,
        delay: i * 0.5,
      })),
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-black relative overflow-hidden">
      {/* 3D floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute w-32 h-32 bg-red-600/10 rounded-full blur-2xl"
          animate={{
            x: [0, orb.x, 0],
            y: [0, orb.y, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
          }}
          style={{
            left: orb.left,
            top: orb.top,
          }}
        />
      ))}

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          What Our Members Say
        </motion.h2>

        <div className="relative h-80">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{
                opacity: current === i ? 1 : 0,
                rotateY: current === i ? 0 : 90,
                scale: current === i ? 1 : 0.8,
                z: current === i ? 0 : -100,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center ${
                current === i ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="flex mb-4"
                animate={current === i ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {[...Array(test.rating)].map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={
                      current === i
                        ? {
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                          }
                        : {}
                    }
                    transition={{ delay: j * 0.1 + 0.2 }}
                  >
                    <Star className="w-6 h-6 text-red-600 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="relative"
                animate={current === i ? { z: [0, 30, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-xl md:text-2xl text-gray-300 mb-6 italic max-w-2xl relative z-10">
                  &quot;{test.text}&quot;
                </p>
                <motion.div
                  className="absolute inset-0 bg-red-600/10 blur-3xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.p
                className="text-lg font-bold text-red-600"
                animate={
                  current === i
                    ? {
                        textShadow: [
                          '0 0 10px rgba(220,38,38,0.5)',
                          '0 0 20px rgba(220,38,38,0.8)',
                          '0 0 10px rgba(220,38,38,0.5)',
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              >
                {test.name}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.5 }}
              className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-red-600 w-8' : 'bg-gray-600'}`}
            >
              {current === i && (
                <motion.div
                  className="w-full h-full bg-red-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

