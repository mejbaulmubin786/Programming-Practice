// -------------------------------------------------------------------------------------------Page-107

// -------------------------------------------------------------------------------------------Page-107
console.log(this);
console.log(this === window);
function helloThis() {
  console.log(this);
}

helloThis();

function helloNewThis() {
  "use strict";
  console.log(this);
}

helloNewThis();

let myCustomObj = {
  name: "Mejbaul Mubin",
  age: 36,
  job: "Jovern Ment Job",
  msg: function () {
    console.log(this);
  },
};

myCustomObj.msg();

let myCustomObj2 = {
  name: "Mejbaul Mubin",
  age: 36,
  job: "Jovern Ment Job",
  anotherObj: {
    name: "Mejbaul Mubin Ruble",
    msg: function () {
      console.log("My name is: " + this.name);
    },

    value: function () {
      console.log(this);
    },
  },
};

myCustomObj2.anotherObj.msg();
myCustomObj2.anotherObj.value();
