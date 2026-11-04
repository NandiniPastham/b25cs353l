console.log("Program Started");

function task1(callback) {
    setTimeout(() => {
        console.log("Task1 completed");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task2 completed");
        callback();
    }, 1000);
}

task1(() => {
    task2(() => {
        console.log("All tasks completed");
    });
});

console.log("Program Ended");
