import React from 'react'
import Sketch from "react-p5";

import clogo from '../img/c_logo.png'
import javalogo from '../img/java_logo.png'
import jslogo from '../img/js_logo.png'
import matlablogo from '../img/matlab_logo.png'
import mysqllogo from '../img/mysql_logo.png'
import phplogo from '../img/php_logo.png'
import pilogo from '../img/pi_logo.png'
import pythonlogo from '../img/python_logo.png'
import reactlogo from '../img/react_logo.png'
import rubylogo from '../img/ruby_logo.png'
import sqlitelogo from '../img/sqlite_logo.png'
import tailwindlogo from '../img/tailwind_logo.png'

const logoArray = new Array();

let canvWidth = 1400;
let canvHeight = 700;
 
let logoWidth = 100;
let logoHeight = 100;

let gap = 110
let wait = 0.3

let beginY=1200
let beginX=(canvWidth*0.9)-(logoWidth/2);

let c_endY = 0;
let c_endX = gap*0;
let c_distX = c_endX - beginX;
let c_distY = c_endY - beginY;
let c_exponent = 1/4
let c_x = 0;
let c_y = 0;
let c_step = 0.01;
let c_pct = 0.01;

let java_endY = 0;
let java_endX = gap*1;
let java_distX = java_endX - beginX;
let java_distY = java_endY - beginY;
let java_exponent = 1/4
let java_x = beginX;
let java_y = beginY;
let java_step = 0.01;
let java_pct = 0.01;

let js_endY = 0;
let js_endX = gap*2;
let js_distX = js_endX - beginX;
let js_distY = js_endY - beginY;
let js_exponent = 1/4
let js_x = beginX;
let js_y = beginY;
let js_step = 0.01;
let js_pct = 0.01;

let matlab_endY = 0;
let matlab_endX = gap*3;
let matlab_distX = matlab_endX - beginX;
let matlab_distY = matlab_endY - beginY;
let matlab_exponent = 1/4
let matlab_x = beginX;
let matlab_y = beginY;
let matlab_step = 0.01;
let matlab_pct = 0.01;

let mysql_endY = 0;
let mysql_endX = gap*4;
let mysql_distX = mysql_endX - beginX;
let mysql_distY = mysql_endY - beginY;
let mysql_exponent = 1/4
let mysql_x = beginX;
let mysql_y = beginY;
let mysql_step = 0.01;
let mysql_pct = 0.01;

let php_endY = 0;
let php_endX = gap*5;
let php_distX = php_endX - beginX;
let php_distY = php_endY - beginY;
let php_exponent = 1/4
let php_x = beginX;
let php_y = beginY;
let php_step = 0.01;
let php_pct = 0.01;

let pi_endY = 0;
let pi_endX = gap*6;
let pi_distX = pi_endX - beginX;
let pi_distY = pi_endY - beginY;
let pi_exponent = 1/4
let pi_x = beginX;
let pi_y = beginY;
let pi_step = 0.01;
let pi_pct = 0.01;

let python_endY = 0;
let python_endX = gap*7;
let python_distX = python_endX - beginX;
let python_distY = python_endY - beginY;
let python_exponent = 1/4
let python_x = beginX;
let python_y = beginY;
let python_step = 0.01;
let python_pct = 0.01;

let react_endY = 0;
let react_endX = gap*8;
let react_distX = react_endX - beginX;
let react_distY = react_endY - beginY;
let react_exponent = 1/4
let react_x = beginX;
let react_y = beginY;
let react_step = 0.01;
let react_pct = 0.01;

let ruby_endY = 0;
let ruby_endX = gap*9;
let ruby_distX = ruby_endX - beginX;
let ruby_distY = ruby_endY - beginY;
let ruby_exponent = 1/4
let ruby_x = beginX;
let ruby_y = beginY;
let ruby_step = 0.01;
let ruby_pct = 0.01;

let sqlite_endY = 0;
let sqlite_endX = gap*10;
let sqlite_distX = sqlite_endX - beginX;
let sqlite_distY = sqlite_endY - beginY;
let sqlite_exponent = 1/4
let sqlite_x = beginX;
let sqlite_y = beginY;
let sqlite_step = 0.01;
let sqlite_pct = 0.01;

let tailwind_endY = 0;
let tailwind_endX = gap*11;
let tailwind_distX = tailwind_endX - beginX;
let tailwind_distY = tailwind_endY - beginY;
let tailwind_exponent = 1/4
let tailwind_x = beginX;
let tailwind_y = beginY;
let tailwind_step = 0.01;
let tailwind_pct = 0.01;


