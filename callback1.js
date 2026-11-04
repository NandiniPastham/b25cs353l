function performTask(number,callback){
    console.log("performing task....");
    let result=number*number;
    callback(result);
}
function displayResult(result){
    console.log("Task completed");
    console.log("Result:",result);
}
performTask(5,displayResult);