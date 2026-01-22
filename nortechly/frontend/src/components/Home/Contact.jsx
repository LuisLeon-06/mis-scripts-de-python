import React from 'react';

const Contact = () => {
    return (
        <section id="contacto" className="contact">
            <div className="container">
                <h2>Contacto</h2>
                <div className="contact-info">
                    <div className="contact-item reveal">
                        <i className="fas fa-envelope"></i>
                        <span>nortechly.service@gmail.com</span>
                    </div>
                    <div className="contact-item reveal">
                        <i className="fas fa-phone"></i>
                        <span>+54 9 3885726574</span>
                    </div>
                    <div className="contact-item reveal">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Jujuy, Argentina</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
