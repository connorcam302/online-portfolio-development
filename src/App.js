import React from 'react'
import Sketch from "react-p5";

import clogo from './img/c_logo.png'
import javalogo from './img/java_logo.png'
import jslogo from './img/js_logo.png'
import matlablogo from './img/matlab_logo.png'
import mysqllogo from './img/mysql_logo.png'
import phplogo from './img/php_logo.png'
import pilogo from './img/pi_logo.png'
import pythonlogo from './img/python_logo.png'
import reactlogo from './img/react_logo.png'
import rubylogo from './img/ruby_logo.png'
import sqlitelogo from './img/sqlite_logo.png'
import tailwindlogo from './img/tailwind_logo.png'

const logoArray = new Array();

let canvWidth = 1500;
let canvHeight = 700;

let logoWidth = 200;
let logoHeight = 200;

let beginY=900
let beginX=(canvWidth*0.9)-(logoWidth/2);

let endY = 0;
let endX = 0;

let distX;
let distY; 

let exponent = 1/4

let x = 0;
let y = 0;

let step = 0.01;
let pct = 0.0;

let speed;

let velx;
let vely;


export default (props) => {
const setup = (p5, canvasParentRef) => {
  // use parent to render the canvas in this ref
  // (without that p5 will render the canvas outside of your component)
  p5.createCanvas(canvWidth, canvHeight).parent(canvasParentRef);

  logoArray.push(p5.loadImage(clogo));
  logoArray.push(p5.loadImage(javalogo));
  logoArray.push(p5.loadImage(jslogo));
  logoArray.push(p5.loadImage(matlablogo));
  logoArray.push(p5.loadImage(mysqllogo));
  logoArray.push(p5.loadImage(phplogo));
  logoArray.push(p5.loadImage(pilogo));
  logoArray.push(p5.loadImage(pythonlogo));
  logoArray.push(p5.loadImage(reactlogo));
  logoArray.push(p5.loadImage(rubylogo));
  logoArray.push(p5.loadImage(sqlitelogo));
  logoArray.push(p5.loadImage(tailwindlogo));

  distX = endX - beginX;
  distY = endY - beginY;
};

const draw = (p5) => {
  p5.background(0)
  // for(let i = 0; i < logoArray.length;i++){
  //   p5.image(logoArray[i],i*100,y,100,100)
  // }
  pct+=step
  speed = -1*(pct**2)+1

  velx=x-beginX
  vely=y-beginY

  if (pct < 1.0) {
    x = beginX + (pct * distX);
    y = beginY + (pct**exponent * distY);
    console.log("x + " + velx)
    console.log("y + " + vely)
  }
  p5.image(logoArray[0],x,y,logoWidth,logoHeight)

};

return <Sketch setup={setup} draw={draw} />;
};