import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import './index.css';

import LandingPage from './pages/LandingPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route
                path="/*"
                element={
                    <MainLayout>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/auth" element={<Auth />} />
                            {/* Redirect unknown routes to home or keep 404 behavior */}
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </MainLayout>
                }
            />
        </Routes>
    );
}

export default App;
