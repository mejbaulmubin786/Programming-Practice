// 2. Hello Word
document.write("Mejbaul Mubin");

// 3. JS Comment
// Single line Comment

/*
 multi line comment
*/

// 4. Variables
var x = "Mejbaul Mubin";
document.write(x + "<br>");

// 7. if Else Statement
document.write("<br>" + "<br>" + "<strong>if Else Statement</strong>" + "<br>");
var age = 20;
var city = "Noakhali";
if (age > 30 && city == "Noakhali") {
  document.write("I hope you are married" + "<br>");
} else if (age > 12) {
  document.write("How many lovers do you have?" + "<br>");
} else {
  document.write("I hope you are single" + "<br>");
}

// 8. Switch Case
document.write("<br>" + "<br>" + "<strong>Switch Case</strong>" + "<br>");
switch (true) {
  case age > 30 && city == "Noakhali":
    document.write("I hope you are married" + "<br>");
    break;
  case age > 12:
    document.write("How many lovers do you have?" + "<br>");
    break;
  default:
    document.write("I hope you are single" + "<br>");
}
document.write("<br>" + "<br>");
// A program to suggest an activity based on the day of the week
let day = "Friday";

switch (day) {
  case "Monday":
    document.write("Start the week strong! Time to hit the gym.");
    break;
  case "Tuesday":
    document.write("It's Taco Tuesday! Treat yourself to some tacos.");
    break;
  case "Wednesday":
    document.write("Midweek grind! Focus on your tasks.");
    break;
  case "Thursday":
    document.write("Almost there! Plan something fun for the weekend.");
    break;
  case "Friday":
    document.write("It's Friday! Relax and watch a movie.");
    break;
  case "Saturday":
    document.write("Weekend vibes! Go out with friends.");
    break;
  case "Sunday":
    document.write("Rest day! Prepare for the upcoming week.");
    break;
  default:
    document.write("Invalid day! Please enter a valid day of the week.");
}

document.write("<br>" + "<br>");

switch (day) {
  case "Sunday":

  case "Monday":

  case "Tuesday":

  case "Wednesday":

  case "Thursday":
    document.write("Working Day");
    break;
  default:
    document.write("Weekend");
}

// 9. Basic for loop & 10. Loop break continue
document.write("<br>" + "<br>" + "<strong>9. Basic For loop</strong>" + "<br>");

for (let i = 0; i < 10; i++) {
  if (i % 3 == 0) {
    continue;
  }
  document.write(i + "<button>Submit</button>" + "<br>");
}
document.write("<br>" + "<br>");
for (let i = 0; i < 10; i++) {
  if (i != 0 && i % 3 == 0) {
    break;
  }
  document.write(i + "<button>New Submit</button>" + "<br>");
}

// 11. While loop
document.write("<br>" + "<br>" + "<strong>11. While Loop</strong>" + "<br>");

let i = 0;
while (i < 10) {
  if (i % 3 == 0) {
    i++;
    continue;
  }
  document.write(i + "<button>While Submit</button>" + "<br>");
  i++;
}

document.write("<br>" + "<br>");
let j = 0;
while (j < 10) {
  if (j != 0 && j % 3 == 0) {
    j++;
    break;
  }
  document.write(j + "<button>New Submit</button>" + "<br>");
  j++;
}

//12. Do while loop
document.write("<br>" + "<br>" + "<strong>12. Do While Loop</strong>" + "<br>");

let m = 0;
do {
  document.write(m + " " + "Roll Disk" + "<br>");
  m = Math.floor(Math.random() * 7);
} while (m != 6);

//13 JavaScript function
document.write(
  "<br>" + "<br>" + "<strong>13, 14, 15 JavaScript function</strong>" + "<br>"
);

function addTwoNumber() {
  var num1 = 20;
  var num2 = 30;
  var num3 = num1 + num2;
  document.write("The sum of two number " + num3);
}

addTwoNumber();
document.write("<br>");
function addTwoNumber1(num1, num2) {
  var num3 = num1 + num2;
  document.write("The sum of two number " + num3);
}

addTwoNumber1(5, 10);

document.write("<br>");
function addTwoNumber2(num1, num2) {
  var num3 = num1 + num2;
  return "The sum of two number " + num3;
}

document.write(addTwoNumber2(51, 10));
//16 JavaScript function
document.write(
  "<br>" + "<br>" + "<strong>16 JavaScript Object</strong>" + "<br>"
);

let person = {
  name: "Mejbaul Mubin",
  age: "35",
  height: 5.8,
  profetion: "job",
};

document.write(person["name"] + "<br>");
//or
document.write(person.name);

//17 JavaScript Array
document.write(
  "<br>" + "<br>" + "<strong>17 JavaScript Array</strong>" + "<br>"
);

