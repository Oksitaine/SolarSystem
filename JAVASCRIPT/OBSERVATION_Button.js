var MERCURE = document.querySelector(".PlaneteMER");
var VENUS = document.querySelector(".PlaneteVEN");
var TERRE = document.querySelector(".PlaneteTER");
var MARS = document.querySelector(".PlaneteMAR");
var JUPITER = document.querySelector(".PlaneteJUP");
var SATURNE = document.querySelector(".PlaneteSAT");
var URANUS = document.querySelector(".PlaneteURA");
var NEPTUNE = document.querySelector(".PlaneteNEP");


/* ONCLICK */
var planetes = [  ".PlaneteMER",  ".PlaneteVEN",  ".PlaneteTER",  ".PlaneteMAR",  ".PlaneteJUP",  ".PlaneteSAT",  ".PlaneteURA",  ".PlaneteNEP"];
var orbiteAvant = [  ".MERCUREderriere",  ".VENUSderriere",  ".TERREderriere",  ".MARSderriere",  ".JUPITERderriere",  ".SATURNEderriere",  ".URANUSderriere",  ".NEPTUNEderriere"];
var orbiteArriere = [  ".MERCUREdevant",  ".VENUSdevant",  ".TERREdevant",  ".MARSdevant",  ".JUPITERdevant",  ".SATURNEdevant",  ".URANUSdevant",  ".NEPTUNEdevant"];
var TexteDistance = [  "#TexteMER",  "#TexteVEN",  "#TexteTER",  "#TexteMAR",  "#TexteJUP",  "#TexteSAT",  "#TexteURA",  "#TexteNEP"];

var Nom = [  "Mercure",  "Venus",  "Terre",  "Mars",  "Jupiter",  "Saturne",  "Uranus",  "Neptune"  ];
var PeriodeRE = [  "88 Jours",  "224 Jours",  "365,25 Jours",  "686 Jours",  "4 332 Jours",  "10 754 Jours",  "30 700 Jours",  "60 000 Jours"  ];
var PeriodeRO = [  "58,6 Jours",  "243 Jours",  "0,997 Jours",  "1 Jours",  "0,41 Jours",  "0,45 Jours",  "0,7 Jours",  "0,67 Jours"  ];
var VitesseOrbi = [  "47,3 km/s",  "35 km/s",  "29,8 km/s",  "24 km/s",  "13 km/s",  "9,6 km/s",  "6,8 km/s",  "5,4 km/s"  ];
var VitesseLiber = [  "4,25 km/s",  "10,5 km/s",  "11,18 km/s",  "5 km/s",  "60 km/s",  "35,5 km/s",  "21,3 km/s",  "23,5 km/s"  ];
var Gravite = [  "3,7 m/s^2",  "8,9 m/s^2",  "9,8 m/s^2",  "3,7 m/s^2",  "24,8 m/s^2",  "10,4 m/s^2",  "8,9 m/s^2",  "11,1 m/s^2"  ];
var Satelitte = [  "0",  "0",  "1",  "2",  "3",  "7",  "27",  "14"  ];
var TemperatureMAX = [  "427 °C",  "490 °C",  "56,7 °C",  "20 °C",  "-108 °C",  "-139 °C",  "-197 °C",  "-201 °C"  ];
var TemperatureMIN = [  "-183 °C",  "446 °C",  "-93,2 °C",  "-143 °C",  "-161 °C",  "-189 °C",  "-220 °C",  "-218 °C"  ];
var MASSE = [  "3x10^23 kg",  "5x10^24 kg",  "6x10^24 kg",  "6x10^23 kg",  "2x10^27 kg",  "6x10^26 kg",  "9x10^25 kg",  "1x10^26 kg"  ];

var Lien_Wikipedia = [
    "https://fr.wikipedia.org/wiki/Mercure_(plan%C3%A8te)",
    "https://fr.wikipedia.org/wiki/V%C3%A9nus_(plan%C3%A8te)",
    "https://fr.wikipedia.org/wiki/Terre",
    "https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)",
    "https://fr.wikipedia.org/wiki/Jupiter_(plan%C3%A8te)",
    "https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)",
    "https://fr.wikipedia.org/wiki/Uranus_(plan%C3%A8te)",
    "https://fr.wikipedia.org/wiki/Neptune_(plan%C3%A8te)",
]

function selectPlanet(planetIndex) {
    planetes.forEach((planetes, index) => {
        document.querySelector(planetes).style.color = index === planetIndex ? "rgb(0, 136, 255)" : "grey";
  });
}

function selectOrbiteAvant(OrbiteAvantIndex) {
    orbiteAvant.forEach((orbiteAvant, index) => {
        document.querySelector(orbiteAvant).style.opacity = index === OrbiteAvantIndex ? "1" : "0.3";
        document.querySelector(orbiteAvant).style.borderBottom = index === OrbiteAvantIndex ? "2px solid white" : "1px solid grey";
    });
}

function selectOrbiteArriere(orbiteArriereIndex) {
    orbiteArriere.forEach((orbiteArriere, index) => {
        document.querySelector(orbiteArriere).style.opacity = index === orbiteArriereIndex ? "1" : "0.3";
        document.querySelector(orbiteArriere).style.borderTop = index === orbiteArriereIndex ? "2px solid white" : "1px solid grey";
        document.querySelector(orbiteArriere).style.borderLeft = index === orbiteArriereIndex ? "2px solid white" : "1px solid grey";
        document.querySelector(orbiteArriere).style.borderRight = index === orbiteArriereIndex ? "2px solid white" : "1px solid grey";
    });
}

