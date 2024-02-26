// For this i am installing nodejs package it is 'greet-by-time' if you want to run this install this package.
//command for the installation 'npm i greet-by-time'
const greet = require("greet-by-time");
const hour = new Date().getHours();
console.log(hour);
const myhour=20;
console.log(greet("kmss", hour,myhour));