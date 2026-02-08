import { motion } from 'framer-motion';
import PhotoCarousel from './PhotoGallery';
import TypewriterText from './TypewriterText';
import LoveTimeline from './LoveTimeline';
import ReasonsILoveYou from './ReasonsILoveYou';
import PromiseSection from './PromiseSection';

// Smooth scroll section wrapper
const Section = ({ children, className = "", delay = 0 }) => (
    <motion.section
        className={`py-12 md:py-20 px-4 ${className}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
            duration: 0.8,
            delay,
            ease: [0.25, 0.1, 0.25, 1]
        }}
    >
        {children}
    </motion.section>
);

const ScrapbookSection = () => {
    return (
        <motion.div
            className="min-h-screen relative z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl" />
            </div>

            {/* Hero Section */}
            <Section className="pt-8 md:pt-16">
                <div className="max-w-6xl mx-auto">
                    {/* Celebration Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: -30, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Animated Heart */}
                        <motion.div
                            className="relative inline-block mb-8"
                            animate={{
                                scale: [1, 1.15, 1],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className="text-7xl md:text-8xl">💖</span>
                            <motion.div
                                className="absolute inset-0 text-7xl md:text-8xl blur-md opacity-50"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                💖
                            </motion.div>
                        </motion.div>

                        <motion.h1
                            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <span className="bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 bg-clip-text text-transparent">
                                You Said Yes!
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-cream/80 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Now let me take you on a journey through our love story...
                        </motion.p>

                        {/* Scroll Indicator */}
                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <motion.div
                                className="inline-flex flex-col items-center text-cream/50"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-sm mb-2">Scroll to explore</span>
                                <span className="text-2xl">↓</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Photo Carousel Section */}
            <Section>
                <div className="max-w-6xl mx-auto">
                    <SectionHeader
                        emoji="📸"
                        title="Our Precious Memories"
                        subtitle="Moments frozen in time, treasured forever"
                    />
                    <PhotoCarousel />
                </div>
            </Section>

            {/* Decorative Divider */}
            <FloatingDivider />

            {/* Typewriter Message */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="glass-card p-8 md:p-14 relative overflow-hidden"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Decorative corners */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-pink-400/30 rounded-tl-lg" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-pink-400/30 rounded-tr-lg" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-pink-400/30 rounded-bl-lg" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-400/30 rounded-br-lg" />

                        <TypewriterText />
                    </motion.div>
                </div>
            </Section>

            {/* Decorative Divider */}
            <FloatingDivider />

            {/* Love Timeline */}
            <LoveTimeline />

            {/* Decorative Divider */}
            <FloatingDivider />

            {/* Reasons I Love You */}
            <ReasonsILoveYou />

            {/* Decorative Divider */}
            <FloatingDivider />

            {/* Promise Section */}
            <PromiseSection />

            {/* Footer */}
            <Footer />
        </motion.div>
    );
};

// Section Header Component
const SectionHeader = ({ emoji, title, subtitle }) => (
    <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <motion.div
            className="inline-block mb-4"
            animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
        >
            <span className="text-5xl">{emoji}</span>
        </motion.div>
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 bg-clip-text text-transparent mb-4">
            {title}
        </h2>
        <p className="text-cream/60 text-lg md:text-xl max-w-xl mx-auto">
            {subtitle}
        </p>
    </motion.div>
);

// Floating Decorative Divider
const FloatingDivider = () => (
    <motion.div
        className="flex items-center justify-center gap-6 py-8 md:py-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <motion.div
            className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-pink-400/40 to-pink-400/40"
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
            className="flex gap-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
        >
            {['✨', '💕', '✨'].map((emoji, i) => (
                <motion.span
                    key={i}
                    className="text-2xl"
                    animate={{
                        rotate: i === 1 ? [0, 10, -10, 0] : 0,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                    {emoji}
                </motion.span>
            ))}
        </motion.div>
        <motion.div
            className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-pink-400/40 to-pink-400/40"
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        />
    </motion.div>
);

// Footer Component
const Footer = () => (
    <motion.footer
        className="py-20 px-4 text-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
    >
        <div className="max-w-xl mx-auto">
            <motion.div
                className="glass-card p-10 md:p-12 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 rounded-[15px]" />

                <motion.div
                    className="relative z-10"
                >
                    <motion.div
                        className="text-6xl mb-6"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        💞
                    </motion.div>

                    <h3 className="font-playfair text-3xl md:text-4xl text-cream mb-4">
                        Forever & Always
                    </h3>

                    <p className="text-cream/60 text-sm md:text-base mb-6">
                        Made with all my love, just for you
                    </p>

                    <div className="flex justify-center gap-3">
                        {['🌹', '💕', '✨', '💕', '🌹'].map((emoji, i) => (
                            <motion.span
                                key={i}
                                className="text-2xl"
                                animate={{
                                    y: [0, -8, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.15
                                }}
                            >
                                {emoji}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </motion.footer>
);

export default ScrapbookSection;
