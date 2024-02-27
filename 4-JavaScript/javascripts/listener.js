function foo(){
  let d = new Date();
  document.getElementById("output").innerHTML += d.toString() + "<br>";
  // document.getElementById("output").innerHTML += d + "<br>";
  // document.getElementById("output").innerHTML += Date() + "<br>";

}
function baz(){
  document.getElementById("output").innerHTML += "mouse over <br>";
}

// Node that we need "load" event becasue we put javascript inside <head> not at the end of <body>
// since browser will read javascript before html (e.g., getElementById("button")), 
// javascript event handler doesn't know "button" id. 
// So, this wrapping will wait until document "loaded" to register the events
window.addEventListener("load", function(event) {
    document.getElementById("button").addEventListener("click",foo);
    document.getElementById("button").addEventListener("mouseover",baz);
});

  
/*
When using the addEventListener() method, the JavaScript is separated from the HTML markup, 
for better readability and allows you to add event listeners even when you do not control the HTML markup. 
You can easily remove an event listener by using the removeEventListener() method
*/