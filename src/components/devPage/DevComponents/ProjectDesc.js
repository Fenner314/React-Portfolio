import React from 'react'

export default function ProjectDesc(props) {
	const { title, info, liveLink, codeLink } = props

	return (
		<div className='project-description project-box'>
			<p className='project-title'>{title}</p>
			<p className='project-info'>{info}</p>
		</div>
	)
}
