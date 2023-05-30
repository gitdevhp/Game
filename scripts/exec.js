console.log("exec.js Loaded");

//variables
var diaNum = 0;
var cash = 0;
var genRate=0;
var canPass = false;

//settings for prices
var miniCost = 5;
var drugCost = 50;
var alcCost = 100;

//tracker of stores
var mini = 1;
var drug = 0;
var alc = 0;
//functions

setInterval(generate,10);

function promptNext() {
if (diaNum==0) {
    document.getElementById("msg").innerHTML= '>If you are reading this letter, you have recived 25000 dollars of the amount Dan Cody supposedly gave to you in his will.';
  //  document.getElementById("msg").style.pageBreakAfter = 'dollars';
  document.getElementById("gonne").innerHTML=   document.getElementById("gonne").innerHTML+ 'Dan Cody *Dead*';
    diaNum++;
}
else if(diaNum==1) {
    document.getElementById("msg").innerHTML='>Narrarator: Mr. Gatsby meets a perticular man named Meyer Wolfsheim \n >Meyer Wolfsheim: You are from Oggsford? You have much potential. Would you like to join me and earn lots of money?';
   // document.getElementById("msg").style.pageBreakAfter = 'money.';
   document.getElementById("mini").style.display = "block";
   document.getElementById("NextBut").style.display='none';

   baseCash();
    miniCost=25000;
    diaNum++;
}
else if(diaNum==2&&cash!=25000){
    diaNum++;
    document.getElementById("msg").innerHTML='>Mr Wolfshiem suggests that Gatsby buys some more small drug stores, its not much but its getting Gatsby closer to Daisy';
    document.getElementById("NextBut").style.display='none';
    canPass=true;
}
else if(diaNum==3){
    diaNum++;
    document.getElementById("msg").innerHTML='>Gatsby Hopes that earning money and being rich will reclaim Daisy for himself...';
}
else if(diaNum==4){
    diaNum++;
    document.getElementById("msg").innerHTML='>Narrarator: Meyer Wolfsheim beleives that you have learned enough and trusts you to build up a massive illegal trade all across the United States.'
    canPass=true;
    document.getElementById("NextBut").style.display='none';
    document.getElementById("Step1").style.display='block';
}
}

function baseCash() {
cash=25000;
document.getElementById("CashAmt").innerHTML= 'Money: ' + cash;
}

function baseBuy() {
    if(diaNum>1&&cash>=miniCost) {
    cash-=25000;
    genRate++;
    document.getElementById("CashAmt").innerHTML='Money: '+cash;
    document.getElementById("mini").style.display = "none";
    document.getElementById("minip2").style.display = "block";
    document.getElementById("NextBut").style.display='block';
    console.log("Base Set");
    miniCost=5;
}
}

function generate() {
    cash+=genRate/100;
    document.getElementById("CashAmt").innerHTML="Money: "+Math.trunc(cash*100)/100;
    document.getElementById("gen").innerHTML="Earnings per Second: "+genRate;
}

//buy drug stores
function buyMini() {
    if (mini==4&&cash>=miniCost&&canPass==true) {
        cash-=miniCost;
        mini++;
        genRate++;
        miniCost=Math.round(miniCost*1.5);
        document.getElementById("minip2").innerHTML = "small drug store *"+miniCost+"* ["+mini+"]";
        document.getElementById("NextBut").style.display='block';
        canPass=false;
    }
    else if (cash>=miniCost&&canPass==true) {
        cash-=miniCost;
        mini++;
        genRate++;
        miniCost=Math.round(miniCost*1.3);
        document.getElementById("minip2").innerHTML = "small drug store |"+miniCost+"| ["+mini+"]";
    }
}

function buyDrug(){
    if(canPass==true&&cash>=drugCost){
        cash-=drugCost;
        drug++;
        genRate+=2;
        drugCost=Math.round(drugCost*1.3);
        document.getElementById("regdrug").innerHTML = "regular drug store |"+drugCost+"| ["+drug+"]";
    }
}

function buyAlc(){
    if (canPass==true&&cash>=alcCost&&alc==4){
        cash-=alcCost;
        alc++;
        genRate+=3;
        alcCost=Math.round(alcCost*1.4);
        document.getElementById("alc").innerHTML = "illegal alchohol distribution center |"+alcCost+"| ["+alc+"]";
        document.getElementById("Chicago").style.display="block";
    }
   else if(canPass==true&&cash>=alcCost){
        cash-=alcCost;
        alc++;
        genRate+=3;
        alcCost=Math.round(alcCost*1.2);
        document.getElementById("alc").innerHTML = "illegal alchohol distribution center |"+alcCost+"| ["+alc+"]";

    }
}