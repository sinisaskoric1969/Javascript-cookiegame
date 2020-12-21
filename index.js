
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

//------------TIMER CODE------------
function changeTime() {
    time--;
    timerBox.innerHTML = time.toString();
    if(time==0){
        clearInterval(timeInterval);
        showLose(); // showwin();
    }
}

function showLose() {
    loseWindows.style.visibility="visible";
    bgamewindow.style.visibility = "hidden";
    timerBox.style.visibility = "hidden";
    objplayer.style.visibility="hidden";
    orderslist.style.visibility="hidden";
    pastriesmateriallist.style.visibility="hidden";
    countdownobj.style.visibility="hidden";
    timerBox.style.visibility="hidden";

    oborangefrosting.style.visibility="hidden";
    objpinkfrost.style.visibility="hidden";
    objtealfrost.style.visibility="hidden";
    objchocake.style.visibility="hidden";
    objvanillacake.style.visibility="hidden";
    objroll.style.visibility="hidden";
    objeclair.style.visibility="hidden";
    objstars.style.visibility="hidden";
    objcherries.style.visibility="hidden";
    Objmacaron.style.visibility="hidden";
    objbonbon.style.visibility="hidden";

}

function showwin() {
    winWindows.style.visibility="visible";
    bgamewindow.style.visibility = "hidden";
    timerBox.style.visibility = "hidden";
    objplayer.style.visibility="hidden";
    orderslist.style.visibility="hidden";
    pastriesmateriallist.style.visibility="hidden";
    countdownobj.style.visibility="hidden";
    timerBox.style.visibility="hidden";

    oborangefrosting.style.visibility="hidden";
    objpinkfrost.style.visibility="hidden";
    objtealfrost.style.visibility="hidden";
    objchocake.style.visibility="hidden";
    objvanillacake.style.visibility="hidden";
    objroll.style.visibility="hidden";
    objeclair.style.visibility="hidden";
    objstars.style.visibility="hidden";
    objcherries.style.visibility="hidden";
    Objmacaron.style.visibility="hidden";
    objbonbon.style.visibility="hidden";

}


// -------------- instruction button-----------------
bRulesStart.addEventListener("click", showRules);
function showRules () {
    theRulesWindow.style.visibility = "visible";
    theStartWindow.style.visibility= "hidden";
    bgamewindow.style.visibility = "hidden";
}

// -------------- back rule button in instruction page -----------------
bBackRules.addEventListener("click",showstartpage );
function showstartpage () {
    bgamewindow.style.visibility = "hidden";
    theRulesWindow.style.visibility = "hidden";
    theStartWindow.style.visibility = "visible";
    loseWindows.style.visibility="hidden";
    winWindows.style.visibility="hidden";
}

//------------ button in lose page------------------
startBack1.addEventListener("click",showstartpage );
playLose1.addEventListener("click",PlayStart );


//------------ button in win page ------------------
startBack2.addEventListener("click",showstartpage );
playLose2.addEventListener("click",PlayStart );








//--------------------Move player---------------------
let objplayer= null;
let oborangefrosting= null;
let objpinkfrost= null;
let objtealfrost = null;
let objchocake = null;
let objvanillacake = null;
let objroll = null;
let objeclair = null;
let objstars = null
let objstars1 = null
let objcherries = null
let Objmacaron = null;
let objbonbon = null;

let objSelect = null;

function init(){
    objplayer=document.getElementById("player");
    oborangefrosting=document.getElementById("orangefrosting");
    objpinkfrost=document.getElementById("pinkfrosting");
    objtealfrost=document.getElementById("tealfrosting");
    objchocake=document.getElementById("chocolatecake");
    objvanillacake=document.getElementById("vanillacake");
    objroll=document.getElementById("cinnamonroll");
    objeclair=document.getElementById("eclair");
    objstars=document.getElementById("stars");
    objstars1=document.getElementById("star1");
    objcherries=document.getElementById("cherries");
    objcherrie1=document.getElementById("cherry1");
    Objmacaron=document.getElementById("macaron");
    objbonbon=document.getElementById("bonbon");


    objplayer.style.position='relative';
    objplayer.style.left='270px';
    objplayer.style.top='240px';
    objplayer.style.visibility="hidden";
    orderslist.style.visibility="hidden";
    pastriesmateriallist.style.visibility="hidden";
    countdownobj.style.visibility="hidden";
    timerBox.style.visibility="hidden";


    oborangefrosting.style.position='relative';
    oborangefrosting.style.left='0px';
    oborangefrosting.style.top='15px';
    oborangefrosting.style.visibility="hidden";

    objpinkfrost.style.position='relative';
    objpinkfrost.style.left='0px';
    objpinkfrost.style.top='-15px';
    objpinkfrost.style.visibility="hidden";

    objtealfrost.style.position='relative';
    objtealfrost.style.left='-170px';
    objtealfrost.style.top='10px';
    objtealfrost.style.visibility="hidden";

    objchocake.style.position='relative';
    objchocake.style.left='-440px';
    objchocake.style.top='0px';
    objchocake.style.visibility="hidden";

    objvanillacake.style.position='relative';
    objvanillacake.style.left='-530px';
    objvanillacake.style.top='-10px';
    objvanillacake.style.visibility="hidden";

    objroll.style.position='relative';
    objroll.style.left='-610px';
    objroll.style.top='-10px';
    objroll.style.visibility="hidden";

    objeclair.style.position='relative';
    objeclair.style.left='-810px';
    objeclair.style.top='-10px';
    objeclair.style.visibility="hidden";

    objstars.style.position='relative';
    objstars.style.left='-90px';
    objstars.style.top='5px';
    objstars.style.visibility="hidden"

    objcherries.style.position='relative';
    objcherries.style.left='20px';
    objcherries.style.top='0px';
    objcherries.style.visibility="hidden"

    Objmacaron.style.position='relative';
    Objmacaron.style.left='-890px';
    Objmacaron.style.top='0px';
    Objmacaron.style.visibility="hidden"

    objbonbon.style.position='relative';
    objbonbon.style.left='-710px';
    objbonbon.style.top='0px';
    objbonbon.style.visibility="hidden"



}