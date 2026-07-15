import { useState } from 'react'
import { scaleBand, scaleLinear, max } from 'd3'

function wrapLabel(label) {
  const words = label.split(' ')
  if (words.length === 1) return [label]
  const mid = Math.floor(words.length / 2)
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')]
}

export default function LollipopChart({
  data,
  width = 700,
  height = 380,
  animate,
}) {
  const margin = { top: 40, right: 40, bottom: 60, left: 130 }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xScale = scaleBand()
    .domain(data.map(d => d.label))
    .range([0, innerWidth])
    .padding(0.4)

  const yScale = scaleLinear()
    .domain([0, max(data, d => d.value) * 1.2])
    .range([innerHeight, 0])

  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <g transform={`translate(${margin.left},${margin.top})`}>
        <line
          x1={0}
          x2={innerWidth}
          y1={innerHeight}
          y2={innerHeight}
          stroke="#B8CEEA"
          strokeWidth={0.5}
        />

        {data.map((d, i) => {
          const cx = xScale(d.label) + xScale.bandwidth() / 2
          const cy = animate ? yScale(d.value) : innerHeight
          const stemH = animate ? innerHeight - yScale(d.value) : 0
          const stemY = animate ? yScale(d.value) : innerHeight
          const lines = wrapLabel(d.label)

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
              {/* Stem as rect for reliable CSS transition */}
              <rect
                x={cx - 1.25}
                width={2.5}
                y={stemY}
                height={stemH}
                fill="#1B5FA8"
                style={{
                  transition: 'y 800ms ease-out, height 800ms ease-out',
                  transitionDelay: `${i * 80}ms`,
                }}
              />
              <circle
                cx={cx}
                cy={cy}
                r={9}
                fill="#1B5FA8"
                style={{
                  transition: 'cy 800ms ease-out',
                  transitionDelay: `${i * 80}ms`,
                }}
              />
              <text
                x={cx}
                y={yScale(d.value) - 14}
                textAnchor="middle"
                fontFamily="Sora, sans-serif"
                fontWeight={300}
                fontSize={18}
                fill="#0F1117"
              >
                {d.value}
              </text>
              <text
                x={cx}
                y={innerHeight + 20}
                textAnchor="middle"
                fontFamily="DM Mono, monospace"
                fontSize={11}
                fill="#6B7280"
              >
                {lines.map((line, li) => (
                  <tspan key={li} x={cx} dy={li === 0 ? 0 : 13}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}
