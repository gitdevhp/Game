console.log("exec.js Loaded");

//variables
var diaNum = 0;
var cash = 0;
var genRate=0;

//settings for prices
var miniCost = 10;

//tracker of stores
var mini = 1;
//functions

setInterval(generate,1000);

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
}
}

function generate() {
    cash+=genRate;
    document.getElementById("CashAmt").innerHTML="Money: "+cash;
}

//buy drug stores
function buyMini() {
    if (cash>=miniCost) {
        cash-=miniCost;
        mini++;
        genRate++;
        miniCost*=1.1;
        document.getElementById("minip2").innerHTML = "small drug store *"+miniCost+"* ["+mini+"]";
    }
}
