import React from 'react'
import PropTypes from 'prop-types'

import './GridItem.css'

import { Chat } from '../Chat'
import { Player } from '../Player'

export function GridItem({ state }) {
	const sizeType = state.isHorizontal ? 'width' : 'height'
	if (state.items) {
		const containerStyles = `
			grid__container ${!state.items[0].isHorizontal ? 'grid__container--vertical' : ''}
		`
		return (
			<div className={containerStyles} style={{ [sizeType]: state.itemSize }}>
				{state.items.map((item, index) => (
					<GridItem state={item} key={index} />
				))}
			</div>
		)
	} else {
		return (
			<div className='grid__item' style={{ [sizeType]: state.itemSize }}>
				<div className='grid__item__header'>
					<div className='grid__item__title'>{state.channel}</div>
				</div>

				<Player size={state.playerSize} />

				<Chat size={state.chatSize} />
			</div>
		)
	}
}

GridItem.propTypes = {
	state: PropTypes.any
}
