//jshint esversion:6

var superheroes = require("superheroes");
const supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();


console.log(mySuperheroName + "  VS  " + mySupervillainName);