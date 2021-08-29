import React, { useEffect, useContext } from 'react';
import { Context } from '../../App';
import { hiddenY } from '../../utilities/functions/helperFunctions';
import Nav from './DevComponents/Nav';
import Home from './DevComponents/Home';
import About from './DevComponents/About/About';
import Projects from './DevComponents/Projects';
import Contact from './DevComponents/Contact/Contact';
import Resume from './DevComponents/Resume';
import '../../css/dev.css';

export default function Dev() {
    const { noScroll, setDevPage, handlePageChange } = useContext(Context);

    const handleDevPageState = () => {
        setDevPage(true)
    }

    useEffect(() => {
        setTimeout(() => {
            handlePageChange()
        }, 2000);
        hiddenY();
        window.addEventListener('resize', hiddenY);
        handleDevPageState();
    }, [])
    
    return (
        <>
            <div className="container" style={noScroll ? {overflow: 'noscroll'} : null}>
                <Nav />
                <Home />
                <About />
                <Projects />
                <Contact />
                <Resume />
            </div>
        </>
    )
}
