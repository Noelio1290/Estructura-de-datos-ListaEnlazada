class Lista {
    constructor(){
        this.head = null
    }

    add =(nombre,apellido)=>{
        if(this.head === null){
            this.head = new Nodo(nombre,apellido)
        } else {
            let refe = this.head
            while(refe.next !== null){
                refe = refe.next
            }
            refe.next = new Nodo(nombre,apellido)
        }
    }
};


class Nodo {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.next = null;
    }
};

let list = new Lista()
console.log(list)

list.add("Noel","Zamora")
list.add("Monserrat","Gordillo")
list.add("Armando","Lezama")
list.add("Jorge","Yedra")
console.log(list)
console.log(list.head.next)