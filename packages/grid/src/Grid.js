import React, { useMemo, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Grid.css'

function toCssVar(index, full) {
	if (full) {
		return `var(--col${index})`
	}
	return `--col${index}`
}

export function Grid({ children }) {
	const isLengthEqual = children.every(cols => cols.length === children[0].length)

	if (!isLengthEqual) {
		throw new Error('Something went wrong')
	}

	const wrapper = useRef(null)
	const DEFAULT_WIDTH = 100 / children[0].length

	const [variables, setVariables] = useState(
		children[0].reduce(
			(prev, _, index) => ((prev[toCssVar(index + 1)] = `${DEFAULT_WIDTH}%`), prev),
			{}
		)
	)

	const gridTemplateColumns = useMemo(() =>
		children[0].map((_, index) => toCssVar(index + 1, true))
	)

	const MIN_SIZE = 3

	function resizeHandler(event) {
		const wrapperWidth = wrapper.current.clientWidth

		const block = event.target.parentElement
		const blockCol = block.dataset.col
		const blockWidthPercent = variables[toCssVar(blockCol)].replace('%', '')

		const prevBlock = block.previousElementSibling
		const prevBlockItemCol = prevBlock.dataset.col
		const prevBlockWidthPercent = variables[toCssVar(prevBlockItemCol)].replace('%', '')
		const prevBlockCoords = prevBlock.getBoundingClientRect()

		function onMousemove(event) {
			const delta = event.pageX - prevBlockCoords.x

			const currentWidth = (delta / wrapperWidth) * 100 - prevBlockWidthPercent

			const currentBlockWidth = blockWidthPercent - currentWidth
			const currentPrevBlockWidth = +prevBlockWidthPercent + currentWidth

			if (currentPrevBlockWidth > MIN_SIZE && currentBlockWidth > MIN_SIZE) {
				setVariables({
					...variables,
					[toCssVar(prevBlockItemCol)]: `${currentPrevBlockWidth}%`,
					[toCssVar(blockCol)]: `${currentBlockWidth}%`
				})
			}
		}

		document.addEventListener('mousemove', onMousemove)

		function onMouseup() {
			document.removeEventListener('mousemove', onMousemove)
			document.removeEventListener('mouseup', onMouseup)
		}

		document.addEventListener('mouseup', onMouseup)
	}

	return (
		<>
			<div
				style={{
					...variables,
					display: 'grid',
					gridTemplateColumns: gridTemplateColumns.join('')
				}}
				ref={wrapper}
			>
				{children.map((cols, rowIndex) => {
					rowIndex++
					return cols.map((col, colIndex) => {
						colIndex++
						return (
							<div
								style={{ gridArea: `${rowIndex} / ${colIndex}` }}
								className='grid-item'
								key={colIndex}
								data-col={colIndex}
							>
								{colIndex > 1 && (
									<div
										className='resizer'
										data-resizer
										onMouseDown={resizeHandler}
									/>
								)}
								{col}
							</div>
						)
					})
				})}
			</div>
		</>
	)
}

Grid.propTypes = {
	children: PropTypes.any
}
