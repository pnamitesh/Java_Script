function saymyname(){
    console.log("hello duniya");
}

// saymyname// akele ye function ka reference batata hain ki function wahan rahta hain\
//isliye hmm usmain () braces bhi lagatey hain..
saymyname()


// function sum(n1,n2){// parameters
//     console.log(n1+n2);
// }
// sum(3,4) // arguments 

// const result= sum(2,5)
// console.log("result:",result );// whyyy it is showing  " undefined "

// coz there is no return statement

function sum(n1,n2){// parameters
    return(n1+n2);
}
 // arguments 

const result2= sum(3,5)
console.log("result:",result2 );

// USE of spread operator 
function itemsincart(n1,n2,...num){// parameters
    return num;
}
 // isne array ke form main output dedeiya...

console.log(itemsincart(3,54.4,543,655,7,654));

// *********************** Passing Object & Array in a function *********************

const user={
    username:"amitesh",
    price:999,
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user) // direct bhi paas karsaktey thee

const arr=[200,300,400]

function arrr(getarr) {
    return (getarr[2]);
}

console.log(arrr(arr));





























