
// const ordersData = require('./data.json');
// const initialValue = 0;

// const reducer =(acc,currOrderObj)=>{
//     //process new acc value
//     return acc+parseFloat(currOrderObj.total_amount);
// }

// const totalAmount = ordersData.reduce(reducer,initialValue);
// console.log(totalAmount);

const person1 = {location:"sydney",name:"mandar", pass: "1"}
const person2 = {location:"mel",name:"mandar", pass: "2"}

const db= [person1,person2];

// console.log(Object.values(person).reduce((acc,curr)=>{
//     return `${acc} is from ${curr}`;
// }))
let fieldValue = '1';
let field  ="pass";

const person =db.filter(person=>person[field]===fieldValue);


console.log(person)


// console.log(`${person.name}  is from ${person.location}`  )



// const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const result = [1,2,3,4,5,6,7,8,9]

// const initialValueArr = [];
// const reduceArr = (acc, currentArr) =>{
// console.log(acc, currentArr)
    
// return ([...acc,...currentArr])

// }

// const reduceArr = (acc, currentArr) =>{
//     currentArr.forEach(element => {
//         acc.push(element)
//     });
// return acc;

// }
// const finalArr = nested.reduce(reduceArr, initialValueArr)
// console.log(finalArr);
