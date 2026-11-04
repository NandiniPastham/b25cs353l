const fs = require("fs");

const readableStream = fs.createReadStream("input.txt", {
  encoding: "utf8",
});

const writableStream = fs.createWriteStream("output.txt");

readableStream.on("data", (chunk) => {
  console.log("Reading chunk:", chunk);
  writableStream.write(chunk);
});

readableStream.on("end", () => {
  console.log("File reading completed");
  writableStream.end();
});

writableStream.on("finish", () => {
  console.log("Data written successfully to output.txt");
});

readableStream.on("error", (err) => {
  console.error("Error reading file:", err.message);
});

writableStream.on("error", (err) => {
  console.error("Error writing file:", err.message);
});
