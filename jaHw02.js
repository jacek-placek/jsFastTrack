// task 1 ***********************************************************************************************************

let x = 1;
let y = 2;

let res1 = `${x}${y}`;

console.log(res1);
console.log(typeof res1);

let bln = Boolean(x);
let res2 = `${bln}${y}`;

console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x !== y);

console.log(res3);
console.log(typeof res3);

let res4 = x + y + parseInt("a");

console.log(res4);
console.log(typeof res4);

// task 2 **********************************************************************************************************

let userNumber = prompt('Enter a number');

if(userNumber >= 0 && userNumber % 2  === 0){
    console.log('Entered number is positive and even');
}else{
    console.log(`Entered number is: ${userNumber} and is not even or not positive` );
}

if(userNumber % 7 === 0) {
    console.log('Entered number is a multiplication of 7');
}else{
    console.log(`Entered number is: ${userNumber} and is not a multiplication of 7`);
}

// task 3 **********************************************************************************************************

const newArr = [];

newArr[0] = 5;
newArr[1] = "A string";
newArr[2] = true;
newArr[3] = null;

console.log(newArr);
console.log(newArr.length);

newArr[4] = prompt("Enter any cahracter");

console.log(newArr[4]);

newArr.shift();

console.log(newArr);

// task 4 ***********************************************************************************************************

const cities = ["Rome", "Lviv", "Warsaw"];

console.log(cities.join(" * "));

//task 5 ************************************************************************************************************

let dimA = parseFloat(prompt("Enter first valid dimension of the triangle: "));
let dimB = parseFloat(prompt("Enter second valid dimension of the triangle: "));
let dimC = parseFloat(prompt("Enter third valid dimension of the triangle: "));

//check if data is valid
if(dimA <= 0 || dimB <= 0 || dimC <= 0){
    alert("The value must be > 0")
}else if(dimA + dimB < dimC || dimB + dimC < dimA || dimC + dimA < dimB){
    alert("incorrect values")
}else if(isNaN(dimA) == true || isNaN(dimB) == true || isNaN(dimC) == true){
    alert("Incorrect data type")
}else{
    alert(`Given values: ${dimA}, ${dimB} and ${dimC} are valid!`)
}

// display triangle area:
function triangleArea (a, b, c){
    let s = (a + b + c)/2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area
}

console.log(triangleArea(dimA, dimB, dimC));

// check if a triangle is rectangular

let dims = [dimA, dimB, dimC].sort((x, y) => x - y);
let [x, y, z] = dims;

//console.log(dims);
 
if(Math.abs(z ** 2 - (x ** 2 + y ** 2)) < 1e-10){
    console.log('This triangle is rectangular');
}else{
    console.log('This triangle is not rectangular')
}

let countedArea = triangleArea(dimA, dimB, dimC)

alert(`The area of given triangle is: ${countedArea.toFixed(3)}`);

// task 7 ****************************************************************************************************

let currentTime = new Date().getHours();

// console.log(currenTime);

if(currentTime > 23 || currentTime <= 5) {
    console.log("Good nite");
}else if(currentTime > 5 && currentTime <= 11){
    console.log("Good moaning")
}else if(currentTime > 11 && currentTime <= 17){
    console.log("Good day")
}else{
    console.log("Good evening")
};

switch(true) {
    case (currentTime > 23 || currentTime <= 5):
        console.log("Good nite");
        break;
    case (currentTime > 5 && currentTime <= 11):
        console.log("Good myrning");
        break;
    case (currentTime > 11 && currentTime <= 17):
        console.log("Good day");
        break;
    case (currentTime > 17 && currentTime <= 23):
        console.log("Good evening");
        break;
}