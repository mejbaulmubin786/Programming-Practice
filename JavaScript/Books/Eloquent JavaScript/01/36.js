let x = prompt("Enter a number: ");

for (let i = 0; i < x; i++) {
  for (let j = 0; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("-----------2---------");
for (let i = 0; i <= x; i++) {
  for (let j = 0; j <= x; j++) {
    if ((j % 2 != 0 && i % 2 == 0) || (i % 2 != 0 && j % 2 == 0)) {
      document.write("*");
    } else {
      document.write("  ");
    }
  }
  document.write("<br>");
}
