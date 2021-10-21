import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/landingPage/Landing'
import Loader from './components/loader/Loader'
import Audio from './components/audio/Audio'
import './css/App.css'
import Dev from './components/devPage/Dev'
import BoothOrTable from './components/devPage/DevComponents/BoothOrTable'
import Thanks from './components/thanks/Thanks'
import Form from './components/devPage/DevComponents/Contact/Form'

export const Context = React.createContext()

function App() {
	const [loading, setLoading] = useState(true)
	const [test, setTest] = useState(true)
	const [noScroll, setNoScroll] = useState(false)
	const [devPage, setDevPage] = useState('landing')

	useEffect(() => {
		setTimeout(() => {
			handlePageChange()
			setTest(false)
		}, 1700)
	}, [])

	const handlePageChange = () => {
		loading ? setLoading(false) : setLoading(true)
	}

	const handleDevPageChange = () => {
		setDevPage(true)
	}

	const handleNoScroll = () => {
		setNoScroll(!noScroll)
	}

	const contextValue = {
		loading,
		setLoading,
		test,
		noScroll,
		devPage,
		setDevPage,
		handleDevPageChange,
		handlePageChange,
		handleNoScroll,
	}

	return (
		<Context.Provider value={contextValue}>
			<div className='App'>
				<Loader />
				<Audio />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route
						exact
						path='/web-dev'
						component={Dev}
						handlePageChange={handlePageChange}
					/>
					<Route
						path='/web-dev/booth-or-table-code'
						component={BoothOrTable}
						handlePageChange={handlePageChange}
					/>
					<Route
						path='/thanks'
						component={Thanks}
						handlePageChange={handlePageChange}
					/>
					<Route path='/form' component={Form} />
				</Switch>
			</div>
		</Context.Provider>
	)
}

export default App
