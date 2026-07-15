import { useState } from 'react'
import { scaleLinear, scaleBand, max } from 'd3'

export default function HorizontalBar({
  data,
  referenceValue,
  width = 700,
  height = 320,
  animate,
}) {
  const margin = { top: 30, right: 80, bottom: 40, left: 130 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xScale = scaleLinear()
    .domain([0, max(data, d => d.value) * 1.1])
    .range([0, innerWidth])

  const yScale = scaleBand()
    .domain(data.map(d => d.label))
    .range([0, innerHeight])
    .padding(0.3)

  const [hoveredIndex, setHoveredIndex] = useState(null)

  const domainMax = max(data, d => d.value) * 1.1
  const ticks = [0, 10, 20, 30, 40, 50].filter(t => t <= domainMax)

  const getBarFill = (d, i) => {
    if (referenceValue !== undefined) {
      return d.value > referenceValue ? '#1B5FA8' : '#5B9BD5'
    }
    return i < 2 ? '#1B5FA8' : '#5B9BD5'
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <g transform={`translate(${margin.left},${margin.top})`}>
        {referenceValue !== undefined && (
          <>
            <line
              x1={xScale(referenceValue)}
              x2={xScale(referenceValue)}
              y1={0}
              y2={innerHeight}
              stroke="#6B7280"
              strokeWidth={1}
              strokeDasharray="4 3"
            />
            <text
              x={xScale(referenceValue)}
              y={-6}
              textAnchor="middle"
              fontFamily="DM Mono, monospace"
              fontSize={10}
              fill="#6B7280"
            >
              {referenceValue}% avg
            </text>
          </>
        )}

        {data.map((d, i) => {
          const barY = yScale(d.label)
          const barH = yScale.bandwidth()
          const centerY = barY + barH / 2
          const finalX = xScale(d.value)
          const wide = finalX > 80
          const labelX = wide ? finalX - 6 : finalX + 6
          const labelFill = wide ? '#F5F6F8' : '#0F1117'
          const labelAnchor = wide ? 'end' : 'start'

          return (
            <g key={d.label}>
              <rect
                x={0}
                y={barY}
                height={barH}
                width={animate ? finalX : 0}
                fill={getBarFill(d, i)}
                rx={4}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transition: `width 800ms ease-out ${i * 80}ms, opacity 200ms ease-out`,
                  opacity: hoveredIndex === null ? 1 : hoveredIndex === i ? 1 : 0.3,
                }}
              />
              <text
                x={-8}
                y={centerY - 6}
                textAnchor="end"
                fontFamily="Sora, sans-serif"
                fontWeight={500}
                fontSize={12}
                fill="#0F1117"
              >
                {d.label}
              </text>
              <text
                x={-8}
                y={centerY + 8}
                textAnchor="end"
                fontFamily="DM Mono, monospace"
                fontSize={10}
                fill="#6B7280"
              >
                n = {d.n}
              </text>
              <text
                x={labelX}
                y={centerY + 4}
                textAnchor={labelAnchor}
                fontFamily="DM Mono, monospace"
                fontSize={11}
                fill={labelFill}
              >
                {d.value}%
              </text>
            </g>
          )
        })}

        <line
          x1={0}
          x2={innerWidth}
          y1={innerHeight}
          y2={innerHeight}
          stroke="#6B7280"
          strokeWidth={0.5}
        />
        {ticks.map(tick => (
          <g key={tick} transform={`translate(${xScale(tick)},${innerHeight})`}>
            <line y1={0} y2={4} stroke="#6B7280" strokeWidth={0.5} />
            <text
              y={14}
              textAnchor="middle"
              fontFamily="DM Mono, monospace"
              fontSize={10}
              fill="#6B7280"
            >
              {tick}%
            </text>
          </g>
        ))}
      </g>
    </svg>
  )
}
