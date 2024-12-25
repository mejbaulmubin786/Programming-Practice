// -------------------------------------------------------------------------------------------Page-146
function esvar() {
  if (true) {
    var a = 5;
  }

  console.log("Value: " + a);
  console.log(`Value: ${a}`);
}

esvar();

/*
function eslet() {
  if (true) {
    let a = 5;
  }

  console.log("Value: " + a);
  console.log(`Value: ${a}`);
}

eslet();
*/

{
  let a = 5;
  let b = 10;
  const pi = 3.1416;
  console.log(a + b + pi);
}

let name = "rubel";
let age = "32";
{
  let name = "Mejbaul Mubin";
  let age = "35";
  var university = "University of the People";
  console.log(
    `I'm ${name}. And I am ${age} year's old. I am a student of ${university}`
  );
}

console.log(
  `I'm ${name}. And I am ${age} year's old. I am a student of ${university}`
);

// -------------------------------------------------------------------------------------------Page-165
const lex5 = {
  aFunc: function () {
    //console.log("-----------");
    console.log(this);
    return function () {
      //console.log("-----------");
      console.log(this);
    };
  },
};

lex5.aFunc()();

const mubin = ["Mejbaul", "Mubin", "Rubel", "Mejbaul Mubin"];

const [name6, age6, nikname, fullname] = mubin;

console.log(name6);
console.log(age6);
console.log(nikname);
// -------------------------------------------------------------------------------------------Page-165
var numbers = [1, 2, 3, 4];

function calculate(a, b, c, d) {
  console.log("Sum: " + (a + b + c + d));
}

calculate();

calculate.apply(null, numbers);

calculate(...numbers);
console.log("----------------");
