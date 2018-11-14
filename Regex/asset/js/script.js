//Forma 1 para declarar REGEX
var nombreRGX = /^[A-Z][a-z]{3,9}$/;

//Forma 2 para declarar REGEX
var ageRGX = new RegExp(/^([1][8-9]|[2-9][0-9])$/);

var PassRGX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

var btnCheck = document.getElementById("checkbtn");
var btnConfirm = document.getElementById("confirmbtn");
var chkpsswd = document.getElementById("passbtn");

//Botones


btnCheck.onclick = function(evt) 
{   
    let name = document.getElementById('Fname').value;
    if(nombreRGX.test(name)){
        alert("Nombre correcto");
    }
}

btnConfirm.onclick = function(evt) 
{   
    let age = document.getElementById('age').value;
    if(ageRGX.test(age)){
        alert("Sí eres mayor de edad");
    }
}

chkpsswd.onclick = function(evt) 
{   
    let pswrd = document.getElementById('pass').value;
    if(PassRGX.test(pswrd)){
        console.log(pswrd);
        alert("Patron correcto");
    }
}