import * as SVG from 'svg.js'

const svg = document.createElement('SVG')
svg.id = 'drawing'
document.body.appendChild(svg)

const width = window.innerWidth
const height = window.innerHeight
const draw = SVG('drawing').size(width, height).viewbox(0, 0, width, height)

const run = () => {
    //. circles
    const circle = draw.circle(100)

    circle.attr({
        cx: '50%',
        cy: '50%',
        r: 0,
        stroke: 'white',
        'stroke-opacity': 0.4,
        'fill-opacity': 0,
        'stroke-width': 16
    }).animate({ ease: '<', delay: 250, duration: 6000 })
        .attr({ r: 1220 })

    const paths = {
        blue: 'M 100 350 q 150 -300 300 0'
    }

    const line1 = draw.path('M 100 350 l 150 -300').stroke({ width: 3, color: 'red' }).fill('none')
    const line2 = draw.path('M 250 50 l 150 300').stroke({ width: 3, color: 'red' }).fill('none')
    const line3 = draw.path('M 175 200 l 150 0').stroke({ width: 3, color: 'green' }).fill('none')
    const line4 = draw.path(paths.blue).stroke({ width: 5, color: 'blue' }).fill('none')

    draw.circle(100).attr({
        cx: 100,
        cy: 350,
        r: 5
    })

    draw.circle(100).attr({
        cx: 250,
        cy: 50,
        r: 5
    })

    draw.circle(100).attr({
        cx: 400,
        cy: 350,
        r: 5
    })

    const length = line4.length()
    const line = draw.line(0, 0, 100, 150).stroke({ width: 5, color: 'pink' })

    const polyline = draw.polyline('50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40, 50,0')
    polyline.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' }).fill('pink')

    const point = draw.circle().attr({
        cx: 100,
        cy: 350,
        r: 10,
        stroke: 'red'
    }).animate(8000, '<>').during((pos: number) => {
        const p = line4.pointAt(pos * length)
        point.attr({
            cx: p.x,
            cy: p.y
        })

        line.attr({
            x1: p.x,
            y1: 350,
            x2: p.x,
            y2: p.y
        })

        polyline.move(p.x * .5, p.y * .5).transform({ rotation: p.y * 20})
    })
}

export const wave = {
    run
}