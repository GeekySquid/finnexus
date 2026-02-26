'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface DataPoint {
  date: Date
  price: number
  sentiment: number
  volume: number
}

export default function MarketVisualization() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    // Generate sample data
    const data: DataPoint[] = Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000),
      price: 150 + Math.random() * 50 + Math.sin(i * 0.3) * 20,
      sentiment: Math.random() * 2 - 1, // -1 to 1
      volume: Math.random() * 1000000
    }))

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const margin = { top: 20, right: 30, bottom: 40, left: 50 }
    const width = 800 - margin.left - margin.right
    const height = 400 - margin.bottom - margin.top

    const g = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.date) as [Date, Date])
      .range([0, width])

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.price) as [number, number])
      .range([height, 0])

    const sentimentColorScale = d3.scaleLinear<string>()
      .domain([-1, 0, 1])
      .range(['#ef4444', '#6b7280', '#10b981'])

    // Line generator
    const line = d3.line<DataPoint>()
      .x(d => xScale(d.date))
      .y(d => yScale(d.price))
      .curve(d3.curveMonotoneX)

    // Add gradient
    const gradient = g.append('defs')
      .append('linearGradient')
      .attr('id', 'price-gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0).attr('y1', height)
      .attr('x2', 0).attr('y2', 0)

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#ff4500')
      .attr('stop-opacity', 0.1)

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#ff4500')
      .attr('stop-opacity', 0.3)

    // Add area under curve
    const area = d3.area<DataPoint>()
      .x(d => xScale(d.date))
      .y0(height)
      .y1(d => yScale(d.price))
      .curve(d3.curveMonotoneX)

    g.append('path')
      .datum(data)
      .attr('fill', 'url(#price-gradient)')
      .attr('d', area)

    // Add price line
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#ff4500')
      .attr('stroke-width', 2)
      .attr('d', line)

    // Add sentiment dots
    g.selectAll('.sentiment-dot')
      .data(data)
      .enter().append('circle')
      .attr('class', 'sentiment-dot')
      .attr('cx', d => xScale(d.date))
      .attr('cy', d => yScale(d.price))
      .attr('r', 4)
      .attr('fill', d => sentimentColorScale(d.sentiment))
      .attr('opacity', 0.8)
      .on('mouseover', function(event, d) {
        // Tooltip
        const tooltip = d3.select('body').append('div')
          .attr('class', 'tooltip')
          .style('position', 'absolute')
          .style('background', 'rgba(0, 0, 0, 0.9)')
          .style('color', 'white')
          .style('padding', '12px')
          .style('border-radius', '8px')
          .style('font-size', '12px')
          .style('pointer-events', 'none')
          .style('opacity', 0)
          .style('border', '1px solid #ff4500')

        tooltip.transition()
          .duration(200)
          .style('opacity', 1)

        tooltip.html(`
          <div style="margin-bottom: 4px;"><strong>Date:</strong> ${d.date.toLocaleDateString()}</div>
          <div style="margin-bottom: 4px;"><strong>Price:</strong> $${d.price.toFixed(2)}</div>
          <div><strong>Sentiment:</strong> ${d.sentiment > 0 ? 'Bullish' : d.sentiment < 0 ? 'Bearish' : 'Neutral'}</div>
        `)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 10) + 'px')
      })
      .on('mouseout', function() {
        d3.selectAll('.tooltip').remove()
      })

    // Add axes with dark theme styling
    const xAxis = g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat('%m/%d') as any))
    
    xAxis.selectAll('text')
      .style('fill', '#9ca3af')

    const yAxis = g.append('g')
      .call(d3.axisLeft(yScale).tickFormat((d) => `$${d}` as any))
    
    yAxis.selectAll('text')
      .style('fill', '#9ca3af')

    // Style axis lines
    g.selectAll('.domain')
      .style('stroke', '#374151')

    g.selectAll('.tick line')
      .style('stroke', '#374151')

    // Add labels
    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - (height / 2))
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('fill', '#9ca3af')
      .text('Price ($)')

    g.append('text')
      .attr('transform', `translate(${width / 2}, ${height + margin.bottom})`)
      .style('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('fill', '#9ca3af')
      .text('Date')

  }, [])

  return (
    <div className="w-full overflow-x-auto bg-card rounded-lg p-4">
      <svg ref={svgRef} className="w-full h-auto max-w-4xl mx-auto"></svg>
    </div>
  )
}