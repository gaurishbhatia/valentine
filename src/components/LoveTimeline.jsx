import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Star } from 'lucide-react';

const timelineEvents = [
    {
        id: 1,
        icon: '💫',
        title: 'The Day We Met For Good',
        date: '11/02/2025',
        description: 'The moment that changed everything...',
        color: 'from-pink-400 to-rose-500'
    },
    {
        id: 2,
        icon: '☕',
        title: 'Our First Date',
        date: 'Still pending but soon',
        description: 'Nervous butterflies and endless conversations...',
        color: 'from-purple-400 to-pink-500'
    },
    {
        id: 3,
        icon: '💕',
        title: 'When I Knew',
        date: '12/04/2025',
        description: 'The moment I realized you were the one...',
        color: 'from-rose-400 to-red-500'
    },
    {
        id: 4,
        icon: '🌟',
        title: 'Our First Trip',
        date: '01/06/2025',
        description: 'Adventures and memories we created together...',
        color: 'from-amber-400 to-pink-500'
    },
    {
        id: 5,
        icon: '💝',
        title: 'Today & Forever',
        date: 'Present',
        description: 'Every day with you is a gift I cherish...',
        color: 'from-pink-500 to-purple-600'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const LoveTimeline = () => {
    return (
        <section className="py-16 px-4">
            <motion.div
                className="max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    variants={itemVariants}
                >
                    <motion.span
                        className="text-4xl mb-4 block"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        💑
                    </motion.span>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 bg-clip-text text-transparent mb-3">
                        Our Love Story
                    </h2>
                    <p className="text-cream/70 text-lg">
                        Every moment with you is a chapter worth remembering
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 transform md:-translate-x-1/2" />

                    {/* Timeline Items */}
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            variants={itemVariants}
                        >
                            {/* Content Card */}
                            <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                }`}>
                                <motion.div
                                    className="glass-card p-6 relative overflow-hidden group cursor-pointer"
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                    {/* Icon */}
                                    <motion.span
                                        className="text-3xl block mb-3"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                    >
                                        {event.icon}
                                    </motion.span>

                                    {/* Title */}
                                    <h3 className="font-playfair text-xl text-cream font-semibold mb-2">
                                        {event.title}
                                    </h3>

                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-pink-300 text-sm mb-3">
                                        <Calendar className="w-4 h-4" />
                                        <span>{event.date}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-cream/70 text-sm leading-relaxed">
                                        {event.description}
                                    </p>

                                    {/* Decorative Hearts */}
                                    <div className="absolute top-2 right-2 opacity-30 group-hover:opacity-60 transition-opacity">
                                        <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 transform -translate-x-1/2 flex items-center justify-center shadow-lg z-10"
                                whileHover={{ scale: 1.3 }}
                                animate={{
                                    boxShadow: [
                                        '0 0 0 0 rgba(255, 107, 157, 0.4)',
                                        '0 0 0 15px rgba(255, 107, 157, 0)',
                                    ]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Heart className="w-4 h-4 text-white fill-white" />
                            </motion.div>

                            {/* Empty Space for opposite side */}
                            <div className="hidden md:block md:w-5/12" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default LoveTimeline;
