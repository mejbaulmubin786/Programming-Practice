let box1 = document.getElementById("box1");
let x = document.createElement("p");

x.innerHTML = "Hello World!";

box1.insertAdjacentElement("afterbegin", x);
let y = document.createElement("p");

y.innerHTML = "New Hello World!";
box1.insertAdjacentElement("beforeend", y);

let z = document.createElement("p");
z.innerHTML = "New New Hello World!";
let box2 = document.getElementById("box2");

box2.insertAdjacentElement("beforebegin", z);
box1.appendChild(box2);
