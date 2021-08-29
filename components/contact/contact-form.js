import React, {useState} from 'react';
import classes from './contact-form.module.css';

const ContactForm = () => {

    const [email, seteamil] = useState('');
    const [name, setname] = useState('');
    const [message, setmessage] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();

        const formData = { email, name, message }

        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <section className={classes.contact}>
            <h1>How can i help you?</h1>
            <form className={classes.form} onSubmit={sendMessage}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => seteamil(e.target.value)}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="name"
                            id="name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Uour Message </label>
                    <textarea
                        id="message"
                        rows="5"
                        value={message}
                        required
                        onChange={(e) => setmessage(e.target.value)}
                    ></textarea>
                </div>
                <div className={classes.action}>
                    <button type="submit">Send Message</button>
                </div>
            </form>
            
        </section>

    )
}

export default ContactForm
