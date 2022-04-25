import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // target email input element
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            // validate other elements
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // state only updates if the form data has passed the quality tests
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value});
        }
    }

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }


    return (
        <section className="container mb-5">
            <h1 className="row justify-content-center py-5">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button className="btn btn-outline-primary btn-lg mt-3 mb-5" type="submit">Submit</button>        
        </section>
    )
}

export default ContactForm;