const fs=require("fs");
const inquirer=require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const Circle = require('./lib/shapes/circle');
const Triangle = require('./lib/shapes/triangle');
const Square = require('./lib/shapes/square');

const questions=[{type:"maxlength-input", name:"letters",message:"Choose up to three Letters to use", maxLength:"3"},{type:"input", name:"textColor",message:"Chose a text color to use"},{type:"list",name:"shape",message:"Choose a shape to use",choices:["Square","Triangle","Circle"]},{type:"input", name:"shapeColor",message:"Chose a shape color to use"},]

inquirer.prompt(questions).then(
   response=>{
      if (response.shape == "Square"){
         const svg = new Square (response.letters, response.textColor, response.shapeColor);
         return svg.render();
      }  else if (response.shape == "Circle"){
         const svg = new Circle (response.letters, response.textColor, response.shapeColor);
         return svg.render();
      }  else if (response.shape == "Triangle"){
         const svg = new Triangle (response.letters, response.textColor, response.shapeColor);
         return svg.render();
      }
   }).then(response=>{
      createLogo('logo.svg',response);
   });


function createLogo(fileName, svg){

    fs.writeFile(fileName,svg,(error)=>{
        if(error){
           console.log(error);
        }else{
           console.log("Svg file generated successfully!")
        }
      })
}
