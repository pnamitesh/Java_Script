// Immediately invoked function expression -------> IT IS USED BECAUSE


// 1. ----> Jo Fn   immediately execute ho jaaye 

// 2. ----> Global scope ke pollution se dikkat hoti hai kai baar toh usko resolve karne ke liye use kartey hain IIFE ko.. 




// function chai() 
// {
//     console.log("DB connected");
    
// }
// chai()

// here 2 parenthesis are there one for writing fn def and another for fn execution 

(function chai()  // named IIFE as Chai..
{                                               //    THIS IS SOMETHING KNOWN AS IIFE  ()()
    console.log("DB connected");
    
})();

(  (name)=> {    // here we write the parameter in the bracket ....this is no named IIFE
    console.log(`DB connected to ${name}`)
})(`amitesh`)// this work as argument 
