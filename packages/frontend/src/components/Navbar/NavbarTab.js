import React from 'react'
import './NavbarTab.css'

import PropTypes from 'prop-types'

export function NavbarTab({ name, isActive, indications }) {
	const tabClasses = `navbar__tab ${isActive ? 'navbar__tab--active' : ''}`

	return (
		<div className={tabClasses}>
			<div className='navbar__tab__status'></div>
			<div className='navbar__tab__title'>{name}</div>

			{indications && (
				<div className='navbar__tab__indications'>
					{indications.map((indication, index) => {
						const indicationClasses = `
							navbar__indication navbar__indication--${indication}
						`
						return <div key={index} className={indicationClasses}></div>
					})}
				</div>
			)}
		</div>
	)
}

NavbarTab.propTypes = {
	name: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	indications: PropTypes.array
}
