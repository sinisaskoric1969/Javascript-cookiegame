
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

function selectmaterial(){
    console.clear();
    //console.log(oborangefrosting.style.left +"  "+ objplayer.style.left);
    //console.log(oborangefrosting.style.top +"  "+ objplayer.style.top);
    //console.log( objplayer.style.left);

    const  offset = 20;
    let lfx = parseInt(objplayer.style.left, 10);
    let lfy = parseInt(objplayer.style.top, 10);

    console.log( lfx + "  " + lfy );

    if(objSelect==null)
    {
        //------------ oborangefrosting --------------
        if (lfx>(260-offset)  &&  lfx<(260+offset)  && lfy>(355-offset) &&  lfy<(355+offset) ) {
            objSelect = oborangefrosting;
            console.log("oborangefrosting");
        }

        //------------ objpinkfrost --------------
        if (lfx>(350-offset)  &&  lfx<(350+offset)  && lfy>(325-offset) &&  lfy<(325+offset) ) {
            objSelect = objpinkfrost;
            console.log("objpinkfrost");
        }

        //------------ objtealfrost --------------
        if (lfx>(170-offset)  &&  lfx<(170+offset)  && lfy>(375-offset) &&  lfy<(375+offset) ) {
            objSelect = objtealfrost;
            console.log("objtealfrost");
        }

        //------------ objchocake --------------
        if (lfx>(455-offset)  &&  lfx<(455+offset)  && lfy>(365-offset) &&  lfy<(365+offset) ) {
            objSelect = objchocake;
            console.log("objchocake");
        }

        //------------ objvanillacake --------------
        if (lfx>(540-offset)  &&  lfx<(540+offset)  && lfy>(325-offset) &&  lfy<(325+offset) ) {
            objSelect = objvanillacake;
            console.log("objvanillacake");
        }

        //------------ objroll --------------
        if (lfx>(625-offset)  &&  lfx<(625+offset)  && lfy>(355-offset) &&  lfy<(355+offset) ) {
            objSelect = objroll;
            console.log("objroll");
        }

        //------------ objeclair --------------
        if (lfx>(695-offset)  &&  lfx<(695+offset)  && lfy>(310-offset) &&  lfy<(310+offset) ) {
            objSelect = objeclair;
            console.log("objeclair");
        }

        //------------ objbonbon --------------
        if (lfx>(-30-offset)  &&  lfx<(-30+offset)  && lfy>(320-offset) &&  lfy<(320+offset) ) {
            objSelect = objbonbon;
            console.log("objbonbon");
        }

        //------------ Objmacaron --------------
        if (lfx>(5-offset)  &&  lfx<(5+offset)  && lfy>(305-offset) &&  lfy<(305+offset) ) {
            objSelect = Objmacaron;
            console.log("Objmacaron");
        }

        //------------ objstars1 --------------
        if (lfx>(90-offset)  &&  lfx<(90+offset)  && lfy>(315-offset) &&  lfy<(315+offset) ) {
            objSelect = objstars1;
            console.log("objstars1");
        }

        //------------ objcherrie1 --------------
        if (lfx>(20-offset)  &&  lfx<(20+offset)  && lfy>(360-offset) &&  lfy<(360+offset) ) {
            objSelect = objcherrie1;
            console.log("objcherrie1");
        }


    }
    else
    {
        objSelect = null;
    }








    //oborangefrosting   0 260      |  15 335
    //objpinkfrost       0 350      | -15 325
    //objpinkfrost       0 170      | -15 380
    //objchocake      -440 455      |  0  370
    //objvanillacake  -530 535      | -10 330
    //objroll         -610 625      | -10 350
    //objeclair       -810 695      | -10 310
    //objstars         -90 90       |   5 305
    //objcherries      20  20       |   0 355
    //Objmacaron      -890 5        |   0 310
    //objbonbon       -710 -35      |   0 315


