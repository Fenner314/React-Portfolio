import React from 'react'
import ProjectSquare from './ProjectSquare'
import ProjectDesc from './ProjectDesc'
import { booth, bb4k, artsmith, tim, jonathan, myLogo } from '../imgImports'
import ProjectDisplay from './ProjectDisplay'

export default function Projects() {
	const renderProjects = () => {
		return (
			<div className='project-container'>
				<div
					style={{
						position: 'relative',
						height: '100%',
						minHeight: '400px',
						width: '100%',
						overflow: 'hidden',
					}}
				>
					<div className='project-row'>
						<ProjectDesc
							title={'Booth Or Table'}
							info={
								'A start up company I worked for that enabled guests to see wait times for restaurants, check in to the waitlist online, and get notified when their table is ready. I took care of most of the front end work for the widget and restaurant portal. Guest attendance increased by an average of 35% at local restaurants that implemented this software. We used React/Redux with Typescript'
							}
						/>
						<ProjectDisplay
							backColor={'var(--accent)'}
							backImage={booth}
							backSize={'85%'}
							liveLink={'http://boothortable.com'}
							codeLink={'http://localhost:3000/web-dev/booth-or-table-code'}
						/>
					</div>
					<div className='project-row reverse'>
						<ProjectDisplay
							backColor={'var(--secondaryAccent)'}
							backImage={bb4k}
							backSize={'85%'}
							liveLink={'https://bb4k-fenner.netlify.app/'}
							codeLink={'https://github.com/Fenner314/Synergistic-Project'}
						/>
						<ProjectDesc
							title={'Building Blocks for Kids Micro Site'}
							info={
								'In a job I applied for with 290 applicants, I was one of 17 selected to interview and create this micro site demo, and among the final 3 to be chosen from. This site is created with React and uses Node/Express and MySQL to handle registration on the back end. The front end is deployed with Netlify and the back end with Heroku.'
							}
						/>
					</div>
					<div className='project-row'>
						<ProjectDesc
							title={'Artsmith Adornments'}
							info={
								'A jewelry E-Commerce website that I created with React. I use hooks to handle rendering items, getting their details, and adding items to the shopping cart. I mostly used custom CSS with Bootstrap in a few instances. I handle user authentication with Firebase.'
							}
						/>
						<ProjectDisplay
							backColor={'var(--accent)'}
							backImage={artsmith}
							backSize={'cover'}
							liveLink={'http://artsmithadorn.surge.sh'}
							codeLink={'https://github.com/Fenner314/Artsmith-Adornments'}
						/>
					</div>
					<div className='project-row reverse'>
						<ProjectDisplay
							backColor={'var(--secondaryAccent)'}
							backImage={tim}
							backSize={'cover'}
							liveLink={'http://timothyandersontrombone.netlify.app'}
							codeLink={'https://github.com/Fenner314/TimAnderson'}
						/>
						<ProjectDesc
							title={'Timothy Anderson'}
							info={
								'Professional website for world-renowned trombonist and teacher, Timothy Anderson. It uses React and features styling with sass, commerce.js for his products, and stripe for payment. Following website launch, the number and quality of applications for the trombone studio at his conservatory were greater than any other year.'
							}
						/>
					</div>
					<div className='project-row'>
						<ProjectDesc
							title={'Jonathan Tang Music'}
							info={
								'My first project; a static portfolio for professional musician, Jonathan Tang. I used HTML, CSS, and JavaScript, as well as a calendly integration to schedule private lessons and curator.io to embed his social media posts.'
							}
						/>
						<ProjectDisplay
							backColor={'var(--accent)'}
							backImage={jonathan}
							backSize={'cover'}
							liveLink={'https://jonathantangmusic.netlify.app/'}
							codeLink={'https://github.com/Fenner314/JonathanTangMusic'}
						/>
					</div>
					<div className='project-row reverse'>
						<ProjectDisplay
							backColor={'var(--secondaryAccent)'}
							backImage={myLogo}
							backSize={'100%'}
							liveLink={'http://fennerstudios.com'}
							codeLink={'https://github.com/Fenner314/react-portfolio'}
						/>
						<ProjectDesc
							title={'My Portfolio'}
							info={
								'I created my own portfolio with basic HTML, CSS, and JavaScript, but later converted it to use React. All of the css animations are custom, as is the design. I had issues with achieving some desired effects from the transfer that I solved with npm packages like howler, react-delay-link, and react-scroll.'
							}
						/>
					</div>
				</div>
			</div>
		)
	}

	return (
		<section id='projects' className='section'>
			<div className='section-container' id='project-section-container'>
				{/* <h1>My Projects</h1> */}
				{renderProjects()}
			</div>
		</section>
	)
}
