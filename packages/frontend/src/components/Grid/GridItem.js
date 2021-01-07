import React from 'react'

import PropTypes from 'prop-types'

import './GridItem.css'

import { Chat } from '../Chat'
import { Player } from '../Player'
import { GridContainer } from './GridContainer'

import { hasRemainingItems } from './gridUtils'

export function GridItem({ gridItem }) {
	if (hasRemainingItems(gridItem)) {
		return <GridContainer gridItems={gridItem} />
	} else {
		const sizeType = gridItem.isHorizontal ? 'width' : 'height'

		const elementsSizeType = gridItem.isElementsHorizontal ? 'width' : 'height'

		const itemStyles = `grid__item ${
			!gridItem.isElementsHorizontal ? 'grid__item--vertical' : ''
		}`

		const brType = gridItem.isElementsHorizontal ? 'vbr' : 'br'

		return (
			<div className={itemStyles} style={{ [sizeType]: gridItem.itemSize }}>
				<div className='grid__item__header'>
					<div className='grid__item__title'>{gridItem.channel}</div>
				</div>

				<Player size={{ [elementsSizeType]: gridItem.playerSize }} />

				<div className={brType}></div>

				<Chat size={{ [elementsSizeType]: gridItem.chatSize }} />
			</div>
		)
	}
}

GridItem.propTypes = {
	remainingGridItems: PropTypes.any
}
