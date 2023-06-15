const fs=require("fs");
const inquirer=require("inquirer");

const questions=[{type:"input", name:"letters",message:"Choose up to three Letters to use"},{type:"input", name:"textColor",message:"Chose a text color to use"},{type:"list",name:"shape",message:"Choose a shape to use",choices:["Square","Triangle","Circle"]},{type:"input", name:"shapeColor",message:"Chose a shape color to use"},]
