import React, {useEffect} from 'react';
import * as d3 from 'd3';

// https://ihsavru.medium.com/react-d3-implementing-a-pie-chart-dc7bf13ff418
// var toggle = true;


function PieChart1() {

    // const {
    //     data,
    //     outerRadius,
    //     innerRadius,
    // } = props;

    // const data = [
    //     {label: 'Teamwork', value: 20},
    //     {label: 'Technical', value: 30},
    //     {label: 'Communication', value: 28},
    //     {label: 'Creativity', value: 20}
    // ];

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
    // var colorScale = d3.scaleSequential(d3.interpolateBlues) .domain([0, data.length]);

    const colorScale = d3.scaleOrdinal(d3.schemeBlues[6]);

    useEffect(() => {

        // const interval = setInterval(() => {
        //     console.log('This will be called every 2 seconds');
        //         drawChart();
        // }, 2000);
        //
        // return () => clearInterval(interval);
        drawChart();

    }, [drawChart]);

    function drawChart() {
        const data = [
            {label: 'Teamwork', value: 20},
            {label: 'Technical', value: 30},
            {label: 'Communication', value: 28},
            {label: 'Creativity', value: 20}
        ];

        // Remove the old svg
        d3.select('#pie-container1')
            .select('svg')
            .remove();

        // Create new svg
        const svg = d3
            .select('#pie-container1')
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

    return <div id="pie-container1"/>;
}

// window.setInterval(function() {
//     if (toggle) {
//         console.log("toggling");
//         const data1 = [
//             {label: 'Teamwork', value: 20},
//             {label: 'Technical', value: 30},
//             {label: 'Communication', value: 28},
//             {label: 'Creativity', value: 20}
//         ];
//         toggle = false;
//         PieChart1();
//     } else {
//         console.log("another toggling");
//         const data2 = [
//             {label: 'Teamwork', value: 20},
//             {label: 'Technical', value: 30}
//         ];
//         toggle = true;
//         PieChart1();
//     }
//
// }, 3500);


// var toggle = true;
// domPieChart.call(pieChart.data(dataset1));
// window.setInterval(function() {
//     if (toggle) {
//         domPieChart.call(pieChart.data(dataset2));
//     } else {
//         domPieChart.call(pieChart.data(dataset1));
//     }
//     toggle = !toggle;
// }, 3500);

export default PieChart1;