
// this is shorted js program 
// console.log(window==this); // ans is 'true'


/*
var a = 10;

function b(){
    var x  = 100;
    console.log(x);
}

console.log(a);
console.log(window.a);
console.log(this.a);
//console.log(x);//error here because x is not in Global Space Memory

*/

var a ;
console.log(a);
a=10;

if(a === undefined){
    console.log("a is undefined");
}
else{
    console.log("a is not undefined");
}

console.log(a);
//console.log(x); // gives an error because it is not defined in execution context