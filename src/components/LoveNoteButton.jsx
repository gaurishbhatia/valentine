import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoveNoteButton = ({ onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            className="love-note-btn"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="glass-card p-4 group cursor-pointer">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Heart
                        className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors fill-pink-400 group-hover:fill-pink-300"
                    />
                </motion.div>

                {/* Tooltip */}
                <motion.div
                    className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white/90 text-deep-plum px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                >
                    Open Love Note 💌
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-white/90" />
                </motion.div>
            </div>
        </motion.button>
    );
};

export default LoveNoteButton;
