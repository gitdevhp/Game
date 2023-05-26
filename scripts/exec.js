console.log("exec.js Loaded");

//variables
var diaNum = 0;
var cash = 0;

//functions

function PromptNext(){
if (diaNum=0){
    document.getElementbyId("Msg").innerHTML= "If you are reading this letter, you have recived 25000 dollars of the amount Dan Cody supposedly gave to you in his will.";
    document.getElementById("Msg").style.pageBreakAfter = "dollars";
    dia++
    baseCash();
}

}
function baseCash(){
cash=25000;
document.getElementById("CashAmt").innerHTML= "Money: " + cash;
}