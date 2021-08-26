import React, { useContext } from 'react';
import { Context } from '../../../../App';

export default function Form() {
    const { handlePageChange } = useContext(Context)

    return (
        <form className="contact-half contact-form m-10" action="https://formsubmit.co/fennerstudios@gmail.com" method="POST" onSubmit={handlePageChange}>
            <input type="hidden" name="_subject" value="New message from website." />
            <input type="text" name="_honey" style={{display: "none"}} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/thanks" />
            {/* <input type="hidden" name="_next" value="https://fennerstudios.com/thanks" /> */}
            <div className="input-container">
                <input className="input" type="text" name="name" required />
                <span className="floating-label">Name</span>
            </div>
            <div className="input-container">
                <input className="input" type="email" name="email" required />
                <span className="floating-label">Email</span>
            </div>
            <div className="input-container">
                <textarea className="input" name="message" rows="5" cols="60" resize="false" required />
                <span className="floating-label">Message</span>
            </div>
            {/* <button type="submit">Send</button> */}
            <button className="button-container form-button" id="sendMessage" type="submit">
                <div className="button-inner">
                    <span className="button-bg"></span>
                    <span className="button-base"></span>
                    <span className="button-text">Send</span>
                </div>
            </button>
        </form>
    )
}
