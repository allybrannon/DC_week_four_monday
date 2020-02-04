//hello you
const myName = prompt("what is your name?") || "World"
function greeting(name){
  console.log(`Hello ${name}`);
}
//madlib
greeting(myName);

const myName = prompt("What is your name?")
const favSubject = prompt("What is your favorite subject?")

console.log(`${myName}'s favorite subject in school is ${favSubject}`)

// example in class
const service = prompt("Tell me the level of service: good, fair, or bad.")
const tipAmount = (totalbill * service)

 switch (service) {
   case "good":
     console.log("service was good");
     break
   case "bad":
     console.log("service was bad");
     break
   case "fair":
     console.log("service was fair");
     break
  }

// #2tip calculator/#3 total calculator- Write a function totalAmount that takes the same arguments as tipAmount except it returns
//the total as the tip amount plus the bill amount.  This fuction may use tipAmount as a sub-task.
const totalBill = prompt("Enter bill total:")
const service = prompt("Tell me the level of service: good, fair, or bad.")
let total = 0

function tipAmount() {
  if (service === 'bad'){
    total = (totalBill * 1.1)
  }else if (service === 'fair') {
    total = (totalBill * 1.15)
  }
  else if (service === 'good'){
    total = (totalBill * 1.2)
  }
  return ("Total bill is " + (total))
}
console.log(tipAmount())
// Tip Calculator #3- Write a function splitAmount taht takes the bill amount and the level
// of service and the number of people to split the bill between. It will return the amount for each person
const totalBill = prompt("Enter bill total:")
const service = prompt("Tell me the level of service: good, fair, or bad.")
const splitAmount = prompt("How many people served?")
let total = 0

function tipAmount() {
  if (service === 'bad'){
    total = (totalBill * 1.1)
    total = (total/splitAmount)
  }else if (service === 'fair') {
    total = (totalBill * 1.15)
    split = (total/splitAmount)
  }
  else if (service === 'good'){
    total = (totalBill * 1.2)
    split = (total/splitAmount)
  }
  return ("Total bill is " + (total) + ". Each owes: " + (split))
}
console.log(tipAmount())
  

// HW 102
// print numbers
let startNumber = prompt("Enter number to start")
let endNumber = prompt("Enter number to end")

let count = 0;

for (count = startNumber; count <= endNumber; count++) {
  console.log(count);
}  

