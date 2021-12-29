var hourA = document.getElementById("12am");
var hourB = document.getElementById("1am");
var hourC = document.getElementById("2am");
var hourD = document.getElementById("3am");
var hourE = document.getElementById("4am");
var hourF = document.getElementById("5am");
var hourG = document.getElementById("6am");
var hourH = document.getElementById("7am");
var hourI = document.getElementById("8am");
var hourJ = document.getElementById("9am");
var hourK = document.getElementById("10am");
var hourL = document.getElementById("11am");
var hourM = document.getElementById("12pm");
var hourN = document.getElementById("1pm");
var hourO = document.getElementById("2pm");
var hourP = document.getElementById("3pm");
var hourQ = document.getElementById("4pm");
var hourR = document.getElementById("5pm");
var hourS = document.getElementById("6pm");
var hourT = document.getElementById("7pm");
var hourU = document.getElementById("8pm");
var hourV = document.getElementById("9pm");
var hourW = document.getElementById("10pm");
var hourX = document.getElementById("11pm");

var allHours = [hourA,hourB,hourC,hourD,hourE,hourF,hourG,hourH,hourI,hourJ,hourK,hourL,
    hourM,hourN,hourO,hourP,hourQ,hourR,hourS,hourT,hourU,hourV,hourW,hourX];


var saveBtns = document.getElementsByClassName("saveBtn")
var time = moment().format("H");
console.log(time);
var today = moment().format("MMM Do, YYYY");
console.log(today);
$("#currentDay").text(today);

for(var i = 0; i < allHours.length; i++){
    if(i<time){
        allHours[i].classList.add('past')
    }
    else if(i==time){
        allHours[i].classList.add('present')
    }
    else {
        allHours[i].classList.add('future')
    }
}

for (var i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", function () {
        console.log("saved");
        localStorage.setItem("hourA", hourA.value);
        localStorage.setItem("hourB", hourB.value);
        localStorage.setItem("hourC", hourC.value);
        localStorage.setItem("hourD", hourD.value);
        localStorage.setItem("hourE", hourE.value);
        localStorage.setItem("hourF", hourF.value);
        localStorage.setItem("hourG", hourG.value);
        localStorage.setItem("hourH", hourH.value);
        localStorage.setItem("hourI", hourI.value);
        localStorage.setItem("hourJ", hourJ.value);
        localStorage.setItem("hourK", hourK.value);
        localStorage.setItem("hourL", hourL.value);
        localStorage.setItem("hourM", hourM.value);
        localStorage.setItem("hourN", hourN.value);
        localStorage.setItem("hourO", hourO.value);
        localStorage.setItem("hourP", hourP.value);
        localStorage.setItem("hourQ", hourQ.value);
        localStorage.setItem("hourR", hourR.value);
        localStorage.setItem("hourS", hourS.value);
        localStorage.setItem("hourT", hourT.value);
        localStorage.setItem("hourU", hourU.value);
        localStorage.setItem("hourV", hourV.value);
        localStorage.setItem("hourW", hourW.value);
        localStorage.setItem("hourX", hourX.value);

    });
}
hourA.value = localStorage.getItem("hourA");
hourB.value = localStorage.getItem("hourB");
hourC.value = localStorage.getItem("hourC");
hourD.value = localStorage.getItem("hourD");
hourE.value = localStorage.getItem("hourE");
hourF.value = localStorage.getItem("hourF");
hourG.value = localStorage.getItem("hourG");
hourH.value = localStorage.getItem("hourH");
hourI.value = localStorage.getItem("hourI");
hourJ.value = localStorage.getItem("hourJ");
hourK.value = localStorage.getItem("hourK");
hourL.value = localStorage.getItem("hourL");
hourM.value = localStorage.getItem("hourM");
hourN.value = localStorage.getItem("hourN");
hourO.value = localStorage.getItem("hourO");
hourP.value = localStorage.getItem("hourP");
hourQ.value = localStorage.getItem("hourQ");
hourR.value = localStorage.getItem("hourR");
hourS.value = localStorage.getItem("hourS");
hourT.value = localStorage.getItem("hourT");
hourU.value = localStorage.getItem("hourU");
hourV.value = localStorage.getItem("hourV");
hourW.value = localStorage.getItem("hourW");
hourX.value = localStorage.getItem("hourX");