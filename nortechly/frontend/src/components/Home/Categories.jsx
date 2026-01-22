import React from 'react';

const Categories = ({ onCategoryClick }) => {
    const categories = [
        { id: 'landing', icon: 'fas fa-rocket', title: 'Landing Pages', desc: 'Páginas de aterrizaje efectivas para convertir visitantes' },
        { id: 'ecommerce', icon: 'fas fa-store', title: 'E-commerce', desc: 'Tiendas online completas con sistema de pagos' },
        { id: 'blog', icon: 'fas fa-blog', title: 'Blogs', desc: 'Sitios de blogging modernos y responsivos' },
        { id: 'corporate', icon: 'fas fa-building', title: 'Corporativos', desc: 'Sitios profesionales para empresas' }
    ];

    return (
        <section id="categorias" className="categories">
            <div className="container">
                <h2>Categorías de Productos</h2>
                <div className="category-grid">
                    {categories.map(cat => (
                        <div key={cat.id} className="category-card reveal" onClick={() => onCategoryClick && onCategoryClick(cat.id)}>
                            <i className={cat.icon}></i>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
