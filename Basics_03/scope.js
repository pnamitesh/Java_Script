// {
//     // ye scope yahin hai 
// }
// var ki value block ke bahr bhii available hoti hai 
//  local and global scope are there

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}



const chai =  () => {
    let username = "hitesh"
    console.log(this);
}



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
// Basically yahan nested functions ka use karke ye bataya hain ki....
// child function parent function ka variable access kar sakta hain but parent nahi ...or 
// variable ek fn bhi store kar sakta hain pr ismain fn ko upr se call nahi karsakte see eg.. 

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()



