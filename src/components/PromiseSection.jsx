import { motion } from 'framer-motion';
import { Heart, Infinity, Gift, Stars } from 'lucide-react';

const promises = [
    { icon: Heart, text: "To love you more, every single day" },
    { icon: Stars, text: "To be your biggest supporter and cheerleader" },
    { icon: Gift, text: "To make you smile, even on your hardest days" },
    { icon: Infinity, text: "To choose you, today, tomorrow, and forever" },
];

const PromiseSection = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <motion.div
                className="max-w-4xl mx-auto relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block mb-6"
                        animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <span className="text-6xl">💍</span>
                    </motion.div>
                    <h2 className="font-playfair text-3xl md:text-5xl font-semibold bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300 bg-clip-text text-transparent mb-4">
                        My Promise to You
                    </h2>
                    <p className="text-cream/70 text-lg max-w-xl mx-auto">
                        These are the vows I make to you, from the deepest part of my heart
                    </p>
                </motion.div>

                {/* Promises */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {promises.map((promise, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="glass-card p-6 flex items-center gap-5 group cursor-pointer"
                        >
                            <motion.div
                                className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                                animate={{
                                    boxShadow: [
                                        '0 0 0 0 rgba(255, 107, 157, 0.4)',
                                        '0 0 0 15px rgba(255, 107, 157, 0)',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            >
                                <promise.icon className="w-7 h-7 text-white" />
                            </motion.div>
                            <p className="text-cream text-lg font-medium leading-relaxed group-hover:text-pink-200 transition-colors">
                                {promise.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Final Message */}
                <motion.div
                    className="text-center glass-card p-10 md:p-14"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <motion.div
                        className="text-5xl mb-6"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        💕
                    </motion.div>
                    <p className="font-playfair text-2xl md:text-3xl text-cream/90 italic leading-relaxed mb-6">
                        "You are my today and all of my tomorrows.
                        <br />
                        I choose you, and I'll choose you over and over.
                        <br />
                        Without pause, without doubt, in a heartbeat.
                        <br />
                        I'll keep choosing you."
                    </p>
                    <motion.div
                        className="flex justify-center gap-3 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {['❤️', '💕', '💖', '💕', '❤️'].map((heart, i) => (
                            <motion.span
                                key={i}
                                className="text-2xl"
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.15
                                }}
                            >
                                {heart}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PromiseSection;
