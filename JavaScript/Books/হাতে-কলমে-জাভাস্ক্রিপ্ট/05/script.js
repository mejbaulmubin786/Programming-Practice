// -------------------------------------------------------------------------------------------Page-322
/*
console.log(document);
console.log(document.querySelector("#box1"));

let box1 = document.querySelector("#box1");
console.log(box1);
console.dir(box1);
let box2 = document.getElementById("box2");

let box = document.querySelector(".box");
let allbox = document.querySelectorAll(".box");

let boxNodeList = document.querySelectorAll(".box");
let boxArray = Array.prototype.slice.call(boxNodeList);
console.log(boxNodeList);
console.log(boxArray);
let boxHTML = document.getElementsByClassName("box");
console.log(boxHTML);
let tagSelector = document.querySelector("div");
console.log(tagSelector);
console.log(document.querySelectorAll("h4, p, ul"));
console.log(document.getElementsByTagName("h4"));
*/
// -------------------------------------------------------------------------------------------Page-335

let selectABox = document.getElementById("box1");
console.dir(selectABox);
let newParagraph = document.createElement("p");
console.log(newParagraph);
let name = "Mejbaul Mubin";
newParagraph.textContent = "His name is: " + name + "!";
console.log(newParagraph);
console.log(newParagraph.textContent);
let newDiv = document.createElement("div");
newDiv.innerHTML = "<p>DOM Manipulation is Fun!-Mubin</p>";
console.log(newDiv);
console.log(newDiv.innerHTML);
newDiv.classList.add("new-div");
console.log(newDiv);

// -------------------------------------------------------------------------------------------Page-344
let box1 = document.getElementById("box1");
box1.insertAdjacentElement("afterbegin", newDiv);
box1.insertAdjacentElement("beforeend", newParagraph);
