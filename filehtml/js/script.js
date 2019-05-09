var b;
b="hello world";
console.log(b);
function a() {
    console.log("called the function");
}
a();
 var a="10";
 var b=10;
var c="false";
var d="null";
var e;
// (=== : its check both datatype and value,== :only its check value)
if(a===b){
    console.log("executed");
}else{
    console.log("not executed");
}
"5"+5;
0+null;
// function firstnametolastname(firstname,lastname){
//     console.log("hello",afreen " "+kouser);
// }
// firstnametolaastname("afreen","kouser");

function marks(num){
    if(num>=85){
    console.log("distinction");
      }  else if((num>=60) && (num<=84)){
        console.log("first class");
       } else if((num>=45) && (num<=60)){
        console.log("second pass");
       }
        else{
        console.log("fail");
    }
    }
    var num=prompt("enter the marks");
marks(num);