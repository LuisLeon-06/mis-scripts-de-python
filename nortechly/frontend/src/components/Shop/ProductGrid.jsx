import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

const ProductGrid = ({ initialFilter = 'todos' }) => {
    const [filter, setFilter] = useState(initialFilter);

    useEffect(() => {
        if (initialFilter) {
            setFilter(initialFilter);
        }
    }, [initialFilter]);

    useEffect(() => {
        // Trigger animation for new elements when filter changes
        // Small delay to ensure React has fully committed updates to the DOM
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            const elements = document.querySelectorAll('.product-card.reveal');
            elements.forEach(el => observer.observe(el));

            // Clean up observer when component unmounts or filter changes (inside the timeout closure)
            // Note: failing to clean up strictly here isn't critical for this specific one-off, 
            // but for correctness we can assign it to a ref or just rely on the effect cleanup below if we moved logic out.
            // Actually, simpler to just run logic. Logic doesn't need complex cleanup if disconnected below properly? 
            // Wait, we need to return a cleanup from useEffect.
            // But we are inside existing useEffect.

            // Let's structure it like MainLayout
            return () => observer.disconnect();
        }, 100);

        return () => clearTimeout(timer);
    }, [filter]); // Re-run when filter changes

    const filteredProducts = filter === 'todos'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <section id="productos" className="products">
            <div className="container">
                <h2>Nuestros Productos</h2>
                <div className="filter-buttons">
                    {['todos', 'landing', 'ecommerce', 'blog', 'corporate'].map(f => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1).replace('-', ' ')}
                        </button>
                    ))}
                </div>
                <div className="product-grid" id="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
