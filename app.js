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

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.name = "square"
        this.sides = 4
        this.sideLength = sideLength
    }
    calcArea(){
        return this.sideLength ** 2
    }
}

let square = new Square(5)
console.log(square)
console.log(square.calcPerimeter())
console.log(square.calcArea())


