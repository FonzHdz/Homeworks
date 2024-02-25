class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(node) {
        const newNode = new Node(node)

        if (!this.head) {
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }

        this.tail = newNode;
    }

    peek(value, current = this.head){
        if(this.head === null){
            return false
        }

        if(current != null){
            if(current.value === value){
                return true
            }else{
                return this.peek(value, current.next)
            }
        }

        return false;
    }

    size (current = this.head, acum = 1) {
        if (this.head === null) {
            return 0
        }

        if (current.next !== null){
            return this.size(current.next, acum = acum + 1)
        }

        return acum
    }

    remove (value, current = this.head) {
        if(this.head === null) {
            return false
        }

        if (this.head.value === value) {
            this.head = this.head.next
            this.head.prev = null;
            return this.head;
        }
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log (`Valor ${node.value.title} ${node.value.description} | Next: ${node.next?.value.title || null} ${node.next?.value.description || null}`)
            node = node.next;
        }
    }
}

class TODO {
    constructor (title, description) {
        this.title = title;
        this.description = description;
    } 
}
var list = new LinkedList();

let seguir = "S";

while (seguir == "S"){
    let title = prompt("Título:");
    let desc = prompt("Descripción:");

    let tarea = new TODO(title, desc)

    list.append(tarea);

    seguir = prompt("¿Continuar? [S/N]")
    list.size();
}

list.print();
list.size();