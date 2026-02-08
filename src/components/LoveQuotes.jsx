import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const quotes = [
    {
        text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
        author: "Maya Angelou"
    },
    {
        text: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
        author: "Gabriel García Márquez"
    },
    {
        text: "Whatever our souls are made of, his and mine are the same.",
        author: "Emily Brontë"
    },
    {
        text: "You are my heart, my life, my one and only thought.",
        author: "Arthur Conan Doyle"
    },
    {
        text: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
        author: "J.R.R. Tolkien"
    },
    {
        text: "The best thing to hold onto in life is each other.",
        author: "Audrey Hepburn"
    }
];

const LoveQuotes = () => {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 px-4">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="text-center mb-10">
                    <motion.span
                        className="text-4xl mb-4 block"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        📜
                    </motion.span>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 bg-clip-text text-transparent mb-3">
                        Words of Love
                    </h2>
                    <p className="text-cream/70 text-lg">
                        Beautiful quotes that remind me of us
                    </p>
                </div>

                {/* Quote Card */}
                <div className="glass-card p-8 md:p-12 relative overflow-hidden min-h-[250px] flex items-center justify-center">
                    {/* Decorative Quote Marks */}
                    <Quote className="absolute top-6 left-6 w-12 h-12 text-pink-400/20" />
                    <Quote className="absolute bottom-6 right-6 w-12 h-12 text-pink-400/20 rotate-180" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuote}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="text-center relative z-10"
                        >
                            <p className="font-playfair text-xl md:text-2xl lg:text-3xl text-cream/90 italic leading-relaxed mb-6">
                                "{quotes[currentQuote].text}"
                            </p>
                            <motion.p
                                className="text-pink-300 font-medium"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                — {quotes[currentQuote].author}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Background Hearts */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-pink-400/10 text-4xl"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.1, 0.2, 0.1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                }}
                            >
                                ♡
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quote Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {quotes.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setCurrentQuote(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentQuote
                                    ? 'bg-pink-400 w-6'
                                    : 'bg-white/30 hover:bg-white/50'
                                }`}
                            whileHover={{ scale: 1.2 }}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default LoveQuotes;
