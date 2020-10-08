document.querySelector(".submit").addEventListener("click", handson );
function handson(){
let investment=Number(document.getElementById("investment").value) ;
let c=Number(document.getElementById('profit').value) ;
let balance=investment ;
let profit = c/100 ;
let days=4;
while (balance<2000000){
        balance=balance + (Math.round(balance * profit));
        days += 1 ;
        }
console.log("days: "+ days);
document.querySelector("h1").innerHTML="Great! You will be millionaire in just  " + days +" day";
}


    
        
        



