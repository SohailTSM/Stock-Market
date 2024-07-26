// src/CandlestickChart.js
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const CandlestickChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
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
      .tickFormat((d) => d.toISOString().slice(11, 16));
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
      );

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
    <svg ref={svgRef} width="1600" height="800">
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default CandlestickChart;
