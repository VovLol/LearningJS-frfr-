
//  const f = sum;
//  f(5, 6);
//  const d = (c, u)=>{
//     let res = c * u;
//     console.log(` результат умножения ${res}`);
//  }

//  d(5, 20);


// let c = "глобик типиаиаиаиаиаиааиаиаиаиаи";

// function sum(a, b){
//     c = a +b;
//     console.log(`бля хуй  ${c}`);
//     if(c => 12){
//         let c = "Область дебила";
//         console.log(c);
//     }
//     return c;
// }
// sum(5, 7);
// console.log(c);

// let polkan = {
//     poroda : 'alabai',
//     speak: function() {
//         console.log(`Гав Гав  ${this.age}`)
//     },
//     age: 100,
// }

// // console.table(polkan);

// polkan.speak();


let ar = [2,7,4,9,12,33];
const filt = (a) => a > 5;
let f = ar.filter(filt);
console.log(f);

	
let users =[
{id:	1,
name:	"Leanne Graham",
username:	"Bret",
age: 25,
email:	"Sincere@april.biz",
address: {
street:	"Kulas Light",
suite:	"Apt. 556",
city:	"Gwenborough",
zipcode:	"92998-3874"}
},
{
   id:	2,
name:	"Ervin Howell",
username:	"Antonette",
age: 25,
email:	"Shanna@melissa.tv",
address	:{
street:	"Victor Plains",
suite:	"Suite 879",
city:	"Wisokyburgh",
zipcode:	"90566-7771"}
},
{

id:	3,
name:	"Clementine Bauch",
username:	"Samantha",
age: 12,
email:	"Nathan@yesenia.net",
address:	{
street:	"Douglas Extension",
suite:	"Suite 847",
city:	"McKenziehaven",
zipcode:	"59590-4157"}
},
]

1.

let res = users.filter(a => a.age == 25);
console.table(res);

let res2 = users.map(a => a.email);
console.table(res2);

let res3 = users.filter(n => {
    if(n.username.indexOf('a') == -1 && n.username.indexOf('A')== -1){
        return true;
    }
    return false;
}
 );
console.table(res3);

let res4 = users.map(a => a.address.street);
console.table(res4);
