// console.log("Hello World");

// var a = 1;
// a = 2;
// console.log(a)

// let b = 1;
// b = 2;
// console.log(b);

// const c = 1;
// console.log(c);

// let firstName = "Rizon"
// let age = "18"
// let isMarried = "false"

// console.log("this person firstName is " + firstName + " and thir age is " + age)

// Write a program to count a number

let number = 100;
let answer = 0;

for (let i = 0; i <= number; i++) {
  answer = answer + i;
}

// Approach - 1
const personArray = ["rizon", "rishon", "priya"];
const genderArray = ["male", "male", "female"];

for (let i = 0; i < personArray.length; i++) {
  if (genderArray[i] === "male") {
    console.log(personArray[i]);
  }
}

const users1 = {
  firstName: "rizon",
  gender: "male",
};

// to access the key of the object
console.log(users1["firstName"]); // rizon
console.log(users1["gender"]); // male

const allUsers = [
  {
    firstName: "rizon",
    gender: "male",
  },
  {
    firstName: "rishon",
    gender: "male",
  },
  {
    firstName: "priya",
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
    if(allUsers[i]["gender"] === "male") {
        console.log(allUsers[i]["firstName"]);
    }
}