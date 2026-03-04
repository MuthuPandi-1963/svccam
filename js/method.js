let arr  = [1,2,3,4,5]

console.log(arr[3]);

arr[4] =10

console.log(arr);

arr[2]++;

console.log(arr);

arr.push(20)
arr.push(30)

console.log(arr);

console.log(arr.pop());

console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(100)
console.log(arr);


let newarr = arr.slice(1,4)

console.log(newarr);
console.log(arr);


let newarr1= arr.splice(1,2)
console.log(newarr1);
console.log(arr);



let num = [1,2,3,4,5,6]

let newNum = num.forEach(
    (value,index,arr)=>{
        console.log(value,index,arr[2]);
        return value+2    
    }
);
console.log(newNum);

let newNum1 = num.map(
    (value,index,arr)=>{
        console.log(value,index,arr[2]);
        return value*2
    }
);
console.log(newNum1);


// let evenNum = num.map(
//     (val)=>{
//         if(val%2==0){
//             return val
//         }
//     }
// )
// console.log(evenNum);

let evenNum = num.filter(
    (val)=>{
        if(val%2==0)return val
    }
)
console.log(evenNum);
evenNum.push(5)

console.log(evenNum.some(val=>val%2==0));
console.log(evenNum.every(val=>val%2==0));

let arr2  = [5,7,3,2,0,6,8,0,10,11,12,13]
// let fruits = []
console.log(arr2.sort((a,b)=>a-b));
console.log(arr2.sort((a,b)=>b-a));



console.log(arr2.reduce(
    (prev,curr,index,arr)=>prev+curr,0));
