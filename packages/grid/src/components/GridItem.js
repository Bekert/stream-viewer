import React from 'react'
import PropTypes from 'prop-types'

export function GridItem({ index }) {
	return (
		<div
			style={{
				backgroundColor: `rgb(${Math.floor(Math.random() * (100 - 70) + 70)}, ${Math.floor(
					Math.random() * (255 - 150) + 150
				)}, 20`,
				height: '100%',
				width: '100%'
			}}
		>
			Pepega {index + 1}
		</div>
	)
}

GridItem.propTypes = {
	index: PropTypes.number,
	pepega: PropTypes.any
}
