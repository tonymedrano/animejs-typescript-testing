import * as SVG from "svg.js"

const width = window.innerWidth * .5
const height = window.innerHeight * .5

const svg = document.createElement('SVG');
svg.id = 'drawing'
document.body.appendChild(svg)
const draw = SVG('drawing').size('100%', '100%').viewbox(0, 0, 800, 1000)

export const run = () => {
    /** circles */
    const circle1 = draw.circle(100)
    const circle2 = draw.circle(100)
    const circle3 = draw.circle(100)
    const circle4 = draw.circle(100)
    const circle5 = draw.circle(100)

    circle1.attr({
        cx: '50%',
        cy: '50%',
        r: 0,
        stroke: 'white',
        'stroke-opacity': 0.4,
        'fill-opacity': 0,
        'stroke-width': 16
    }).animate({ ease: '<', delay: 250, duration: 6000 })
        .attr({ r: 1220 })


    circle2.attr({
        cx: '50%',
        cy: '50%',
        r: 0,
        stroke: 'white',
        'stroke-opacity': 0.4,
        'fill-opacity': 0,
        'stroke-width': 12
    }).animate({ ease: '<', delay: 1250, duration: 6000 })
        .attr({ r: 1220 })

    circle3.attr({
        cx: '50%',
        cy: '50%',
        r: 0,
        stroke: 'white',
        'stroke-opacity': 0.4,
        'fill-opacity': 0,
        'stroke-width': 8
    }).animate({ ease: '<', delay: 2250, duration: 6000 })
        .attr({ r: 1220 })

    circle4.attr({
        cx: '50%',
        cy: '50%',
        r: 0,
        stroke: 'white',
        'stroke-opacity': 0.4,
        'fill-opacity': 0,
        'stroke-width': 4
    }).animate({ ease: '<', delay: 3250, duration: 6000 })
        .attr({ r: 1220 })

    circle5.attr({
        cx: '50%',
        cy: '50%',
        r: 0,
        stroke: 'white',
        'stroke-opacity': 0.4,
        'fill-opacity': 0,
        'stroke-width': 2
    }).animate({ ease: '<', delay: 4250, duration: 6000 })
        .attr({ r: 1220 })
}