import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Sitios Web Profesionales para tu Negocio";
    const speed = 50;

    useEffect(() => {
        let i = 0;
        const type = () => {
            if (i < fullText.length) {
                setText(fullText.substring(0, i + 1));
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    }, []);

    const scrollToProducts = () => {
        const element = document.getElementById('productos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h2>{text}</h2>
                <p>Transforma tu presencia online con nuestras soluciones web listas para usar</p>
                <button className="cta-button" onClick={scrollToProducts}>Ver Productos</button>
            </div>
        </section>
    );
};

export default Hero;
