const tabla = document.querySelector('#AVLPeliculas2 tbody')
const tabla2 = document.querySelector('#AVLPeliculas3 tbody')

class Nodo{
    constructor(id, Nombre, Descripcion, Precio){
        this.id = id
        this.Nombre = Nombre
        this.Descripcion = Descripcion
        this.Precio = Precio
        this.next = null
    }
}

class Lista{
    constructor(){
        this.head = null
        this.tamanio = 0
    }

    //metodos de la lista
    //insertar
    agregar(id, Nombre, Descripcion, Precio){
        this.tamanio++
        let temporal = new Nodo(id, Nombre, Descripcion, Precio);
        if (this.head == null) {
            this.head = temporal;
        } else {
            let aux = this.head;
            while (aux.next != null) {
                aux = aux.next;
            };
            aux.next = temporal;
        }
    }
    
    buscar(n){
        let contador = 0
        let temporal = this.head
        while(temporal!=null){
            if(contador == n){
                return temporal
            }
            temporal = temporal.next
            contador++
        }
    }

    mostrar(){
        let temporal = this.head
        while(temporal!=null){
            console.log(temporal.Nombre + " " + temporal.Precio)
            temporal = temporal.next
        }
    }


    ascendente(){
        for(var i = 0; i<this.tamanio; i++){
            for(var j = 0; j<this.tamanio-i-1; j++){
                if(j+1<this.tamanio){
                    if(this.buscar(j).id > this.buscar(j+1).id){
                        var id = this.buscar(j).id
                        var name = this.buscar(j).Nombre
                        var desc = this.buscar(j).Descripcion
                        var prec = this.buscar(j).Precio
                        this.buscar(j).id = this.buscar(j+1).id
                        this.buscar(j).Nombre = this.buscar(j+1).Nombre
                        this.buscar(j).Descripcion = this.buscar(j+1).Descripcion
                        this.buscar(j).Precio = this.buscar(j+1).Precio
                        this.buscar(j+1).id = id
                        this.buscar(j+1).Nombre = name
                        this.buscar(j+1).Descripcion = desc
                        this.buscar(j+1).Precio = prec
                    }
                }
            }
        }
    }

    descendente() {
        for(var i = 0; i<this.tamanio; i++){
            for(var j = 0; j<this.tamanio-i-1; j++){
                if(j+1<this.tamanio){
                    if(this.buscar(j).id < this.buscar(j+1).id){
                        var id = this.buscar(j).id
                        var name = this.buscar(j).Nombre
                        var desc = this.buscar(j).Descripcion
                        var prec = this.buscar(j).Precio
                        this.buscar(j).id = this.buscar(j+1).id
                        this.buscar(j).Nombre = this.buscar(j+1).Nombre
                        this.buscar(j).Descripcion = this.buscar(j+1).Descripcion
                        this.buscar(j).Precio = this.buscar(j+1).Precio
                        this.buscar(j+1).id = id
                        this.buscar(j+1).Nombre = name
                        this.buscar(j+1).Descripcion = desc
                        this.buscar(j+1).Precio = prec
                    }
                }
            }
        }
      }
    
    mostrar1(){
        let temporal = this.head
        while(temporal!=null){
            const row = document.createElement('tr')
            row.innerHTML = ""
            row.innerHTML += `
                <td>${temporal.Nombre}</td>
                <td>${temporal.Descripcion}</td>
                <td>${temporal.Precio}</td>
            `; 
            tabla.appendChild(row)
            temporal = temporal.next
        }
    }

    mostrar2(){
        let temporal = this.head
        while(temporal!=null){
            const row = document.createElement('tr')
            row.innerHTML += `
                <td>${temporal.Nombre}</td>
                <td>${temporal.Descripcion}</td>
                <td>${temporal.Precio}</td>
            `; 
            tabla2.appendChild(row)
            temporal = temporal.next
        }
    }
}

export let oredenamito = new Lista()