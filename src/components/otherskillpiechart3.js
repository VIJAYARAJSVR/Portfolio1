import React, {useEffect} from 'react';
import * as d3 from 'd3';
import {textwrap} from 'd3-textwrap';

// https://ihsavru.medium.com/react-d3-implementing-a-pie-chart-dc7bf13ff418

function PieChart3() {

    // const {
    //     data,
    //     outerRadius,
    //     innerRadius,
    // } = props;

    const data = [
        {label: 'Python', value: 40},
        {label: 'R', value: 10},
        {label: 'Machine Learning', value: 20},
        {label: 'Artificial Intelligence', value: 40},
        {label: 'SQL', value: 15}

    ];
    // console.log( "THE DATA IS "+ data);

    const outerRadius = 150;
    const innerRadius = 1;

    const margin = {
        top: 15, right: 10, bottom: 15, left: 10
    };

    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;

    // const colorScale = d3
    //     .scaleSequential()
    //     .interpolator(d3.interpolateCool)
    //     .domain([0, data.length]);

    // const colorScale = d3.scaleSequential(d3.interpolateCool)
    //     .domain([0, data.length]);

    // var colorScale = d3.scaleSequential(d3.interpolate("purple", "orange"))
    //     .domain([0,99]);

    // below are Categorical schemes
    var colorScale = d3.scaleOrdinal(d3.schemeBlues[9]);
    var colorScale = d3.scaleOrdinal(d3.schemeSet1);
    var colorScale = d3.scaleOrdinal(d3.schemeSet2);
    var colorScale = d3.scaleOrdinal(d3.schemeSet3);
    var colorScale = d3.scaleOrdinal(d3.schemeTableau10);
    //var colorScale = d3.scaleOrdinal(d3.schemeYlOrBr[K]); Here k is between 3 to 9
    var colorScale = d3.scaleOrdinal(d3.schemeYlOrBr[6]);

    // var colorScale = d3.scaleSequential(d3.interpolateBlues) .domain([0, data.length]);
    // let wrap,
    //     text;
    // // create a text wrapping function
    // wrap = textwrap()
    //     // wrap to 480 x 960 pixels
    //     .bounds({height: 10, width: 10});

    useEffect(() => {
        // setTimeout(() => {    drawChart();}, 100);
        drawChart();
    }, [data, drawChart]);

    function drawChart() {
        // Remove the old svg
        d3.select('#pie-container3')
            .select('svg')
            .remove();

        // Create new svg
        const svg = d3
            .select('#pie-container3')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const arcGenerator = d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        const pieGenerator = d3
            .pie()
            .padAngle(0)
            .value((d) => d.value);

        const arc = svg
            .selectAll()
            .data(pieGenerator(data))
            .enter();

        // Append arcs
        arc
            .append('path')
            .attr('d', arcGenerator)
            .style('fill', (_, i) => colorScale(i))
            .style('stroke', '#ffffff')
            .style('stroke-width', 1);

        // Append text labels
        arc
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .attr("font-size", "18px")
            .attr("color", "black")
            .attr("font-weight", "bold")
            .attr("font-style", "italic")
            // .attr("word-wrap","break-word")
            .text((d) => d.data.label)

            // .style('fill', (_, i) => colorScale(data.length - i))
            .attr('transform', (d) => {
                const [x, y] = arcGenerator.centroid(d);
                return `translate(${x}, ${y})`;
            });

        // d3.textwrap = textwrap;
        // text = svg.selectAll('text');
        // // run the text wrapping function on all text nodes
        // text.call(wrap);

    }

    return <div id="pie-container3"/>;
}

export default PieChart3;