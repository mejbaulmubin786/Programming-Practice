//----------------------------------------------------------------------------------40 Introduction to DOM
/*
DOCUMENT OBJECT MODEL (DOM)

When a web page is loaded, the browser creates a Document Object Model of the page. With the HTML DOM, JavaScript can access and change all the elements of an HTML document.   

JavaScript can:

Change all the HTML elements in the page
Change all the HTML attributes in the page
Change all the CSS styles in the page
Remove existing HTML elements and attributes   
Add new HTML elements and attributes
React to all existing HTML events in the page
Create new HTML events in the page
*/

//----------------------------------------------------------------------------------41 Finding Elements By DOM
document.write(
  "<br>" + "<br>" + "<strong>41 Finding Elements By DOM</strong>" + "<br>"
);
var MyElement = document.getElementById("MyId");
MyElement.innerHTML = "Is it really my First Dom practice";

var MyElements = document.getElementsByClassName("MyClass");
MyElements[0].innerHTML = "Eid Mobarak";

var MyPageElements = document.getElementsByName("MyName");
MyPageElements[2].innerHTML = "Use By Name";
//---------------------------------------------------------------------------------------42 HTML DOM Document
function Demo() {
  var info = document.cookie;
  document.getElementsByTagName("p")[2].innerHTML = info;
}

function Demo2() {
  var info = document.domain;
  document.getElementsByTagName("p")[1].innerHTML = info;
}

function Demo3() {
  document.open("text/html", "replace");
  document.write("<h2>Mejbaul Mubin</h2>");
  document.close();
}
//---------------------------------------------------------------------------------------43 HTML DOM Document
document.write(
  "<br>" + "<br>" + "<strong>43 HTML DOM Document</strong>" + "<br>"
);
