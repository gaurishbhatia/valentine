import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const photos = [
    { id: 1, src: '/photos/photo2.jpeg', caption: 'Our First Trip Together' },
    { id: 2, src: '/photos/photo1.jpeg', caption: 'Sweet memories forever' },
    { id: 3, src: '/photos/photo4.jpeg', caption: 'I Love You More' },
    { id: 4, src: '/photos/photo5.jpeg', caption: 'Together through it all' },
    { id: 5, src: '/photos/photo6.jpeg', caption: 'Our beautiful love story' },
    { id: 6, src: '/photos/photo3.jpeg', caption: 'Will you be my valentine' },
];

const PhotoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Swipe handling
    const dragX = useMotionValue(0);
    const SWIPE_THRESHOLD = 50;

    const getIndex = (offset) => {
        return (currentIndex + offset + photos.length) % photos.length;
    };

    const paginate = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + direction + photos.length) % photos.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Handle drag end for swipe
    const handleDragEnd = (event, info) => {
        const { offset, velocity } = info;

        // Swipe right (go to previous)
        if (offset.x > SWIPE_THRESHOLD || velocity.x > 500) {
            paginate(-1);
        }
        // Swipe left (go to next)
        else if (offset.x < -SWIPE_THRESHOLD || velocity.x < -500) {
            paginate(1);
        }

        // Reset drag position
        animate(dragX, 0, { type: "spring", stiffness: 300, damping: 30 });
    };

    // Card positions for 3D effect
    const cardStyles = {
        left2: {
            x: '-130%',
            scale: 0.5,
            rotateY: 45,
            z: -300,
            opacity: 0.3,
            zIndex: 1
        },
        left1: {
            x: '-75%',
            scale: 0.7,
            rotateY: 35,
            z: -150,
            opacity: 0.6,
            zIndex: 2
        },
        center: {
            x: '0%',
            scale: 1,
            rotateY: 0,
            z: 0,
            opacity: 1,
            zIndex: 5
        },
        right1: {
            x: '75%',
            scale: 0.7,
            rotateY: -35,
            z: -150,
            opacity: 0.6,
            zIndex: 2
        },
        right2: {
            x: '130%',
            scale: 0.5,
            rotateY: -45,
            z: -300,
            opacity: 0.3,
            zIndex: 1
        }
    };

    const getCardPosition = (photoIndex) => {
        const diff = (photoIndex - currentIndex + photos.length) % photos.length;

        if (diff === 0) return 'center';
        if (diff === 1) return 'right1';
        if (diff === 2) return 'right2';
        if (diff === photos.length - 1) return 'left1';
        if (diff === photos.length - 2) return 'left2';
        return null;
    };

    const renderCard = (photo, index) => {
        const position = getCardPosition(index);
        if (!position) return null;

        const style = cardStyles[position];
        const isCenter = position === 'center';

        return (
            <motion.div
                key={photo.id}
                className="absolute left-1/2 top-1/2 cursor-pointer touch-pan-y"
                style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center'
                }}
                animate={{
                    x: style.x,
                    y: '-50%',
                    scale: style.scale,
                    rotateY: style.rotateY,
                    z: style.z,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    translateX: '-50%'
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 1
                }}
                onClick={() => !isCenter && goToSlide(index)}
                whileHover={!isCenter ? { scale: style.scale * 1.05 } : {}}
            >
                {/* Polaroid Card */}
                <div
                    className={`bg-white p-3 md:p-4 shadow-2xl w-[200px] md:w-[280px] transition-shadow duration-300 ${isCenter ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]' : ''
                        }`}
                    style={{
                        borderRadius: '4px',
                        transform: isCenter ? 'rotate(-1deg)' : `rotate(${index % 2 === 0 ? -2 : 2}deg)`
                    }}
                >
                    {/* Photo Area */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 overflow-hidden">
                        {/* Actual Image */}
                        <img
                            src={photo.src}
                            alt={photo.caption}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                                // Fallback if image doesn't exist
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Fallback placeholder (hidden by default) */}
                        <div className="absolute inset-0 flex-col items-center justify-center text-deep-plum/60 hidden">
                            <span className="text-4xl md:text-5xl mb-2">📷</span>
                            <span className="font-medium text-xs md:text-sm bg-white/70 px-3 py-1 rounded-full shadow-sm">
                                Add photo{photo.id}
                            </span>
                        </div>

                        {/* Shimmer Effect - only on center card */}
                        {isCenter && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                    ease: "easeInOut"
                                }}
                            />
                        )}

                        {/* Heart Badge - only on center */}
                        {isCenter && (
                            <motion.div
                                className="absolute top-2 right-2"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Heart className="w-5 h-5 text-pink-500 fill-pink-500 drop-shadow-md" />
                            </motion.div>
                        )}
                    </div>

                    {/* Caption */}
                    <div className="mt-3 md:mt-4 text-center pb-2">
                        <p className={`font-playfair text-deep-plum italic transition-all duration-300 ${isCenter ? 'text-sm md:text-base' : 'text-xs md:text-sm opacity-70'
                            }`}>
                            "{photo.caption}"
                        </p>
                        {isCenter && (
                            <div className="flex justify-center gap-1 mt-2">
                                {[...Array(3)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        className="text-pink-400 text-xs"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    >
                                        ♥
                                    </motion.span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto px-4">
            {/* 3D Carousel Container with Swipe */}
            <motion.div
                className="relative h-[350px] md:h-[450px] overflow-hidden cursor-grab active:cursor-grabbing"
                style={{ perspective: '1200px' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
            >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-purple-500/5 to-transparent rounded-3xl pointer-events-none" />

                {/* Cards */}
                <div
                    className="relative h-full w-full pointer-events-none"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {photos.map((photo, index) => renderCard(photo, index))}
                </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
                {/* Left Arrow */}
                <motion.button
                    onClick={() => paginate(-1)}
                    disabled={isAnimating}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-colors disabled:opacity-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>

                {/* Dots */}
                <div className="flex gap-3">
                    {photos.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isAnimating}
                            className={`relative transition-all duration-300 ${index === currentIndex
                                ? 'w-8 h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full'
                                : 'w-3 h-3 bg-white/30 rounded-full hover:bg-white/50'
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {index === currentIndex && (
                                <motion.span
                                    className="absolute inset-0 rounded-full bg-pink-400/50"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Right Arrow */}
                <motion.button
                    onClick={() => paginate(1)}
                    disabled={isAnimating}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-colors disabled:opacity-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Counter */}
            <motion.div
                className="text-center mt-4 text-cream/60 text-sm"
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <span className="text-pink-400 font-bold text-lg">{currentIndex + 1}</span>
                <span className="mx-2">/</span>
                <span>{photos.length}</span>
            </motion.div>
        </div>
    );
};

export default PhotoCarousel;
