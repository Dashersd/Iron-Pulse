import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { footerSocials } from '../data';

export const Footer = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-zinc-950 py-12 px-6 border-t border-zinc-800 relative overflow-hidden"
    >
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(220,38,38,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3
              className="text-2xl font-black text-red-600 mb-4"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(220,38,38,0.8)',
              }}
            >
              IRONPULSE
            </motion.h3>
            <p className="text-gray-400">Where Strength Meets Motion.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@ironpulse.com</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {footerSocials.map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{
                    scale: 1.3,
                    color: '#dc2626',
                    y: -5,
                    textShadow: '0 0 10px rgba(220,38,38,0.8)',
                  }}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-gray-500">
          <p>&copy; 2026 IronPulse. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

