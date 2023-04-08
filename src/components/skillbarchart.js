import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useD3} from './hooks/useD3';
import * as d3 from 'd3';
import skillList from '../data/skills.json'
// import {event as currentEvent} from 'd3';


const SkillBarChart = ({widthh}) => {
    console.log(widthh);
    const ref = useD3(
        (svg) => {

            let experience = [], skill = [];
            let margin = {top: 0, right: 0, bottom: 30, left: 20};
            let height = 430 - margin.top - margin.bottom;
            let width = 800 - margin.left - margin.right;


            let tempColor,
                yScale,
                yAxisValues,
                yAxisTicks,
                yGuide,
                xScale,
                xAxisValues,
                xAxisTicks,
                xGuide,
                colors,
                tooltip,
                myChart;


            for (let i = 0; i < skillList.length; i++) {
                experience.push(skillList[i].experience);
                skill.push(skillList[i].name);
            }

            d3.scaleLinear()
                .domain([1, d3.max(experience)])
                .range(['#FFFFFF', '#2D8BCF', '#DA3637'])


            xAxisValues = d3.scaleBand()
                .domain(skill)
                .range([0, width])

            xAxisTicks = d3.axisBottom(xAxisValues).tickSize(0).tickPadding([10]).tickSizeInner([0]);


            yAxisValues = d3.scaleLinear()
                .domain([0, d3.max(experience)])
                .range([height, 0]);

            yAxisTicks = d3.axisLeft(yAxisValues).tickSize(0).tickPadding([10]).tickSizeInner([0]);


            yScale = d3.scaleLinear()
                .domain([0, d3.max(experience)])
                .range([0, height]);

            xScale = d3.scaleBand()
                .domain(experience)
                .paddingInner(.3)
                .paddingOuter(.3)
                .range([0, width]);

            // tooltip = d3.select('body')
            //     .append('div')
            //     .style('position', 'absolute')
            //     .style('padding', '0 10px')
            //     .style('background', 'white')
            //     .style('opacity', 0);

            tooltip = d3.select('body')
                .append('div')
                .style('position', 'absolute')
                .style('padding', '0 10px')
                .style('background', 'white')
                .style('opacity', 0);


            myChart = svg
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform',
                    'translate(' + margin.left + ',' + margin.right + ')')
                // .style('background', '#C9D7D6')
                .selectAll('rect').data(experience)
                .enter().append('rect')
                .style('fill', '#529fde')
                // .attr('fill', colors)
                .attr('width', function () {
                    return xScale.bandwidth();
                })
                .attr('height', 0)
                .attr('y', height)
                .attr('x', function (d) {
                    return xScale(d)
                })



            myChart.on('mouseover', function (mevent, dataValue, hee) {
                tooltip.transition().duration(200)
                    .style('opacity', .9)
                tooltip.html(
                    '<div style="font-size: 2rem; font-weight: bold">' + Math.round(dataValue) + ' years</div>'
                ).style('left', (mevent.screenX) + 'px').style('top', (mevent.clientY) - (40) + 'px')

                tempColor = this.style.fill;
                d3.select(this).style('fill', 'yellow')
            })
                .on('mouseout', function () {
                    tooltip.html('')
                    d3.select(this).style('fill', tempColor)
                })


            svg.append('g')
                .attr('transform', 'translate(20,0)')
                .style('font-size', '20px')
                .style('color', 'darkkhaki')
                .call(yAxisTicks)


            svg.append('g')
                .attr('transform', 'translate(20,' + height + ')')
                .style('font-size', '20px')
                .style('color', 'darkkhaki')
                .call(xAxisTicks)
            // .selectAll("text")
            // .style("text-anchor", "end")
            // .attr("dx", "-.8em")
            // .attr("dy", ".15em")
            // .attr("transform", "rotate(-65)" );


            // myChart.selectAll("text")
            //     .data(experience)
            //     .enter()
            //     .append("text")
            //     .text(function(d) {
            //         return Math.floor(parseInt(d));
            //     })
            //     .attr("x", function(d){
            //         return xScale(d) + (xScale.bandwidth() / 2);
            //     })
            //     .attr("y", function(d){
            //         let yposition = 0;
            //         yposition = height - (yScale(d)/2) ;
            //         console.log("The value of data is "+d+" height is "+height+" yscale value is "+yScale(d)+" position is "+yposition);
            //         return yposition;
            //
            //     })
            //
            //     .attr("font-family" , "sans-serif")
            //     .attr("font-size" , "40px")
            //     .attr("font-weight" , "bold")
            //     .attr("fill" , "black")
            //     .attr("text-anchor", "middle")


            // svg.append('g').append("text")
            //     .attr("transform", "rotate(-90)")
            //     .attr("x", -(height/2))
            //     .attr("y", 15)
            //     .style('color', 'yellow')
            //     .style("text-anchor", "middle")
            //     .text("Experience");


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
                    marginTop: "10px"
                }}
            >
                {/*<g className="x-axis"/>*/}
                {/*<g className="y-axis"/>*/}
            </svg>
        </>
    );
}

export default SkillBarChart