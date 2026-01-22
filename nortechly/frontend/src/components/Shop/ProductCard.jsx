import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    // Wishlist logic could be added here later

    const getCategoryName = (category) => {
        const names = {
            landing: 'Landing Page',
            ecommerce: 'E-commerce',
            blog: 'Blog',
            corporate: 'Corporativo'
        };
        return names[category] || category;
    };

    return (
        <div className="product-card reveal">
            <div className="product-image">
                <i className={product.icon}></i>
                {/* Wishlist button placeholder */}
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <span className="product-category">{getCategoryName(product.category)}</span>
                <div className="product-price">${product.price}</div>
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                    <i className="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
