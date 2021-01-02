import React from 'react'

import PropTypes from 'prop-types'

import './ChatMessage.css'

export function ChatMessage({ time, icons, user, text }) {
	return (
		<div className='chat__message'>
			<div className='chat__message__time'>{time}&nbsp;</div>
			{icons && <div className='chat__message__user-icons'>{icons}&nbsp;</div>}
			<div className='chat__message__user'>{user}:&nbsp;</div>
			<div className='chat__message__text'>{text}</div>
		</div>
	)
}

ChatMessage.propTypes = {
	time: PropTypes.string.isRequired,
	icons: PropTypes.any,
	user: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}
