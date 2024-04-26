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

//********************* Operations *********************

// let value =3
// let negvalue= -value
// console.log(negvalue);
// console.log(2**8);

let str1= "hey"
let str2="amit"

let str3=str1+str2
console.log(str3);

console.log("1"+2);// op 12
console.log(1+"2");// op 12
console.log("1"+2+2);//122
console.log(2+2+"1");//41     string baad main likhi hai isliye 
console.log(+true);//1