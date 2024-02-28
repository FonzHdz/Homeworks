class Stack {
    constructor () {
        this.stack = {};
        this.count = 0;
    }


    push(element) {
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }

    pop() {
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek() {
        return this.stack[this.count - 1];
    }

    size() {
        return this.count;
    }

    print() {
        console.log(this.stack);
    }
}

const pila = new Stack();

class Book {
    constructor (name, isbn, author, editorial) {
        this.name = name;
        this.isbn = isbn;
        this.author = author
        this.editorial = editorial
    } 
}

let seguir = "S";

while (seguir == "S"){
    let name = prompt("Nombre:");
    let isbn = prompt("ISBN:");
    let author = prompt("Autor:");
    let editorial = prompt("Editorial:");

    let libro = new Book(name, isbn, author, editorial);

    pila.push(libro);

    seguir = prompt("¿Continuar? [S/N]")
    console.log(pila.size());
}

pila.print();