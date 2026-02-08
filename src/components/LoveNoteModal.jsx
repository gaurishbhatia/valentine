import { motion } from 'framer-motion';
import { X, Heart } from 'lucide-react';

const LoveNoteModal = ({ onClose }) => {
    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="glass-card p-8 md:p-12 max-w-lg mx-4 relative"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <motion.button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-cream/80 hover:bg-white/20 hover:text-cream transition-all"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X className="w-5 h-5" />
                </motion.button>

                {/* Envelope Icon */}
                <motion.div
                    className="text-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                >
                    <span className="text-5xl">💌</span>
                </motion.div>

                {/* Title */}
                <motion.h3
                    className="font-playfair text-2xl md:text-3xl text-center bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 bg-clip-text text-transparent mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    My Love Note to You
                </motion.h3>

                {/* Message */}
                <motion.div
                    className="text-center space-y-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-cream/90 leading-relaxed">
                        Every moment with you is a treasure I hold close to my heart.
                        You make even the ordinary days feel extraordinary.
                    </p>
                    <p className="text-cream/90 leading-relaxed">
                        Thank you for being you, for loving me, and for making life
                        so beautifully worth living.
                    </p>
                    <p className="text-cream/90 leading-relaxed italic">
                        Forever yours, with all my love 💕
                    </p>
                </motion.div>

                {/* Hearts Animation */}
                <motion.div
                    className="flex justify-center gap-3 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.15
                            }}
                        >
                            <Heart
                                className="w-6 h-6 text-pink-400 fill-pink-400"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative Bottom */}
                <motion.div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    ✨
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default LoveNoteModal;
