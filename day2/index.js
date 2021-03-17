const ordersData = require('./data.json');
// let total = 0;
// let ordersmorethan4 = []
// Give me all orders where total items are greater than 4
// ordersData.map((eachorder) => {
// 	const orderitems = eachorder.total_items;
    // if (orderitems > 4) {
    //     ordersmorethan4.push(eachorder);
    // }
 // total += parseFloat(totalamt);
 
// });

const ordersmorethan4 = ordersData.filter((eachorder)=>{
    return eachorder.total_items > 4
    

})
   

console.log(ordersmorethan4);
