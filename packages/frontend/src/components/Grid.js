import React from 'react'
import PropTypes from 'prop-types'

import './Grid.css'

import { Chat } from './Chat'
import { Player } from './Player'

export function Grid({ state }) {
	const sizeType = state.isHorizontal ? 'width' : 'height'
	if (state.items) {
		const isChildrenHorizontal = state.items[0].isHorizontal

		const brType = isChildrenHorizontal ? 'vbr' : 'br'

		const containerStyles = `
			grid__container ${!isChildrenHorizontal ? 'grid__container--vertical' : ''}
		`
		return (
			<div className={containerStyles} style={{ [sizeType]: state.itemSize }}>
				{state.items.map((item, index) => {
					return (
						<>
							{index > 0 && <div className={brType}></div>}
							<Grid state={item} key={index} />
						</>
					)
				})}
			</div>
		)
	} else {
		return (
			<div className='grid__item' style={{ [sizeType]: state.itemSize }}>
				<div className='grid__item__header'>
					<div className='grid__item__title'>{state.channel}</div>
				</div>

				<Player size={state.playerSize} />

				<div className='vbr'></div>

				<Chat size={state.chatSize} />
			</div>
		)
	}
}

Grid.propTypes = {
	state: PropTypes.any
}
