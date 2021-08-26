import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Context } from '../../../App';
import { typeWriter } from '../../../utilities/functions/helperFunctions';

export default function Home() {
    const [loadButton, setLoadButton] = useState(false);

    const {  } = useContext(Context)

    useEffect(() => {
        // window.addEventListener('load', () => {
        //     setTimeout(() => {
        //         typeWriter()
        //     }, 2500)
        // })
        setTimeout(() => {  
            typeWriter();
        }, 2500)
        setTimeout(() => {
            setLoadButton(true)
        }, 7000)
    }, [])

    return (
        <section id="home" className="section">

            <div className="home-container">
                {/* <h1>Hello,</h1>
                <h1>I'm <span className="jacob">Jacob</span>.</h1>
                <h3>Front End Web Developer</h3> */}
                <h1 className="hello my-3"> </h1>
                <div className="name-container my-3">
                    <h1 className="im"> </h1>
                    <h1 id="jacob"> </h1>
                    <h1 className="period"> </h1>
                </div>
                <h3 className="dev my-3"> </h3>
            </div>
            
            <Link
                to="projects" 
                smooth={true} 
                duration={800} 
                offset={1}
                spy={true}
                // onSetActive={handle}
                // onSetInactive={handleProjectsInactive}
            >
            <div className={loadButton ? "view-work-button" : "view-work-button invisible"}>
                <span>View My Work</span>
                <svg id="down-arrow" width="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>157 arrow down small</title><g id="_01_align_center" data-name="01 align center"><path d="M16.293,12.707,13,16V6H11V16L7.707,12.707,6.293,14.121l4.293,4.293a2,2,0,0,0,2.828,0l4.293-4.293Z"/></g></svg>
            </div>
            </Link>

        </section>
    )
}
