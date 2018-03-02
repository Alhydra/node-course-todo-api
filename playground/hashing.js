const {SHA256} = require("crypto-js")

const message = "I am Youssef"

const hash = SHA256(message).toString()

console.log(hash);
