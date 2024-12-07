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
