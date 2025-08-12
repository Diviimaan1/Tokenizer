const { encode, decode } = require("./main");

const tokens = encode("Hello world");
console.log("Encoded:", tokens);

const text = decode(tokens);
console.log("Decoded:", text);
