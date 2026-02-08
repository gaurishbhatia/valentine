import { motion } from 'framer-motion';
import { Music, Play, Heart } from 'lucide-react';

const MusicPromptModal = ({ onStartMusic }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Blurred Background Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" />

            {/* Floating Hearts in Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-3xl"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: '110%',
                            rotate: Math.random() * 360
                        }}
                        animate={{
                            y: '-10%',
                            rotate: Math.random() * 360
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "linear"
                        }}
                    >
                        {['💕', '💖', '💗', '🌹', '❤️'][i % 5]}
                    </motion.div>
                ))}
            </div>

            {/* Modal Content */}
            <motion.div
                className="relative z-10 max-w-md w-full"
                initial={{ scale: 0.8, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 rounded-3xl blur-lg opacity-75 animate-pulse" />

                {/* Main Card */}
                <div className="relative glass-card p-10 md:p-12 text-center rounded-3xl border-2 border-pink-400/30 overflow-hidden">
                    {/* Sparkle decorations */}
                    <div className="absolute top-4 left-4 text-2xl animate-pulse">✨</div>
                    <div className="absolute top-4 right-4 text-2xl animate-pulse delay-300">✨</div>
                    <div className="absolute bottom-4 left-4 text-2xl animate-pulse delay-500">💫</div>
                    <div className="absolute bottom-4 right-4 text-2xl animate-pulse delay-700">💫</div>

                    {/* Animated Music Icon with Ring */}
                    <div className="relative w-28 h-28 mx-auto mb-8">
                        {/* Pulsing rings */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-rose-500"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 0, 0.6]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-rose-500"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.4, 0, 0.4]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        />

                        {/* Main circle */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 flex items-center justify-center shadow-2xl"
                            animate={{
                                rotate: [0, 360]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                                <Music className="w-12 h-12 text-white" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Title with gradient */}
                    <motion.h2
                        className="font-playfair text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 bg-clip-text text-transparent">
                            🎵 Our Song Awaits 🎵
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-cream/80 mb-10 text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Let the music set the mood
                        <br />
                        <span className="text-pink-300 font-medium">for our love story 💕</span>
                    </motion.p>

                    {/* Play Button */}
                    <motion.button
                        onClick={onStartMusic}
                        className="group relative px-12 py-5 rounded-full text-white font-bold text-xl overflow-hidden shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Button gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500" />

                        {/* Shimmer effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />

                        {/* Button content */}
                        <span className="relative flex items-center justify-center gap-3">
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Play className="w-7 h-7 fill-white" />
                            </motion.span>
                            Play Our Song
                        </span>
                    </motion.button>

                    {/* Animated Hearts Row */}
                    <motion.div
                        className="flex justify-center gap-3 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {['🌹', '💖', '🎵', '💖', '🌹'].map((emoji, i) => (
                            <motion.span
                                key={i}
                                className="text-2xl"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, i % 2 === 0 ? 10 : -10, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.12
                                }}
                            >
                                {emoji}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MusicPromptModal;
