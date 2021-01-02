import React from 'react'
import './NavbarHeader.css'

export function NavbarHeader() {
	return (
		<div className='navbar__header'>
			<div className='navbar__title'>stream viewer</div>
			<div className='navbar__profile'>bekert</div>
			<div className='navbar__controls'>
				<div className='navbar__controls-icon'>-</div>
				<div className='navbar__controls-icon'>x</div>
			</div>
		</div>
	)
}
