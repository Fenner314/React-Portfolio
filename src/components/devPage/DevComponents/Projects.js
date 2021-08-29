import React from 'react';
import ProjectSquare from './ProjectSquare';

export default function Projects() {
    const renderProjects = () => {
        return (
            <div className="project-container">
                <ProjectSquare 
                    projectNumber={3}
                    title={'Artsmith Adornments'}
                    info={'A jewelry E-Commerce website that I created with React.js. I use hooks to handle rendering items, getting their details, and adding items to the shopping cart. I mostly used custom CSS, but I used Bootstrap in a few instances. I handle user authentication with Firebase.'}
                    liveLink={'http://artsmithadorn.surge.sh'}
                    codeLink={'https://github.com/Fenner314/Artsmith-Adornments'}
                />
                <ProjectSquare 
                    projectNumber={1}
                    title={'Jonathan Tang Music'}
                    info={'My first project; a static portfolio for professional musician, Jonathan Tang. I used HTML, CSS, and JavaScript, as well as a calendly integration to schedule private lessons and curator.io to embed his social media posts.'}
                    liveLink={'https://jonathantangmusic.netlify.app/'}
                    codeLink={'https://github.com/Fenner314/JonathanTangMusic'}
                />
                <ProjectSquare 
                    projectNumber={2}
                    title={'Connect Four'}
                    info={'A simple game of connect four I created with HTML, CSS, and JavaScript. I use a JavaScript class and jQuery to create the game board and perform all functions. I use standard game logic to check for a win each time a new piece is added by seeing if there is 4 pieces in a row of the same color in any direction.'}
                    liveLink={'https://fennerstudios.com'}
                    codeLink={'https://github.com/Fenner314/React-Portfolio'}
                />
                <ProjectSquare 
                    projectNumber={4}
                    title={'My Portfolio'}
                    info={'I created my own portfolio with basic HTML, CSS, and JavaScript. All of the css animations are custom, as is the design. I used a short snippet of jQuery to achieve the smooth scrolling effect.'}
                    liveLink={'http://artsmithadorn.surge.sh'}
                    codeLink={'https://github.com/Fenner314/Artsmith-Adornments'}
                />
            </div>
        )
    }

    return (
        <section id="projects" className="section">
            <div className="section-container" id="project-section-container">
                <h1>My Projects</h1>
                {renderProjects()}
            </div>
        </section>
    )
}
