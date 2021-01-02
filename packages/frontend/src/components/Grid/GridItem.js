import React from 'react'
import PropTypes from 'prop-types'

import './GridItem.css'

import { Chat } from '../Chat'
import { Player } from '../Player'

export function GridItem({ itemSize, playerSize, chatSize }) {
	return (
		<div className='grid__item' style={{ ...itemSize }}>
			<div className='grid__item__header'>
				<div className='grid__item__title'>pepegert</div>
			</div>

			<Player size={playerSize} />

			<Chat size={chatSize} />
		</div>
	)
}

GridItem.propTypes = {
	itemSize: PropTypes.object,
	playerSize: PropTypes.string,
	chatSize: PropTypes.string
}
