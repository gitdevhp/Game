console.log("exec.js Loaded");

//variables
var diaNum = 0;
var cash = 0;
var genRate;
var miniB=0;
//functions

function promptNext(){
if (diaNum==0){
    document.getElementById("msg").innerHTML= '>If you are reading this letter, you have recived 25000 dollars of the amount Dan Cody supposedly gave to you in his will.';
  //  document.getElementById("msg").style.pageBreakAfter = 'dollars';
    diaNum++;
}
else if(diaNum==1){
    document.getElementById("msg").innerHTML='>Narrarator: You have just received a large amount of money. Lets start by starting a small drug store.';
   // document.getElementById("msg").style.pageBreakAfter = 'money.';
   document.getElementById("mini").innerHTML='Buy Small Drug Store'<br>'Small Humble Home';
    baseCash();
    diaNum++;
}
}

function baseCash(){
cash=25000;
document.getElementById("CashAmt").innerHTML= 'Money: ' + cash;
}

function baseBuy(){
    cash-=25000;
    genRate=1;
    miniB++;
    document.getElementById("CashAmt").innerHTML='Money: '+cash;
    document.getElementById("mini").innerHTML='Small Drug Store: '+miniB;
    console.log("Base Set");
}
