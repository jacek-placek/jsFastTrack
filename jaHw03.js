// Task no. 1 *********************************************************************************

const arr = [2, 3, 4, 5];
// console.log(arr.length);
let product = 1;

for(i = 0; i < arr.length; i++){
    product = arr[i] * product;
}

console.log(product);

// while loop implementation
let y = 0;
let productWhile = 1;

while(y < arr.length){
    productWhile = arr[y] * productWhile;
    y++;
}

console.log(productWhile);

// Task no. 2 *************************************************************************************

for (z = 0; z <= 15; z++){
    if (z % 2 === 0){
        console.log(`${z} is even`);
    }else{
        console.log(`${z} is odd`);
    }
}

// Task no. 3 *************************************************************************************

const randArr = [];

function randArray(a){
    for(s = 0; s < a; s++){
        randArr.push(Math.floor(Math.random() * 501));
    }
}

randArray(5);

console.log(randArr);

// Task no. 4 **************************************************************************************

let a = Number(prompt('Enter value a:'));
let b = Number(prompt('Enter value b:'));
result = 0;

function raiseToDegree(a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return "Invalid value - both inputs must be integers";
    }
    return a ** b;

}

result = raiseToDegree(a, b);

alert(`The result is: ${result}`);

// Task no. 5 ****************************************************************************************

function findMin() {
    if (arguments.length === 0) {
        return undefined;
    }

    let min = arguments[0];

    for (let i = 1; i < arguments.length; i++){
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }

    return min;
}

console.log(findMin(12, 14, 4, -4, 0.2));
console.log(findMin(4, 5, 78, -5, -9, 0.6, -9.6));

// Task no 6 ********************************************************************************************

function findUnique(arr) {
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])){
            return false;
        }
        seen.add(arr[i]);
    }

    return true;
}

console.log(findUnique ([1, 2, 3, 5, 3]));
console.log(findUnique ([1, 2, 3, 5, 11 ])); 

// Task no 7 **********************************************************************************************

function lastEelement(arr, count) {
    if (count === undefined) {
        return arr[arr.length - 1];
    }

    return arr.slice(-count);
}

console.log(lastEelement([3, 4, 10, -5]));
console.log(lastEelement([3, 4, 10, -5], 2));
console.log(lastEelement([3, 4, 10, -5], 8));

// Task no 8 **********************************************************************************************

let input = 'i love java script';

function convertToUpperCase(str) {
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

let output = convertToUpperCase(input);

console.log(output);