let score="33abc"

console.log(typeof score);

let valueinnumber = Number (score) //type conversion

console.log(typeof valueinnumber); // here 33abc bhi number main convert ho gya hain.
console.log( valueinnumber); // output NaN , not a number 


// "33"--> 33,
// "33abc"--> NaN
// true --> 1 , false --> 0 and vice versa
// " "--> false
//"amitesh"--> true on conversion 


let isloggedin=1
let booleanisloggedin= Boolean(isloggedin)// converted to true 
console.log(booleanisloggedin);

