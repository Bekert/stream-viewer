import React from 'react'
import './Navbar.css'

import { NavbarHeader } from './NavbarHeader'
import { NavbarTabsPanel } from './NavbarTabsPanel'

export function Navbar() {
	return (
		<div className='navbar'>
			<NavbarHeader />
			<div className='br' />
			<NavbarTabsPanel />
		</div>
	)
}
