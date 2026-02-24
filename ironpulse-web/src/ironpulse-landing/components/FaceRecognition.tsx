import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, ShieldCheck, User, X } from 'lucide-react';

export const FaceRecognition = ({ onClose }: { onClose: () => void }) => {
    const [scanning, setScanning] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (scanning) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setScanning(false);
                        return 100;
                    }
                    return prev + 2;
                });
            }, 50);
            return () => clearInterval(interval);
        }
    }, [scanning]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
        >
            <button
                onClick={onClose}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
                <X size={32} />
            </button>

            <div className="max-w-md w-full relative">
                {/* Scanner Framework */}
                <div className="relative aspect-square border-2 border-red-600/30 rounded-3xl overflow-hidden bg-zinc-900 group">
                    {/* Animated Scan Line */}
                    {scanning && (
                        <motion.div
                            className="absolute left-0 right-0 h-1 bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)] z-10"
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    )}

                    {/* Background Matrix/Grid */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)',
                            backgroundSize: '24px 24px'
                        }}
                    />

                    {/* User Profile Replacement (Simulated) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {scanning ? (
                                <motion.div
                                    key="scanning"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 1.1, opacity: 0 }}
                                    className="text-center"
                                >
                                    <Scan size={120} className="text-red-600/50 mx-auto mb-4 animate-pulse" />
                                    <p className="text-red-600 font-mono tracking-widest text-sm uppercase">Mapping Neural Features...</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="identified"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center"
                                >
                                    <div className="relative inline-block mb-4">
                                        <User size={120} className="text-red-600 mx-auto" />
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', delay: 0.3 }}
                                            className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2"
                                        >
                                            <ShieldCheck size={24} className="text-white" />
                                        </motion.div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter">Identity Verified</h3>
                                    <p className="text-green-500 font-mono text-sm uppercase">Auth Token: IP-99283-RE</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Corner Decors */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-red-600 rounded-tl-xl" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-600 rounded-tr-xl" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-red-600 rounded-bl-xl" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-red-600 rounded-br-xl" />
                </div>

                {/* Progress Bar */}
                <div className="mt-8">
                    <div className="flex justify-between text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">
                        <span>Scan Progress</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-red-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Status Text */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm font-light leading-relaxed">
                        {scanning
                            ? "Position your face in the center of the frame. Ensure adequate lighting for biometric analysis."
                            : "Access granted to IronPulse Training Core. Loading personalized performance metrics."}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
