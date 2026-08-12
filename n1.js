const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
console.log("====================================");
console.log("LISTENERS AND CUSTOM EVENTS IN NODE.JS");
console.log("====================================\n");
eventEmitter.on('greet', () => {
    console.log("Listener 1: Welcome to Node.js EventEmitter!");
});
eventEmitter.on('greet', () => {
    console.log("Listener 2: Learning Custom Events.");
});
eventEmitter.on('student', (name, course) => {
    console.log(`Student Name: ${name}`);
    console.log(`Course: ${course}`);
});
console.log("Emitting 'greet' event...");
eventEmitter.emit('greet');
console.log("\nEmitting 'student' event...");
eventEmitter.emit('student', 'Rahul', 'Full Stack Development');
console.log("\nNumber of listeners for 'greet':", eventEmitter.listenerCount('greet'));
console.log("\nProgram Executed Successfully.");