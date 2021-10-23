import React from 'react'

export default function ProjectDisplay(props) {
	const { backColor, backImage, backSize, backPosition, liveLink, codeLink } =
		props

	const touchScreen = () => {
		const ua = navigator.userAgent
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			return true
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			return true
		}
		return false
	}

	return (
		<div
			className='project-display project-box'
			style={{
				backgroundImage: `url(${backImage})`,
				backgroundSize: backSize,
				backgroundPosition: backPosition,
			}}
		>
			<div
				className='project-over'
				style={{
					backgroundColor: backColor,
				}}
			></div>
			<div
				className='project-links'
				style={{
					opacity: touchScreen() ? 1 : null,
					visibility: touchScreen() ? 'visible' : null,
				}}
			>
				<a href={liveLink} rel='noreferrer' target='_blank'>
					Live Project
				</a>
				<a href={codeLink} rel='noreferrer' target='_blank'>
					View Code
				</a>
			</div>
		</div>
	)
}
