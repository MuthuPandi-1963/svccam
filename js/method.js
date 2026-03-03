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



let num = [1,2,3,4,5,6,"hii"]

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
