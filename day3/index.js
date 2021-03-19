//closure
function createIncrementor(startValue) {//100
    return function (step) {
        startValue += step;
        return startValue;
    };
}
    let startValue =100;
    const incremontor =createIncrementor(startValue);
    startValue=50;
    console.log(incremontor(100))
    console.log(incremontor(100))

