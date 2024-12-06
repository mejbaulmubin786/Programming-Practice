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
document.write("<br>" + "<br>" + "if Else Statement" + "<br>");
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
document.write("<br>" + "<br>" + "Switch Case" + "<br>");
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

// 9. Basic for loop
document.write("<br>" + "<br>" + "9. Basic For loop" + "<br>");

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

// 10. While loop
document.write("<br>" + "<br>" + "9. While Loop" + "<br>");

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
