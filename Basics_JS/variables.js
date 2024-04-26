"use strict";//treat all JS code as newer version....

console.log("Amitesh pandey");

// variables let & constant.....

const account_id=13233   // values cannot be changed 
let acc_email="abc@gmail.com"
var acc_pass="12345"
    accountcity="delhi";

let accstate;  //undefined  output dega.....

//account_id=32434//not allowed
console.log(account_id);
//  if i want to print multiple things then i can use console.table .

console.table([acc_email,acc_pass,accountcity,accstate]);

// do not use var coz of issue in block scope and functional scope....