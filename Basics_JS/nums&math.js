const score= 100
console.log(score);// normal print kardega 

const balance = new Number(100)
console.log(balance); // ye wala specially point karke batayega ki number 100 hain ..

console.log(balance.toString().length);// number of digits pata chl gya isse ..

console.log(balance.toFixed(2));// value after the decimal point 

othnumber=1123.308
console.log(othnumber.toPrecision(3)); //value e ki power mein dedeta hain
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')); // indian sys ke hisab se comma lagjayengey ..


console.log(Number.MAX_VALUE);// many more function for dsa purpose ..



// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++
// math is by default present in javascript ...

console.log(Math.round(4.6)); //ceil,floor,abs,

console.log(Math.floor((Math.random()*10)+1));//is value 1 se 0 ke beech main hi aati hain isliye hm isko 10 se multiply kar dete hain +1 to remove 0 coz 0+1 =1...

const min =10
const max=20

console.log(Math.floor((Math.random()*(max-min+1))+min ))// 10 -20 ke beech main ayegi


