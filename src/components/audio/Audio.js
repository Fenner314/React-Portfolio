import React, { useState, useContext } from 'react';
import { muteRed, volumeGreen } from '../landingPage/imgImports';
import audio from '../../utilities/TamingGiantsMvt2.wav';
import { Howler, Howl } from 'howler';
import { Context } from '../../App';

const sound = new Howl({
    src: audio
})

Howler.volume(1.0);

export default function Audio() {
    const [muted, setMuted] = useState(true);

    const { devPage, setDevPage } = useContext(Context);
    
    const handleAudioClick = () => {
        muted ? setMuted(false) : setMuted(true);
        muted ? sound.play() : sound.pause()
    }

    return (
        <div>
            {/* <audio id="audio" loop>
                <source src={audio} type="audio/wav" />
            </audio> */}
            <img 
                id="sound" 
                className={devPage ? 'sound-icon sound-icon-dev' : 'sound-icon'} 
                src={muted ? muteRed : volumeGreen} 
                onClick={handleAudioClick} 
                width="40px" 
                height="40px" 
                alt="sound icon" 
            />
        </div>
    )
}
