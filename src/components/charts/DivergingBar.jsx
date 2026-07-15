import { useState } from 'react'
import { scaleLinear, scaleBand, min, max } from 'd3'

export default function DivergingBar({
  data,
  width = 700,
  height = 360,
  animate,
}) {
  const margin = { top: 20, right: 80, bottom: 20, left: 150 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const maxAbs = Math.max(
    Math.abs(min(data, d => d.value)),
    Math.abs(max(data, d => d.value))
  )

  const xScale = scaleLinear()
    .domain([-maxAbs * 1.2, maxAbs * 1.2])
    .range([0, innerWidth])

  const yScale = scaleBand()
    .domain(data.map(d => d.label))
    .range([0, innerHeight])
    .padding(0.25)

  const zeroX = xScale(0)

  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <g transform={`translate(${margin.left},${margin.top})`}>
        <line
          x1={zeroX}
          x2={zeroX}
          y1={0}
          y2={innerHeight}
          stroke="#6B7280"
          strokeWidth={1}
        />

        {data.map((d, i) => {
          const barY = yScale(d.label)
          const barH = yScale.bandwidth()
          const centerY = barY + barH / 2
          const isPositive = d.value >= 0

          const barX = isPositive ? zeroX : (animate ? xScale(d.value) : zeroX)
          const barW = isPositive
            ? (animate ? xScale(d.value) - zeroX : 0)
            : (animate ? zeroX - xScale(d.value) : 0)

          const valText = isPositive ? `+${d.value}` : `${d.value}`
          const barTooSmall = barW < 32
          const valX = barTooSmall
            ? (isPositive ? xScale(d.value) + 6 : xScale(d.value) - 6)
            : (isPositive ? xScale(d.value) - 6 : xScale(d.value) + 6)
          const valAnchor = barTooSmall
            ? (isPositive ? 'start' : 'end')
            : (isPositive ? 'end' : 'start')
          const valFill = barTooSmall
            ? (isPositive ? '#1B5FA8' : '#6B7280')
            : '#ffffff'

          return (
            <g
              key={d.label}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: hoveredIndex === null ? 1 : hoveredIndex === i ? 1 : 0.3,
                transition: 'opacity 200ms ease-out',
              }}
            >
              <rect
                x={barX}
                y={barY}
                width={barW}
                height={barH}
                fill={isPositive ? '#1B5FA8' : '#B8CEEA'}
                rx={4}
                style={{
                  transition: 'width 800ms ease-out, x 800ms ease-out',
                  transitionDelay: `${i * 80}ms`,
                }}
              />
              <text
                x={-4}
                y={centerY + 4}
                textAnchor="end"
                fontFamily="Sora, sans-serif"
                fontWeight={300}
                fontSize={13}
                fill="#0F1117"
              >
                {d.label}
              </text>
              <text
                x={valX}
                y={centerY + 4}
                textAnchor={valAnchor}
                fontFamily="DM Mono, monospace"
                fontSize={11}
                fill={valFill}
              >
                {valText}
              </text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}
