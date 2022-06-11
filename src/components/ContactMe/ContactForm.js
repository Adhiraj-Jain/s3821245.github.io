import React from 'react';

const ContactForm = () => {

    window.addEventListener("DOMContentLoaded", function () {
        // get the form elements defined in your form HTML above
        var form = document.getElementById("contactme-form");
        // var button = document.getElementById("my-form-button");
        var status = document.getElementById("contactme-form-status");

        // Success and Error functions for after the form is submitted

        function success() {
            form.reset();
            status.classList.add("success");
            status.innerHTML = "Thank you for getting in touch!";
        }

        function error() {
            status.classList.add("error");
            status.innerHTML = "Oops! There was a problem.";
        }

        // handle the form submission event

        form.addEventListener("submit", function (ev) {
            ev.preventDefault();
            console.log("reached heree")
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });
    });

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }

    return (
        <div id="contact-form" className="col-md-6 col-12 mb-5">
            <div className="col-md-9">
                <form id="contactme-form" action="https://formspree.io/f/xyyovdkk" method="post">
                    <div className="mb-3">
                        <input type="text" name="name" className="form-control" id="nameInput" aria-describedby="nameHelp" placeholder='Name' required />
                    </div>
                    <div className="mb-3">
                        <input type="email" name="_replyto" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder='Email address' required />
                    </div>
                    <div className="textarea">
                        <div className="input-group">
                            <textarea className="form-control" name="message" id="textInput" aria-label="With textarea" rows={5} placeholder='Message' required />
                        </div>
                    </div>
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
                    <div className="mb-3">
                        <input type="submit" className='submit-button' value="Send Message" />
                    </div>
                </form>
                <div id='contactme-form-status'></div>
            </div>
        </div>
    );
};

export default ContactForm;