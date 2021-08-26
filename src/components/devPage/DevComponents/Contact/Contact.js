import React from 'react'
import Form from './Form'

export default function Contact() {

    return (
        <section id="contact" className="section">
            {/* <div className="contact-contain"> */}

                <h1 className="section-title">Contact Me</h1>
                <div className="contact-form-container">
                    <p className="contact-mesage m-10">I'm interested in freelance opportunities and I'm currently available for full-time employment in the Cincinnati area or remotely. Please fill out this contact form to reach me with any requests or questions.</p>
                    <Form />
                </div>
            {/* </div> */}

                <p className="copy">Copyright &copy; 2021 Jacob Fenner</p>
                
        </section>
    )
}
