import React, { useContext } from 'react';
import DelayLink from 'react-delay-link';
import { Context } from '../../App';

export default function Thanks() {
    const { handlePageChange } = useContext(Context);

    return (
        <div class="confirm-container">
            <div class="confirm-card">
                <div class="header">
                    <h1>Thank you!</h1>
                </div>
                <div class="body">
                    <span>Your message was successfully sent. I'll get back to you soon.</span>
                    <DelayLink to='/' delay={1500} clickAction={handlePageChange}>
                        <span id="back-link" href="dev.html">Back to my site</span>
                    </DelayLink>
                </div>
            </div>
        </div>
    )
}
