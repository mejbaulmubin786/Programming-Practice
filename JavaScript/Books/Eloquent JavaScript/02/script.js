// --------------------------------------------------------------------------------------------Page-21
/*
let mood = "light";
document.write(mood);
document.write("<br>");
mood = "dark";
document.write(mood);

let one = 1;
two = 2;

document.write(`first binding = ${one} and second binding = ${two}`);
document.write("<br>");
document.write(Math.max(2, 4) + 100);

document.write("<br>");
document.write(Math.min(2, 4) + 100);

document.write("<br>");

let theNumber = Number(prompt("Pic a number"));
document.write("Your number is the square root of " + theNumber * theNumber);
*/
// --------------------------------------------------------------------------------------------Page-36

let n = prompt("Enter a number: ");

for (i = 0; i < n; i++) {
  for (j = 0; j <= i; j++) {
    document.write("#");
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (i = 1; i <= n; i++) {
  document.write("#".repeat(i));
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (let i = 1; i <= n * 2; i++) {
  for (let j = 1; j <= n * 2; j++) {
    if ((i % 2 != 0 && j % 2 == 0) || (j % 2 != 0 && i % 2 == 0)) {
      document.write("&nbsp;&nbsp;");
    } else {
      document.write("#");
    }
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (let i = 1; i <= n * 2; i++) {
  for (let j = 1; j <= n * 2; j++) {
    // Check whether to print space or "#"
    if ((i + j) % 2 === 0) {
      document.write("#");
    } else {
      document.write("&nbsp;&nbsp;");
    }
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (let i = 1; i <= n * 2; i++) {
  // Generate a row pattern using a combination of "#" and spaces
  let row = "";
  if (i % 2 === 0) {
    row = "&nbsp;&nbsp;#".repeat(n);
  } else {
    row = "#&nbsp;&nbsp;".repeat(n);
  }
  document.write(row + "<br>");
}

// --------------------------------------------------------------------------------------------Page-49

// --------------------------------------------------------------------------------------------Page-55

// --------------------------------------------------------------------------------------------Page-59

// --------------------------------------------------------------------------------------------Page-64

// --------------------------------------------------------------------------------------------Page-71

// --------------------------------------------------------------------------------------------Page-75

// --------------------------------------------------------------------------------------------Page-79

// --------------------------------------------------------------------------------------------Page-89
// -------------------------------------------------------------------------------------------Page-103

// -------------------------------------------------------------------------------------------Page-103
