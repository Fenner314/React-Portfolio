import React, { useContext } from 'react'
import { Context } from '../../App'
import { logoLeftPlain, logoMiddle, logoRightPlain } from '../landingPage/imgImports'

export default function Loader() {
    const { loading, test } = useContext(Context);

    const testing = () => {
        if (test) {
            return {animation: 'none'}
        }
    }

    const handleTransition = () => {
        setTimeout(() => {
            if (!loading) {
                return {transform: 'translate(-100%)', transition: 'none'}
            }
        }, 100)
    }

    return (
        <div className={loading ? "loader full-screen show" : "loader full-screen away"} 
            style={testing()}
        >
            <div className="load-container">
                <p>Last minute coding...</p>
                <div className="gif">
                    <img id="one" src={logoLeftPlain} width="150px" alt="logo"/>
                    <img id="two" src={logoMiddle} width="150px" alt="logo"/>
                    <img id="three" src={logoRightPlain} width="150px" alt="logo"/>
                </div>
            </div>
        </div>
    )
}
