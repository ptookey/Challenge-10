class Shape {
    // Instantiates a BlogPost and validates input.
    constructor(letters, textColor, shape, shapeColor) {

        if (letters.length > 3) {
            throw new Error('Must contain only up to 3 characters');
        }
        this.letters = letters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.logo = ''

        if (shape==='Circle'){
            const logo = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />
            
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${textColor}">${letters}</text>`
            this.logo = logo
        } else if (shape==='Triangle'){
            const logo = `<polygon points="150,10 240,190 60,190" fill="${shapeColor}" class="triangle" />
            
            <text x="150" y="130" font-size="45" text-anchor="middle" fill="${textColor}">${letters}</text>`
            this.logo = logo
        } else if (shape==='Square'){
            const logo = `<polygon points= "60,10 240,10 240,190 60,190" fill="${shapeColor}" class="square" />
            
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${textColor}">${letters}</text>`
            this.logo = logo
        }
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.logo}
            </svg>`
    }
}

module.exports = Shape;

/*
if (shape === 'Circle') {
    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
    
    <text x="150" y="125" font-size="70" text-anchor="middle" fill="${textColor}">${letters}</text>
    
    </svg>`
} else if (shape === 'Triangle') {
    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150,10 240,190 60,190" fill="${shapeColor}" class="triangle" />
    
    <text x="150" y="130" font-size="45" text-anchor="middle" fill="${textColor}">${letters}</text>
    
    </svg>`
} else if (shape === 'Square') {
    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points= "60,10 240,10 240,190 60,190" fill="${shapeColor}" class="square" />
    
    <text x="150" y="125" font-size="70" text-anchor="middle" fill="${textColor}">${letters}</text>
    
    </svg>`
}
*/
