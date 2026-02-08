import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Cherry Blossom Petals
        const petals = [];
        const petalCount = 25;

        for (let i = 0; i < petalCount; i++) {
            petals.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                size: Math.random() * 12 + 8,
                speedY: Math.random() * 1 + 0.5,
                speedX: Math.random() * 0.5 - 0.25,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 2 - 1,
                opacity: Math.random() * 0.5 + 0.3,
                color: ['#FFB6C1', '#FF69B4', '#FFC0CB', '#FFE4E1'][Math.floor(Math.random() * 4)]
            });
        }

        // Falling Rose Emojis 🌹
        const roses = [];
        const roseCount = 15;
        const roseTypes = ['🌹', '🌹', '🌹', '🌺', '💮']; // Red roses, wilted, pink, white

        for (let i = 0; i < roseCount; i++) {
            roses.push({
                x: Math.random() * canvas.width,
                y: Math.random() * -canvas.height,
                size: Math.random() * 15 + 20,
                speedY: Math.random() * 1.2 + 0.6,
                speedX: Math.random() * 0.8 - 0.4,
                rotation: Math.random() * 30 - 15,
                rotationSpeed: Math.random() * 2 - 1,
                opacity: Math.random() * 0.3 + 0.6,
                emoji: roseTypes[Math.floor(Math.random() * roseTypes.length)],
                swayOffset: Math.random() * Math.PI * 2
            });
        }

        // Stars
        const stars = [];
        const starCount = 50;

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                twinklePhase: Math.random() * Math.PI * 2,
                baseOpacity: Math.random() * 0.5 + 0.3
            });
        }

        // Draw petal shape
        const drawPetal = (x, y, size, rotation, opacity, color) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate((rotation * Math.PI) / 180);
            ctx.globalAlpha = opacity;

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(size / 2, -size / 2, size, -size / 4, size, 0);
            ctx.bezierCurveTo(size, size / 4, size / 2, size / 2, 0, 0);

            const gradient = ctx.createRadialGradient(size / 2, 0, 0, size / 2, 0, size);
            gradient.addColorStop(0, color);
            gradient.addColorStop(1, 'rgba(255, 182, 193, 0.3)');

            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        };

        // Draw rose emoji
        const drawRoseEmoji = (x, y, size, rotation, opacity, emoji) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate((rotation * Math.PI) / 180);
            ctx.globalAlpha = opacity;
            ctx.font = `${size}px serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(emoji, 0, 0);
            ctx.restore();
        };

        // Draw star
        const drawStar = (x, y, size, opacity) => {
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);

            const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(0.5, 'rgba(255, 228, 225, 0.5)');
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.fill();

            // Glow effect
            ctx.beginPath();
            ctx.arc(x, y, size * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
            ctx.fill();

            ctx.restore();
        };

        let animationFrameId;
        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.016; // ~60fps

            // Animate stars
            stars.forEach((star) => {
                const twinkle = Math.sin(time * star.twinkleSpeed * 100 + star.twinklePhase);
                const opacity = star.baseOpacity + twinkle * 0.3;
                drawStar(star.x, star.y, star.size, Math.max(0.1, opacity));
            });

            // Animate petals
            petals.forEach((petal) => {
                petal.y += petal.speedY;
                petal.x += petal.speedX + Math.sin(time + petal.rotation) * 0.3;
                petal.rotation += petal.rotationSpeed;

                // Reset petal when it falls off screen
                if (petal.y > canvas.height + 20) {
                    petal.y = -20;
                    petal.x = Math.random() * canvas.width;
                }

                drawPetal(petal.x, petal.y, petal.size, petal.rotation, petal.opacity, petal.color);
            });

            // Animate roses
            roses.forEach((rose) => {
                rose.y += rose.speedY;
                // Gentle swaying motion
                rose.x += rose.speedX + Math.sin(time + rose.swayOffset) * 0.8;
                rose.rotation = Math.sin(time * 0.5 + rose.swayOffset) * 15;

                // Reset rose when it falls off screen
                if (rose.y > canvas.height + 50) {
                    rose.y = -50;
                    rose.x = Math.random() * canvas.width;
                    // Randomize emoji on reset for variety
                    rose.emoji = roseTypes[Math.floor(Math.random() * roseTypes.length)];
                }

                drawRoseEmoji(rose.x, rose.y, rose.size, rose.rotation, rose.opacity, rose.emoji);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    );
};

export default ParticleBackground;
