import React from 'react'

import './index.css'
import './variables.css'
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Grid } from './components/Grid'

// for tests
const state = [
	{
		name: 'pepega1',
		isActive: true,
		indications: ['live'],
		grid: {
			isHorizontal: true,
			itemSize: '100%',
			items: [
				{
					isHorizontal: true,
					channel: 'pepega1',
					itemSize: '30%',
					playerSize: '60%',
					chatSize: '40%'
				},
				{
					isHorizontal: true,
					itemSize: '80%',
					items: [
						{
							isHorizontal: true,
							channel: 'pepega2',
							itemSize: '60%',
							playerSize: '60%',
							chatSize: '40%'
						},
						{
							isHorizontal: true,
							itemSize: '40%',
							items: [
								{
									isHorizontal: false,
									channel: 'pepega3',
									itemSize: '60%',
									playerSize: '60%',
									chatSize: '40%'
								},
								{
									isHorizontal: false,
									channel: 'pepega4',
									itemSize: '40%',
									playerSize: '50%',
									chatSize: '50%'
								}
							]
						}
					]
				}
			]
		}
	},
	{
		name: 'pepega2',
		isActive: false,
		indications: ['live', 'notice'],
		grid: [
			{
				isHorizontal: true,
				channel: 'pepega',
				itemSize: '60%',
				playerSize: '60%',
				chatSize: '40%'
			},
			{
				isHorizontal: true,
				itemSize: '40%',
				items: [
					{
						isHorizontal: true,
						channel: 'pepega',
						itemSize: '60%',
						playerSize: '60%',
						chatSize: '40%'
					},
					{
						isHorizontal: true,
						itemSize: '40%',
						items: [
							{
								isHorizontal: true,
								channel: 'pepega',
								itemSize: '60%',
								playerSize: '60%',
								chatSize: '40%'
							},
							{
								isHorizontal: true,
								channel: 'zuzuga',
								itemSize: '40%',
								playerSize: '50%',
								chatSize: '50%'
							}
						]
					}
				]
			}
		]
	}
]

export function App() {
	return (
		<div className='container'>
			<Navbar state={state} />
			<Grid state={state[0].grid} />
		</div>
	)
}
