//closure
function createIncrementor(a) {//100
    return function (step) {
        a += step;
        return startValue;
    };
}
    let startValue =100;
    const incremontor =createIncrementor(startValue);
    startValue=50;
    console.log(incremontor(100))
    console.log(incremontor(100))

