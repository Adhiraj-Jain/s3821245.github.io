import React from 'react';
import "../../Stylesheets/ContactMe.css";
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <div id="contactme" className="contactme">
            <div className="shape">
                <img className="svg" src="paper.svg" alt="tear paper"></img>
            </div>
            <div className="form-container container">
                <div className="d-flex justify-content-center">
                    <span className="section-headings contactme-heading">Let's work together!</span>
                </div>
                <div className="row">
                    <div className=" contact-left col-md-6 col-12 mb-5">
                        <div className="col-md-9">
                            <div className="contactme-each-section">
                                <span className="contact-detail-heading">My Contacts</span>
                                <div><span>I can be reached out anytime via contact details provided below.</span></div>
                            </div>
                            <div className="contactme-each-section">
                                <span className="contact-detail-heading">Email</span>
                                <div><span>adhirajjain2001@gmail.com</span></div>
                            </div>
                            <div className="contactme-each-section">
                                <span className="contact-detail-heading">Phone</span>
                                <div><span>(+61) 478 846 303</span></div>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div >
    );
};

export default ContactMe;