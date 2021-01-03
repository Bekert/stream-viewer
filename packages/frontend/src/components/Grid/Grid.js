import React from 'react'
import PropTypes from 'prop-types'

import './Grid.css'

import { GridItem } from './GridItem'

export function Grid({ state }) {
	return (
		<div className='grid'>
			<div className='grid__container' style={{ width: '100%' }}>
				{state.map((item, index) => {
					return <GridItem state={item} key={index} />
				})}
			</div>
		</div>
	)
}

Grid.propTypes = {
	state: PropTypes.any
}

// itemSize --- {width: '100%'}
// chatSize --- '50%'
// playerSize --- '50%'
