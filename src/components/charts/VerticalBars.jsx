import { useState } from 'react'
import { scaleBand, scaleLinear } from 'd3'

export default function VerticalBars({ data, width = 800, height = 400, animate, thresholdAfter, dangerWindow }) {
  const margin = { top: 50, right: 20, bottom: 70, left: 20 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xScale = scaleBand()
    .domain(data.map(d => d.label))
    .range([0, innerWidth])
    .padding(0.3)

  const yScale = scaleLinear()
    .domain([0, 100])
    .range([innerHeight, 0])

  const [hoveredIndex, setHoveredIndex] = useState(null)

  const getBarFill = d => {
    if (d.value > 50) return '#1B5FA8'
    if (d.value > 20) return '#5B9BD5'
    return '#B8CEEA'
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <g transform={`translate(${margin.left},${margin.top})`}>
        {thresholdAfter !== undefined && (
          <>
            <rect
              x={0}
              y={0}
              width={xScale(data[thresholdAfter].label)}
              height={innerHeight}
              fill="#B8CEEA"
              opacity={0.15}
            />
            <line
              x1={xScale(data[thresholdAfter].label)}
              x2={xScale(data[thresholdAfter].label)}
              y1={0}
              y2={innerHeight}
              stroke="#6B7280"
              strokeDasharray="3,3"
              strokeWidth={1}
            />
            <text
              x={xScale(data[thresholdAfter].label) + 6}
              y={-8}
              fontFamily="DM Mono"
              fontSize={9}
              fill="#6B7280"
            >
              threshold
            </text>
          </>
        )}
        {dangerWindow !== undefined && (() => {
          const x1 = xScale(data[0].label)
          const x2 = xScale(data[dangerWindow].label) + xScale.bandwidth()
          const midX = (x1 + x2) / 2
          return (
            <>
              <line x1={x1} x2={x2} y1={-20} y2={-20} stroke="#1B5FA8" strokeWidth={1.5} />
              <line x1={x1} x2={x1} y1={-20} y2={-14} stroke="#1B5FA8" strokeWidth={1.5} />
              <line x1={x2} x2={x2} y1={-20} y2={-14} stroke="#1B5FA8" strokeWidth={1.5} />
              <text
                x={midX}
                y={-32}
                textAnchor="middle"
                fontFamily="DM Mono"
                fontSize={10}
                fill="#1B5FA8"
              >
                DANGER WINDOW · 66% OF CHURNERS LOST HERE
              </text>
            </>
          )
        })()}
        <line
          x1={0}
          x2={innerWidth}
          y1={innerHeight}
          y2={innerHeight}
          stroke="#B8CEEA"
          strokeWidth={0.5}
        />

        {data.map((d, i) => {
          const barX = xScale(d.label)
          const barW = xScale.bandwidth()
          const centerX = barX + barW / 2
          const barY = animate ? yScale(d.value) : innerHeight
          const barH = animate ? innerHeight - yScale(d.value) : 0

          return (
            <g key={d.label}>
              <rect
                x={barX}
                width={barW}
                y={barY}
                height={barH}
                fill={getBarFill(d)}
                rx={4}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transition: `y 800ms ease-out ${i * 80}ms, height 800ms ease-out ${i * 80}ms, opacity 200ms ease-out`,
                  opacity: hoveredIndex === null ? 1 : hoveredIndex === i ? 1 : 0.3,
                }}
              />
              <text
                x={centerX}
                y={yScale(d.value) - 8}
                textAnchor="middle"
                fontFamily="Sora, sans-serif"
                fontWeight={300}
                fontSize={22}
                fill="#0F1117"
              >
                {d.value}%
              </text>
              <text
                x={centerX}
                y={innerHeight + 20}
                textAnchor="middle"
                fontFamily="Sora, sans-serif"
                fontWeight={500}
                fontSize={12}
                fill="#0F1117"
              >
                {d.label}
              </text>
              <text
                x={centerX}
                y={innerHeight + 34}
                textAnchor="middle"
                fontFamily="DM Mono, monospace"
                fontSize={10}
                fill="#6B7280"
              >
                {d.sub}
              </text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}
