// obj.propKey = value
// Sets a property
// obj['propKey'] = value
// Sets a property
// arr[index] = value
// Sets an array element[10]

// JSON.stringify
// ƒ stringify() { [native code] }
// JSON.parse
// ƒ parse() { [native code] }
// let person = JSON.parse(`{"name":"mandar"}`)
// console.log(person)
// {name: "mandar"}
// const thisisstring = JSON.stringify(person)
// console.log(thisisstring)
// "{"name":"mandar"}"
// JSON.parse(JSON.stringify(person))
// {name: "mandar"}
// const {dbWrite} = require('./db')

// const myCallBack = (id) => {
//     console.log("database is write seding response to client and row " + id + " is updated");
// }
// dbWrite(myCallBack);
const myData = require('./data.json')

// My ASYNC CODE
const filePromise = new Promise((res, rej) => {
    const fsData = myData;
    //do some processing
    //get the result of the process
    //if result is appropriate then resolve
    // otherwise reject
    if (fsData) {
        res(fsData);
    } else {
        rej('Error');
    }
});

// WAY  1 - I will promise and then (wait for it to complete)
filePromise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
// WAY 2 - I will wrap it in an async function then i can just await the result      
const func = async () => {
    try {
        const data = await filePromise;
        console.log(data)
    }
    catch (err) { console.log(err) }
}
func();

    // A Promise is a container for an asynchronously delivered value 
    // If a function returns a Promise then that Promise is like a blank into which the function will (usually) fill in its result, once it has computed it. You can simulate a simple version of this process via an Array:


    // function logFetch(url) {
    //     return fetch(url)
    //       .then(response => response.text())
    //       .then(text => {
    //         console.log(text);
    //       }).catch(err => {
    //         console.error('fetch failed', err);
    //       });
    //   }


    //   async function logFetch(url) {
    //     try {
    //       const response = await fetch(url);
    //       console.log(await response.text());
    //     }
    //     catch (err) {
    //       console.log('fetch failed', err);
    //     }
    //   }