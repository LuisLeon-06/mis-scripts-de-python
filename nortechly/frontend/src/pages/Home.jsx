import React, { useState } from 'react';
import Hero from '../components/Home/Hero';
import Categories from '../components/Home/Categories';
import ProductGrid from '../components/Shop/ProductGrid';
import Contact from '../components/Home/Contact';

const Home = () => {
    const [categoryFilter, setCategoryFilter] = useState('todos');

    const handleCategoryClick = (category) => {
        setCategoryFilter(category);
        const element = document.getElementById('productos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Hero />
            <Categories onCategoryClick={handleCategoryClick} />
            <ProductGrid initialFilter={categoryFilter} />
            <Contact />
        </>
    );
};

export default Home;
