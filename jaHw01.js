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

// task no. 4
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
// let monthLength = 30;
let currentMonthLength = 0;

function getCurrentMonthDays(callback) {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysInMonth[1] = 29;
    }

    currentMonthLength = daysInMonth[month];

    const monthName = new Date(year, month).toLocaleDateString('default', {month: 'long'});

    console.log(`Current Month: ${monthName}`);
    
    callback();

}

function secondsCalculator(factor) {
    const numMonthLength = Number(currentMonthLength);
    console.log(numMonthLength);

    secondsInHour = factor * 60 * 60;
    secondsInDay = factor * 8 * 60 * 60;
    secondsInMonth = factor * numMonthLength * 8 * 60 * 60;

    alert(`There are ${secondsInHour} seconds in ${givenValue} hours`);
    alert(`There are ${secondsInDay} seconds in ${givenValue} days`);
    alert(`There are ${secondsInMonth} seconds in ${givenValue} months`);
}

getCurrentMonthDays(() => {
    secondsCalculator(givenValue)
})
