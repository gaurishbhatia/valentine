import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

const YesButton = ({ onClick }) => {
    const handleClick = () => {
        // Trigger confetti explosion
        const duration = 3000;
        const end = Date.now() + duration;

        const colors = ['#FF6B9D', '#FF8FB1', '#FFB6C1', '#FF69B4', '#FFC0CB'];

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();

        // Center burst
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 },
            colors: colors
        });

        // Heart shapes
        const heart = confetti.shapeFromPath({
            path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
        });

        confetti({
            shapes: [heart],
            particleCount: 30,
            spread: 60,
            origin: { y: 0.5 },
            colors: colors,
            scalar: 2
        });

        onClick();
    };

    return (
        <motion.button
            onClick={handleClick}
            className="glow-button px-10 py-4 rounded-full text-white font-semibold text-xl flex items-center gap-3 relative overflow-hidden"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={{
                boxShadow: [
                    '0 0 20px rgba(255, 107, 157, 0.5), 0 0 40px rgba(255, 107, 157, 0.3)',
                    '0 0 30px rgba(255, 107, 157, 0.8), 0 0 60px rgba(255, 107, 157, 0.5)',
                    '0 0 20px rgba(255, 107, 157, 0.5), 0 0 40px rgba(255, 107, 157, 0.3)'
                ]
            }}
            transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            <Heart className="w-6 h-6 fill-current" />
            <span className="relative z-10">Yes!</span>
        </motion.button>
    );
};

export default YesButton;
