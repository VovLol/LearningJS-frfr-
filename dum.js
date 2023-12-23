/* let dogs = ['Bobik', 'Ayza', 'Tuskanchik', 'Alabai'];

[bo, ayz] = dogs;

console.log(bo, ayz);

[ayz, bo] = [bo, ayz];
console.log(bo, ayz);

let car = {
    wheel: "12w",
    accelerator: "top",
    color: "red",
};

let {color: r, wheel} = car;
console.log(r, wheel);
 */

let nigger ={
    slave: "Top",
    heart: "Free",
    fecals: "100",
};

let white_people ={
    heart: "Free",
    fecals: "100",
};

let a = 5; 
let b;
b =a;
console.log(`a = ${a} b= ${b}`);

b = 1;
console.log(`a = ${a} b= ${b}`);

// nigger = white_people;
// console.table(nigger);
// nigger.slave = "free";
// console.log("people are equal")
// console.table(nigger);
// console.log("also cool peopl");
// console.table(white_people);


// Dog.prototype.speak = function(){
//     console.log("Gaw");
// }

// class Dog {
//     constructor(age, Dname, weight, poroda){
//         this.age = age;
//         this.Dname = Dname;
//         this.weight = weight;
//         this.poroda = poroda;
//     };

//     speak(){
//         console.log("GawGaw");
//     };
// };

// let shar = new Dog(2, "Nigger", 5, "Ryzar ayza");
// shar.age = 1;

// console.table(shar);
// shar.speak();

class Staff{
    #userName;
    #age;
    constructor(uname, age){
        this.#userName = uname;
        this.#age = age;
    }

    getName(){
        console.log(this.#userName);
    };
};


class Manager{
    valueSale;
    constructor(uname, age, sale){
        super(uname, age);
        this.valueSale = 10;

    };
    resultSale(){
        console.log(this.valueSale);
    }
};

let semen = new Manager('Semer', 25, 10);

semen.resultSale
