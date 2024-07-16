var hobbies = [
  "camping",
  "painting",
  "hiking",
  "cooking",
  "traveling",
  "fishing",
];

//console.log(hobbies.length);
hobbies.push("sleeping");
//console.log(hobbies [2]);
hobbies.pop();
hobbies.splice(3, 0, "movies", "coding");
//console.log(hobbies);
hobbies.shift();
//console.log(hobbies);
hobbies.unshift("learning");
//console.log(hobbies);
var goals = ["finish school", "land a web developer position", "lose weight"];
var allTheThings = [...hobbies, ...goals];
//console.log(allTheThings);
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});
console.log(plans);
