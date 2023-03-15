import { list } from "./ListaSimple.js";

const inf = document.querySelector('#bienvenido h1')
const row = document.createElement('h1')

const form = document.getElementById('form')
const button = document.getElementById('button')
const Regist = document.getElementById('Regist')
const SalirReg = document.getElementById('SalirReg')
const reg = document.getElementById('buttonreg')

const username = document.getElementById('username')
const password = document.getElementById('password')
const admin = document.getElementById('Cbox')

const form2 = document.getElementById('form2')
const user = document.getElementById('usernam')
const Nombre = document.getElementById('Name')
const DPI = document.getElementById('DPI')
const telefono = document.getElementById('Telefono')
const contra = document.getElementById('pass')

button.addEventListener('click',(e) =>{
    e.preventDefault()

    const data = {
        username: username.value,
        password: password.value,
        admin: admin.checked
    }
    //guardamos los datos 
    console.log(data)
    ir()

})

//agregar para validar usuarios
function ir() {
    list.agregar(0,"Oscar Armin", "EDD","a",12345678, 5)
    if (list.buscar(username.value).usuario == username.value && password.value == list.buscar(username.value).contrasenia && admin.checked == true) {
        document.getElementById("log").style.display="none"
        document.getElementById("admin").style.display=""
    }
    else if(list.buscar(username.value).usuario == username.value && password.value == list.buscar(username.value).contrasenia && admin.checked == false){
        row.innerHTML = "Bienvenido: "
        row.innerHTML += list.buscar(username.value).usuario
        inf.appendChild(row)
        document.getElementById("log").style.display="none"
        document.getElementById("admin").style.display="none"
        document.getElementById("Usuario").style.display=""
    }else {
        alert("Datos erroneos")
    }
}

Regist.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById("admin").style.display = "none"
    document.getElementById("Usuario").style.display = "none"
    document.getElementById("log").style.display = "none"
    document.getElementById("RegistrarUser").style.display = ""
})

reg.addEventListener('click',(e) =>{
    e.preventDefault()
    list.agregar(DPI.value, Nombre.value, user.value, "correo@gmail.com", contra.value, telefono.value)
    list.graficar()
})

SalirReg.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById("admin").style.display = "none"
    document.getElementById("Usuario").style.display = "none"
    document.getElementById("log").style.display = ""
    document.getElementById("RegistrarUser").style.display = "none"
})