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
