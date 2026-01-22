import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cart.length === 0) return;
        navigate('/checkout'); // Placeholder, or implement checkout modal/page
        // For now, let's just alert
        alert('Proceeding to checkout (Not implemented fully yet)');
    };

    return (
        <section className="cart-section active" style={{ marginTop: '80px' }}>
            <div className="container">
                <h2>Carrito de Compras</h2>
                <div className="cart-container">
                    <div className="cart-items">
                        {cart.length === 0 ? (
                            <p>El carrito está vacío</p>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="cart-item-info">
                                        <div className="cart-item-title">{item.title}</div>
                                        <div className="cart-item-price">${item.price}</div>
                                        <div className="cart-item-quantity">
                                            <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="cart-summary">
                        <h3>Resumen</h3>
                        <div className="cart-total">
                            <span>Total: <span>${cartTotal}</span></span>
                        </div>
                        <button className="checkout-btn" onClick={handleCheckout}>Proceder al Pago</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
