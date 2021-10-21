import React, { useState, useEffect, useContext } from 'react'
import DelayLink from 'react-delay-link'
import { Context } from '../../App'
import {
	logoNameOnly,
	stackedName,
	logoLeftPlain,
	logoMiddle,
	logoRightPlain,
	hardhat,
} from './imgImports'
import '../../css/landing.css'

export default function Landing() {
	//State
	const [musicHover, setMusicHover] = useState(false)
	const [devHover, setDevHover] = useState(false)
	const [size, setSize] = useState('desktop')
	const [showMessage, setShowMessage] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const { loading, setLoading, handleDevPageChange, handlePageChange } =
		useContext(Context)

	const largeScreen = window.matchMedia('(min-width: 1350px)')
	const tablet = window.matchMedia('(min-width: 501px) and (max-width: 1000px)')
	const mobile = window.matchMedia('(max-width: 500px)')

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (largeScreen.matches) {
				setSize('largeScreen')
			} else if (tablet.matches) {
				setSize('tablet')
			} else if (mobile.matches) {
				setSize('mobile')
			} else {
				setSize('desktop')
			}
		})
		if (largeScreen.matches) {
			setSize('largeScreen')
		} else if (tablet.matches) {
			setSize('tablet')
		} else if (mobile.matches) {
			setSize('mobile')
		} else {
			setSize('desktop')
		}
		setTimeout(() => {
			setLoading(false)
		}, 2000)
		setTimeout(() => {
			setLoaded(true)
		}, 5000)
	}, [])

	const handleMusicHover = () => {
		musicHover ? setMusicHover(false) : setMusicHover(true)
	}

	const handleDevHover = () => {
		devHover ? setDevHover(false) : setDevHover(true)
	}

	const handleMessage = () => {
		setShowMessage(!showMessage)
	}

	return (
		<section className='showcase full-screen'>
			<div class='test'>
				<header>
					<div className={loading ? 'title' : 'title title-load'}>
						<img
							id='fenner'
							src={
								size === 'desktop' || size === 'largeScreen'
									? logoNameOnly
									: stackedName
							}
							width={
								size === 'mobile'
									? '200px'
									: size === 'tablet'
									? '280px'
									: '500px'
							}
							alt='logo'
						/>
					</div>
					<hr className={loading ? '' : 'hr-load'} />
				</header>

				<div className='sites-container'>
					<div className='sites'>
						<div className='left-container'>
							<img
								src={logoLeftPlain}
								width={
									size === 'largeScreen'
										? '200px'
										: size === 'desktop'
										? '150px'
										: size === 'tablet'
										? '130px'
										: '90px'
								}
								className={
									loaded
										? musicHover
											? 'left-visible'
											: 'left-hidden'
										: 'left-hidden'
								}
								alt='logo'
							/>
							<DelayLink to='/' delay={1500} clickAction={handleMessage}>
								<p
									className='musician'
									onMouseEnter={handleMusicHover}
									onMouseLeave={handleMusicHover}
								>
									Music Studio
								</p>
							</DelayLink>
						</div>
						<img
							src={logoMiddle}
							width={
								size === 'largeScreen'
									? '200px'
									: size === 'desktop'
									? '150px'
									: size === 'tablet'
									? '130px'
									: '120px'
							}
							id='middle'
							alt='logo'
						/>
						<div className='right-container'>
							<DelayLink
								to='/web-dev'
								delay={1000}
								clickAction={() => {
									handlePageChange()
									handleDevPageChange()
								}}
							>
								<p
									className='developer'
									onMouseEnter={handleDevHover}
									onMouseLeave={handleDevHover}
								>
									Web Development
								</p>
							</DelayLink>
							<img
								src={logoRightPlain}
								width={
									size === 'largeScreen'
										? '200px'
										: size === 'desktop'
										? '150px'
										: size === 'tablet'
										? '130px'
										: '90px'
								}
								className={
									loaded
										? devHover
											? 'right-visible'
											: 'right-hidden'
										: 'right-hidden'
								}
								alt='logo'
							/>
						</div>
					</div>
				</div>
			</div>
			<div class={showMessage ? 'construction' : 'invisible'}>
				<span className='close-construction' onClick={handleMessage}>
					&times;
				</span>
				<img src={hardhat} width='200px' alt='hardhat' />
				<span style={{ color: 'black' }}>Music Studio Under Construction</span>
			</div>
		</section>
	)
}
