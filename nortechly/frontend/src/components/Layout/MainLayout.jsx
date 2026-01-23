import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SupportWidget from './SupportWidget';

const MainLayout = ({ children }) => {
    const location = useLocation();

    React.useEffect(() => {
        // Small timeout to ensure DOM is ready after route transition
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));

            // Clean up observer on effect re-run
            return () => observer.disconnect();
        }, 100);

        return () => clearTimeout(timer);
    }, [location.pathname]); // Re-run specifically when path changes

    return (
        <div className="app-container">
            <Navbar />
            <main>
                {children}
            </main>
            <SupportWidget />
            <Footer />
        </div>
    );
};

export default MainLayout;
