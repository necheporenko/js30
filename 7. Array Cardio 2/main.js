// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 18 or older?

// var adult = people.some(function(person) {
//   var currentYear = (new Date()).getFullYear();
//   if (currentYear - person.year >= 18) {
//     return true;
//   }
// })

var someAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 18 );
console.log("Some:");
console.log(someAdult);
// Array.prototype.every() // is everyone 18 or older?

var everyAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 18 );
console.log("Every:");
console.log(everyAdult);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// var comment = comments.find(function(comment) {
//   if(comment.id === 823423) {
//     return true;
//   }
// })
var comment = comments.find(comment => (comment.id === 823423));
console.log("Find:");
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
var index = comments.findIndex(comment => (comment.id === 823423));

var newIndex = [
...comments.slice(0, index),  //...spread
...comments.slice(index + 1)
];

console.log("FindIndex:");
console.log(index);
console.table(newIndex);