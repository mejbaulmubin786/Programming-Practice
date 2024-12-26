// -------------------------------------------------------------------------------------------Page-322
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

// -------------------------------------------------------------------------------------------Page-103

// -------------------------------------------------------------------------------------------Page-103
