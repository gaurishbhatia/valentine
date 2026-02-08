import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const reasons = [
    { id: 1, text: "Your smile lights up my entire world", emoji: "😊" },
    { id: 2, text: "The way you make me laugh every single day", emoji: "😄" },
    { id: 3, text: "How you always know exactly what not to say", emoji: "😝" },
    { id: 4, text: "Your kindness and the way you care for others", emoji: "💕" },
    { id: 5, text: "The comfort I feel just being near you", emoji: "🤗" },
    { id: 6, text: "How you make even ordinary moments special", emoji: "✨" },
    { id: 7, text: "Your beautiful heart and soul", emoji: "💖" },
    { id: 8, text: "The way you believe in me", emoji: "🌟" },
    { id: 9, text: "Every little thing that makes you, YOU", emoji: "💝" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -10 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15
        }
    }
};

const ReasonsILoveYou = () => {
    const sectionRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);
    const [phase, setPhase] = useState(0); // 0: waiting, 1: thinking, 2: kidding, 3: reveal

    // Intersection Observer to detect when section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    setPhase(1); // Start with thinking
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    // Handle phase transitions with timers
    useEffect(() => {
        if (phase === 1) {
            // Thinking -> Kidding after 2.5 seconds
            const timer = setTimeout(() => setPhase(2), 2500);
            return () => clearTimeout(timer);
        }
        if (phase === 2) {
            // Kidding -> Reveal after 2 seconds
            const timer = setTimeout(() => setPhase(3), 2000);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    return (
        <section ref={sectionRef} className="py-16 px-4 min-h-[60vh]">
            <motion.div
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Section Header - Always visible */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 mb-4"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Sparkles className="w-6 h-6 text-pink-400" />
                        <span className="text-3xl">💝</span>
                        <Sparkles className="w-6 h-6 text-pink-400" />
                    </motion.div>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 bg-clip-text text-transparent mb-3">
                        Reasons I Love You
                    </h2>
                    <p className="text-cream/70 text-lg">
                        (In no particular order, because every reason is equally important)
                    </p>
                </motion.div>

                {/* Animated Content Area */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {/* Phase 1: Thinking Emoji */}
                        {phase === 1 && (
                            <motion.div
                                key="thinking"
                                className="flex flex-col items-center justify-center py-20"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <motion.span
                                    className="text-8xl md:text-9xl"
                                    animate={{
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    🤔
                                </motion.span>
                                <motion.p
                                    className="text-cream/60 mt-6 text-lg"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    Hmm, let me think...
                                </motion.p>
                            </motion.div>
                        )}

                        {/* Phase 2: Just Kidding */}
                        {phase === 2 && (
                            <motion.div
                                key="kidding"
                                className="flex flex-col items-center justify-center py-20"
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.2, y: -20 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <motion.span
                                    className="text-7xl md:text-8xl mb-4"
                                    initial={{ rotate: -20 }}
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    😜
                                </motion.span>
                                <motion.p
                                    className="font-playfair text-2xl md:text-3xl text-pink-300 italic"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Just kidding, love!
                                </motion.p>
                                <motion.p
                                    className="text-cream/60 mt-2 text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    There are so many reasons... 💕
                                </motion.p>
                            </motion.div>
                        )}

                        {/* Phase 3: Reveal Reasons */}
                        {phase === 3 && (
                            <motion.div
                                key="reveal"
                                className="w-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Reasons Grid */}
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {reasons.map((reason, index) => (
                                        <motion.div
                                            key={reason.id}
                                            variants={itemVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                rotate: index % 2 === 0 ? 2 : -2,
                                                transition: { type: "spring", stiffness: 300 }
                                            }}
                                            className="group"
                                        >
                                            <div className="glass-card p-6 h-full relative overflow-hidden cursor-pointer">
                                                {/* Number Badge */}
                                                <motion.div
                                                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                                                    animate={{
                                                        boxShadow: [
                                                            '0 0 0 0 rgba(255, 107, 157, 0.3)',
                                                            '0 0 0 8px rgba(255, 107, 157, 0)',
                                                        ]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                                                >
                                                    {reason.id}
                                                </motion.div>

                                                {/* Emoji */}
                                                <motion.span
                                                    className="text-4xl block mb-4"
                                                    animate={{
                                                        rotate: [0, 10, -10, 0],
                                                        scale: [1, 1.1, 1]
                                                    }}
                                                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                                >
                                                    {reason.emoji}
                                                </motion.span>

                                                {/* Text */}
                                                <p className="text-cream font-medium text-lg leading-relaxed pr-6">
                                                    {reason.text}
                                                </p>

                                                {/* Hover Heart */}
                                                <motion.div
                                                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                >
                                                    <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                                                </motion.div>

                                                {/* Background Gradient on Hover */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-[15px]" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Bottom Text */}
                                <motion.div
                                    className="text-center mt-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 }}
                                >
                                    <p className="text-cream/60 italic text-lg">
                                        ...and a million more reasons I discover every day 💕
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
};

export default ReasonsILoveYou;
