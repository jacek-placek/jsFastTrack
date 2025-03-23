// task no. 2
alert("hi there from an external file ;)")

// task no. 3
let a;
let b;

a = 159;
b = "a string";

alert('declared varabiles are: ' + a + ' and ' + b);

a = b;

alert('new values: a = ' + a + ', b = ' + b);

// task no_color. 4
const obj = {
    string: 'a string in the object',
    num: 753,
    bool: true,
    notDefined: undefined,
    empty: null
}

// task no. 5

let isAdult = confirm("Are you adult?");
console.log("isAdult = " + isAdult);

// task no. 6

let firstName = "Jacek";
let lastName = "Aumüller";
let group = "Fast Track JS";
let birthYear = 1976;
let isMarried = true;
let undefinedVar;
let nullVal = null;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof group);
console.log(typeof birthYear);
console.log(typeof isMarried);
console.log(typeof undefinedVar);
console.log(typeof nullVal);

console.log(birthYear);
console.log(isMarried);
console.log(firstName + ", " + lastName + ", " + group);

// task no. 7
function mockHash(password) {
    return '*'.repeat(password.length);
}

let login = prompt("Enter login.");
let email = prompt("enter yer email.");
const pswrd = prompt("Enter your password.");
const fakeHash = mockHash(pswrd);


alert(`Dear ${login}, yer email is ${email} and yer password is ${fakeHash}`);

// task no. 8

let givenValue = prompt("Enter a number:");
let secondsInHour = 0;
let secondsInDay = 0;
let secondsInMonth = 0;

function secondsCalculator(factor) {
    secondsInHour = factor * 60 * 60;
    secondsInDay = factor * 8 * 60 * 60;
    secondsInMonth = factor * 30 * 8 * 60 * 60;
}

secondsCalculator(givenValue)

alert(`There are ${secondsInHour} seconds in ${givenValue} hours`);
alert(`There are ${secondsInDay} seconds in ${givenValue} days`);
alert(`There are ${secondsInMonth} seconds in ${givenValue} months`);
