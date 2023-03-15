const tabla = document.querySelector('#ABBactores tbody')
const tabla2 = document.querySelector('#ABBactores2 tbody')
const tabla3 = document.querySelector('#ABBactores3 tbody')

class NodoABB{
    constructor(dni, N_A, correo, descripcion){
        this.dni = dni;
        this.Nom_A = N_A;
        this.correo = correo;
        this.descripcion = descripcion
        this.izquierda = null;
        this.derecha = null;
    }
}

class Arbolbb{
    constructor(){
        this.raiz = null;
        
        this.post = "";
        this.in = "";
    }

    insertarABB(dni, N_A, correo, descripcion){
        let nuevo = new NodoABB(dni, N_A, correo, descripcion);

        if(this.raiz == null){
            this.raiz= nuevo;
        }else{
            this.raiz = this.insertarNodoABB(this.raiz,nuevo);
        }
    }

    insertarNodoABB(raiz_actual,nuevo){
        if(raiz_actual != null){
            //recorrer hijos
            if(raiz_actual.dni > nuevo.dni){
                raiz_actual.izquierda = this.insertarNodoABB(raiz_actual.izquierda,nuevo);

            }else if(raiz_actual.dni < nuevo.dni){
                raiz_actual.derecha = this.insertarNodoABB(raiz_actual.derecha,nuevo);
            }else{
                console.log("NO SE PUEDE INSERTAR EL DATO PORQUE YA EXISTE");
            }

            return raiz_actual;
        }else{
            raiz_actual = nuevo;
            return raiz_actual;
        }
    }

    preorden(raiz_actual){
        const row = document.createElement('tr')
        if(raiz_actual != null){
            row.innerHTML += `
                <td>${raiz_actual.dni}</td>
                <td>${raiz_actual.Nom_A}</td>
                <td>${raiz_actual.descripcion}</td>
            `; 
            tabla.appendChild(row)
            this.preorden(raiz_actual.izquierda);
            this.preorden(raiz_actual.derecha);
        }

    }

    inOrden(raiz_actual){
        const row = document.createElement('tr')
        if(raiz_actual != null){
            this.inOrden(raiz_actual.izquierda);
            row.innerHTML += `
                <td>${raiz_actual.dni}</td>
                <td>${raiz_actual.Nom_A}</td>
                <td>${raiz_actual.descripcion}</td>
            `; 
            tabla2.appendChild(row)
            this.inOrden(raiz_actual.derecha);
        }
    }

    postOrden(raiz_actual){
        const row = document.createElement('tr')
        if(raiz_actual != null){
            this.postOrden(raiz_actual.izquierda);
            this.postOrden(raiz_actual.derecha);
            row.innerHTML += `
                <td>${raiz_actual.dni}</td>
                <td>${raiz_actual.Nom_A}</td>
                <td>${raiz_actual.descripcion}</td>
            `; 
            tabla3.appendChild(row)
        }
    }

    Tablapre(){
        this.preorden(this.raiz)
    }

    Tablain(){
        this.inOrden(this.raiz)
    }

    Tablapost(){
        this.postOrden(this.raiz)
    }

    generadorDot(){
        let cadena="digraph ABB {\n";
        cadena+= this.generarNodoABB(this.raiz);
        cadena+="\n";
        cadena+=this.enlazar(this.raiz);
        cadena+="\n}";

        //console.log(cadena);
        d3.select("#Lienzo1").graphviz()
            .engine("dot")
            .width(1500)
            .height(1000)
            .dot(cadena)
            .render();
    }

    generarNodoABB(raiz_actual){ //metodo preorden
        let nodos ="";
        if(raiz_actual != null){
            nodos+= "ABB"+raiz_actual.dni+"[label=\""+raiz_actual.Nom_A+"\"]\n";
            nodos+=this.generarNodoABB(raiz_actual.izquierda);
            nodos+=this.generarNodoABB(raiz_actual.derecha);
        }
        return nodos;
    }

    enlazar(raiz_actual){
        let cadena="";
        if(raiz_actual != null){
            cadena += this.enlazar(raiz_actual.izquierda);
            cadena += this.enlazar(raiz_actual.derecha);
            //validaciones
            if(raiz_actual.izquierda != null){
                cadena+="ABB"+raiz_actual.dni+ "-> ABB"+raiz_actual.izquierda.dni+"\n";
            }
            if(raiz_actual.derecha != null){
                cadena+="ABB"+raiz_actual.dni + "-> ABB"+raiz_actual.derecha.dni+"\n";
            }

            
        }
        return cadena;
    }

    
}

export let abb = new Arbolbb()