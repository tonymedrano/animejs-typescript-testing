/*
 * Filename: /Users/tonymedrano/Desktop/DEVELOPMENT/animejs-typescript-testing/src/components/god/god-wave.ts
 * Path: /Users/tonymedrano/Desktop/DEVELOPMENT/animejs-typescript-testing
 * Created Date: Tuesday, October 30th 2018, 1:42:40 pm
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */



export class Wave {
    private svgns: string
    private svg: Element
    public width: any
    public height: any
    public shapes: Array<any>

    constructor() {
        this.svgns = 'http://www.w3.org/2000/svg'
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.svg = null
        this.shapes = []

        this.svg = document.createElementNS(this.svgns, 'svg')
        this.svg.classList.add('canvas')
        this.svg.setAttribute('width', this.width)
        this.svg.setAttribute('height', this.height)
        document.querySelector('body').appendChild(this.svg)
    }

    static create() {
        return new Wave()
    }
}