import React, { useState, useEffect, useContext } from 'react';
import DelayLink from 'react-delay-link';
import { Link } from 'react-router-dom';
import { Context } from '../../App';
import {
    logoNameOnly,
    stackedName,
    muteRed,
    logoLeftPlain,
    logoMiddle,
    logoRightPlain
} from './imgImports';
import '../../css/landing.css'


export default function Landing() {
    //State
    const [musicHover, setMusicHover] = useState(false);
    const [devHover, setDevHover] = useState(false);
    const [size, setSize] = useState('desktop');

    const { loading, setLoading, handlePageChange } = useContext(Context);

    const largeScreen = window.matchMedia('(min-width: 1350px)');
    const tablet = window.matchMedia('(min-width: 501px) and (max-width: 1000px)');
    const mobile = window.matchMedia('(max-width: 500px)');

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (largeScreen.matches) {
                setSize('largeScreen')
            } else if (tablet.matches) {
                setSize('tablet')
            } else if (mobile.matches) {
                setSize('mobile')
            } else {
                setSize('desktop')
            }
        });
        if (largeScreen.matches) {
            setSize('largeScreen')
        } else if (tablet.matches) {
            setSize('tablet')
        } else if (mobile.matches) {
            setSize('mobile')
        } else {
            setSize('desktop')
        }
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    const handleMusicHover = () => {
        musicHover ? setMusicHover(false) : setMusicHover(true)
    }

    const handleDevHover = () => {
        devHover ? setDevHover(false) : setDevHover(true)
    }

    return (
        <section className="showcase full-screen">
            <header>
                <div className={loading ? "title" : 'title title-load'}>
                    <img 
                    id="fenner" 
                    src={
                        size === 'desktop' || size === 'largeScreen' ? logoNameOnly : stackedName
                    } 
                    width={
                        size === 'mobile' ? "200px" :
                        size === 'tablet' ? "280px" : "500px"
                    } 
                    alt="logo" 
                />
                </div>
                <hr className={loading ? '' : 'hr-load'} />
            </header>
            
            <div className="sites-container">
                <div className="sites">
                    <div className="left-container">
                        <img 
                            src={logoLeftPlain} 
                            width={
                                size === 'largeScreen' ? "200px" :
                                size === 'desktop' ? "150px" :
                                size === 'tablet' ? "130px" : "90px"
                            } 
                            className={musicHover ? "left-visible" : "left-hidden"} 
                            alt="logo" 
                        />
                        <DelayLink to='/' delay={1500} clickAction={handlePageChange} >
                            <p className="musician" onMouseEnter={handleMusicHover} onMouseLeave={handleMusicHover}>Music Studio</p>
                        </DelayLink> 
                    </div>     
                    <img 
                        src={logoMiddle} 
                        width={
                            size === 'largeScreen' ? "200px" :
                            size === 'desktop' ? "150px" :
                            size === 'tablet' ? "130px" : "120px"
                        } 
                        id="middle" 
                        alt="logo" 
                    />
                    <div className="right-container">
                        <DelayLink to='/web-dev' delay={1000} clickAction={handlePageChange} >
                            <p className="developer" onMouseEnter={handleDevHover} onMouseLeave={handleDevHover}>Web Development</p>
                        </DelayLink>
                        <img 
                            src={logoRightPlain} 
                            width={
                                size === 'largeScreen' ? "200px" :
                                size === 'desktop' ? "150px" :
                                size === 'tablet' ? "130px" : "90px"
                            } 
                            className={devHover ? "right-visible" : "right-hidden"} 
                            alt="logo" 
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
}
