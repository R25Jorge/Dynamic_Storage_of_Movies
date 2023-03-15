class nodo{
    constructor(dato, nombre_pelicula, descripcion, puntuacion_star, precion_Q, Paginas, categoria){
        this.dato = dato;
        this.nombre_pelicula = nombre_pelicula;
        this.descripcion = descripcion;
        this.puntuacion_star = puntuacion_star;
        this.precion_Q = precion_Q;
        this.Paginas = Paginas;
        this.categoria = categoria;
        this.izq = null;
        this.der = null;
        this.altura = 0;
    }
}

class avl{
    constructor(){
        this.raiz = null;
    }

    insertar(dato, nombre_pelicula, descripcion, puntuacion_star, precion_Q, Paginas, categoria){
        let nuevo = new nodo(dato, nombre_pelicula, descripcion, puntuacion_star, precion_Q, Paginas, categoria);

        if(this.raiz == null){
            this.raiz= nuevo;
        }else{
            this.raiz = this.insertar_nodo(this.raiz,nuevo);
        }
    }

    insertar_nodo(raiz_actual,nuevo){
        if(raiz_actual != null){
            if(raiz_actual.dato > nuevo.dato){
                raiz_actual.izq = this.insertar_nodo(raiz_actual.izq,nuevo);  
                if(this.altura(raiz_actual.der)-this.altura(raiz_actual.izq)==-2){
                    if(nuevo.dato < raiz_actual.izq.dato){
                        raiz_actual = this.r_izquierda(raiz_actual);
                    }else{
                        raiz_actual = this.r_izq_der(raiz_actual);
                    }
                }
            }else if(raiz_actual.dato < nuevo.dato){
                raiz_actual.der = this.insertar_nodo(raiz_actual.der,nuevo);
                if(this.altura(raiz_actual.der)-this.altura(raiz_actual.izq)==2){
                    if(nuevo.dato > raiz_actual.der.dato){
                        raiz_actual=this.r_derecha(raiz_actual);
                    }else{
                        raiz_actual = this.r_der_izq(raiz_actual);
                    }
                }

            }else{
                console.log("Dato Existente");
            }

            raiz_actual.altura = this.altura_maxima(this.altura(raiz_actual.der),this.altura(raiz_actual.izq))+1;
            return raiz_actual;
        }else{
            raiz_actual = nuevo;
            return raiz_actual;
        }
    }

    altura(nodo){
        if(nodo != null){
            return nodo.altura;
        }else{
            return -1;
        }
    }

    altura_maxima(h1,h2){
        if(h2>=h1){ 
            return h2;
        }else{
            return h1;
        }

    }

    //ROTACIONES
    r_izquierda(nodo){
        let aux = nodo.izq;
        nodo.izq= aux.der;
        aux.der = nodo;
        nodo.altura = this.altura_maxima(this.altura(nodo.der),this.altura(nodo.izq)) +1;
        aux.altura = this.altura_maxima(nodo.altura.altura,this.altura(nodo.izq))+1;
        return aux;
    }

    r_derecha(nodo){
        let aux = nodo.der;
        nodo.der= aux.izq;
        aux.izq = nodo;
        nodo.altura = this.altura_maxima(this.altura(nodo.izq),this.altura(nodo.der)) +1;
        aux.altura = this.altura_maxima(nodo.altura.altura,this.altura(nodo.der))+1;
        return aux;
    }

    r_izq_der(nodo){
        nodo.izq = this.r_derecha(nodo.izq);
        let aux = this.r_izquierda(nodo);
        return aux;
    }

    r_der_izq(nodo){
        nodo.der = this.r_izquierda(nodo.der);
        let aux = this.r_derecha(nodo);
        return aux;
    }


    preorden(raiz_actual){
        if(raiz_actual != null){
            console.log(raiz_actual.dato);
            this.preorden(raiz_actual.izq);
            this.preorden(raiz_actual.der);
        }
    }

    inOrden(raiz_actual){
        if(raiz_actual != null){
            this.inOrden(raiz_actual.izq);
            console.log(raiz_actual.dato);
            console.log("altura= "+(this.altura(raiz_actual.der)-this.altura(raiz_actual.iz)))
            this.inOrden(raiz_actual.der);
        }
    }

    postOrden(raiz_actual){
        if(raiz_actual != null){
            this.postOrden(raiz_actual.izq);
            this.postOrden(raiz_actual.der);
            console.log(raiz_actual.dato);
        }
    }

    Buscar(raiz_actual, nombre){
        if(raiz_actual != null){
            if (raiz_actual.nombre_pelicula == nombre){
                return raiz_actual
            }else{
                return this.Buscar(raiz_actual.izq, nombre) != null ? this.Buscar(raiz_actual.izq, nombre) : this.Buscar(raiz_actual.der, nombre)
            }
        }
        return null
    }

    generarDot(){
        let cadena="digraph arbol {\n";
        cadena+= this.generar_nodos(this.raiz);
        cadena+="\n";
        cadena+=this.enlazar(this.raiz);
        cadena+="\n}";

        console.log(cadena);
        d3.select("#Lienzo1").graphviz()
            .engine("dot")
            .width(1000)
            .height(1000)
            .dot(cadena)
            .render();
    }

    generar_nodos(raiz_actual){ 
        let nodos ="";
        if(raiz_actual != null){
            nodos+= "n"+raiz_actual.dato+"[label=\""+raiz_actual.nombre_pelicula+"\"]\n";
            nodos+=this.generar_nodos(raiz_actual.izq);
            nodos+=this.generar_nodos(raiz_actual.der);
        }
        return nodos;
    }

    enlazar(raiz_actual){
        let cadena="";
        if(raiz_actual != null){
            cadena += this.enlazar(raiz_actual.izq);
            cadena += this.enlazar(raiz_actual.der);
            if(raiz_actual.izq != null){
                cadena+="n"+raiz_actual.dato + "-> n"+raiz_actual.izq.dato+"\n";
            }
            if(raiz_actual.der != null){
                cadena+="n"+raiz_actual.dato + "-> n"+raiz_actual.der.dato+"\n";
            } 
        }
        return cadena;
    }
}

export let arbol = new avl();