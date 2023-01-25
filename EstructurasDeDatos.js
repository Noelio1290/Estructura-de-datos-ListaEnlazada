class Lista {
    constructor(){
        this.head = null
    };

    add = (nombre,apellido) => {
        if(this.head === null){
            this.head = new Nodo(nombre,apellido)
        } else {
            let refe = this.head
            while(refe.next !== null){
                refe = refe.next
            }
            refe.next = new Nodo(nombre,apellido)
        }
    };

    addBigList = (arreglo) => {
        for(let i=0; i<=arreglo.length-1; i++){
            let persona = arreglo[i]
            let nombre = persona.nombre
            let apellido = persona.apellido
            this.add(nombre,apellido)
        }
    };
    
    print = () => {
        let refe =this.head
        while(refe){
            console.log(refe.nombre,refe.apellido)
            refe = refe.next
        }
    };

    getPerson(nombre,apellido) {
        let refe = this.head;
        while (refe) {
          if (refe.nombre === nombre && refe.apellido ===apellido ) {
            console.log("si esta en la lista!!")
            return refe;
          }
          refe = refe.next;
        }
        console.log("no esta en la lista!!")
        return null;
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

let arreglo = [
    {
        nombre: "Noel",
        apellido: "Zamora"
    },
    {
        nombre: "Monse",
        apellido: "Gordillo"
    },
    {
        nombre: "Armando",
        apellido: "Lezama"
    },
    {
        nombre: "Jorge",s
        apellido: "Yedra"
    },
];
list.addBigList(arreglo,list.add)
console.log(list)
list.print()
list.getPerson("Jorge","Yedra")
list.getPerson("Jorge","zambrano")


//list.add("Noel","Zamora")
//list.add("Monserrat","Gordillo")
//list.add("Armando","Lezama")
//list.add("Jorge","Yedra")
//console.log(list)
//console.log(list.head.next)

list.getPerson('noel')