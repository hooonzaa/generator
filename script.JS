let abc = "abcdefghijklmnopqrstuvwxyz"
let cisla = "123456789"
let znaky ="!§_{+-/@"

function Generate(){

    let iDelka = parseInt(document.getElementById("Numbers").value);
   
 
    let celek = abc + abc.toUpperCase() + cisla + znaky;
    
let newPass=""

newPass += abc[Math.floor(Math.random() * abc.length)];
newPass += cisla[Math.floor(Math.random() * cisla.length)];
newPass += znaky[Math.floor(Math.random() * znaky.length)];
   

for (let i = 0; i < iDelka - 3; i++) {
    newPass += celek[Math.floor(Math.random() * celek.length)];
}

document.getElementById("majkl").innerHTML = newPass.slice(0, iDelka);
}
 
function password(){


    
}
















