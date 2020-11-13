import React, { useMemo, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Grid.css'

function toTemplate(array) {
	return array.map((row, rowIndex) =>
		row.map((col, colIndex) => {
			return {
				template: col,
				colLocation: `${colIndex + 1}/${colIndex + 1}`,
				rowLocation: `${rowIndex + 1}/${rowIndex + 1}`
			}
		})
	)
}

function toGridTemplate(array) {
	return array.map(value => `${value}%`).join(' ')
}

export function Grid({ children, placeholder, minSize }) {
	const isLengthEqual = children.every(cols => cols.length === children[0].length)
	if (!isLengthEqual) {
		throw new Error('Something went wrong')
	}

	const wrapper = useRef(null)

	minSize = useMemo(() => minSize)

	const [initialRows, initialRow] = useMemo(() => [children, children[0]])

	const initialRowSize = useMemo(() => 100 / initialRows.length)
	const initialColSize = useMemo(() => 100 / initialRow.length)

	if (!initialRowSize > minSize || !initialColSize > minSize) {
		throw new Error('Something went wrong')
	}

	const [template, setTemplate] = useState(toTemplate(initialRows))

	const [colValues, setColValues] = useState(new Array(initialRow.length).fill(initialColSize))
	const [rowValues, setRowValues] = useState(new Array(initialRows.length).fill(initialRowSize))

	function resizeColHandler(event) {
		const wrapperWidth = wrapper.current.clientWidth

		const block = event.target.parentElement
		const blockCol = block.dataset.col.split('/')[0]
		const blockWidthPercent = colValues[blockCol - 1]
		const blockCoords = block.getBoundingClientRect()
		const blockDeltaX = blockCoords.x - blockCoords.width

		const prevBlockWidthPercent = colValues[blockCol - 2]

		function onMousemove(event) {
			const delta = event.pageX - blockDeltaX

			const currentWidth = (delta / wrapperWidth) * 100 - blockWidthPercent

			const currentBlockWidth = blockWidthPercent - currentWidth
			const currentPrevBlockWidth = +prevBlockWidthPercent + currentWidth

			if (currentPrevBlockWidth > minSize && currentBlockWidth > minSize) {
				const prevColValues = [...colValues]
				prevColValues[blockCol - 1] = currentBlockWidth
				prevColValues[blockCol - 2] = currentPrevBlockWidth

				setColValues(prevColValues)
			}
		}

		document.addEventListener('mousemove', onMousemove)

		function onMouseup() {
			document.removeEventListener('mousemove', onMousemove)
			document.removeEventListener('mouseup', onMouseup)
		}

		document.addEventListener('mouseup', onMouseup)
	}

	function resizeRowHandler(event) {
		const wrapperHeight = wrapper.current.clientHeight

		const block = event.target.parentElement
		const blockRow = block.dataset.row.split('/')[0]
		const blockHeightPercent = rowValues[blockRow - 1]
		const blockCoords = block.getBoundingClientRect()
		const blockDeltaY = blockCoords.y - blockCoords.height

		const prevBlockHeightPercent = rowValues[blockRow - 2]

		function onMousemove(event) {
			const delta = event.pageY - blockDeltaY

			const currentHeight = (delta / wrapperHeight) * 100 - blockHeightPercent

			const currentBlockHeight = blockHeightPercent - currentHeight
			const currentPrevBlockHeight = +prevBlockHeightPercent + currentHeight

			if (currentBlockHeight > minSize && currentPrevBlockHeight > minSize) {
				const prevRowValues = [...rowValues]
				prevRowValues[blockRow - 1] = currentBlockHeight
				prevRowValues[blockRow - 2] = currentPrevBlockHeight

				setRowValues(prevRowValues)
			}
		}

		document.addEventListener('mousemove', onMousemove)

		function onMouseup() {
			document.removeEventListener('mousemove', onMousemove)
			document.removeEventListener('mouseup', onMouseup)
		}

		document.addEventListener('mouseup', onMouseup)
	}

	function plusCol() {
		// const prevColsCount = colValues.length
		// const newColsCount = prevColsCount + 1
		// const newColWidth = 100 / newColsCount
		// const delta = 100 / prevColsCount - newColWidth
		// const newColValues = colValues.map(value => value - delta)
		// newColValues.push(newColWidth)
		// setColValues(newColValues)
	}

	return (
		<>
			<div
				className='wrapper'
				style={{
					display: 'grid',
					gridTemplateColumns: toGridTemplate(colValues),
					gridTemplateRows: toGridTemplate(rowValues),
					margin: '10px'
				}}
				ref={wrapper}
			>
				<div className='add-col-btn' onClick={plusCol} />
				{template.map(row => {
					return row.map(col => {
						return (
							<div
								style={{ gridColumn: col.colLocation, gridRow: col.rowLocation }}
								className='grid-item'
								key={col.colLocation}
								data-col={col.colLocation}
								data-row={col.rowLocation}
							>
								{col.rowLocation !== '1/1' && (
									<div
										className='resizer'
										data-resizer
										onMouseDown={resizeRowHandler}
										style={{ height: '5px', width: '100%' }}
									/>
								)}
								{col.colLocation !== '1/1' && (
									<div
										className='resizer'
										data-resizer
										onMouseDown={resizeColHandler}
										style={{ width: '5px', height: '100%' }}
									/>
								)}
								{col.template}
							</div>
						)
					})
				})}
				<div className='add-col-btn' style={{ right: 0 }} />
			</div>
		</>
	)
}

Grid.propTypes = {
	children: PropTypes.any,
	placeholder: PropTypes.any,
	minSize: PropTypes.number
}
