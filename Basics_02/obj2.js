//const tinderuser= new Object()

const tinderuser={}

tinderuser.id="123"
tinderuser.name="amit"


console.log( tinderuser);

const regularuser={
    fullname:{
        userfullname:{         // nested objects 
            firstname:"amitesh",
            lastname:"pandey"
        }
    }
}

console.log(regularuser.fullname.userfullname.lastname)

// combine two objects

const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}

// const obj3 = Object.assign({},ob1,ob2)// this is used to combine two objects .

// console.log(obj3);


const obj3={...ob1,...ob2}// spread operator mostly used..
console.log(obj3);

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.keys(ob1));// ye keys dedeta hain array main...

const course={
    coursename:"js",
    price:999,
    courseinstructor:"hitesh",
}

const {courseinstructor: ci}= course
// we have use DESTRUCTURING  to reduce the length of the key & so on......
console.log(ci);

// ****************** API's **********************

// backend se koi values aati hain usko kaise likte hain 
// values aati hain json main like

// {
//     name:"amitesh",
//     coursename:"js",
//     "price":"FRee"
// }
// kai baar api's array ke form main bhi milta hai 
// [{},{},{}]






