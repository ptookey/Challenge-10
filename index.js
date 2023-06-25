const fs=require("fs");
const inquirer=require("inquirer");
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

const questions=[{type:"input", name:"letters",message:"Choose up to three Letters to use"},{type:"input", name:"textColor",message:"Chose a text color to use"},{type:"list",name:"shape",message:"Choose a shape to use",choices:["Square","Triangle","Circle"]},{type:"input", name:"shapeColor",message:"Chose a shape color to use"},]

inquirer.prompt(questions).then(response=>{new Shape(response.letters, response.textColor, response.shape, response.shapeColor).render()}).then(response=>{console.log(response)}).then(response=>{createLogo('logo.svg',response)});


function createLogo(fileName, svg){

    fs.writeFile(fileName,svg,(error)=>{
        if(error){
           console.log(error);
        }else{
           console.log("Svg file generated successfully!")
        }
      })
}
