import React from 'react';

const Contact = () => {
    return (
        <div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nom:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Envoyer</button>
            </form>

        </div>
    );
};

export default Contact;