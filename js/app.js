var bartender;
var bar;
var barNameArr = ["The Salty Dog", "Arrrrrby's", "Handsome Jack's", "The Plank", "Treasure Island"];

var bartenderNameArr = ["One Eye Pete", "The Captain", "Jim.... What!? Think ye that every pirate needs a silly name!?"];

var mainDrinksArr = ["Rum", "Whisky", "Gin", "Tonic", "Bourbon", "Water"];

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
  this.questions = questionArr;
  this.askQuestion = function(){
      var question = questionArr[Math.floor(Math.random() * questionArr.length)];
      return question;
  };
  this.stuffIHave = bar.pantry(mainDrinksArr, drinkIngredients);
}

Bartender.prototype = new Person(bartenderNameArr);

Bartender.prototype.mixDrinkAndServe = function(userAnswer){
  var mainDrinks = bar.pantryItems.mainDrinksArr;
  var randomDrink = mainDrinks[Math.floor(Math.random() * mainDrinks.length)];
  var userChoice = userAnswer;
  console.log("Here's a drink! " + randomDrink + " and a " + userChoice);
}

$(document).ready(function(){
  bar = new Bar(barNameArr);
  bartender = new Bartender(drinkQuestionsArr, bar);

  //Display the name of the bar, bartender, and ask a question for the user to answer.
  $('.main__welcome-text').text(bar.barName);
  $('.main__bartender-name').append(" " + bartender.name);
  $('.main__question-text').text(bartender.askQuestion());

  //match the user's choice to the text or index???
  $('.main__answers-button').on('click', function(){
    //var customerAnswer;
    if ($(this).html() === 'Yes'){
      bartender.mixDrinkAndServe(getAndCompareAnswer());
      console.log(getAndCompareAnswer());
    } else {
      $('.main__question-text').text(bartender.askQuestion());
    }
  });
});

//match the index of the user's choice based on the text of the question to an appropriate/random drink ingredient.
var getAndCompareAnswer = function(){
  var userAnswerIndex = (drinkQuestionsArr.indexOf($('.main__question-text').text()));
  var bartenderChoices = bartender.stuffIHave.extraDrinkIngredients;
  switch (userAnswerIndex) {
    case 0:
      return bartenderChoices.strong[Math.floor(Math.random() * bartenderChoices.strong.length)];
      break;
    case 1:
      return bartenderChoices.salty[Math.floor(Math.random() * bartenderChoices.salty.length)];
      break;
    case 2:
      return bartenderChoices.bitter[Math.floor(Math.random() * bartenderChoices.bitter.length)];
      break;
    case 3:
      return bartenderChoices.sweet[Math.floor(Math.random() * bartenderChoices.sweet.length)];
      break;
    case 4:
      return bartenderChoices.fruity[Math.floor(Math.random() * bartenderChoices.fruity.length)];
      break;
    default:
      return "Mead";
      break;
  }
}
