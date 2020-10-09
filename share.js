document.querySelector(".submit").addEventListener("click", handson );
function handson(){
let investment=Number(document.getElementById("investment").value) ;
let c=Number(document.getElementById('profit').value) ;
let balance=investment ;
let profit = c/100 ;
let days=4;
while (balance<1000000){
        balance=Math.round(balance*(1+profit));
        days += 1 ;
        }
document.querySelector("h1").innerHTML="Great! You will be millionaire in just  " + (days-4) +" day";
}


    
        
        



