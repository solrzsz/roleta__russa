document.addEventListener("DOMContentLoaded", function() {

document.getElementById("botaozin").addEventListener("click", function(){
    
let numberrandom = Math.floor(Math.random() * 6) + 1; // teste de número 1 ao 6
if (numberrandom >= 6) { (document.getElementById("numero").textContent = "Você morreu." )
    document.getElementById("tiro").play(); }
else {
   (document.getElementById("numero").textContent = "Você está vivo, por enquanto..." ) 
   document.getElementById("vazio").play();
}
setTimeout(function() {
document.getElementById("new").play();
},800);


}
)


})