import React from 'react'
import PropTypes from 'prop-types'

import './Navbar.css'

import { NavbarHeader } from './NavbarHeader'
import { NavbarTabsPanel } from './NavbarTabsPanel'

export function Navbar({ state }) {
	return (
		<div className='navbar'>
			<NavbarHeader />
			<div className='br' />
			<NavbarTabsPanel state={state} />
		</div>
	)
}

Navbar.propTypes = {
	state: PropTypes.any
}
