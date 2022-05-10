//what is a function?-
/*functions are one of the fundamental building blocks in javascript,so basically it is a set of statements that performs a task or calculates a value.     function syntax- function name(){ this is the body of the function,we put statements/logic } */

//e.g
/*function greet(name){
                    //name is a parameter of the greet function,a function can have more then one parameter. 
    console.log('Hello' + name);
}
      //this is a argument
greet('Yanique');
 */

//What is parseInt?
/* It takes a string and converts it to a numbers */

//What is prompt?
/** prompt is one of the methods that are built into Javascript, in the browser */

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
