console.log("hello world");
let name = 'ram'

console.log("name");
console.log(name);


let skills = ["HTML",1,2,3,true,["Hii",25,26,68],{
    name : "Ram",
    age : 35,
    place : "kovai"
}] //array
console.log(skills[6].place);

let s;

console.log(skills[4]);
console.log(skills[3]);
console.log(skills[1]);

let a = null;
console.log(a);

console.log(s);


const user = {
    name : "Ram",
    age : 35,
    place : "kovai"
}
console.log(user.name);


let table = 8;
for(let i =1;i<=10;i++){
    // template literals or string literals 
    console.log(`${i}*${table}=${i*table}`);
    
}

let str =  "World"
// string array

for(let index in str){
    console.log(index,str[index]);
    // return the index in the array/string
    }

for(let val of str){
    console.log(val);
    // return the actual values
}

for (const val of skills) {
    console.log(val);
    
}
let age = 18;
if(age >= 18){
    console.log("Eligible to Vote");
    
}else if (true){

}else{

}