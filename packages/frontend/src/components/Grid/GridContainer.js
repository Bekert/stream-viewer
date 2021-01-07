import React from 'react'

import PropTypes from 'prop-types'

import './GridContainer.css'

import { GridItem } from './GridItem'

import { hasRemainingItems } from './gridUtils'

export function GridContainer({ gridItems }) {
	if (hasRemainingItems(gridItems)) {
		const sizeType = gridItems.isHorizontal ? 'width' : 'height'

		const isChildrenHorizontal = gridItems.items[0].isHorizontal

		const brType = isChildrenHorizontal ? 'vbr' : 'br'

		const containerStyles = `
			grid__container ${!isChildrenHorizontal ? 'grid__container--vertical' : ''}
		`
		return (
			<div className={containerStyles} style={{ [sizeType]: gridItems.itemSize }}>
				{gridItems.items.map((item, index) => {
					return (
						<>
							{index > 0 && <div className={brType}></div>}
							<GridItem gridItem={item} key={index} />
						</>
					)
				})}
			</div>
		)
	} else {
		return <GridItem gridItem={gridItems} />
	}
}

GridContainer.propTypes = {
	gridItems: PropTypes.any
}
