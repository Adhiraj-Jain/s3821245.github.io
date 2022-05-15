import React from 'react';

const ContactForm = () => {
    return (
        <div id="contact-form" className="col-md-6 col-12 mb-5">
            <div className="col-md-9">
                <form>
                    <div className="mb-3">
                        <label for="nameInput" className="form-label">Name</label>
                        <input type="email" className="form-control" id="nameInput" aria-describedby="nameHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="emailInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
                    </div>
                    <div className="textarea">
                        <label for="textInput" className="form-label">Message</label>
                        <div className="input-group">
                            <textarea className="form-control" id="textInput" aria-label="With textarea" rows={5} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;