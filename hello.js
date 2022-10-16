//my comments
let a = 10;
let b = 20;
let result = a + b;
console.log(result);

function culc(a, b, sign) {
    let res;
    if(sign == "+") {
        res = a + b
    }    
    return res
}

console.log(culc(2, 4, "+"));