let category = [
  "Allium",
  "Beverages",
  "Dairy Bread",
  "Eggs",
  "Fruits",
  "Grocery",
  "Staples",
];

document.write(category[3] + "<br>");
document.write(category);
document.write("<br>" + "<br>");
for (let i = 0; i < category.length; i++) {
  document.write(category[i] + "<br>");
}

//19 For In Loop Over Array
document.write(
  "<br>" + "<br>" + "<strong>19 For In Loop Over Array</strong>" + "<br>"
);

for (let item in category) {
  document.write(category[item] + "<br>");
}

//20 For In Loop Over Object
document.write(
  "<br>" + "<br>" + "<strong>20 For In Loop Over Object</strong>" + "<br>"
);

let person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

// Using a for in loop to iterate over the object
for (let property in person2) {
  document.write(`${property}: ${person2[property]}<br>`);
}

//-----------------------------------------------------------------------21 Array Concat And Array Form
document.write(
  "<br>" + "<br>" + "<strong>21 Array Concat And Array Form</strong>" + "<br>"
);

let arr1 = ["A", "B", "C"];
let arr2 = ["D", "E", "F"];

let arr3 = arr1.concat(arr2);

document.write(arr3 + "<br>");

let arr = Array.from("Mejbaul Mubin");
document.write(arr);

//--------------------------------------------------------------------------------------22 Array Filter
document.write("<br>" + "<br>" + "<strong>22 Array Filter</strong>" + "<br>");

let num = [30, 12, 44, 50, 16, 40, 70, 15, 20, 35];

let result = num.filter(function (item) {
  return item > 30;
});

document.write(result);

//23 Array Find Find Index
document.write(
  "<br>" + "<br>" + "<strong>23 Array Find Find Index</strong>" + "<br>"
);

let resultFind = num.find(function (item) {
  return item > 30;
});

document.write(resultFind);
document.write("<br>");

let resultFindIndex = num.findIndex(function (item) {
  return item > 30;
});

document.write(resultFindIndex);
document.write("<br>");
//------------------------------------------------------------------------------------24 Array ForEach Method
document.write(
  "<br>" + "<br>" + "<strong>24 Array ForEach Method</strong>" + "<br>"
);

num.forEach(function (item) {
  document.write(item + "<br>");
});

//-------------------------------------------------------------------------------25 Array Includes And IndexOf
document.write(
  "<br>" + "<br>" + "<strong>25 Array Includes And IndexOf</strong>" + "<br>"
);

var result2 = num.includes(20);

document.write(result2 + "<br>"); // output: true
let result3 = num.indexOf(20);
document.write(result3 + "<br>"); // output: if true output index number or output -1

//----------------------------------------------------------------------------------26 Array Pop Push Reverse
document.write(
  "<br>" + "<br>" + "<strong>26 Array Pop Push Reverse</strong>" + "<br>"
);
num.reverse();
document.write(num + "<br>");
num.push(22); // ‍after adding new element it returen length.
document.write(num + "<br>");
num.push(85, 1, 13, 14, 17, 21, 18, 19, 23, 25, 37);
document.write(num + "<br>");
num.pop();
document.write(num + "<br>");
//------------------------------------------------------------------------------------27 Array Slice And Sort
document.write(
  "<br>" + "<br>" + "<strong>27 Array Slice And Sort</strong>" + "<br>"
);

document.write(num + "<br>");
var result4 = num.sort();
document.write(num + "<br>");
var result4 = num.sort().reverse();
document.write(num + "<br>");
var result5 = num.slice(11, 13); // 11 নং টু 13 নং

document.write(num + "<br>");
document.write(result5 + "<br>");
//-----------------------------------------------------------------------------------------28 Array splice
document.write("<br>" + "<br>" + "<strong>28 Array splice</strong>" + "<br>");
num.splice(1, 2); // index 1 to 2 element;
document.write(num + "<br>");
document.write("----------------" + "<br>");
num.splice(0, 0, 50); // add 50 as a first element
document.write(num + "<br>");
num.splice(1, 0, 70); // add 70 in index 1
document.write(num + "<br>");
//-----------------------------------------------------------------------------------------29 String Methods
document.write("<br>" + "<br>" + "<strong>29 String Methods</strong>" + "<br>");
var country = "Bangladesh ";
document.write(country.charAt(5) + "<br>");
var district = "Noakhali";
document.write(country.concat(district) + "<br>");
document.write(country.indexOf("a") + "<br>"); //if given character is not exist in the string return -1; and it
document.write(country.lastIndexOf("a") + "<br>");
//-----------------------------------------------------------------------------------------30 String Methods
document.write("<br>" + "<br>" + "<strong>30 String Methods</strong>" + "<br>");
