// "hello" first and waits for 3 seconds
// and then prints "world"
/*
function callback() {
  console.log("world");
}
setTimeout(callback, 3000);
*/

setTimeout(function(){
    console.log("world");
  },
  3000
);

console.log("hello");