import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = () => {
    const fullText = "Happy Propose Day. You are the reason I smile, the warmth in my heart, and the love of my life. Here's to us, to our journey, and to forever together. I love you more than words could ever express... 💕";

    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex((prev) => prev + 1);
            }, 50); // Adjust speed here (lower = faster)

            return () => clearTimeout(timeout);
        } else {
            setIsComplete(true);
        }
    }, [currentIndex, fullText]);

    return (
        <div className="text-center">
            {/* Decorative Quote Mark */}
            <motion.div
                className="text-5xl text-pink-300/50 font-playfair mb-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
            >
                "
            </motion.div>

            {/* Typewriter Text */}
            <div className="relative">
                <p className="font-playfair text-lg md:text-xl lg:text-2xl text-cream/90 leading-relaxed">
                    {displayedText}
                    {!isComplete && (
                        <motion.span
                            className="inline-block w-0.5 h-6 bg-pink-400 ml-1 align-middle"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        />
                    )}
                </p>
            </div>

            {/* Completion Animation */}
            {isComplete && (
                <motion.div
                    className="mt-8 flex justify-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {['❤️', '💕', '💖', '💕', '❤️'].map((heart, i) => (
                        <motion.span
                            key={i}
                            className="text-xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.5 + i * 0.1,
                                type: "spring",
                                stiffness: 200
                            }}
                        >
                            {heart}
                        </motion.span>
                    ))}
                </motion.div>
            )}

            {/* Closing Quote Mark */}
            <motion.div
                className="text-5xl text-pink-300/50 font-playfair mt-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isComplete ? 1 : 0.3, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                "
            </motion.div>
        </div>
    );
};

export default TypewriterText;
