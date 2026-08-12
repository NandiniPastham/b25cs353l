const EventEmitter=require("events");
const eventEmitter=new EventEmitter();
console.log("=======");
console.log("NODE.JS EVENTEMITTER DEMONSTRATION");
console.log("========\n");
console.log("Welcome to Full Stack Development Laboratory\n");
eventEmitter.on('welcome',()=>{
console.log("Event Listener Executed.");
console.log("Welcome to Event-Driven Programming in Node.js.");
});
console.log('Event"Welcome"has been emitted successfully.\n');
eventEmitter.emit("welcome");
console.log("\nProgram Executed Successfully.");