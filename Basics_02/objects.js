//two ways to declare objects 
// 1--> literal
//2--> constructor ki tarah 

// singleton : constructor se banega toh singleton banega literal se nahi ..


const mysym= Symbol("key1")// declaration of a symbol

//object literals..

const jsuser={
    name:"amitesh",// system by default name ko string ki tarah leta hain..
    age:29,
    loc:"jhansi",
    "full_name":'amitesh pandey',// cannot be accesed by using dot method.
    email: "abc@gmail.com",
    [mysym]:"mykey1",
}//yahi hai object here is key value pair

// how to access objects
console.log(jsuser["email"]);
console.log(jsuser.email);  // these are two ways 
// these are two ways , but using this way we can access thee values witten 
// //, but using this way we can access thee values witten " " in key place eg..

console.log(jsuser["full_name"]);



// console.log(jsuser[mysym]);// use of symbol..

// jsuser.email="amitesh@gmail.com"
// console.log(jsuser.email);
// // Object.freeze(jsuser)  // now the value of the object cannot be modified.....
// jsuser.email="sh@gmail.com"
// console.log(jsuser.email);

jsuser.greeting = function(){
    console.log("hello user");
}
jsuser.greetingtwo = function(){
    console.log(`hello user, ${this.full_name}`);
}

console.log(jsuser.greeting());

console.log(jsuser.greetingtwo());



