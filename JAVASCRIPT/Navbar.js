var NAVBAR = document.getElementById("NAVBARR");

var Naissance = document.getElementById("Naissance");

var NaissanceDeUniverse = document.getElementById("NaissanceDeUniverse");
var Observation = document.getElementById("Observation");
var OBSER = document.getElementById("OBSER");

var NSS = document.getElementById("NotreSystemeSolar");
var Quiz = document.getElementById("Quiz")

NaissanceDeUniverse.addEventListener('mouseenter', (event) => {
    NAVBAR.style.height = "280px";
    Naissance.style.opacity = "1";
    Naissance.style.visibility = "visible";
})

Observation.addEventListener('mouseenter', (event) => {
    NAVBAR.style.height = "145px";
    OBSER.style.opacity = "1";
    OBSER.style.visibility = "visible";
})

NSS.addEventListener('mouseenter', (event) => {
    NAVBAR.style.height = "145px";
    OBSER.style.opacity = "1";
    OBSER.style.visibility = "visible";
})

Quiz.addEventListener('mouseenter', (event) => {
    NAVBAR.style.height = "145px";
    OBSER.style.opacity = "1";
    OBSER.style.visibility = "visible";
})



function leave(){
    NAVBAR.style.height = "0vh";
    Naissance.style.opacity = "0";
    Naissance.style.visibility = "hidden";
}

function TRANSITION(e){
    document.querySelector(".BLOC1F").classList.add("animate3");
    document.querySelector(".BLOC2F").classList.add("animate2");
    document.querySelector(".BLOC3F").classList.add("animate");
    document.querySelector(".BLOC4F").classList.add("animate2");
    document.querySelector(".BLOC5F").classList.add("animate3");


    setTimeout(function() {
        window.location.href = e;
      }, 1500);
}