import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { resumeGray, resumeGreen, resume } from '../imgImports'

export default function Resume() {
    const [resumeIconActive, setResumeIconActive] = useState(false);

    const handleResumeActive = () => {
        setResumeIconActive(true)
    };
    const handleResumeInactive = () => {
        setResumeIconActive(false)
    };

    return (
        <div className="resume-button" onMouseEnter={handleResumeActive} onMouseLeave={handleResumeInactive}>
            {/* <a className="resume-icon-a" href={resume} download="FennerResume" rel="noreferrer" target="_blank"> */}
            <Link to={resume} target="_blank" download="FennerResume">
                <img className="icon" id="resume-icon" src={resumeIconActive ? resumeGreen : resumeGray} alt="resume" />
            </Link>
            {/* </a> */}
            <p className="icon-text" id="resume-text" onMouseEnter={handleResumeActive} onMouseLeave={handleResumeInactive}>
                <Link to={resume} target="_blank" download="FennerResume">Resume</Link>
            </p>
        </div>
    )
}
