import React, { useContext, useState } from 'react';
// import { Parallax } from 'react-parallax';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { landingBackground } from '../../imgImports';
import Popup from './Popup';
import { Context } from '../../../../App';

export default function About() {
    const [popupActive, setPopupActive] = useState(false);

    const { handleNoScroll } = useContext(Context);

    const handlePopupChange = () => {
        setPopupActive(!popupActive);
        handleNoScroll();
    }

    const settings = {
        arrows: false,
        dots: false,
        draggable: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear",
        className: 'languages',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 764,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

    const renderAboutHeading = () => {
        return (
            <div className="about-heading">
                <h1 className="section-title">About Me</h1>
                <p className="large-text about-subheading">I'm a front end developer and classically trained musician. I love creating new things, making things better, and finding creative solutions to problems.</p>  
            </div>
        )
}

    const renderAboutInfo = () => {
        return (
            <div className="about-info">
                <div className="bio">
                    <p>I have two degrees in music, but I discovered my love for coding while finishing my master's degree and haven't looked back. 
                        I learned to code through Codecademy courses and mentorship from a full stack developer. My love for coding was inspired by my passion for 
                        creating, and the skills I've developed throughout my life in music amplify my skills as a developer.
                    </p>
                </div>
                <div className="sources">
                    <p className="medium-text bold">How does being a musician make me a better developer?</p>
                    <button className="button-container popup-button" onClick={handlePopupChange}>
                        <div className="button-inner">
                            <span className="button-bg"></span>
                            <span className="button-base"></span>
                            <span className="button-text">Click here!</span>
                        </div>
                    </button>
                </div>
            </div>
        )
    }

    const renderSlider = () => {
        return (
            <div className="slider">
                <Slider {...settings}>
                    <div className="language">
                        <i className="fab fa-react fa-4x"></i>
                        <span>React.js</span>
                    </div>
                    <div className="language">
                        <svg width="64px" height="64px" viewBox="0 0 256 244" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#764ABC"/></svg>
                        <span>Redux</span>
                    </div>
                    <div className="language">
                        <i className="fab fa-html5 fa-4x"></i>
                        <span>HTML</span>
                    </div>
                    <div className="language">
                        <i className="fab fa-css3-alt fa-4x"></i>
                        <span>CSS</span>
                    </div>
                    <div className="language">
                        <i className="fab fa-sass fa-4x"></i>
                        <span>Sass</span>
                    </div>
                    <div className="language">
                        <i className="fab fa-bootstrap fa-4x"></i>
                        <span>Bootstrap</span>
                    </div>
                    <div className="language">
                        <i className="fab fa-js fa-4x"></i>
                        <span>Javascript</span>
                    </div>
                    <div className="language">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56px" height="64px" viewBox="0 0 128 128"><path fill="#007acc" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"/></svg>
                        <span>Typescript</span>
                    </div>
                    <div className="language">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 128 128"><path fill="#0868AC" d="M65.283 106.928c-.828-.187-1.633-.446-2.441-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.388-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.238-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.173-.646-1.751-.982l-.591-.33c-.769-.452-1.529-.921-2.28-1.397l-.615-.41c-.546-.351-1.088-.709-1.623-1.079l-.523-.367c-.516-.365-1.026-.734-1.534-1.109l-.679-.514c-.464-.355-.927-.713-1.384-1.082l-.617-.495c-.581-.479-1.156-.959-1.724-1.453l-.188-.159c-.614-.539-1.217-1.092-1.812-1.647l-.51-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.599-1.69l-.078-.084c-.553-.604-1.092-1.221-1.621-1.844l-.424-.504c-.395-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.804-58.204l-8.611 10.921c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.411.801.617 1.198l.395.759.245.437.439.786c.262.461.53.92.805 1.379l.458.756c.304.491.615.976.934 1.46l.398.614c.438.655.888 1.309 1.352 1.951l.039.05.228.308c.4.553.814 1.099 1.232 1.639l.463.59c.373.469.752.935 1.139 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.032.033.062.068c.526.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.526.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.526.456 1.062.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.495.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.749.474 1.51.943 2.278 1.396l.63.355c.565.326 1.134.646 1.711.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.786.275 1.581.53 2.381.779l.575.172c.814.245 1.618.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.014 16.954-36.112 21.426-57.997 16.447zM46.069 63.697c1.195 1.713 2.52 3.751 4.105 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.202 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.484.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.679.448 1.02.672l.482.319c.544.349 1.096.689 1.656 1.015l.234.136c.483.278.973.552 1.463.818l.521.271c.339.177.678.358 1.024.53l.155.07c.702.346 1.411.68 2.136.995l.472.194c.578.246 1.163.486 1.75.71l.75.275c.533.198 1.068.378 1.608.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.69-24.886 50.69-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.7-.227c-.548-.177-1.092-.365-1.632-.562l-.736-.274c-.591-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.364-.177-.721-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.106-.661-1.65-1.008l-.498-.332c-.358-.232-.717-.469-1.069-.707-.759-.524-1.497-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.897-14.486-16.819-23.971-3.062-9.836-2.401-20.878 2.903-29.84l-6.517 9.2c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.038 2.216 4.013 3.528 5.892zM89.476 49.498c.339.125.678.237 1.022.354l.451.143c.484.152.966.329 1.467.424 22.739 4.394 28.908-11.669 30.549-14.034-5.403 7.779-14.482 9.646-25.623 6.942-.88-.213-1.848-.531-2.696-.832-1.088-.388-2.16-.83-3.201-1.329-1.979-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745l-3.52 4.851c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.112 10.492 14.475 18.721 17.494z"/></svg>
                        <span>jQuery</span>
                    </div>
                    <div className="language">
                        <i className="fab fa-git-alt fa-4x"></i>
                        <span>Git</span>
                    </div>
                </Slider>
            </div>
        )
    }
    
    return (
        // <Parallax bgImage={landingBackground} strength={200}>
            <section id="about" className="section">
                <div className="section-container" id="about-section-container">
                    {renderAboutHeading()}
                    {renderAboutInfo()}
                    {renderSlider()}         
                </div>
                <Popup popupActive={popupActive} handlePopupChange={handlePopupChange} />
                <div className={popupActive ? "overlay-active" : "overlay"} onClick={handlePopupChange}></div>
            </section>
        // </Parallax>
    )
}