function selectTEXTE(TexteIndex) {
    TexteDistance.forEach((TexteDistance, index) => {
      if (index === TexteIndex) {
        document.querySelector(TexteDistance).style.opacity = "1";
      } else {
        document.querySelector(TexteDistance).style.opacity = "0";
      }
    });
  }


function tableau(INDEX){
    document.getElementById("PeriodeRE").innerHTML = PeriodeRE[INDEX];
    document.getElementById("PeriodeRO").innerHTML = PeriodeRO[INDEX];
    document.getElementById("VitesseOrbi").innerHTML = VitesseOrbi[INDEX];
    document.getElementById("VitesseLiber").innerHTML = VitesseLiber[INDEX];
    document.getElementById("Gravite").innerHTML = Gravite[INDEX];
    document.getElementById("Satelitte").innerHTML = Satelitte[INDEX];
    document.getElementById("TemperatureMAX").innerHTML = TemperatureMAX[INDEX];
    document.getElementById("TemperatureMIN").innerHTML = TemperatureMIN[INDEX];
    document.getElementById("MASSE").innerHTML = MASSE[INDEX];
    document.getElementById("recherche").innerHTML = Nom[INDEX];
    document.querySelector(".Source").style.visibility = "visible";
}

function Wikipedia(){
    window.open(Lien_Wikipedia[Lien],"_blank");
}

/* ONCLICK */

let Lien;

function ButtonMER() {
  selectPlanet(0);
  selectOrbiteAvant(0);
  selectOrbiteArriere(0);
  selectTEXTE(0);
  tableau(0);
  Lien = 0;
}

function ButtonVEN() {
  selectPlanet(1);
  selectOrbiteAvant(1);
  selectOrbiteArriere(1);
  selectTEXTE(1);
  tableau(1);
  Lien = 1;
}

function ButtonTER() {
  selectPlanet(2);
  selectOrbiteAvant(2);
  selectOrbiteArriere(2);
  selectTEXTE(2);
  tableau(2);
  Lien = 2;
}

function ButtonMAR() {
  selectPlanet(3);
  selectOrbiteAvant(3);
  selectOrbiteArriere(3);
  selectTEXTE(3);
  tableau(3);
  Lien = 3;
}

function ButtonJUP() {
  selectPlanet(4);
  selectOrbiteAvant(4);
  selectOrbiteArriere(4);
  selectTEXTE(4);
  tableau(4);
  Lien = 4;
}

function ButtonSAT() {
  selectPlanet(5);
  selectOrbiteAvant(5);
  selectOrbiteArriere(5);
  selectTEXTE(5);
  tableau(5);
  Lien = 5;
}

function ButtonURA() {
  selectPlanet(6);
  selectOrbiteAvant(6);
  selectOrbiteArriere(6);
  selectTEXTE(6);
  tableau(6);
  Lien = 6;
}

function ButtonNEP() {
  selectPlanet(7);
  selectOrbiteAvant(7);
  selectOrbiteArriere(7);
  selectTEXTE(7);
  tableau(7);
  Lien = 7;
}

/* ONMOUSEENTER et ONMOUSELEAVE */

function ButtonMERON(){
    if(MERCURE.style.color != "rgb(0, 136, 255)"){
        MERCURE.style.color = "white";
    }
}

function ButtonMEROFF(){
    if(MERCURE.style.color != "rgb(0, 136, 255)"){
        MERCURE.style.color = "grey";
    }
}

function ButtonVENON(){
    if(VENUS.style.color != "rgb(0, 136, 255)"){
        VENUS.style.color = "white";
    }
}

function ButtonVEROFF(){
    if(VENUS.style.color != "rgb(0, 136, 255)"){
        VENUS.style.color = "grey";
    }
}

function ButtonTERON(){
    if(TERRE.style.color != "rgb(0, 136, 255)"){
        TERRE.style.color = "white";
    }
}

function ButtonTEROFF(){
    if(TERRE.style.color != "rgb(0, 136, 255)"){
        TERRE.style.color = "grey";
    }
}

function ButtonMARON(){
    if(MARS.style.color != "rgb(0, 136, 255)"){
        MARS.style.color = "white";
    }
}

function ButtonMAROFF(){
    if(MARS.style.color != "rgb(0, 136, 255)"){
        MARS.style.color = "grey";
    }
}

function ButtonJUPON(){
    if(JUPITER.style.color != "rgb(0, 136, 255)"){
        JUPITER.style.color = "white";
    }
}

function ButtonJUPOFF(){
    if(JUPITER.style.color != "rgb(0, 136, 255)"){
        JUPITER.style.color = "grey";
    }
}

function ButtonSATON(){
    if(SATURNE.style.color != "rgb(0, 136, 255)"){
        SATURNE.style.color = "white";
    }
}

function ButtonSATOFF(){
    if(SATURNE.style.color != "rgb(0, 136, 255)"){
        SATURNE.style.color = "grey";
    }
}

function ButtonURAON(){
    if(URANUS.style.color != "rgb(0, 136, 255)"){
        URANUS.style.color = "white";
    }
}

function ButtonURAOFF(){
    if(URANUS.style.color != "rgb(0, 136, 255)"){
        URANUS.style.color = "grey";
    }
}

function ButtonNEPON(){
    if(NEPTUNE.style.color != "rgb(0, 136, 255)"){
        NEPTUNE.style.color = "white";
    }
}

function ButtonNEPOFF(){
    if(NEPTUNE.style.color != "rgb(0, 136, 255)"){
        NEPTUNE.style.color = "grey";
    }
}