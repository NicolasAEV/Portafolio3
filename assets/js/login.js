//imports
import { usuarios } from './users.js';

//listerners
document.getElementById("login").addEventListener("click", function(event){
    event.preventDefault();
    let nombre = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    let encontrado = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)

    if(encontrado){
        alert("Usuario autenticado.");
        location.href= "./index.html";
    }else{
        alert("Datos incorrectos.");
    }
})
//clases