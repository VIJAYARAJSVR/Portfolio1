import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useD3} from './hooks/useD3';
import * as d3 from 'd3';


// @ts-ignore
const SkillBarChart1 = ({data, widthh}) => {

    const ref = useD3(
        (svg) => {

            let height = 400,
                width = 700,
                tempColor;

            const yScale = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .range([0, height]);

            const xScale = d3.scaleBand()
                .domain(data)
                .paddingInner(.3)
                .paddingOuter(.1)
                .range([0, width]);


            const colors = d3.scaleLinear()
                .domain([0, data.length * .33,
                    data.length * .66,
                    data.length
                ])
                .range(['#B58929', '#C61C6F',
                    '#268BD2', '#85992C']);


            const myChart = svg
                .attr('width', width)
                .attr('height', height)
                .selectAll('rect').data(data)
                .enter().append('rect')
                .attr('fill', function (d, i) {
                    return colors(i)
                })
                .attr('width', function (d) {
                    return xScale.bandwidth();
                })
                .attr('height', 0)
                .attr('x', function (d) {
                    return xScale(d);
                })
                .attr('y', height)
                .on('mouseover', function (d) {
                    tempColor = this.style.fill;
                    d3.select(this)
                        .style('fill', 'yellow')
                })
                .on('mouseout', function (d) {
                    d3.select(this)
                        .style('fill', tempColor)
                });


            myChart.transition()
                .attr('height', function (d) {
                    return yScale(d);
                })
                .attr('y', function (d) {
                    return height - yScale(d);
                })
                .delay(function (d, i) {
                    return i * 20;
                })
                .duration(1000)
                .ease(d3.easeBounceOut)


        },
        [data.length]
    );

    return (
        <>
            <h2>Experience</h2>
            <svg
                ref={ref}
            >
            </svg>
        </>
    );
}

export default SkillBarChart1