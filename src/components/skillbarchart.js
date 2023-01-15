import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useD3} from './hooks/useD3';
import * as d3 from 'd3';
import skillList from '../data/skills.json'


const SkillBarChart = ({widthh}) => {

    const ref = useD3(
        (svg) => {

            let skillList = [38, 59, 13, 8, 11, 44, 32, 78, 44, 32, 78, 34, 10, 98, 19, 66]
            // let skillList = [38, 59,  98]
            let height = 430,
                width = 800, barWidth = 30,
                barOffset = 5;

            const yScale = d3.scaleLinear()
                .domain([0, d3.max(skillList)])
                .range([0, height]);

            const xScale = d3.scaleBand()
                .domain(skillList)
                .paddingInner(.3)
                .paddingOuter(.3)
                .range([0, width]);

            // let xScale = d3.scaleBand()
            //     .range([0, width])
            //     .paddingInner(.3)
            //     .paddingOuter(.3);
            //
            // xScale.domain(
            //     skillList.map(function (d) {
            //         return d;
            //     })
            // );

            let myChart = svg
                .attr('width', width)
                .attr('height', height)
                // .style('background', '#C9D7D6')
                .selectAll('rect').data(skillList)
                .enter().append('rect')
                .style('fill', '#529fde')
                .attr('width', function (d) {
                    return xScale.bandwidth();
                })
                .attr('height', 0)
                .attr('y', height)
                .attr('x', function (d, i) {
                    // return i*(barWidth+barOffset)
                    return xScale(d)
                })


            myChart.transition()
                .attr('height', function (d) {
                    return yScale(d);
                })
                .attr('y', function (d) {
                    return height - yScale(d);
                })
                .delay(function (d, i) {
                    return i * 400;
                })
                .duration(1300)
                .ease(d3.easeBounceOut)


        },
        [skillList.length]
    );

    return (
        <>
            <svg
                ref={ref}
                style={{
                    // height:"500px",
                    width: "100%",
                    marginRight: "0px",
                    marginLeft: "0px",
                    marginBottom: "0px",
                    marginTop: "-15px"
                }}
            >
            </svg>
        </>
    );
}

export default SkillBarChart