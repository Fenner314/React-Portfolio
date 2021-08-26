import React from 'react'

export default function Projects() {
    return (
        <section id="projects" className="section">

            <div className="section-container" id="project-section-container">
                <h1>My Projects</h1>

                <div className="project-container">
                    <div className="project project-3">
                        <div className="project-overlay">
                            <p className="project-title">Artsmith Adornments</p>
                            <p className="project-info">A jewelry E-Commerce website that I created with React.js. I use hooks to handle rendering items, getting their details, and adding items to the shopping cart. I mostly used custom CSS, but I used Bootstrap in a few instances. I handle user authentication with Firebase.</p>
                            <div className="project-links">
                                <a href="http://artsmithadorn.surge.sh/" rel="noreferrer" target="_blank">Live Project</a>
                                <a href="https://github.com/Fenner314/Artsmith-Adornments" rel="noreferrer" target="_blank">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project project-1">
                        <div className="project-overlay">
                            <p className="project-title">Jonathan Tang Music</p>
                            <p className="project-info">My first project; a static portfolio for professional musician, Jonathan Tang. I used HTML, CSS, and JavaScript, as well as a calendly integration to schedule private lessons and curator.io to embed his social media posts.</p>
                            <div className="project-links">
                                <a href="https://jonathantangmusic.netlify.app/" rel="noreferrer"target="_blank">Live Project</a>
                                <a href="https://github.com/Fenner314/JonathanTangMusic" rel="noreferrer" target="_blank">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project project-2">
                        <div className="project-overlay">
                            <p className="project-title">Connect Four</p>
                            <p className="project-info">A simple game of connect four I created with HTML, CSS, and JavaScript. I use a JavaScript class and jQuery to create the game board and perform all functions. I use standard game logic to check for a win each time a new piece is added by seeing if there is 4 pieces in a row of the same color in any direction.</p>
                            <div className="project-links">
                                <a href="https://jacobfenner-connectfour.netlify.app/" rel="noreferrer" target="_blank">Live Project</a>
                                <a href="https://github.com/Fenner314/connect-four" rel="noreferrer" target="_blank">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project project-4">
                        <div className="project-overlay">
                            <p className="project-title">My Portfolio</p>
                            <p className="project-info">I created my own portfolio with basic HTML, CSS, and JavaScript. All of the css animations are custom, as is the design. I used a short snippet of jQuery to achieve the smooth scrolling effect.</p>
                            <div className="project-links">
                                <a href="#">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
