const myArray = [1,2,3,4];
myArray.push(5)

const mySecondArray = [...myArray];
mySecondArray.push(6)

console.log(myArray, mySecondArray)

const array1 = [1,2,3];
const array2 = [4,5,6];

const last = array1.findLast(x => x>2);
console.log(last)

const every = array2.every(x => x>3)
console.log(every);