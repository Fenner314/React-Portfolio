import React from 'react';
import PropTypes from 'prop-types';

const ProjectSquare = ({ projectNumber, title, info, liveLink, codeLink }) => {
    return (
        <div className={`project project-${projectNumber}`}>
            <div className="project-overlay">
                <p className="project-title">{title}</p>
                <p className="project-info">{info}</p>
                <div className="project-links">
                    <a href={liveLink} rel="noreferrer" target="_blank">Live Project</a>
                    <a href={codeLink} rel="noreferrer" target="_blank">View Code</a>
                </div>
            </div>
        </div>
    )
};

ProjectSquare.propTypes = {
    projectNumber: PropTypes.number,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
}

export default ProjectSquare;