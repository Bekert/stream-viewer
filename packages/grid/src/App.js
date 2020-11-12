import React, { useMemo, useState } from 'react'
import { GridItem } from './components/GridItem'
import { Placeholder } from './components/Placeholder'
import { Grid } from './Grid'

export function App() {
	const [colsCount, setColsCount] = useState(new Array(4).fill(''))
	const [rowCount, setRowCount] = useState(new Array(6).fill(''))
	return (
		<div style={{ height: '100vh', width: '100vm' }}>
			<Grid placeHolder={Placeholder}>
				{rowCount.map(() =>
					colsCount.map((_, index) => {
						return <GridItem key={index} index={index} />
					})
				)}
			</Grid>
			<button onClick={() => setColsCount([...colsCount, ''])}>Pepega</button>
		</div>
	)
}
