// this keyword refers to current context

const user={
    username:"amitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, hi you are welcome to the website `)// here we use this keyword so that it can refer to the current context .....
        // console.log(this)
    }

}
// user.welcomeMessage()
// user.username="sammy " // yahan pr context change kardiya isliye value bhi sammy print hogyi hain

// user.welcomeMessage()

console.log(this)// o/p {} empty obj abhi hmm node env main hai toh global ka kuch context nhi hai 

// SAME LIKHNE PR BROWSER PR WINDOW OBJ MILTI HAI coz window obj hi global hain browser main .// interview question

// this jo hai as OBJECT ke under hi kam kar raha hai fn ke under nhi kar raha 

function chai() {
    const username="amitesh"
    console.log(this.username)// ab undefined o/p de raha hain
}
chai()



// ***************** Arrow Function ***********************

const useddr =  ()=>{                    // arrow function
    let username="amitesh"
    console.log(username);
}
useddr()
const addtwo= (n1,n2) =>{
    return(n1+n2)
} 

console.log(addtwo(3,4));
// 2 way of declaring arrow function....IMPLICIT RETURN ----------> return nhi likhna hota hain

// const addthree=(n1,n2,n3) => n1+n2+n3         
const addthree=(n1,n2,n3) => ({username:"amitesh"}) // object ko return karne ke liye parenthhesis lagaya jata hain
// console.log(addthree(2,2,2));