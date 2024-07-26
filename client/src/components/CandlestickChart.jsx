// src/CandlestickChart.js
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const CandlestickChart = ({ data }) => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);
    const width = svg.node().clientWidth;
    const height = svg.node().clientHeight;

    const margin = { top: 10, right: 10, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Parse and sort data by datetime in descending order
    const sortedData = data
      .map((d) => ({ ...d, datetime: new Date(d.datetime) }))
      .sort((a, b) => a.datetime - b.datetime);

    const xScale = d3
      .scaleBand()
      .domain(sortedData.map((d) => d.datetime))
      .range([0, innerWidth])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min(sortedData, (d) => parseFloat(d.low)),
        d3.max(sortedData, (d) => parseFloat(d.high)),
      ])
      .nice()
      .range([innerHeight, 0]);

    const xAxis = d3
      .axisBottom(xScale)
      .tickFormat(d3.timeFormat("%Y-%m-%d %H:%M")) // Full date format
      .tickValues(
        xScale
          .domain()
          .filter((d, i) => !(i % Math.ceil(sortedData.length / 10)))
      ); // Limit number of ticks
    const yAxis = d3.axisLeft(yScale);

    svg.selectAll("*").remove(); // Clear previous chart content

    svg
      .append("g")
      .call(xAxis)
      .attr(
        "transform",
        `translate(${margin.left}, ${innerHeight + margin.top})`
      );
    svg
      .append("g")
      .call(yAxis)
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const bars = svg
      .selectAll(".candlestick")
      .data(sortedData)
      .enter()
      .append("g")
      .attr("class", "candlestick")
      .attr(
        "transform",
        (d) => `translate(${xScale(d.datetime) + margin.left}, ${margin.top})`
      )
      .on("mouseover", function (event, d) {
        // Show tooltip
        tooltip.style("opacity", 1).html(`
            <strong>Date:</strong> ${d3.timeFormat("%Y-%m-%d %H:%M")(
              d.datetime
            )}<br>
            <strong>Open:</strong> ${d.open}<br>
            <strong>High:</strong> ${d.high}<br>
            <strong>Low:</strong> ${d.low}<br>
            <strong>Close:</strong> ${d.close}<br>
            <strong>Volume:</strong> ${d.volume}
          `);
      })
      .on("mousemove", function (event) {
        // Adjust tooltip position near cursor
        const [mouseX, mouseY] = d3.pointer(event, svg.node());
        tooltip
          .style("left", `${mouseX + margin.left + 15}px`) // Offset to the right
          .style("top", `${mouseY + margin.top - 10}px`) // Offset above the cursor
          .style("position", "absolute");
      })
      .on("mouseout", function () {
        // Hide tooltip
        tooltip.style("opacity", 0);
      });

    bars
      .append("line")
      .attr("class", "high-low")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", (d) => yScale(parseFloat(d.high)))
      .attr("y2", (d) => yScale(parseFloat(d.low)))
      .attr("stroke", (d) =>
        parseFloat(d.close) >= parseFloat(d.open) ? "green" : "red"
      )
      .attr("stroke-width", 1);

    bars
      .append("rect")
      .attr("class", "open-close")
      .attr("x", -xScale.bandwidth() / 2)
      .attr("y", (d) =>
        yScale(Math.max(parseFloat(d.open), parseFloat(d.close)))
      )
      .attr("width", xScale.bandwidth())
      .attr("height", (d) =>
        Math.abs(yScale(parseFloat(d.open)) - yScale(parseFloat(d.close)))
      )
      .attr("fill", (d) =>
        parseFloat(d.close) >= parseFloat(d.open) ? "green" : "red"
      );
  }, [data]);

  return (
    <div className="relative">
      <svg ref={svgRef} width="2400" height="800">
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <div
        ref={tooltipRef}
        className="absolute bg-gray-700 text-white text-xs p-2 rounded opacity-0 pointer-events-none"
        style={{ transition: "opacity 0.2s" }}
      ></div>
    </div>
  );
};

export default CandlestickChart;
