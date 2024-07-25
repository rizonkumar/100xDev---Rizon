const jwt = require("jsonwebtoken")


// decode, verify & generate

const value = {
    name: "rizon",
    accountNumber: 12452321
}

// jwt
const token = jwt.sign(value, "secret");
console.log(token);

// this token has been generated using this secret, and hence this token can only be
// verified using this secret+

//  this is your checkbook
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicml6b24iLCJhY2NvdW50TnVtYmVyIjoxMjQ1MjMyMSwiaWF0IjoxNzIwNTI1MzYwfQ.p-G8oQVCMwizto94wssqRM4xXPHmJm2Kdakj5c2mDL8

// the above token can be decoded easily using jwt.io

