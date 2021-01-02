import React from 'react'
import './Grid.css'

import { GridItem } from './GridItem'

export function Grid() {
	return (
		<div className='grid'>
			<div className='grid__container' style={{ width: '100%' }}>
				<GridItem itemSize={{ width: '100%' }} playerSize='50%' chatSize='50%' />
			</div>
		</div>
	)
}

// itemSize --- {width: '100%'}
// chatSize --- '50%'
// playerSize --- '50%'
