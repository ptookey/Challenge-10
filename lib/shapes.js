class Shape {
    constructor(letters, textColor, shapeColor) {
        this.letters = letters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() { }
}

class Circle extends Shape {
    constructor(letters, textColor, shapeColor) {
        super(letters, textColor, shapeColor)
    }
    render() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    
    <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
    
    </svg>`}
}

class Triangle extends Shape {
    constructor(letters, textColor, shapeColor) {
        super(letters, textColor, shapeColor)
    }
    render() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150,10 240,190 60,190" fill="${this.shapeColor}" class="triangle" />
    
    <text x="150" y="130" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
    
    </svg>`}
}

class Square extends Shape {
    constructor(letters, textColor, shapeColor) {
        super(letters, textColor, shapeColor)
    }
    render() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points= "60,10 240,10 240,190 60,190" fill="${this.shapeColor}" class="square" />
    
    <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>
    
    </svg>`}
}

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;