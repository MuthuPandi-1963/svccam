function sqr(a){
    return a*a;
}
console.log(sqr(10));


const square=function(a){
    return a*a;
}
console.log(square(15));


const sq=(a)=>a*a;
console.log(sq(5));

 function mail(name,age){
    return name+age+"@gmail.com";
 }
 console.log(mail("santhosh",21))
 const area=(length,width)=>length*width;
    console.log(area(15,10));

function calc(op1,op2,op) {
    switch(op) {
        case '+':
            return op1 + op2;
        case '-':
            return op1 - op2;
        case '*':
            return op1 * op2;
        case '/':
            return op1 / op2;
    }

}

console.log(calc(12,23,'+'));
console.log(calc(12,23,'-'));
console.log(calc(12,23,'*'));
console.log(calc(12,23,'/'));

console.log("min element");
function minEle(arr){
    let m=arr[0];
    for(let i=0;i<arr.length;i++){
        if(m>arr[i]){
            m=arr[i];
        }
    }return m;
}
console.log(minEle([5,7,3,8,9]));
console.log(minEle([6,8,3,5,1,6]));
console.log(minEle([0,7,4,6,3]));
console.log(minEle([9,7,5,4,2,5,1]));



function capital(string){
    return string[0].toUpperCase()+string.slice(1)

}
console.log(capital("apple"))


