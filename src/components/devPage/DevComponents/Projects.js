import React from 'react'
import ProjectSquare from './ProjectSquare'

export default function Projects() {
	const renderProjects = () => {
		return (
			<div className='project-container'>
				<ProjectSquare
					projectNumber={5}
					title={'Booth Or Table'}
					info={
						'A start up company that enabled guests to see wait times for restaurants, check in to the waitlist online, and get notified when their table is ready. I took care of most of the front end work for the widget and restaurant portal. Guest attendance increased by an average of 35% at local restaurants that implemented this software.'
					}
					liveLink={'http://boothortable.com'}
					codeLink={'http://localhost:3000/web-dev/booth-or-table-code'}
				/>
				<ProjectSquare
					projectNumber={7}
					title={'Building Blocks for Kids Micro Site'}
					info={
						'In a job I applied for with 290 applicants, I was one of 17 selected to interview and create this micro site demo, and among the final 3 to be chosen from. This site is created with React and uses Node/Express and MySQL to handle registration on the back end. The front end is deployed with Netlify and the back end using Heroku.'
					}
					liveLink={'https://bb4k-fenner.netlify.app/'}
					codeLink={'https://github.com/Fenner314/Synergistic-Project'}
				/>
				<ProjectSquare
					projectNumber={3}
					title={'Artsmith Adornments'}
					info={
						'A jewelry E-Commerce website that I created with React. I use hooks to handle rendering items, getting their details, and adding items to the shopping cart. I mostly used custom CSS with Bootstrap in a few instances. I handle user authentication with Firebase.'
					}
					liveLink={'http://artsmithadorn.surge.sh'}
					codeLink={'https://github.com/Fenner314/Artsmith-Adornments'}
				/>
				<ProjectSquare
					projectNumber={6}
					title={'Timothy Anderson'}
					info={
						'Professional website for world-renowned trombonist and teacher, Timothy Anderson. It uses React and features styling with sass, commerce.js for his products, and stripe for payment. Following website launch, the number and quality of applications for the trombone studio at his conservatory were greater than any other year.'
					}
					liveLink={'http://timothyandersontrombone.netlify.app'}
					codeLink={'https://github.com/Fenner314/TimAnderson'}
				/>
				<ProjectSquare
					projectNumber={1}
					title={'Jonathan Tang Music'}
					info={
						'My first project; a static portfolio for professional musician, Jonathan Tang. I used HTML, CSS, and JavaScript, as well as a calendly integration to schedule private lessons and curator.io to embed his social media posts.'
					}
					liveLink={'https://jonathantangmusic.netlify.app/'}
					codeLink={'https://github.com/Fenner314/JonathanTangMusic'}
				/>
				<ProjectSquare
					projectNumber={4}
					title={'My Portfolio'}
					info={
						'I created my own portfolio with basic HTML, CSS, and JavaScript, but later converted it to use React. All of the css animations are custom, as is the design. I had issues with achieving some desired effects from the transfer that I solved with npm packages like howler, react-delay-link, and react-scroll.'
					}
					liveLink={'http://fennerstudios.com'}
					codeLink={'https://github.com/Fenner314/react-portfolio'}
				/>
			</div>
		)
	}

	return (
		<section id='projects' className='section'>
			<div className='section-container' id='project-section-container'>
				<h1>My Projects</h1>
				{renderProjects()}
			</div>
		</section>
	)
}
