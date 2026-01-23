import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../index.css';

const SupportWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const form = useRef();

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            // When opening, ensure success message is reset if it was previously shown
            setShowSuccess(false);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const YOUR_SERVICE_ID = 'service_wqgvjqu';
        const YOUR_TEMPLATE_ID = 'template_htedn1t';
        const YOUR_PUBLIC_KEY = '6XrxmxVLuUNXJEgfS';

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setShowSuccess(true);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
            });
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        setIsOpen(false);
    };

    return (
        <div className="support-widget">
            <div className={`support-form-container ${isOpen ? 'active' : ''}`}>
                <div className="support-header">
                    <h3>Contact Us</h3>
                    <button className="close-btn" onClick={toggleOpen}>×</button>
                </div>

                {showSuccess ? (
                    <div className="success-message">
                        <div className="success-icon">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h4>¡Mensaje Enviado!</h4>
                        <p>Gracias por escribirnos. Muy pronto nos pondremos en contacto con usted.</p>
                        <button className="submit-btn" onClick={handleCloseSuccess}>Cerrar</button>
                    </div>
                ) : (
                    <form ref={form} className="support-form" onSubmit={sendEmail}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" placeholder="How can we help?" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                )}
            </div>

            <button className="support-bubble" onClick={toggleOpen}>
                <i className="fas fa-comment-dots"></i>
                <span>Escribenos</span>
            </button>
        </div>
    );
};

export default SupportWidget;
