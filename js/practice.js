console.log("start")

let value= [1,2,3,4,5];
let squaredArray=value.map((val)=>val*val);
console.log(squaredArray);




let arr=[10,20,30,40,50];
let stringarray=arr.map(num=>num.toString());
console.log(stringarray);

let arr1=[5,12,8,130,44];
const results=arr1.filter(arr1=>arr1>10)
console.log(results);

let arr2=[15,22,19,8,31];
let vvv=arr2.filter((val)=>val%3==0);
console.log(vvv);

let arr3=[100,200,300,400]
let res=arr3.reduce((prev,curr,index,arr3)=>prev+curr+0);
console.log(res);

let arry=[1,3,5,8,10];
const evennumbers=arry.filter(num=>num%2===0);
console.log(evennumbers);

let num = [2,3,4]
let product=num.reduce(function(pre,curr){
    return pre*curr;
})
console.log(product);

let a=[5,10,15,20]
a.sort((a,b)=>b-a)
console.log(a)

let bava=[5,10,15,20];
let small=bava.reduce(
    (num,min)=> num<min?num:min
);
console.log(small);

let n=[{id:1},{id:2},{id:3}]
let id=n.filter((val)=>{
    if(val.id==3) return val
})
console.log(id);

let user=[
{name:"jhon",age:23
},
{name:"jane",age:30}
]



let Number=[2,4,6,8];
let even=Number.every(num=>num%2==0);
if(even)
{
    console.log("given numbers are even");
}
else{
console.log("given number are odd");
}
let arr8=[1,2,3,4,5];
let count=arr8.filter(num=>num>2).length;
console.log(count);


let b=

