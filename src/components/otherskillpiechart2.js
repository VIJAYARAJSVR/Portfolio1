import React, {useEffect} from 'react';
import * as d3 from 'd3';

// https://ihsavru.medium.com/react-d3-implementing-a-pie-chart-dc7bf13ff418

function PieChart2() {

    // const {
    //     data,
    //     outerRadius,
    //     innerRadius,
    // } = props;

    const data = [
        {label: 'Responsibility', value: 30},
        {label: 'Management', value: 20},
        {label: 'Leadership', value: 20},
        {label: 'Motivation', value: 20},
        {label: 'Flexibility', value: 20}
    ];
    // console.log( "THE DATA IS "+ data);

    const outerRadius = 150;
    const innerRadius = 5;

    const margin = {
        top: 15, right: 10, bottom: 15, left: 10
    };

    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;

    // var colorScale = d3
    //     .scaleSequential()
    //     .interpolator(d3.interpolateCool)
    //     .domain([0, data.length]);

    var colorScale = d3.scaleOrdinal(d3.schemeYlGn[6]);

    useEffect(() => {
        // setTimeout(() => {    drawChart();}, 100);
        drawChart();
    }, [data, drawChart]);

    function drawChart() {
        // Remove the old svg
        d3.select('#pie-container2')
            .select('svg')
            .remove();

        // Create new svg
        const svg = d3
            .select('#pie-container2')
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
            .style('stroke-width', 0);

        // Append text labels
        arc
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .attr("font-size", "17px")
            .attr("color", "black")
            .attr("font-weight", "bold")
            .attr("font-style", "italic")
            .text((d) => d.data.label)
            // .style('fill', (_, i) => colorScale(data.length - i))
            .attr('transform', (d) => {
                const [x, y] = arcGenerator.centroid(d);
                return `translate(${x}, ${y})`;
            });


    }

    return <div id="pie-container2"/>;
}

export default PieChart2;