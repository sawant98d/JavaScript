
var a = 100;  // creates in Global scope
let b = 200; // creates in Script scope
const c = 300;
{
    // Compound Statement
    var a = 10;   // shawdowing of the var  a :: Refers to the global scope var a
    let b = 20;   // here b and c are created in Block Scope
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(c);


var k = 10;
{
    let k = 40; // Illegel shadowing
}


const z  = 20;
{
    const z = 100;
    {
        const z = 200;
        console.log(a); // It follows the lexical code chain pattern:)
    }
}