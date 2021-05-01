function Person(name,location){
    this.name=name;
    this.location=location;
}

Person.prototype.fullName = function (){
    console.log(`${this.name} ${this.location}`)
}

// class Person {
//     constructor(name,location){
//         this.name=name;
//         this.location=location;
//         this.fullName = function (){
//             console.log(`${this.name} ${this.location}`)
//         }
//     }
// }

//we used new operator to instantiate the person class
const mandar = new Person("mandar","sydney");

mandar.fullName();


// React Components -> presentaional components or stateful component

//hooks gave us the ability to hook in statefullness 