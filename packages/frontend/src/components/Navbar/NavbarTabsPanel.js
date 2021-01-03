import React from 'react'
import PropTypes from 'prop-types'

import './NavbarTabsPanel.css'

import { NavbarTab } from './NavbarTab'

export function NavbarTabsPanel({ state }) {
	return (
		<div className='navbar__tabs-panel'>
			{state.map((tab, index) => {
				return (
					<NavbarTab
						key={index}
						name={tab.name}
						isActive={tab.isActive}
						indications={tab.indications}
					/>
				)
			})}
		</div>
	)
}

NavbarTabsPanel.propTypes = {
	state: PropTypes.any
}
