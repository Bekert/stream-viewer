import React from 'react'

import './index.css'
import './variables.css'
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Grid } from './components/Grid/Grid'

export function App() {
	return (
		<div className='container'>
			<Navbar />
			<Grid />
		</div>
	)
}
