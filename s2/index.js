// homework - peer dependencies (make node_modules a bad idea),
// map filter reduce
// 2.0 - 2.18



// callbacks - call this function back

// const data = [1,2,3,4,5];

// const a = data.map(d => {v: d*d});



// console.log(a);
// 
// const res= [{v:1},{v:4},{v:9},{v:16},{v:25}]

// contextual scoping
// // lexical scoping

// for(let i=0;i<5;i++){
    
//     setTimeout(()=>{

//         console.log(i)
//     },5000)
// }
// console.log(i)

// cb has closure over the variable 

// const setTimeout = (cb,time)=>{
//     //wait(time)
//     cb()
// }

const str = "abcd";


// i with n-i
const reverseString = (str, firstIndex, secondIndex) => {
    if(firstIndex >= secondIndex) {
        return str;
    }

    // swap the characters
    temp = str[firstIndex];
    str[firstIndex] = str[secondIndex];
    str[secondIndex] = temp;

    firstIndex+=1; 
    secondIndex--;

   return reverseString(str, firstIndex+1, secondIndex-1);
}
const revStr = reverseString(str.split(""), 0, str.length - 1);

const arr = [1,2,3,5] 

console.log(Math.max(...arr));
