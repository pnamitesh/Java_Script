// Primitive 


// 7 types : string num bool null undefined  symbol  bigint

// Non premitive 

// Arrays , Objects , functions   ( reference type )

// JS is statically typed or dynamically typed??? find answer...

const id = Symbol('123')
const anotherid=Symbol('123')

console.log(id === anotherid); // false

// ********** Arrays ************

const heros=["shaktiman","ironman","jat"];

//        objects

let myobj ={
    name: "amitesh",
    age: 21,
}

//    function

const myfunction =function print(){
    console.log("hello duniya");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (primitive) , Heap (non-primitive)

let yname="amit"
let anoname=yname 
anoname="pandey"
console.log(yname);// here in stack actual vakue nahi di jaati balki iski copy di jaati hain is liye anoname main value change karne ke baad bhi n=change nhi huyi  
console.log(anoname);

let user= {               // ye heap main jaayega puura        
    email: "abc@gmai.com",// ye heap main jaayega puura 
    upi:"user@sbi",       // ye heap main jaayega puura  
}

let usertwo= user
usertwo.email="abhi@gmail.com"
console.log(usertwo.email);  //   yahan o/p same ayeag cpz ref ke through values hamne dono ki change kar di hain
console.log(user.email);       // yahan o/p same ayeag cpz ref ke through values hamne dono ki change kar di hain   