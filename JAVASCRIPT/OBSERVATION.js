/* ----------------------------------------------- Systeme Solaire CANVAS ------------------------------------------------ */
/* --------- VARIABLE --------- */

var canvas = document.getElementById('SystemSolaire');
var ctx = canvas.getContext('2d');

var gradient = ctx.createRadialGradient(750, 400, 0, 750, 400, 110);
gradient.addColorStop(0, "transparent");
gradient.addColorStop(0.5, "#FEC23C");
gradient.addColorStop(1, "transparent");

var M = 0;
var V = 0;
var t = 0;
var MA = 0;
var J = 0;
var S = 0;
var U = 0;
var N = 0;

var body = document.body;
var wi;
var hei;

var tourM = 0;
var tourV = 0;
var tourT = 0;
var tourMA = 0;
var tourJ = 0;
var tourS = 0;
var tourU = 0;
var tourN = 0;

var testM = false;
var testV = false;
var testT = false;
var testMA = false;
var testJ = false;
var testS = false;
var testU = false;
var testN = false;

var x;
var y;

var mercure = new Image();
mercure.src = '../Ressource/Image/p-mercury.png';

var venus = new Image();
venus.src = '../Ressource/Image/p-venus.png';

var terre = new Image();
terre.src = '../Ressource/Image/p-earth.png';

var mars = new Image();
mars.src = '../Ressource/Image/p-mars.png';

var jupiter = new Image();
jupiter.src = '../Ressource/Image/p-jupiter.png';

var saturne = new Image();
saturne.src = '../Ressource/Image/p-saturn.png';

var uranus = new Image();
uranus.src = '../Ressource/Image/p-uranus.png';

var neptune = new Image();
neptune.src = '../Ressource/Image/p-neptune.png';

var image = new Image();
image.onload = animation;
image.src = '../Ressource/Image/sun.png';

ctx.strokeStyle = 'grey';

/* --------- FONCTION GENERALE --------- */

function animation(){
    dessin();
    update();
    requestAnimationFrame(animation);
}

function dessin(){
    HEI = body.offsetHeight;
    WID = body.offsetWidth;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    SOLEIL();

    document.getElementById("MERCURE").style.left = (WID/2 - mercure.width/2 + 100*Math.cos(M))+"px";
    document.getElementById("MERCURE").style.bottom = (HEI/2 - mercure.height/2 + 25*Math.sin(M))+"px"; 

    if (tourM <= M && M <= Math.PI + tourM){
        testM = false;
        document.getElementById("MERCURE").style.zIndex = "-20";
    } else {
        if( testM == false){
            document.getElementById("MERCURE").style.zIndex = "20";
            tourM += 2*Math.PI;
            testM = true;
        }
    }

    document.getElementById("VENUS").style.left = (WID/2 - venus.width/2 + 132*Math.cos(V))+"px";
    document.getElementById("VENUS").style.bottom = (HEI/2 - venus.height/2 + 37*Math.sin(V))+"px"; 

    if (tourV <= V && V <= Math.PI + tourV){
        testV = false;
        document.getElementById("VENUS").style.zIndex = "-30";
    } else {
        if( testV == false){
            document.getElementById("VENUS").style.zIndex = "30";
            tourV += 2*Math.PI;
            testV = true;
        }
    }

    document.getElementById("TERRE").style.left = (WID/2 - terre.width/2 + 190*Math.cos(t))+"px";
    document.getElementById("TERRE").style.bottom = (HEI/2 - terre.height/2 + 50*Math.sin(t))+"px"; 

    if (tourT <= t && t <= Math.PI + tourT){
        testT = false;
        document.getElementById("TERRE").style.zIndex = "-40";
    } else {
        if( testT == false){
            document.getElementById("TERRE").style.zIndex = "40";
            tourT += 2*Math.PI;
            testT = true;
        }
    }

    document.getElementById("MARS").style.left = (WID/2 - mars.width/2 + 250*Math.cos(MA))+"px";
    document.getElementById("MARS").style.bottom = (HEI/2 - mars.height/2 + 65*Math.sin(MA))+"px"; 

    if (tourMA <= MA && MA <= Math.PI + tourMA){
        testMA = false;
        document.getElementById("MARS").style.zIndex = "-50";
    } else {
        if( testMA == false){
            document.getElementById("MARS").style.zIndex = "50";
            tourMA += 2*Math.PI;
            testMA = true;
        }
    }

    document.getElementById("JUPITER").style.left = (WID/2 - jupiter.width/2 + 325*Math.cos(J))+"px";
    document.getElementById("JUPITER").style.bottom = (HEI/2 - jupiter.height/2 + 80*Math.sin(J))+"px"; 

    if (tourJ <= J && J <= Math.PI + tourJ){
        testJ = false;
        document.getElementById("JUPITER").style.zIndex = "-60";
    } else {
        if( testJ == false){
            document.getElementById("JUPITER").style.zIndex = "60";
            tourJ += 2*Math.PI;
            testJ = true;
        }
    }

    document.getElementById("SATURNE").style.left = (WID/2 - saturne.width/2 + 450*Math.cos(S))+"px";
    document.getElementById("SATURNE").style.bottom = (HEI/2 - saturne.height/2 + 125*Math.sin(S))+"px"; 

    if (tourS <= S && S <= Math.PI + tourS){
        testS = false;
        document.getElementById("SATURNE").style.zIndex = "-70";
    } else {
        if( testS == false){
            document.getElementById("SATURNE").style.zIndex = "70";
            tourS += 2*Math.PI;
            testS = true;
        }
    }

    document.getElementById("URANUS").style.left = (WID/2 - uranus.width/2 + 600*Math.cos(U))+"px";
    document.getElementById("URANUS").style.bottom = (HEI/2 - uranus.height/2 + 175*Math.sin(U))+"px"; 

    if (tourU <= U && U <= Math.PI + tourU){
        testU = false;
        document.getElementById("URANUS").style.zIndex = "-80";
    } else {
        if( testU == false){
            document.getElementById("URANUS").style.zIndex = "80";
            tourU += 2*Math.PI;
            testU = true;
        }
    }

    document.getElementById("NEPTUNE").style.left = (WID/2 - neptune.width/2 + 700*Math.cos(N))+"px";
    document.getElementById("NEPTUNE").style.bottom = (HEI/2 - neptune.height/2 + 200*Math.sin(N))+"px"; 

    if (tourN <= N && N <= Math.PI + tourN){
        testN = false;
        document.getElementById("NEPTUNE").style.zIndex = "-90";
    } else {
        if( testN == false){
            document.getElementById("NEPTUNE").style.zIndex = "90";
            tourN += 2*Math.PI;
            testN = true;
        }
    }
}

function update(){
    var NET = 0.00005;
    N += NET;
    t += NET*165;
    V += NET*267;
    M += NET*165*4,2;
    MA += NET*75;
    J += NET*13;
    S += NET*7;
    U += NET*2;
}

/* --------- FONCTION AUTRE --------- */

function SOLEIL(){
    ctx.fillStyle = gradient;
    ctx.fillRect(200, 200, 750 - image.width/2, 400 - image.height/2);
    ctx.drawImage(image, 750 - image.width/2, 400 - image.height/2);
}