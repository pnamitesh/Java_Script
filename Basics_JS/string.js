const repocount=50
const name ="amitesh"
// another way to decklare string is 

const gamename = new String('amiteshpandey')

console.log(name+repocount+"value");
// bad practise intead use backticks

console.log(`hello my name is ${name} and my repo count is ${repocount}`);// string interpulation

console.log(gamename[2])
console.log(gamename.length)
console.log(gamename.toLocaleUpperCase())// but it does not change the orignal string ...
console.log(gamename.charAt(3))
console.log(gamename.indexOf('t'));

const newstring= gamename.substring(0,4)
console.log(newstring);

const anostr = gamename.slice(-1,4)
console.log(anostr);

// using split fn we can convert string to array 
