import React, { useContext } from 'react'
import DelayLink from 'react-delay-link'
import { Context } from '../../../App'
import Button from '../../Button'
import {
	boothPicOne,
	boothPicTwo,
	boothPicThree,
	boothPicFour,
	boothPicFive,
	boothPicSix,
	boothPicSeven,
	boothPicEight,
	boothPicNine,
} from '../imgImports'

export default function BoothOrTable() {
	const { handleDevPageChange, handlePageChange } = useContext(Context)

	return (
		<div className='section booth'>
			<h1>Booth Or Table Code</h1>
			<p>
				Since I am unable to show you the repository for Booth Or Table's code,
				I will provide you with a few screenshots of the folder structure and a
				few code snippets of what I worked on instead.
			</p>
			<div className='booth-pics-container'>
				<img
					src={boothPicOne}
					width='450px'
					alt='Booth or Table Code Screenshot'
				/>
				<img
					src={boothPicTwo}
					width='450px'
					alt='Booth or Table Code Screenshot'
				/>
				<img
					src={boothPicThree}
					width='450px'
					alt='Booth or Table Code Screenshot'
				/>
				<img
					src={boothPicFour}
					width='450px'
					alt='Booth or Table Code Screenshot'
				/>
				<img
					src={boothPicFive}
					width='450px'
					alt='Booth or Table Code Screenshot'
				/>
				<img
					src={boothPicSix}
					width='450px'
					alt='Booth or Table Code Screenshot'
				/>
				<img
					src={boothPicSeven}
					width='450px'
					alt='Booth or Table Code Screenshot'
				/>
				<img
					src={boothPicEight}
					width='450px'
					alt='Booth or Table Code Screenshot'
				/>
				<img
					src={boothPicNine}
					width='450px'
					alt='Booth or Table Code Screenshot'
				/>
			</div>
			<DelayLink
				to='/web-dev'
				delay={1000}
				delay={1000}
				clickAction={() => {
					handlePageChange()
					handleDevPageChange()
				}}
			>
				<Button width='250px' height='50px' fontSize='1rem' id='booth-button'>
					Back to web dev studio
				</Button>
			</DelayLink>
		</div>
	)
}
