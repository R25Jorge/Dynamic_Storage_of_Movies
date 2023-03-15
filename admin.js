import { arbol } from "./AVL.js";
import { list } from "./ListaSimple.js";
import { abb } from "./ABB.js";
import { oredenamito } from "./Ordenamientos.js";
import { tablaH } from "./Tablahash.js";

const tabla = document.querySelector('#AVLPeliculas tbody')
const tabla2 = document.querySelector('#Hashcategoria tbody')

const buttonpelicula = document.getElementById("button1")
const buttonclientes = document.getElementById("button2")
const buttonactores = document.getElementById("button3")
const buttoncategorias = document.getElementById("button4")
const buttondescargar = document.getElementById("button4")
const buttonsalir = document.getElementById("button6")



function cargarPeliculas(){
    document.getElementById("Peli").addEventListener("change", function() {
        var file_to_read = document.getElementById("Peli").files[0];
        var fileread = new FileReader();
        fileread.onload = function(e) {
            var content = e.target.result;
            //console.log(content);
            var intern = JSON.parse(content); // Array of Objects.
            console.log(intern); // You can index every object
            intern.forEach(pelicula => {
                arbol.insertar(pelicula.id_pelicula, pelicula.nombre_pelicula, pelicula.descripcion, pelicula.puntuacion_star, pelicula.precion_Q, pelicula.paginas, pelicula.categoria)
                oredenamito.agregar(pelicula.id_pelicula, pelicula.nombre_pelicula, pelicula.descripcion, pelicula.precion_Q)
                const row = document.createElement('tr')
                row.innerHTML += `
                <td>${pelicula.nombre_pelicula}</td>
                <td>${pelicula.descripcion}</td>
                <td>${"Q." + pelicula.precion_Q}</td>
            `;
            tabla.appendChild(row)
            });
            //oredenamito.mostrar()
        };
        fileread.readAsText(file_to_read);
    });
}

function cargarClientes(){
    document.getElementById("Client").addEventListener("change", function() {
        var file_to_read = document.getElementById("Client").files[0];
        var fileread = new FileReader();
        fileread.onload = function(e) {
            var content = e.target.result;
            //console.log(content);
            var intern = JSON.parse(content); // Array of Objects.
            //console.log(intern); // You can index every object
            intern.forEach(clientes => {
                list.agregar(clientes.dpi, clientes.nombre_completo, clientes.nombre_usuario, clientes.correo, clientes.contrasenia, clientes.telefono)
            });
            
        };
        fileread.readAsText(file_to_read);
    });
}

function cargarActores(){
    document.getElementById("Actores").addEventListener("change", function() {
        var file_to_read = document.getElementById("Actores").files[0];
        var fileread = new FileReader();
        fileread.onload = function(e) {
            var content = e.target.result;
            //console.log(content);
            var intern = JSON.parse(content); // Array of Objects.
            //console.log(intern); // You can index every object
            intern.forEach(actores => {
                abb.insertarABB(actores.dni, actores.nombre_actor, actores.correo, actores.descripcion)
            });
            abb.Tablapre()
            abb.Tablain()
            abb.Tablapost()
        };
        fileread.readAsText(file_to_read);
    });
}

function cargarCategorias(){
    document.getElementById("Categ").addEventListener("change", function() {
        var file_to_read = document.getElementById("Categ").files[0];
        var fileread = new FileReader();
        fileread.onload = function(e) {
            var content = e.target.result;
            //console.log(content);
            var intern = JSON.parse(content); // Array of Objects.
            //console.log(intern); // You can index every object
            intern.forEach(categoria => {
                const row = document.createElement('tr')
                tablaH.add(categoria.id_categoria, categoria.company)
                row.innerHTML += `
                <td>${categoria.id_categoria}</td>
                <td>${categoria.company}</td>
            `;
            tabla2.appendChild(row)
            });         
        };
        fileread.readAsText(file_to_read);
    });
}

buttonpelicula.addEventListener('click',(e) =>{
    e.preventDefault()
    arbol.generarDot()
    document.getElementById("Pel").style.display=""
})

buttonclientes.addEventListener('click',(e) =>{
    e.preventDefault()
    list.graficar()
    document.getElementById("Pel").style.display=""  
})

buttonactores.addEventListener('click',(e) =>{
    e.preventDefault()
    abb.generadorDot()
    document.getElementById("Pel").style.display=""
})

buttoncategorias.addEventListener('click',(e) =>{
    e.preventDefault()
    tablaH.graph()
    document.getElementById("Pel").style.display=""

})

buttonsalir.addEventListener('click',(e) =>{
    e.preventDefault()
    document.getElementById("Pel").style.display="none"
    document.getElementById("admin").style.display = "none"
    document.getElementById("Usuario").style.display = "none"
    document.getElementById("log").style.display = ""
})

cargarPeliculas()
cargarActores()
cargarClientes()
cargarCategorias()