
let bPlayStart = document.getElementById("playStart");
let theStartWindow = document.getElementById("startWindow");
let timerBox = document.getElementById("timer");
let bRulesStart = document.getElementById("rulesStart");
let theRulesWindow = document.getElementById("rulesWindow");
let bPlayRules =  document.getElementById("playRules");
let bBackRules =  document.getElementById("backRules");
let startWindow =  document.getElementById("startWindow");
let bgamewindow =  document.getElementById("gamewindow");
let bstartBack =  document.getElementById("startBack");
let orderslist =   document.getElementById("orderslist");
let pastriesmateriallist = document.getElementById("pastriesmaterial");
var countdownobj  = document.getElementById("countdown") ;
var loseWindows  = document.getElementById("loseWindow") ;
var winWindows  = document.getElementById("winWindow") ;






 var startBack1  = document.getElementById("startBack1") ;
 var playLose1  = document.getElementById("playLose1") ;
 var startBack2  = document.getElementById("startBack2") ;
 var playLose2  = document.getElementById("playLose2") ;

var timeInterval;
var time = 60;


//------------Play button in rule page ------------------
bPlayRules.addEventListener("click", PlayStart);

//-------------Play! button in start page ------------------------
bPlayStart.addEventListener("click", PlayStart);
function PlayStart() {
     bgamewindow.style.visibility = "visible";
     theRulesWindow.style.visibility = "hidden";
     theStartWindow.style.visibility = "hidden";
     timeInterval = setInterval(changeTime,1000);
     time=60; //60
     timerBox.innerHTML = time.toString();
     objplayer.style.visibility="visible";
     orderslist.style.visibility="visible";
     pastriesmateriallist.style.visibility="visible";
     countdownobj.style.visibility="visible";
     timerBox.style.visibility="visible";
     loseWindows.style.visibility="hidden";
     winWindows.style.visibility="hidden";

    oborangefrosting.style.visibility="visible";
    objpinkfrost.style.visibility="visible";
    objtealfrost.style.visibility="visible";
    objchocake.style.visibility="visible";
    objvanillacake.style.visibility="visible";
    objroll.style.visibility="visible";
    objeclair.style.visibility="visible";
    objstars.style.visibility="visible";
    objcherries.style.visibility="visible";
    Objmacaron.style.visibility="visible";
    objbonbon.style.visibility="visible";

}