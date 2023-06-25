class Shape {
    constructor(letters, textColor, shapeColor) {
        this.letters = letters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        if (letters.length > 3) {
            throw new Error(`Can only Generate logo's up to three letters`);
        }
    }
    render() {
        throw new Error('Child class must implement a render() method.');
     }
}
module.exports = Shape;