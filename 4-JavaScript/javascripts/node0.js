function foo(){
    let abc = document.getElementById("latestComment");
    let list = document.getElementsByTagName("div");
    console.log(abc);
    console.log(list);
    console.log(list[0]);
    console.log(list[1]);

  }
  window.addEventListener('load',foo);  //newer way
//document.body.onload=foo; //older way
//window.onload=foo;        //older way

/*
let declare variables that are limited to the scope of a block statement (newer style)
var declares variables globally (older style)
Use let and const. Do no use var if possible
Variables defined with const cannot be Reassigned and have Block Scope
*/