class Nodo{
    constructor(comentario, usuario, pelicula){
        this.comentario = comentario
        this.usuario = usuario
        this.pelicula = pelicula
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
    agregar(comentario, usuario, pelicula){
        this.tamanio++
        let temporal = new Nodo(comentario, usuario, pelicula);
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
    //mostrar 
    buscarcomentarios(pelicula){
        var temporal = this.head
        var cadena = ""
        while(temporal!=null){
            if(pelicula == temporal.pelicula){
                if(temporal.comentario != ""){
                    cadena += temporal.usuario + ": " + temporal.comentario + "\n"
                } 
            }
            temporal = temporal.next
        }
        return cadena
    }

    buscar(pelicula, user){
        var temporal = this.head
        while(temporal!=null){
            if(pelicula == temporal.pelicula){
                if(user == temporal.usuario){
                    return temporal
                }   
            }
            temporal = temporal.next
        }
    }
}

export let comentarios = new Lista()