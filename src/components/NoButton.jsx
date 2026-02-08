import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const NoButton = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isFixed, setIsFixed] = useState(false);
    const [escapeCount, setEscapeCount] = useState(0);

    const messages = [
        "No",
        "Are you sure?",
        "Really?",
        "Think again!",
        "Pretty please?",
        "Give it a chance!",
        "Don't be shy!",
        "You'll regret it!",
        "C'mon!",
        "Last chance!"
    ];

    const handleMouseEnter = useCallback(() => {
        if (!isFixed) {
            setIsFixed(true);
        }

        // Calculate new random position within viewport
        const buttonWidth = 120;
        const buttonHeight = 50;
        const padding = 20;

        const maxX = window.innerWidth - buttonWidth - padding;
        const maxY = window.innerHeight - buttonHeight - padding;

        const newX = Math.random() * maxX + padding;
        const newY = Math.random() * maxY + padding;

        setPosition({ x: newX, y: newY });
        setEscapeCount((prev) => Math.min(prev + 1, messages.length - 1));
    }, [isFixed, messages.length]);

    if (!isFixed) {
        return (
            <motion.button
                onMouseEnter={handleMouseEnter}
                onTouchStart={handleMouseEnter}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream/80 font-medium text-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {messages[escapeCount]}
            </motion.button>
        );
    }

    return (
        <motion.button
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleMouseEnter}
            className="dodge-button px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream/80 font-medium text-lg"
            style={{
                left: position.x,
                top: position.y
            }}
            animate={{
                x: 0,
                y: 0
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
        >
            {messages[escapeCount]}
        </motion.button>
    );
};

export default NoButton;
