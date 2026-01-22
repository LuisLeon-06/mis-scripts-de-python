import React, { useState } from 'react';

const Auth = () => {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <section className="auth-section active" style={{ marginTop: '80px', display: 'block' }}>
            <div className="container">
                <div className="auth-container">
                    <div className="auth-tabs">
                        <button
                            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveTab('login')}
                        >
                            Iniciar Sesión
                        </button>
                        <button
                            className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
                            onClick={() => setActiveTab('register')}
                        >
                            Registrarse
                        </button>
                    </div>

                    {activeTab === 'login' && (
                        <form className="auth-form active">
                            <h2>Bienvenido de nuevo</h2>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" required />
                            </div>
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input type="password" required />
                            </div>
                            <button type="submit" className="submit-order-btn">Ingresar</button>
                        </form>
                    )}

                    {activeTab === 'register' && (
                        <form className="auth-form active">
                            <h2>Crear Cuenta</h2>
                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" required />
                            </div>
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input type="password" required />
                            </div>
                            <button type="submit" className="submit-order-btn">Registrarse</button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Auth;
