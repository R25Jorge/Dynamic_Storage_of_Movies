import { arbol } from "./AVL.js";
import { comentarios } from "./Comentariospel.js";
import { oredenamito } from "./Ordenamientos.js";

const name = document.getElementById('nameinf')
const inf = document.querySelector('#inf h2')
const row = document.createElement('h2')
const inf2 = document.querySelector('#inf p')
const row2 = document.createElement('p')
const text = document.getElementById('comentarios')
const Stars = document.getElementById('stars')

const username = document.getElementById('username')
const calistars = document.getElementById('estrellas')

const com = document.getElementById('namepeli')

const buttonMostpeli = document.getElementById("button10")
const buttonMostActo = document.getElementById("button11")
const buttonMostcate = document.getElementById("button12")
const button1informacion = document.getElementById("button50")
const buttoncalificar = document.getElementById("button120")
const buttonbuscar = document.getElementById("button70")
const buttonsalir2 = document.getElementById("button80")
const buttonsaliruser = document.getElementById("button100")
const buttoncomentar = document.getElementById("button110")
const buttonPre = document.getElementById("button130")
const buttonIn = document.getElementById("button140")
const buttonPost = document.getElementById("button150")
const buttonascen = document.getElementById("button60")
const buttondesc = document.getElementById("button160")

buttonbuscar.addEventListener('click',(e) =>{
    e.preventDefault()
    var estrellas = ""
    comentarios.agregar("",username.value, name.value)
    row.innerHTML = ""
    row2.innerHTML = ""
    row.innerHTML += arbol.Buscar(arbol.raiz, name.value).nombre_pelicula;
    inf.appendChild(row)

    row2.innerHTML += arbol.Buscar(arbol.raiz, name.value).descripcion;
    inf2.appendChild(row2)
    
    let comentar = comentarios.buscarcomentarios(name.value)
    if(comentar != ""){
        text.innerHTML = comentar
    }

    for(var i = 0; i < arbol.Buscar(arbol.raiz, name.value).puntuacion_star; i++){
        estrellas += '<img src="https://e1.pngegg.com/pngimages/774/453/png-clipart-super-mario-bros-icons-star-thumbnail.png" width="50" >'
    }
    Stars.innerHTML = estrellas
    document.getElementById("inf").style.display = ""
})

buttoncomentar.addEventListener('click',(e) =>{
    e.preventDefault()
    if (comentarios.buscarcomentarios(name.value) == ""){
        text.innerHTML = username.value + ": " + com.value
    }else{
        text.innerHTML += username.value + ": " + com.value + "\n"
    }
    
    comentarios.buscar(name.value, username.value).comentario = com.value
})

buttoncalificar.addEventListener('click',(e) =>{
    e.preventDefault()
    var estrellas = ""
    for(var i = 0; i < calistars.value; i++){
        estrellas += '<img src="https://e1.pngegg.com/pngimages/774/453/png-clipart-super-mario-bros-icons-star-thumbnail.png" width="50" >'
    }
    Stars.innerHTML = estrellas
    arbol.Buscar(arbol.raiz, name.value).puntuacion_star = calistars.value
})

buttonPre.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById('ABBactores').style.display = ""
    document.getElementById('ABBactores2').style.display = "none"
    document.getElementById('ABBactores3').style.display = "none"

})

buttonIn.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById('ABBactores').style.display = "none"
    document.getElementById('ABBactores2').style.display = ""
    document.getElementById('ABBactores3').style.display = "none"
})

buttonPost.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById('ABBactores').style.display = "none"
    document.getElementById('ABBactores2').style.display = "none"
    document.getElementById('ABBactores3').style.display = ""
})

buttonascen.addEventListener('click',(e) =>{
    e.preventDefault()
    oredenamito.ascendente()
    oredenamito.mostrar1()
    document.getElementById('AVLPeliculas').style.display = "none"
    document.getElementById('AVLPeliculas2').style.display = ""
    document.getElementById('AVLPeliculas3').style.display = "none"

})

buttondesc.addEventListener('click',(e) =>{
    e.preventDefault()
    oredenamito.descendente()
    oredenamito.mostrar2()
    document.getElementById('AVLPeliculas').style.display = "none"
    document.getElementById('AVLPeliculas2').style.display = "none"
    document.getElementById('AVLPeliculas3').style.display = ""

})

button1informacion.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById("admin").style.display = "none"
    document.getElementById("Usuario").style.display = "none"
    document.getElementById("log").style.display = "none"
    document.getElementById("Informacion").style.display = ""
})

buttonMostpeli.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById("tabla").style.display = ""
    document.getElementById("tablaactores").style.display = "none"
    document.getElementById("tablacategoria").style.display = "none"
})

buttonMostActo.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById("tabla").style.display = "none"
    document.getElementById("tablaactores").style.display = ""
    document.getElementById("tablacategoria").style.display = "none"
})

buttonMostcate.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById("tabla").style.display = "none"
    document.getElementById("tablaactores").style.display = "none"
    document.getElementById("tablacategoria").style.display = ""
})

buttonsalir2.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById("admin").style.display = "none"
    document.getElementById("Usuario").style.display = ""
    document.getElementById("log").style.display = "none"
    document.getElementById("Informacion").style.display = "none"
    document.getElementById("inf").style.display = "none"
    text.innerHTML = ""
})

buttonsaliruser.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById("admin").style.display = "none"
    document.getElementById("Usuario").style.display = "none"
    document.getElementById("log").style.display = ""
})