import { motion } from 'framer-motion';
import YesButton from './YesButton';
import NoButton from './NoButton';

const ProposalSection = ({ onYesClick }) => {
    return (
        <motion.div
            className="min-h-screen flex items-center justify-center px-4 py-8 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <motion.div
                className="glass-card p-8 md:p-12 lg:p-16 max-w-2xl w-full text-center"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                }}
            >
                {/* Decorative Hearts */}
                <motion.div
                    className="flex justify-center gap-4 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                    {['💕', '✨', '💕'].map((emoji, i) => (
                        <motion.span
                            key={i}
                            className="text-3xl md:text-4xl"
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                        >
                            {emoji}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 bg-clip-text text-transparent leading-tight"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Will you be my Valentine?
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-cream/80 text-lg md:text-xl mb-10 font-light italic"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Every love story is beautiful, but ours is my favorite
                </motion.p>

                {/* Buttons Container */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <YesButton onClick={onYesClick} />
                    <NoButton />
                </motion.div>

                {/* Bottom Decoration */}
                <motion.div
                    className="mt-10 flex justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.span
                            key={i}
                            className="text-pink-300/60 text-sm"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        >
                            ♡
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ProposalSection;
