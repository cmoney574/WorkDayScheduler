var hourA = document.getElementById("#12am");
var hourB = document.getElementById("#1am");
var hourC = document.getElementById("#2am");
var hourD = document.getElementById("#3am");
var hourE = document.getElementById("#4am");
var hourF = document.getElementById("#5am");
var hourG = document.getElementById("#6am");
var hourH = document.getElementById("#7am");
var hourI = document.getElementById("#8am");
var hourJ = document.getElementById("#9am");
var hourK = document.getElementById("#10am");
var hourL = document.getElementById("#11am");
var hourM = document.getElementById("#12pm");
var hourN = document.getElementById("#1pm");
var hourO = document.getElementById("#2pm");
var hourP = document.getElementById("#3pm");
var hourQ = document.getElementById("#4pm");
var hourR = document.getElementById("#5pm");
var hourS = document.getElementById("#6pm");
var hourT = document.getElementById("#7pm");
var hourU = document.getElementById("#8pm");
var hourV = document.getElementById("#9pm");
var hourW = document.getElementById("#10pm");
var hourX = document.getElementById("#11pm");

var time = moment().format("hh");
console.log(time);
var today = moment().format("MMM Do, YYYY");
console.log(today);
$("#currentDay").text(today);