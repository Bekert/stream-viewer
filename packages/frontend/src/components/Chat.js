import React from 'react'
import PropTypes from 'prop-types'

import './Chat.css'

import { ChatMessage } from './ChatMessage'

export function Chat({ size }) {
	return (
		<div className='grid__item__chat' style={{ width: size }}>
			<div className='chat__list'>
				<ChatMessage time='20:30' user='Pepega' text='hahahahah' />
				<ChatMessage time='20:31' user='Zuzuga' text='hahahahah' />
			</div>
			<div className='chat__textarea'>
				<div contentEditable className='chat__input'></div>
				<div className='chat__smile-icon'>😁</div>
			</div>
		</div>
	)
}

Chat.propTypes = {
	size: PropTypes.string
}
