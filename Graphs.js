class Graph {
    constructor () {
        this.nodes = [];
        this.adjList = {}
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjList[node.name] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1.name].push(node2);
        this.adjList[node2.name].push(node1);
    }

    printGraph(){
        console.log(this.adjList);
    }
    
    searchNode(value) {
        if (!this.nodes.length) {
            return;
        }
        return this.nodes.find(item => item === value);
    }

    printAdjacency(value) {
        if (this.searchNode(value)) {
            console.log(this.adjList[value.name])
        } else {
            return;
        }
    }
}

let Grafo = new Graph();

class Person {
    constructor (name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class City {
    constructor (name) {
        this.name = name;
    }
}

let ciudad1 = new City("Palmira");
let ciudad2 = new City("Cali");
let ciudad3 = new City("Bogotá");

let persona1 = new Person("Carlos", 20, ciudad1);
let persona2 = new Person("Jose", 19, ciudad1);
let persona3 = new Person("Sebastián", 17, ciudad2);
let persona4 = new Person("Isabel", 21, ciudad2);
let persona5 = new Person("Valeria", 23, ciudad3);
let persona6 = new Person("Camilo", 18, ciudad3);

Grafo.addNode(ciudad1);
Grafo.addNode(ciudad2);
Grafo.addNode(ciudad3);

Grafo.addNode(persona1);
Grafo.addNode(persona2);
Grafo.addNode(persona3);
Grafo.addNode(persona4);
Grafo.addNode(persona5);
Grafo.addNode(persona6);

Grafo.addEdge(ciudad1, persona1);
Grafo.addEdge(ciudad1, persona2);
Grafo.addEdge(ciudad2, persona3);
Grafo.addEdge(ciudad2, persona4);
Grafo.addEdge(ciudad3, persona5);
Grafo.addEdge(ciudad3, persona6);

Grafo.printAdjacency(ciudad1);