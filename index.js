
var a = 100;  // creates in Global scope
let b = 200; // creates in Script scope
{
    // Compound Statement
    var a = 10;   // showdowing of the var  a :: Refers to the global scope var a
    let b = 20;   // here b and c are created in Block Scope
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);