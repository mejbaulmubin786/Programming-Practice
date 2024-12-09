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
