var selectABox = document.getElementById("box1");
console.dir(selectABox);

var newParagraph = document.createElement("p");
newParagraph.textContent = "My name is Mejbaul Mubin";

selectABox.insertAdjacentElement("afterbegin", newParagraph);
