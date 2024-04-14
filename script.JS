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
 
function register() {
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registrace proběhla úspěšně.");
    } else {
        alert("Prosím vyplňte uživatelské jméno a heslo.");
    }
}

function login() {
    let regUsername = localStorage.getItem("username");
    let regPassword = localStorage.getItem("password");
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    if (username === regUsername && password === regPassword) {
        alert("Přihlášení úspěšné.");
    } else {
        alert("Nesprávné uživatelské jméno nebo heslo.");
    }
}











