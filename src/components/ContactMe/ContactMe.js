import React from 'react';
import "../../Stylesheets/ContactMe.css";
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <section id="contactme">
            <div className="shape">
                <img className="svg" src="paper.svg" alt="tear paper"></img>
            </div>
            <div className="form-container container">
                <span className="section-headings contactme-heading">Let's work together!</span>
                <div className="row">
                    <div className="contact-left col-md-6 col-12">
                        <div className="contact-info">
                            <div className="contactme-each-section">
                                <span className="contact-detail-heading">My Contacts</span>
                                <span>I can be reached out anytime via contact details provided below.</span>
                            </div>
                            <div className="contactme-each-section">
                                <span className="contact-detail-heading">Email</span>
                                <span>adhirajjain2001@gmail.com</span>
                            </div>
                            <div className="contactme-each-section">
                                <span className="contact-detail-heading">Phone</span>
                                <span>(+61) 478 846 303</span>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
