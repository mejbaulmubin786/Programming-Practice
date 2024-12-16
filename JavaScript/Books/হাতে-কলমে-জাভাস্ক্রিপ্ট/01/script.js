// --------------------------------------------------------------------------------------------Page-21
//document.write("<br>" + "<br>" + "<strong>Page-21</strong>" + "<br>");

console.log("Mejbaul Mubin");
console.log(a);
var a = 20;
console.log("Hellow world from Inside!");
var m;
console.log(m); //Undefined data
var someThing = null;
console.log(someThing);

// --------------------------------------------------------------------------------------------Page-32
var text = "How" + "are you?";
var welcomeMsg = "Hello," + text;
console.log(welcomeMsg);

console.log(typeof welcomeMsg);

var myName = "Mejbaul";
myName = "Mejbaul Mubin";
console.log(myName);
someThing = "Zonayed Ahmed";
console.log(typeof someThing);
someThing = 10;
console.log(typeof someThing);
// --------------------------------------------------------------------------------------------Page-49
var b = 10;
var c = a > b ? 10 : 30;
console.log(c);

if (3 > 5) {
  console.log("Yeah I will be excited!");
}

// --------------------------------------------------------------------------------------------Page-55

var whatDay = "Sunday";
var Holyday = null;
if (whatDay === "Friday" || whatDay === "Saturday") {
  console.log("weekend");
} else if (
  (whatDay === "Sunday" ||
    whatDay === "Monday" ||
    whatDay === "Tuesday" ||
    whatDay === "Wednesday" ||
    whatDay === "Thursday") &&
  Holyday == null
) {
  console.log("My Working day");
} else {
  console.log("Public Holyday");
}

let min;
if ((a < b || a == b) && (a < c || a == c)) {
  min = a;
} else if (b < a && b < c) {
  min = b;
} else {
  min = c;
}

console.log(min);

var Day = "Fryday";

switch (Day) {
  case "Sunday":
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Working day");
    break;
  case "Fryday":
  case "Saturday":
    console.log("Weekend");
    break;
  default:
    console.log("Not a Day");
}
// --------------------------------------------------------------------------------------------Page-59
//for loop
for (let i = 0; i < 10; i++) {
  console.log("Go " + i + " step");
}

//While loop
let x = 8;
while (x < 10) {
  console.log("Inside the while Loop");
  x++;
}
console.log("Outsite the while loop");

//do-while loop
let num = 8;
do {
  console.log("Inside the loop, num is: " + num);
  num += 1;
} while (num < 10);

console.log("Outsite do-while the loop");
//break
console.log(`break statement`);
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(`i is now at: ${i}`);
}
//continue
console.log(`continue statement`);
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(`${i} is skipped`);
    continue;
  }
  console.log(`i is now at: ${i}`);
}
// --------------------------------------------------------------------------------------------Page-64
let name = new Array(
  "Mejbaul",
  "Mubin",
  "Rubel",
  "Mejbaul Mubin",
  "Mejbaul Mubin (Rubel)"
);

console.log(name);
console.log(name[3]);
console.log(name.length); // dot notation
console.log(name["length"]); // bracket notation
name.push("Sanzida"); //in last
console.log(name);
name.push("Islam");
console.log(name);
name.pop("Islam"); //from last
console.log(name);
name.shift(); //from first
console.log(name);
name.unshift("Mejbaul"); //in first
console.log(name);
let indx = name.indexOf("Mejbaul Mubin");
console.log(indx);
// --------------------------------------------------------------------------------------------Page-71
let student = {
  firstName: "Mejbaul",
  lastName: "Mubin",
  age: 35,
  mobile: "01676880506",
  university: "University of the people",
};

console.log(student);

console.log(student.firstName);
console.log("Full name: " + student.firstName + " " + student.lastName);
student.birtyear = function (year) {
  return year - this.age;
};

console.log(student.birtyear(2024));
// --------------------------------------------------------------------------------------------Page-75
console.log("------------------");
for (item in student) {
  console.log(student[item]);
}

console.log("------------------");
for (item in student) {
  console.log(student.item);
}
// --------------------------------------------------------------------------------------------Page-79
console.log("-------------------function----------------");
function changeValue(fun) {
  console.log("Value of a inside function before changing: " + fun);
  fun = 10;
  console.log("Value of a inside function before changing: " + fun);
}

let fun = 100;

console.log("Value of a before changing function is applied: " + fun);
changeValue(fun);
console.log("Value of a after changing function is applied: " + fun);
// --------------------------------------------------------------------------------------------Page-89
// -------------------------------------------------------------------------------------------Page-103
function aParentFunc(a) {
  return function (b) {
    console.log(`Sum: ${a + b}`);
  };
}

aParentFunc(5)(5);

(function aDemofunc() {
  console.log("Mejbaul Mubin");
})();
// -------------------------------------------------------------------------------------------Page-103
