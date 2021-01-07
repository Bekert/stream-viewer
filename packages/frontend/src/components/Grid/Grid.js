import React from 'react'
import PropTypes from 'prop-types'

import './Grid.css'

import { GridContainer } from './GridContainer'
import { GridItem } from './GridItem'

import { hasRemainingItems } from './gridUtils'

export function Grid({ tab }) {
	return (
		<div className='grid'>
			{hasRemainingItems(tab) ? (
				<GridContainer gridItems={tab} />
			) : (
				<GridItem gridItem={tab} />
			)}
		</div>
	)
}

Grid.propTypes = {
	tab: PropTypes.any
}
