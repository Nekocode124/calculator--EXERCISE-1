function radius() {
  var a = parseInt(document.getElementById("area").value);
  //this add times the pie by the area
  var b = 3.14 * a * a;
  var c = 2 * 3.14 * a;
  alert("Your Area Is" + b);
  alert("Your Circumference is" + c);
}

function diam() {
  var d = parseInt(document.getElementById("diameter").value);
  var diameter = d * 2;

  alert("Your Diameter is " + diameter);
}

//Area of a Rectangle
//
var w, l, area;
w = parseInt(prompt("enter width"));
l = parseInt(prompt("enter length"));
area = w * l;
document.write("Your Width is" + w + "<br> ");
document.write("Your length is" + l + "<br>");
document.write("area of rectangle" + area, "<br>");

/*

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(Math.PI);
// expected output: 3.141592653589793

console.log(calculateCircumference(10));
// expected output: 62.83185307179586
*/
