// for (let index = 0; index < 10; index++) {
//     console.log(index);

// }

// basics & all

// for , while & do while.......

// ******************* Higher order array loop ***********************

// for of , for each, for in .....

const arr=[1,2,3,4,5]
for (const i of arr) {        // no need of updation in this loop ye khud pata laga leta hain sabka 
    console.log(i);           // string ,array ,Object sab pe lagjata hain
}

// map

const map= new Map()      // it does not have duplicate values 
map.set('in','india')
map.set('fr','france')
console.log(map);

for (const key of map) {
    console.log(key);          // ismain puurey ka array miljayega but if hame iska key and value pair chahiye toh hmm ye bhi kar saktey hain... down examlple
}
for (const [key,value] of map) {
    console.log(key,":-",value);          
}

// Objects are not itterable using for of loop

//FOR IN LOOP IS USED TO ITERATE THROUGH OBJECTS.

//eg

const myobj={
    js:"javascript",
    cp:"c++",
    rb:"ruby",
}

for (const key in myobj) {
    console.log(myobj[key]);//  log ke under sirf key likhengey toh key print hogi if we want values then we write myobj[key];........

}

//map is is not itterable using for in loop

//loop array main inject hotey like like for each loop

const myarr=[1,2,2,3,4,4,5,5,6,,67]

myarr.forEach(function (num){  // ye fn call back fn hai toh ismain fn name nahi lihengey 
    console.log(num);
})

// DATABASE SE JO DATA AATA HAIN WO IS FORM MAIN AATA HAIN 
// [{},{},{}] HOW TO ACCESS IT ??????

const mydata=[
    {
        languagename:"javascript",
        langfilename:"js",
    },
    {
        languagename:"java",
        langfilename:"java",
    },
    {
        languagename:"python",
        langfilename:"py",
    }
]
mydata.forEach((item)=>{
console.log(item.languagename);
})                                        // Done 