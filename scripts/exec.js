console.log("exec.js Loaded");

//variables
var diaNum = 0;
var cash = 0;
var genRate=0;
var canPass = false;
//settings for prices
var miniCost = 10;

//tracker of stores
var mini = 1;
//functions

setInterval(generate,10);

function promptNext() {
if (diaNum==0) {
    document.getElementById("msg").innerHTML= '>If you are reading this letter, you have recived 25000 dollars of the amount Dan Cody supposedly gave to you in his will.';
  //  document.getElementById("msg").style.pageBreakAfter = 'dollars';
    diaNum++;
}
else if(diaNum==1) {
    document.getElementById("msg").innerHTML='>Narrarator: You have just received a large amount of money. Lets start by starting a small drug store.';
   // document.getElementById("msg").style.pageBreakAfter = 'money.';
   document.getElementById("mini").style.display = "block";
   baseCash();
    miniCost=25000;
    diaNum++;
}
else if(diaNum==2&&cash!=25000){
    diaNum++;
    document.getElementById("msg").innerHTML='>Let us buy some more small stores, its not much but its getting Gatsby closer to Daisy';
    document.getElementById("NextBut").style.display='none';
    canPass=true;
}
else if(diaNum==3){
    diaNum++;
    document.getElementById("msg").innerHTML='>Gatsby Hopes that earning money and being rich will reclaim Daisy for himself...';
    document.getElementById("NextBut").style.display='none';
}
else if(diaNum==4){
    diaNum++;
    document.getElementById("msg").innerHTML='>Narrarator: Meyer Wolfsheim beleives that you have learned enough and trusts you to build up a massive illegal trade all across the United States.'
    canPass=true;
    
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
    console.log("Base Set");
    miniCost=10;
}
}

function generate() {
    cash+=genRate/100;
    document.getElementById("CashAmt").innerHTML="Money: "+cash;
}

//buy drug stores
function buyMini() {
    if (mini==9&&cash>=miniCost&&canPass==true) {
        cash-=miniCost;
        mini++;
        genRate++;
        miniCost=Math.round(miniCost*2);
        document.getElementById("minip2").innerHTML = "small drug store *"+miniCost+"* ["+mini+"]";
        document.getElementById("NextBut").style.display='block';
        canPass=false;
    }
    else if (cash>=miniCost&&canPass==true) {
        cash-=miniCost;
        mini++;
        genRate++;
        miniCost=Math.round(miniCost*1.1);
        document.getElementById("minip2").innerHTML = "small drug store *"+miniCost+"* ["+mini+"]";
    }
}
