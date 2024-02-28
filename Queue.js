class Queue {
    constructor () {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print () {
        return this.queue;
    }
}

const atmQueue = new Queue();

class Person {
    constructor (name, arrivedTime) {
        this.name = name;
        this.arrivedtime = arrivedTime;
    } 
}

let seguir = "S";

while (seguir == "S"){
    let name = prompt("Nombre:");
    let arrivedTime = prompt("Tiempo de llegada:");

    let persona = new Person(name, arrivedTime);

    atmQueue.enqueue(persona);

    seguir = prompt("¿Continuar? [S/N]")
    console.log(atmQueue.size());
}

atmQueue.print();