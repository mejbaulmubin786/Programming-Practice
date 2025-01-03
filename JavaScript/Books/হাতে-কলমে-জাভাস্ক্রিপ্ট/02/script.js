// -------------------------------------------------------------------------------------------Page-107
//"use strict";
document.write(this);
document.write("<br>");
document.write(this === window);

document.write("<br>");

function helloThis() {
  document.write(this);
}

helloThis();

function helloThisSM() {
  "use strict";
  document.write(this);
}
document.write("<br>");

helloThisSM();
document.write("<br>");
document.write("<br>");
var myCustomObj = {
  name: "Mejbaul Mubin",
  age: 35,
  job: "Student",
  msg: function () {
    document.write(this);
    console.log(this);
  },
};
document.write("--------------------------<br>");
myCustomObj.msg();
document.write("<br>--------------------------<br>");
document.write("<br>");
var myCustomObj2 = {
  name: "Mejbaul Mubin",
  age: 35,
  job: "Student",
  anotherObj: {
    name: "Mejbaul Mubin (Rubel)",
    age: 36,
    job: "Student",
    msg: function () {
      document.write("My name is : " + this.name);
      console.log("My name is : " + this.name);
    },
  },
};

myCustomObj2.anotherObj.msg();

var myCustomObj3 = {
  name: "Mejbaul Mubin",
  age: 35,
  job: "Student",
  msg: function () {
    document.write(this);
    console.log(this);
  },
};

document.write("<br>");
myCustomObj3.msg();

// -------------------------------------------------------------------------------------------Page-111
