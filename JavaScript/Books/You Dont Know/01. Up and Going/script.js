// --------------------------------------------------------------------------------------------Page-11
let a = "42";
let b = Number(a);
console.log(a === b);
// --------------------------------------------------------------------------------------------Page-50
function User() {
  var username, password;

  function doLogin(user, pw) {
    username = user;
    password = pw;
  }

  var publicAPI = {
    login: doLogin,
  };
  return publicAPI;
}
var fred = User();

fred.login("Fred", "12Battery34!");
console.log("-------------------------");
function foo() {
  console.log(this.bar);
}

var bar = "global";
var obj1 = {
  bar: "obj1",
  foo: foo,
};

var obj2 = {
  bar: "obj2",
};

foo();
obj1.foo();

foo.call(obj2);
new foo();

// -------------------------------------------------------------------------------------------Page-107
