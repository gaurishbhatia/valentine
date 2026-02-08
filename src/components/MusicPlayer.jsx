import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = ({ autoPlay = false }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

    // Auto-play when autoPlay prop becomes true
    useEffect(() => {
        if (autoPlay && !hasAutoPlayed && audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setHasAutoPlayed(true);
                })
                .catch((err) => {
                    console.log('Auto-play prevented:', err);
                });
        }
    }, [autoPlay, hasAutoPlayed]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <motion.div
            className="music-player"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            {/* Audio Element - Place your song in public/music/song.mp3 */}
            <audio ref={audioRef} src="/music/dooron.mp3" loop />

            <div className="glass-card p-4 flex items-center gap-4">
                {/* Album Art Placeholder */}
                <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center"
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={{
                        duration: 3,
                        repeat: isPlaying ? Infinity : 0,
                        ease: "linear"
                    }}
                >
                    <Music className="w-6 h-6 text-white" />
                </motion.div>

                {/* Track Info */}
                <div className="hidden sm:block">
                    <p className="text-cream text-sm font-medium">Our Song 💕</p>
                    <p className="text-cream/60 text-xs">Playing for you</p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                    {/* Play/Pause Button */}
                    <motion.button
                        onClick={togglePlay}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isPlaying ? (
                            <Pause className="w-5 h-5" />
                        ) : (
                            <Play className="w-5 h-5 ml-0.5" />
                        )}
                    </motion.button>

                    {/* Mute Button */}
                    <motion.button
                        onClick={toggleMute}
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-cream/80 hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMuted ? (
                            <VolumeX className="w-4 h-4" />
                        ) : (
                            <Volume2 className="w-4 h-4" />
                        )}
                    </motion.button>
                </div>

                {/* Animated Sound Bars */}
                {isPlaying && (
                    <div className="flex items-end gap-0.5 h-6">
                        {[1, 2, 3, 4].map((bar) => (
                            <motion.div
                                key={bar}
                                className="w-1 bg-pink-400 rounded-full"
                                animate={{
                                    height: ['8px', '24px', '12px', '20px', '8px']
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: bar * 0.1
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default MusicPlayer;
