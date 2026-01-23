import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        // Array de partículas
        const particles = [];
        const numParticles = 80;

        // Generar partículas aleatorias
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 3 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.5
            });
        }

        // Dibujar partículas y conexiones
        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Dibujar conexiones entre partículas cercanas
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Dibujar partículas
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 255, 255, ${p.opacity})`;
                ctx.fill();

                // Movimiento
                p.x += p.vx;
                p.y += p.vy;

                // Rebote en bordes
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleEnter = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className="landing-page-body">
            <canvas ref={canvasRef} id="particles"></canvas>
            <div className="landing-container">
                <div className="landing-subtitle">NO TE QUEDES ATRÁS</div>
                <h1 className="landing-title">Obtén una página web profesional</h1>
                <p className="landing-description">A tu medida.</p>
                <button onClick={handleEnter} className="landing-cta-button">COTIZA CON NOSOTROS →</button>
            </div>
        </div>
    );
};

export default LandingPage;
