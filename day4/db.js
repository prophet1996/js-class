const dbWrite = (callback)=>{
    const dbWriteId = 'mandar1234'
    setTimeout(()=>{
        callback(dbWriteId);
    },4000);
    
}
module.exports = {
    dbWrite
}