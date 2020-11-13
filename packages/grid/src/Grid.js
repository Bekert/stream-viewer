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

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
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

	const [values, setValues] = useState({
		cols: new Array(initialRow.length).fill(initialColSize),
		rows: new Array(initialRows.length).fill(initialRowSize)
	})

	function resizeHandler(event) {
		const resizer = event.target

		const type = resizer.dataset.resizer
		const size = type === 'cols' ? 'width' : 'height'
		const axis = type === 'cols' ? 'x' : 'y'

		const wrapperSize = wrapper.current[`client${capitalizeFirstLetter(size)}`]

		const block = resizer.parentElement
		const blockLine = block.dataset[type].split('/')[0]
		const blockWidth = values[type][blockLine - 1]
		const blockCoords = block.getBoundingClientRect()
		const blockDelta = blockCoords[axis] - blockCoords[size]

		const prevBlockWidth = values[type][blockLine - 2]

		function onMousemove(event) {
			const delta = event[`page${capitalizeFirstLetter(axis)}`] - blockDelta

			const currentWidth = (delta / wrapperSize) * 100 - blockWidth

			const currentBlockWidth = blockWidth - currentWidth
			const currentPrevBlockWidth = +prevBlockWidth + currentWidth

			if (currentPrevBlockWidth > minSize && currentBlockWidth > minSize) {
				const prevValues = [...values[type]]
				prevValues[blockLine - 1] = currentBlockWidth
				prevValues[blockLine - 2] = currentPrevBlockWidth

				setValues({ ...values, [type]: prevValues })
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
					gridTemplateColumns: toGridTemplate(values.cols),
					gridTemplateRows: toGridTemplate(values.rows),
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
								data-cols={col.colLocation}
								data-rows={col.rowLocation}
							>
								{col.rowLocation !== '1/1' && (
									<div
										className='resizer'
										data-resizer='rows'
										onMouseDown={resizeHandler}
										style={{ height: '5px', width: '100%' }}
									/>
								)}
								{col.colLocation !== '1/1' && (
									<div
										className='resizer'
										data-resizer='cols'
										onMouseDown={resizeHandler}
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
