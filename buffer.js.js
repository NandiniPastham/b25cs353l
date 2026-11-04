const { Buffer } = require("buffer");

let data = "Hello Node.js";

let buffer = Buffer.from(data);

console.log("Original Data:", data);
console.log("Buffer Data:", buffer);
console.log("Buffer Length:", buffer.length);
let result = buffer.toString();

console.log("Converted Data:", result);
