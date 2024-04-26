const marvel_heros=["spiderman","ironman","cap_america"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);// array ke under array aagya hain
// same result with concate
// console.log(marvel_heros[3][1])//flash mil jayega o/p main..


// const allheros = marvel_heros.concat(dc_heros);
// // allheros becomes ["spiderman", "ironman", "cap_america", "superman", "flash", "batman"]
// console.log(allheros);


// spread operator used to join two arrays 

const allheros= [...marvel_heros,...dc_heros]
console.log(allheros);

// falt fn subarry ko flat ek hi arry maiin likh deta hain

// Array.from("amitesh") string to array convert kardega ....



