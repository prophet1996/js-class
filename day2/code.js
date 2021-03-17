// HOC higher order functions
// functions that operate functions
const assert = require('assert');

const numbers = [ 1, 2, 3, 4, 5 ];
const expectedResult = [ 1, 4, 9, 16, 25 ];

//API
Array.prototype.Filter = function(callback) {
	let resultant = [];
	for (let i = 0; i < this.length; i++) {
        if(callback(this[i]))resultant.push(this[i])
    }
    return resultant;
};


// assert.strictEqual(arg1,arg)
//USER OF API
assert.deepEqual(
	expectedResult,
	numbers.Map((value) => {
		const newnum = value * value;
		return newnum;
	})
);
console.log(numbers.Map((value) => {
    const newnum = value * value;
    return newnum;
}))
// const squares = numbers.map