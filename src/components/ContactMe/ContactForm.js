import React from 'react';

const ContactForm = () => {
    return (
        <div id="contact-form" className="col-md-6 col-12 mb-5">
            <div className="col-md-9">
                <form>
                    <div class="mb-3">
                        <label for="nameInput" class="form-label">Name</label>
                        <input type="email" class="form-control" id="nameInput" aria-describedby="nameHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="emailInput" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" />
                    </div>
                    <div className="textarea">
                        <label for="textInput" class="form-label">Message</label>
                        <div class="input-group">
                            <textarea class="form-control" id="textInput" aria-label="With textarea" rows={5} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;