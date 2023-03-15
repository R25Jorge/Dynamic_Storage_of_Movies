class Nodo{
    constructor(valor, nombre, usuario, correo, contrasenia, telefono){
        this.valor = valor
        this.nombre = nombre
        this.usuario = usuario
        this.correo = correo
        this.contrasenia = contrasenia
        this.telefono = telefono
        this.next = null
    }
}

class ListaSimple{
    constructor(){
        this.head = null
        this.tamanio = 0
    }

    //metodos de la lista
    //insertar
    agregar(valor, nombre, usuario, correo, contrasenia, telefono){
        this.tamanio++
        let temporal = new Nodo(valor, nombre, usuario, correo, contrasenia, telefono);
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
    buscar(Usuario){
        var temporal = this.head
        while(temporal!=null){
            if(Usuario == temporal.usuario){
                return temporal
            }else{
                temporal = temporal.next
            }
            
        }
    }

    Mostrar(){
        var temporal = this.head
        while(temporal!=null){
            console.log(temporal.Nombre)
            temporal = temporal.next
        }
    }

    graficar(){
        let cadena = "digraph Lista {\nrankdir = LR \n"
        var temporal = this.head
        let count = 0
        while(temporal != null){
            cadena += 'N'+count + '[label="' + temporal.nombre + "\n"+ temporal.usuario + "\n"+ temporal.contrasenia + "\n"+ '"];\n'
            if(temporal.next != null){
                cadena += 'N' + count + '-> N' + (count+1) + '\n'
            }
            temporal = temporal.next
            count++
        }
        cadena += '}'
        d3.select("#Lienzo1").graphviz()
            .engine("dot")
            .width(1500)
            .height(500)
            .dot(cadena)
            .render();
    }

}

export let list = new ListaSimple()