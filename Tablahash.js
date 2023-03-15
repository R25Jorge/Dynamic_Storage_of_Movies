class NodoCategoria{
    constructor(id_categoria, company){
        this.id_categoria = id_categoria;
        this.company      = company;
        this.siguiente    = null;
        
    }
  }
  
  // LISTA
  class ListTH{
    constructor(){
        this.head = null;
    }
  
    addCategory(id_categoria, company){
        var nuevo = new NodoCategoria(id_categoria, company);
        nuevo.siguiente = this.head;
        this.head = nuevo;
    }
  
    searchCategory(id_categoria){
        var search = this.head;
        while(search != null){
            if(search.id_categoria ==  id_categoria){
                return true;
            }
            search = search.siguiente
        }
        return false;
    }
  
  }
  
  
  
  // Class Nodo of Table Hash
  class NodoTH{
    constructor(data){
        this.data = data;
        this.next = null;
        this.listaL = new ListTH();
  
    }
  
  }
  
  // Class table Hash
  class Table_Hash{
    constructor(){
        this.cabeza = null;
        this.indexTH();
    }
  
    add(id_categoria, company){
        var indice = this.IsearchindexTH(id_categoria % 20);
        if(indice.listaL.searchCategory(id_categoria) == false  ){
            indice.listaL.addCategory(id_categoria, company)
        }
    }
  
    indexTH(){
        for(let i=0; i<20; i++){
            var nuevo = new NodoTH(i);
            if(this.cabeza==null){
                this.cabeza = nuevo                
            }else{
                var temp = this.cabeza
                while(temp.next!= null){
                    temp = temp.next;
  
                }
                temp.next = nuevo
            }
        }
        
    }
  
    IsearchindexTH(index){
        var temp = this.cabeza;
        while(temp != null){
            if(temp.data== index){
                return temp;
            }
            temp =  temp.next;
        }
        return null;
    }
  
    graficadora() {
        let str = "";
        let temp = this.cabeza;
        let count = 0;
        let rand = 0;
        let rowInfo = "{rank=same;";
        while (temp) {
            str += "Head" + count + " [label=\"Head: " + temp.data  + "\"];\n";
            rowInfo += "Head" + count + ";";
            temp = temp.next;
            count++;
        }
        temp = this.cabeza;
        str += "Head" + 0;
        count = 1;
        temp = temp.next;
        while (temp) {
            str += " -> Head" + count;
            temp = temp.next;
            count++;
        }
        str += ";\n" + rowInfo + "};\n";
  
        temp = this.cabeza;
        count = 0;
        rand = 0;
        while (temp) {
            let temp_ = temp.listaL.head;
            if (temp_ != null) {
                str += "Head" + count + " -> List" + rand + ";\n";
            }
            while (temp_) {
                str += "List" + rand + " [label=\" List: " + temp_.id_categoria + "\n" + temp_.company + "\"];\n";
                if (temp_.siguiente != null) {
                    str += "List" + rand + " -> List" + (rand+1) + ";\n";
                }
                temp_ = temp_.siguiente;
                rand++;
            }
            temp = temp.next;
            count++;
        }
        return str;
    }
  
    graph() {
        let str = "digraph structs\n{\nrankdir=\"LR\"\nlabel=\"Tabla Categorias\"\nnode [shape=box];\n";
        str += this.graficadora();
        str += "}";
        console.log(str)
        d3.select("#Lienzo1").graphviz()
            .engine("dot")
            .width(1500)
            .height(1500)
            .dot(str)
            .render();
    }
  
  }
  
  export let tablaH = new Table_Hash();