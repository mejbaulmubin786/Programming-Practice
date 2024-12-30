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
let x = prompt("Enter first number: ");
let y = prompt("Enter second number: ");
let z = prompt("Enter third number: ");
let long = 0;
document.write(Math.max(x, y, z));

let nlong =
  x >= y
    ? x >= z
      ? (long = x)
      : (long = z)
    : y >= z
    ? (long = y)
    : (long = z);

document.write(nlong);

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

// ----------------------------0----------------------------------------------------------------Page-59

// --------------------------------------------------------------------------------------------Page-64

// --------------------------------------------------------------------------------------------Page-71

// --------------------------------------------------------------------------------------------Page-75

// --------------------------------------------------------------------------------------------Page-79

// --------------------------------------------------------------------------------------------Page-89
// -------------------------------------------------------------------------------------------Page-103

// -------------------------------------------------------------------------------------------Page-103
