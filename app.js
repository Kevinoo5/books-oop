class Shape {
    constructor(name, sides, sideLength) {
        this.name = name
        this.sides = sides
        this.sideLength = sideLength
    }
    calcPerimeter(){
        return this.sideLength * this.sides
    }
}
let square = new Shape("square", 4, 5)
let triangle = new Shape("triangle", 3, 3)

console.log(square)
console.log(triangle)
console.log(square.calcPerimeter())
console.log(triangle.calcPerimeter())