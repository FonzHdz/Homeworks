class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    ifLeaf() {
        if (this.children.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

class NaryTree {
    constructor() {
        this.root = null;
    }

    search(value, node = this.root) {
        if (!this.root) {
            return null;
        }

        if (this.root.value === value) {
            return this.root;
        } else {
            const children = node.children;

            const inChildren = children.find (item => item.value === value);
            if (inChildren) {
                return inChildren;
            } else {
                let hasChild;
                children.forEach(item => {
                    if (hasChild) {
                        return;
                    }

                    hasChild = this.search(value, item);
                });

                return hasChild;
            }
        }
    }

    insert (value, parent) {
        const newNode = new Node(value);

        if (!parent) {
            if (!this.root) {
                this.root = newNode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search (parent);
            parentNode.children.push (newNode);
        }
    }

    preOrder(node = this.root) {
        if (!node) {
            return;
        }

        console.log(node.value, node.children);

        node.children.forEach(element => {
            this.preOrder(element);
        });
    }

    postOrder(node = this.root) {
        if (!node) {
            return;
        }

        node.children.forEach(element => {
            this.postOrder(element);
        });

        console.log(node.value);
    }

    inOrder(node = this.root) {
        if (!node) {
            return;
        }

        if (node.children.length === 0)  {
            console.log(node.value);
        } else {
            this.inOrder(node.children[0]);
            console.log(node.value);

            for (let i = 1; i < node.children.length; i++) {
                this.inOrder(node.children[i]);
            }
        }
    }
}

let FamilyTree = new NaryTree();

class Person {
    constructor (name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
    } 
}

let persona1 = new Person("Carmen", "18-Noviembre-1942")
let persona2 = new Person("Alfonso Luis", "24-Octubre-")
let persona3 = new Person("Eduardo", "02-Enero-1972")
let persona4 = new Person("Gustavo", "26-Octubre-1969")
let persona5 = new Person("Adriana", "19-Julio-1996")
let persona6 = new Person("Alfonso Miguel", "22-Enero-2005")

FamilyTree.insert(persona1);
FamilyTree.insert(persona2, persona1);
FamilyTree.insert(persona3, persona1);
FamilyTree.insert(persona4, persona1);
FamilyTree.insert(persona5, persona2);
FamilyTree.insert(persona6, persona2);

console.log("Preorder:");
FamilyTree.preOrder();

console.log("\nPostorder:");
FamilyTree.postOrder();

console.log("\nInorder:");
FamilyTree.inOrder();