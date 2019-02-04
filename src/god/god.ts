export class God {
    private svgns: string
    private svg: Element
    public width: any
    public height: any
    private shapes: Array<any>

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
        return new God()
    }

    render() {
        this.svg.innerHTML = ''
        this.shapes.forEach(((shape: any) => {
            const el = document.createElementNS(this.svgns, shape.name)
            Object.keys(shape.attrs).forEach((key) => {
                el.setAttribute(key, shape.attrs[key])
            })
            this.svg.appendChild(el)
        }))
    }

    createShapes(shape: object) {
        this.shapes.push(shape)
        this.render()
    }

    select(obj:any){
        return document.querySelector(`#${obj}`)
    }

    getFormatNumber(num:number){
        const number = num
        return number.toString()
    }
}