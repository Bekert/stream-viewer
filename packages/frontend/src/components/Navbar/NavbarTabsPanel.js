import React from 'react'
import './NavbarTabsPanel.css'

import { NavbarTab } from './NavbarTab'

export function NavbarTabsPanel() {
	return (
		<div className='navbar__tabs-panel'>
			<NavbarTab name='pepega' isActive={true} indications={['live', 'notice']} />
		</div>
	)
}
