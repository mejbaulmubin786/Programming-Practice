// --------------------------------------------------------------------------------------------Page-21
/*
document.write("Mejbaul Mubin");
console.log(a);
var a = 10;
console.log("My name is Mejbaul Mubin");
name = "Mejbaul Mubin";
document.write("<br>");
document.write(name);
// --------------------------------------------------------------------------------------------Page-32
/*
text = "Hi" + " My name is " + "Mejbaul Mubin.";
document.write(text);
document.write("<br>");
document.write("<br>");
document.write(typeof name);
*/
// --------------------------------------------------------------------------------------------Page-49
/*
var a = 10;
var b = 20;
var c = a > b ? 100 : 200;
console.log(c);
document.write("<br>");
document.write(name === "Mejbaul Mubin" ? "You are Admin" : "Who are you");

name = "User";
document.write("<br>");
document.write("<br>");
if (name === "Mejbaul Mubin") {
  document.write("You are the owner of the company");
} else if (name === "Rubel") {
  document.write("is Mejbaul Mubin's neak name is Mejbaul Mubin.");
} else {
  document.write("How are you?");
}

age = 36;
document.write("<br>");
if (age < 25) {
  document.write("I think you are a student");
} else if (age < 35) {
  document.write("are you married");
} else {
  document.write("You are child or you are above 35");
}
*/
// --------------------------------------------------------------------------------------------Page-56
/*
let x = prompt("Enter first number: ");
let y = prompt("Enter second number: ");
let z = prompt("Enter third number: ");
let long = 0;
document.write(Math.max(x, y, z));

document.write("<br>");
let nlong =
  x >= y
    ? x >= z
      ? (long = x)
      : (long = z)
    : y >= z
    ? (long = y)
    : (long = z);

document.write(nlong);

document.write("<br>");
function findLargestNumber(num1, num2, num3) {
  let largest;
  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
  return largest;
}

document.write(findLargestNumber(x, y, z));

document.write("<br>");
for (let i = 0; i < 10; i++) {
  document.write(i);
  document.write("<br>");
}
*/
// --------------------------------------------------------------------------------------------Page-64
/*
let newArray = [
  "Databases 1",
  "Databases 2",
  "Software Engineering 1",
  "Software Engineering 2",
  "Advanced Networking and Data Security",
  "Systems & Application Security",
  "Big Data",
  "Analysis of Algorithms",
  "Operating Systems 1",
  "Operating Systems 2",
  "Mobile Applications",
  "Comparative Programming Languages",
  "Communications and Networking",
  "Web Programming 1",
  "Web Programming 2",
  "Data Structures",
  "Computer Systems",
  "Programming 2",
  "Programming 1",
  "Calculus",
  "Discrete Mathematics",
  "College Algebra",
  "Programming Fundamentals",
  "Data Mining and Machine Learning",
  "Computer Graphics",
];

function changeArr(newArray) {
  let x = 0;
  while (x < newArray.length) {
    document.write(x + 1 + ". " + newArray[x]);
    document.write("<br>");
    x++;
  }
}

changeArr(newArray);
document.write("<br>");
// To add and remove data from the end of an array.

newArray.push("Globalization");
changeArr(newArray);

document.write("<br>");

newArray.pop();
changeArr(newArray);

document.write("<br>");
// To add and remove data from the first of an array.
newArray.shift();
changeArr(newArray);

document.write("<br>");

newArray.unshift("Databases 1");
changeArr(newArray);

// to find item index number
document.write("<br>");
let index = newArray.indexOf("Systems & Application Security");
document.write("<br>");
document.write("<h2>The number of index is equal " + index + "</h2>");

// to remove item using index number
document.write("<br>");
newArray.splice(
  4, // index
  0, //  deleteCount
  "<b>Greek and Roman Civilization</b>", //item1
  "<b>Introduction to Environmental</b>", //item2
  "<b>Introduction to Psychology</b>" // //item13
);

changeArr(newArray);
document.write("<br>");

let som = newArray.splice(
  4, // index
  3 //  deleteCount
);

changeArr(som);
*/
// --------------------------------------------------------------------------------------------Page-64
let newObj = {
  "CS 2203": "Databases 1",
  "CS 3306": "Databases 2",
  "CS 2401": "Software Engineering 1",
  "CS 4403": "Software Engineering 2",
  "CS 4404": "Advanced Networking and Data Security",
  "CS 3340": "Systems & Application Security",
  "CS 3440": "Big Data",
  "CS 3304": "Analysis of Algorithms",
  "CS 2301": "Operating Systems 1",
  "CS 3307": "Operating Systems 2",
  "CS 4405": "Mobile Applications",
  "CS 4402": "Comparative Programming Languages",
  "CS 2204": "Communications and Networking",
  "CS 2205": "Web Programming 1",
  "CS 3305": "Web Programming 2",
  "CS 3303": "Data Structures",
  "CS 1104": "Computer Systems",
  "CS 1103": "Programming 2",
  "CS 1102": "Programming 1",
  "MATH 1211": "Calculus",
  "MATH 1302": "Discrete Mathematics",
  "MATH 1201": "College Algebra",
  "CS 1101": "Programming Fundamentals",
  "CS 4407": "Data Mining and Machine Learning",
  "CS 4406": "Computer Graphics",
};

document.write(newObj["CS 3440"]);
document.write("<br>");

newObj["POLS 1503"] = "Globalization";
document.write(newObj["POLS 1503"]);
// --------------------------------------------------------------------------------------------Page-89

// --------------------------------------------------------------------------------------------Page-75

// --------------------------------------------------------------------------------------------Page-79

// --------------------------------------------------------------------------------------------Page-89
// -------------------------------------------------------------------------------------------Page-103

// -------------------------------------------------------------------------------------------Page-103
