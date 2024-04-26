
const myarr= [0,1,2,3,4,5,]
const myheros=["shaktiman","ironman"]

const myarr2 = new Array(1,2,3,4)// another way to declare arrays ..
console.log(myarr[1]);
console.log(myarr2);

// Array method

myarr.push(6)
console.log(myarr);// it adds value in array 
myarr.pop(6)
console.log(myarr);
myarr.unshift(9) // add karta hain aagey
console.log(myarr);

const newarr= myarr.join()/////// important 
console.log(myarr);
console.log(newarr);// join has converted the array into string ..

//slice & splice ;;; splice manipulate the original array slice main range include nahi hoti but splice main hoti hain ...myarr