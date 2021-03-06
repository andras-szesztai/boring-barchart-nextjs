import { select } from "d3-selection";
import { interpolateNumber } from "d3-interpolate";
import {format} from 'd3-format'

export const numberTween = (d, i, n, key, numFormat) => {
  const that = select(n[i])
  const num = +that.text().substring(0, that.text().length - 1) * 0.01
  const newNum = d[key]
  const index = interpolateNumber(num, newNum);  
  return function(t) {
    that.text(`${format(numFormat)(index(t))}`);
  };
};

export const createUpdateSvg = ({
  area,
  dims,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  append,
  update
}) => {
  let chartArea
  const setDims = svg => svg.attr("width", dims.width).attr("height", dims.height);
  const chartWidth = dims.width - margin.left - margin.right
  const chartHeight = dims.height - margin.top - margin.bottom
  if(append){
    area.append("svg");
    const svg = area.select("svg")
    setDims(svg)
    svg
      .append("g")
      .attr("class", "chart-area")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
    chartArea = area.select(".chart-area");
  };
  if(update){
    setDims(area.select("svg"))
  }
  return { chartArea, chartWidth, chartHeight }
  }
