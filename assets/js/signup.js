import { usuarios } from './users.js';
//listerners
document.getElementById("sign-up").addEventListener("click", function(event){
    event.preventDefault();
    let user = {};
    let nombre = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let encontrado = usuarios.find(usuario => usuario.nombre == nombre && usuario.email == email)
    if(encontrado){
        alert("El usuario o el correo ya existen");
    }else{
        user['nombre'] = nombre;
        user['password'] = password;
        user['email'] = toLowerCase(email);
        usuarios.push(user)
        alert("usuario creado");
    }
})
//clase y funciones
class usuario {
    cronstructor(idUser ,nombre , password = "",email = '') {
        this.idUser = idUser;
        this.nombre = nombre;
        this.password = password;
        this.email = email;
    }
    addProducto(){
        productos.find(producto => producto.email == this.email);
        productos.push(
            {
                idUser: this.idUser,
                nombre:  this.nombre,
                password: this.password,
                email: this.email ,
            }
            )
    }
}