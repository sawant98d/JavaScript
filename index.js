function x(){
    var a  = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z();


function z(){
    var a = 10;
    function y(){
        var b = 20;
        function x(){
            var c = 30;
            console.log(a);
            console.log(b);
        }
        x();
    }
    y();
}

z();