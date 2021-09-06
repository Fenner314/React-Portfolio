import React, { useState } from 'react';
import Button from '../../../Button';
import { cancelGray, cancelGreen } from '../../imgImports';

export default function Popup({ popupActive, handlePopupChange }) {
    const [closeIconActive, setCloseIconActive] = useState(false);

    const handleCloseIconChange = () => {
        setCloseIconActive(!closeIconActive)
    }

    return (
        <div className={popupActive ? "popup-active popup" : "popup"}>
            <div className="popup-header">
                <p>How does being a musician make me a better developer?</p>
                <img 
                    id="cancel" 
                    onMouseEnter={handleCloseIconChange} 
                    onMouseLeave={handleCloseIconChange} 
                    onClick={handlePopupChange}
                    src={closeIconActive ? cancelGreen : cancelGray} 
                    alt="close" 
                />
            </div>
            <div className="popup-body">
                <p className="popup-item">I have an unparalleled work ethic from spending hours each day perfecting my instrument and my musicianship.</p>
                <p className="popup-item">To perfect the music I play, I have developed analytical and methodical thinking as well as an innate attention to detail; skills that make the best programmers. </p>
                <p className="popup-item">Musical thinking is abstract and creative. I'm able to see the big picture while honing in on the small details to make it all work together. This kind of thinking is paramount in coding.</p>
                <p className="popup-item">Music making is collaborative. As a skilled musician, I work great with others in any role I am given.</p>
            </div>
            <p className="popup-bottom">Don't believe me? Check out these sources!</p>
            <div className="popup-links">
                <a href="https://www.huffpost.com/entry/composing-code-why-musici_b_10714288" rel="noreferrer" target="_blank">
                    {/* <button>Huffpost</button> */}
                    <Button width='100px' height='50px' fontSize='14px' borderRadius='5px'>Huffpost</Button>
                </a>
                <a href="https://medium.com/@alexjacobs/why-do-musicians-make-good-p
                rogrammers-e9a51c8ddebc" rel="noreferrer" target="_blank">
                    {/* <button>Medium</button> */}
                    <Button width='100px' height='50px' fontSize='14px' borderRadius='5px'>Medium</Button>
                </a>
                <a href="https://hackernoon.com/why-are-so-many-coders-musicians-60389fb8b645" rel="noreferrer" target="_blank">
                    {/* <button>Hackernoon</button> */}
                    <Button width='100px' height='50px' fontSize='14px' borderRadius='5px'>Hackernoon</Button>
                </a>
                <a href="https://www.hackreactor.com/blog/3-musician-skills-that-translate-to-coding" rel="noreferrer" target="_blank">
                    {/* <button>Hacker Reactor</button> */}
                    <Button width='100px' height='50px' fontSize='14px' borderRadius='5px' extraTextStyle={{top: '6px'}} difLineHeight='18px'>Hacker Reactor</Button>
                </a>
            </div>
        </div>
    )
}
