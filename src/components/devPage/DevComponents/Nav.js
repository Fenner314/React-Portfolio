import React, { useState, useEffect, useContext } from 'react';
import DelayLink from 'react-delay-link';
import { Link } from 'react-scroll';
import { Context } from '../../../App';
import { 
    aboutGray, 
    aboutGreen, 
    contactGray, 
    contactGreen, 
    githubGray, 
    githubGreen, 
    homeGray, 
    homeGreen, 
    linkedinGray, 
    linkedinGreen, 
    logo250, 
    logoName250, 
    projectsGray,
    projectsGreen, 
} from '../imgImports';

export default function Nav() {
    //State
    const [homeIconActive, setHomeIconActive] = useState(false);
    const [aboutIconActive, setAboutIconActive] = useState(false);
    const [projectsIconActive, setProjectsIconActive] = useState(false);
    const [contactIconActive, setContactIconActive] = useState(false);
    const [githubIconActive, setGithubIconActive] = useState(false);
    const [linkedinIconActive, setLinkedinIconActive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);
    const [logoSmall, setLogoSmall] = useState(false);
    const [loaded, setLoaded] = useState(false);

    //Event listeners for logo and mobile menu
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (!mobile.matches) {
                setBurgerActive(false)
            }
        });
        window.addEventListener('scroll', () => {
            checkForLogoSize()
        });
        checkForLogoSize();
        setTimeout(() => {
            setLoaded(true)
        }, 7000);
    }, [])

    //Context functions
    const { setDevPage, handlePageChange } = useContext(Context);

    //Helpers
    const mobile = window.matchMedia('(max-width: 600px)');
    const checkForLogoSize = () => {
        if (window.scrollY > 1) {
            setLogoSmall(true)
        } else {
            setLogoSmall(false);
        }
    }

    //Event handlers
    const handleHomeActive = () => {
        setHomeIconActive(true)
    };
    const handleHomeInactive = () => {
        setHomeIconActive(false)
    };
    const handleAboutActive = () => {
        setAboutIconActive(true)
    };
    const handleAboutInactive = () => {
        setAboutIconActive(false)
    };
    const handleProjectsActive = () => {
        setProjectsIconActive(true)
    };
    const handleProjectsInactive = () => {
        setProjectsIconActive(false)
    };
    const handleContactActive = () => {
        setContactIconActive(true)
    };
    const handleContactInactive = () => {
        setContactIconActive(false)
    };
    const handleGithubActive = () => {
        setGithubIconActive(true)
    };
    const handleGithubInactive = () => {
        setGithubIconActive(false)
    };
    const handleLinkedinActive = () => {
        setLinkedinIconActive(true)
    };
    const handleLinkedinInactive = () => {
        setLinkedinIconActive(false)
    };
    const handleBurgerToggle = () => {
        setBurgerActive(!burgerActive)
    };    
    const handleIconClick = () => {
        // mobile.matches ? handleBurgerToggle() : null
        if (mobile.matches) {
            handleBurgerToggle() 
        };
        setLogoSmall(true);
    }

    const handleDevPageChange = () => {
        setDevPage(false)
    }

    const renderNavIcons = () => {
        return (
            <ul className="nav-icons">
                <li className="home-button nav-button button">
                    <Link
                        to="home" 
                        smooth={true} 
                        duration={800} 
                        spy={true}
                        onSetActive={handleHomeActive}
                        onSetInactive={handleHomeInactive}
                    >
                        <img className="icon" id="home-icon" onClick={mobile.matches ? handleBurgerToggle : null} src={homeIconActive ? homeGreen : homeGray} alt="home" />
                        <p className="icon-text nav-button-text" id="home-text" onClick={mobile.matches ? handleBurgerToggle : null}>Home</p>
                    </Link>
                </li>
                <li className="about-button nav-button button">
                    <Link
                        to="about" 
                        smooth={true} 
                        duration={800} 
                        offset={1}
                        spy={true}
                        onSetActive={handleAboutActive}
                        onSetInactive={handleAboutInactive}
                    >
                        <img className="icon" id="about-icon" onClick={handleIconClick} src={aboutIconActive ? aboutGreen : aboutGray} alt="about" />
                        <p className="icon-text nav-button-text" id="about-text" onClick={handleIconClick} >About</p>
                    </Link>
                </li>
                <li className="projects-button nav-button button">
                    <Link
                        to="projects" 
                        smooth={true} 
                        duration={800} 
                        offset={1}
                        spy={true}
                        onSetActive={handleProjectsActive}
                        onSetInactive={handleProjectsInactive}
                    >
                        <img className="icon" id="projects-icon" onClick={handleIconClick} src={projectsIconActive ? projectsGreen : projectsGray} alt="projects" />
                        <p className="icon-text nav-button-text" id="projects-text" onClick={handleIconClick} >Projects</p>
                    </Link>
                </li>
                <li className="contact-button nav-button button">
                    <Link
                        to="contact" 
                        smooth={true} 
                        duration={800} 
                        offset={1}
                        spy={true}
                        onSetActive={handleContactActive}
                        onSetInactive={handleContactInactive}
                    >
                        <img className="icon" id="contact-icon" onClick={handleIconClick} src={contactIconActive ? contactGreen : contactGray} alt="contact" />
                        <p className="icon-text nav-button-text" id="contact-text" onClick={handleIconClick} >Contact</p>
                    </Link>
                </li>
            </ul>
        )
    }

    const renderSocialIcons = () => {
        return (
            <div className="media-container">
                <ul className="social-media-icons">
                    <li>
                        <a  
                            className="github-button" 
                            href="https://github.com/Fenner314" 
                            onMouseEnter={handleGithubActive} 
                            onMouseLeave={handleGithubInactive}
                            rel="noreferrer" 
                            target="_blank" 
                        >
                            <img id="github-icon" src={githubIconActive ? githubGreen : githubGray} alt="github" />
                        </a>
                    </li>
                    <li>
                        <a  
                            className="linkedin-button" 
                            href="https://www.linkedin.com/in/jacob-fenner-9496aa197/" 
                            onMouseEnter={handleLinkedinActive} 
                            onMouseLeave={handleLinkedinInactive}
                            rel="noreferrer" 
                            target="_blank" 
                        >
                            <img id="linkedin-icon" src={linkedinIconActive ? linkedinGreen : linkedinGray} alt="linkedin" />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

    const renderBurger = () => {
        return (
            <div className={burgerActive ? "burger-toggle burger" : "burger"} onClick={handleBurgerToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        )
    }

    return (
        <>
            <nav className={burgerActive? "nav-toggle nav" : "nav"} style={{animationDelay: loaded ? '0s' : '4s'}}>
                {renderNavIcons()}
                {renderSocialIcons()}
            </nav>
            <div className="pseudo-nav">
                {/* <DelayLink 
                    to='/' 
                    delay={1500} 
                    clickAction={() => {
                        handlePageChange();
                        handleDevPageChange();
                    }}
                > */}
                <Link
                    to="home" 
                    smooth={true} 
                    duration={800} 
                    spy={true}
                    onSetActive={handleHomeActive}
                    onSetInactive={handleHomeInactive}
                >
                    <span className={logoSmall ? "logo logo-change" : "logo"}><img width="170px" src={logoName250} alt="logo" /></span>
                    <span className={logoSmall ? "logo-small logo-small-change" : "logo-small"}><img width="67px" src={logo250} alt="logo" /></span>
                </Link>
                {/* </DelayLink> */}
                {renderBurger()}
            </div>
        </>
    )
}
