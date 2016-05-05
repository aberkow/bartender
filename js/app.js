var bartender;
var bar;
var barNameArr = ["The Salty Dog", "Arrrrrby's", "Handsome Jack's", "The Plank", "Treasure Island"];

var bartenderNameArr = ["One Eye Pete", "The Captain", "Jim.... What!? Think ye that every pirate needs a silly name!?"];

var mainDrinksArr = ["Rum", "Whisky", "Gin", "Tonic", "Cola", "Water"];

var drinkIngredients = {
  strong: ["a glug of rum", "a splash of whisky", "a slug of gin"],
  salty: ["an olive on a stick", "a salt-dusted rim", "a rasher of bacon"],
  bitter: ["a shake of bitters", "a splash of tonic", "a twist of lemon"],
  sweet: ["a sugar cube", "a spoonful of honey", "a splash of cola"],
  fruity: ["a slice of orange", "a dash of cassis", "a cherry on top"]
};

var drinkQuestionsArr = ["Do ye like yer drinks strong?", "Do ye like it with a salty tang?", "Are ye a lubber who likes it bitter?", "Would you like a little sweetness with yer poison?", "Are ye one for a fruity finish?"];

function Bar(barNameArr){
  this.barName = barNameArr[Math.floor(Math.random() * barNameArr.length)];
}

Bar.prototype.pantry = function(mainDrinksArr, extraDrinkIngredients){
  return this.pantryItems = { //creates object and returns it at the same time.
    mainDrinksArr: mainDrinksArr,
    extraDrinkIngredients: extraDrinkIngredients
  }
}

//try to make bartender a prototype of Person...
function Person(nameArr){
  this.name = nameArr[Math.floor(Math.random() * nameArr.length)];
}

function Bartender(questionArr, bar){
  this.askQuestion = function(){
      var question = questionArr[Math.floor(Math.random() * questionArr.length)];
      return question;
  };
  this.stuffIHave = bar.pantry(mainDrinksArr, drinkIngredients);
}

Bartender.prototype = new Person(bartenderNameArr);

Bartender.prototype.mixDrink = function(){
  console.log("Here's a drink! " + bar.pantryItems.mainDrinksArr[1] + " and a " + bar.pantryItems.extraDrinkIngredients.strong[0]);
}

$(document).ready(function(){
  //debugger;
  //creates a new global bar object with everything we need to know about the bar.
  // bar = new Bar(barNameArr, new Bartender(bartenderNameArr, menuQuestionsArr), new Pantry(pantryIngredients), new Ingredients(drinkIngredients));
  bar = new Bar(barNameArr);
  bartender = new Bartender(drinkQuestionsArr, bar);
  //Display the name of the bar, bartender, and ask a question for the user to answer.
  $('.main__welcome-text').text(bar.barName);
  $('.main__bartender-name').append(" " + bartender.name);
  //debugger;
  //$('.main__question-text').text(bar.bartender.askQuestion(menuQuestionsArr));
  $('.main__question-text').text(bartender.askQuestion());

  //
  $('.main__answers-button').on('click', function(){
    //var customerAnswer;
    if ($('.main__answers-button').html() === 'Yes'){
      // var customerAnswer = bar.bartender.questionArr.indexOf($('.main__question-text').text());
      // console.log(customerAnswer);
      //$('.main__answers').append('Hold on' + bar.bartender.getCustomerAnswer());
      //debugger;
    } else {
      //$('.main__question-text').text(bar.bartender.askQuestion(menuQuestionsArr));
    }
  });
});

// function Bar(barNameArr, bartender, pantry, ingredients){
//   //var self = this;
//
//   this.userAnswer = '';
//   this.barNameArr = barNameArr;
//   this.barName = barNameArr[Math.floor(Math.random() * barNameArr.length)];
//   this.bartender = bartender;
//   this.pantry = pantry;
//   this.ingredients = ingredients;
// }
//
// function Ingredients(ingredients){
//   this.availableIngredients = ingredients;
// }
//
// function Pantry(pantryIngredients){
//   this.pantryIngredients = pantryIngredients;
// }
//
// function Bartender(bartenderNameArr, questionArr){
//   //self makes sure that this keeps its context
//   var self = this;
//   this.nameArr = bartenderNameArr;
//   this.name = bartenderNameArr[Math.floor(Math.random() * bartenderNameArr.length)];
//   this.questionArr = questionArr;
//   this.askQuestion = function(questionArr){
//     var question = questionArr[Math.floor(Math.random() * questionArr.length)];
//     return question;
//   };
//
//   this.getCustomerAnswer = function(){
//     return self.questionArr.indexOf($('.main__question-text').text());
//   };
//
//   this.makeDrink = function(drinkIngredients, pantryIngredients){
//     //match the customerAnswer index to the index of the drink ingredients plus one random pantry ingredient.
//   };
// }

// var drinkIngredients = {
//   strong: ["Glug of rum", "Splash of whisky", "Slug of gin"],
//   salty: ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
//   bitter: ["Shake of bitters", "Splash of tonic", "Twist of lemon"],
//   sweet: ["Sugar cube", "Spoonful of honey", "Splash of cola"],
//   fruity: ["Slice of orange", "Dash of cassis", "Cherry on top"]
// };
//
// var pantryIngredients = {
//   drinks: ["Rum", "Whisky", "Gin", "Tonic", "Cola", "Water"],
//   food: []
// };
//
// var menuQuestionsArr = ["Do ye like yer drinks strong?", "Do ye like it with a salty tang?", "Are ye a lubber who likes it bitter?", "Would you like a little sweetness with yer poison?", "Are ye one for a fruity finish?"];


// function Drink(){
//   this.name = {};
//   this.ingredients = {};
//   this.price = " ";
//   this.mixDrink = function(this.ingredients){}
// }
