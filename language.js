// Assignment

var tonightDinner = "Tacos";


// Equality

if (tonightDinner === "tacos"){
  console.log("Yay");
} else if (tonightDinner === "breakfast_tacos"){
  console.log("ok!");
} else {
  console.log("Gross");
}

// Looping

var meals = ["tacos", "fajitas", "breakfast_tacos"];
var forEachMealFunction = function(meal){
  console.log(meal + " are delicious");
}
meals.forEach(forEachMealFunction);

// Conditionals

// See equality section

var tonightDinner = "tacos";
switch(tonightDinner){
  case "tacos":
    console.log("Yay");
    break;
  case "breakfast_tacos":
    console.log("ok");
    break;
  default:
    console.log("boooo");
}

// Methods
var yell = function(words){
  var combined = words.join(" ");
  var withBang = combined + "!!!";
  return withBang.toUpperCase();
};
var theWords = ["Do", "Not", "Run"];
var yellSentence = yell(theWords);
console.log(yellSentence);


var sayHi = function(){
  return ["hello", "world"].join("-");
};

var yolo = sayHi();
alert(yolo);


var numbers = [2,3,4,5,6,7,8,9];
var found = _.find(numbers, function(i){
  return i === 4;
});

console.log(found);

console.log("Sample: " + _.sample(numbers));

var odd = _.filter(numbers, function(i){
  return (i % 2) !== 0;
});

console.log(odd);


var words = "Do Not Run!!!";
words = words.gsub("!", "");
words = words.downcase();
words = words.split(" ");
console.log(words);



var words = "Do Not Run!!!";
words = words.replace(/!/g, "");
words = words.toLowerCase();
words = words.split(" ");
console.log(words);

var words = "Do Not Run!!!".replace(/!/g, "").toLowerCase().split(" ");
console.log(words);
