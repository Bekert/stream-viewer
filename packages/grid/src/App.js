import React, { useMemo, useState } from 'react'
import { GridItem } from './components/GridItem'
import { Grid } from './Grid'

export function App() {
	const [colsCount, setColsCount] = useState(new Array(4).fill(''))
	const [rowCount, setRowCount] = useState(new Array(6).fill(''))
	return (
		<div>
			<Grid>
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
