import React from 'react'
import PropTypes from 'prop-types'

import './Player.css'

export function Player({ size }) {
	return (
		<div className='grid__item__player' style={{ width: size }}>
			<video className='player__video' src='/static/video.mp4'></video>
			<div className='player__overlay'>
				<div className='player__overlay__top-gradient'></div>
				<div className='player__overlay__header'>
					<div className='player__overlay__header__title'>Minecraft speedrun</div>
					<div className='player__overlay__header__viewers'>1233 viewers</div>
				</div>
				<div className='player__overlay__controls'>
					<div className='player__overlay__control-item player__overlay__controls__pause'>
						<span className='material-icons'>pause</span>
					</div>
					<div
						className='
							player__overlay__control-item
							player__overlay__controls__volume-area
						'
					>
						<div className='player__overlay__controls__volume-btn'>
							<span className='material-icons'>volume_up</span>
						</div>
						<div className='player__overlay__controls__volume-scrubber'>
							<div
								className='
									player__overlay__controls__volume-level-indicator
								'
							></div>
						</div>
					</div>
					<div
						className='
							player__overlay__control-item player__overlay__controls__quality
						'
					>
						<span className='material-icons'> settings </span>
					</div>
					<div
						className='
						player__overlay__control-item player__overlay__controls__reload
						'
					>
						<span className='material-icons'>wifi_protected_setup</span>
					</div>
				</div>
				<div className='player__overlay__bottom-gradient'></div>
			</div>
		</div>
	)
}

Player.propTypes = {
	size: PropTypes.string
}