export default (props) => {
const setup = (p5, canvasParentRef) => {
  // use parent to render the canvas in this ref
  // (without that p5 will render the canvas outside of your component)

  p5.createCanvas(canvWidth, canvHeight);


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
};

const draw = (p5) => {
  p5.background(74, 74, 74);
  // for(let i = 0; i < logoArray.length;i++){
  //   p5.image(logoArray[i],i*100,y,100,100)
  // }
  //c_pct+= c_step*((-1*c_pct**2)+1)

  if (c_pct < 1.0) {
    c_pct+= c_step*((-1*c_pct**2)+1)
    c_x = beginX + (c_pct * c_distX);
    c_y = beginY + (c_pct**c_exponent * c_distY);
  }

  if (java_pct < 1.0 && c_pct > wait) {
    java_pct+= java_step*((-1*java_pct**2)+1)
    java_x = beginX + (java_pct * java_distX);
    java_y = beginY + (java_pct**java_exponent * java_distY);
  }

  if (js_pct < 1.0  && java_pct > wait) {
    js_pct+= js_step*((-1*js_pct**2)+1)
    js_x = beginX + (js_pct * js_distX);
    js_y = beginY + (js_pct**js_exponent * js_distY);
  }

  if (matlab_pct < 1.0 && js_pct > wait) {
      matlab_pct+= matlab_step*((-1*matlab_pct**2)+1)
      matlab_x = beginX + (matlab_pct * matlab_distX);
      matlab_y = beginY + (matlab_pct**matlab_exponent * matlab_distY);
    }

  if (mysql_pct < 1.0 && matlab_pct > wait) {
    mysql_pct+= mysql_step*((-1*mysql_pct**2)+1)
    mysql_x = beginX + (mysql_pct * mysql_distX);
    mysql_y = beginY + (mysql_pct**mysql_exponent * mysql_distY);
  }

  if (php_pct < 1.0 && mysql_pct > wait) {
    php_pct+= php_step*((-1*php_pct**2)+1)
    php_x = beginX + (php_pct * php_distX);
    php_y = beginY + (php_pct**php_exponent * php_distY);
  }

  if (pi_pct < 1.0 && php_pct > wait) {
    pi_pct+= pi_step*((-1*pi_pct**2)+1)
    pi_x = beginX + (pi_pct * pi_distX);
    pi_y = beginY + (pi_pct**pi_exponent * pi_distY);
  }

  if (python_pct < 1.0 && pi_pct > wait) {
    python_pct+= python_step*((-1*python_pct**2)+1)
    python_x = beginX + (python_pct * python_distX);
    python_y = beginY + (python_pct**python_exponent * python_distY);
  }

  if (react_pct < 1.0 && python_pct > wait) {
    react_pct+= react_step*((-1*react_pct**2)+1)
    react_x = beginX + (react_pct * react_distX);
    react_y = beginY + (react_pct**react_exponent * react_distY);
  }

  if (ruby_pct < 1.0 && react_pct > wait) {
    ruby_pct+= ruby_step*((-1*ruby_pct**2)+1)
    ruby_x = beginX + (ruby_pct * ruby_distX);
    ruby_y = beginY + (ruby_pct**ruby_exponent * ruby_distY);
  }

  if (sqlite_pct < 1.0 && ruby_pct > wait) {
    sqlite_pct+= sqlite_step*((-1*sqlite_pct**2)+1)
    sqlite_x = beginX + (sqlite_pct * sqlite_distX);
    sqlite_y = beginY + (sqlite_pct**sqlite_exponent * sqlite_distY);
  }

  if (tailwind_pct < 1.0 && sqlite_pct > wait) {
    tailwind_pct+= tailwind_step*((-1*tailwind_pct**2)+1)
    tailwind_x = beginX + (tailwind_pct * tailwind_distX);
    tailwind_y = beginY + (tailwind_pct**tailwind_exponent * tailwind_distY);
  }

  p5.image(logoArray[0],c_x,c_y,logoWidth,logoHeight)
  p5.image(logoArray[1],java_x,java_y,logoWidth,logoHeight)
  p5.image(logoArray[2],js_x,js_y,logoWidth,logoHeight)
  p5.image(logoArray[3],matlab_x,matlab_y,logoWidth,logoHeight)
  p5.image(logoArray[4],mysql_x,mysql_y,logoWidth,logoHeight)
  p5.image(logoArray[5],php_x,php_y,logoWidth,logoHeight)
  p5.image(logoArray[6],pi_x,pi_y,logoWidth,logoHeight)
  p5.image(logoArray[7],python_x,python_y,logoWidth,logoHeight)
  p5.image(logoArray[8],react_x,react_y,logoWidth,logoHeight)
  p5.image(logoArray[9],ruby_x,ruby_y,logoWidth,logoHeight)
  p5.image(logoArray[10],sqlite_x,sqlite_y,logoWidth,logoHeight)
  p5.image(logoArray[11],tailwind_x,tailwind_y,logoWidth,logoHeight)
};

    return <Sketch setup={setup} draw={draw} />;
};