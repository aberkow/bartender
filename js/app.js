/*
Bar -
Pantry - Bar
Ingredients - Pantry - Bar
Bartender - Ingredient - Pantry - Bar
*/

function Bar(){


}

Bar.prototype.pantry = function(){

}

var barNameArr = ["The Salty Dog", "Arrrrrby's", "Handsome Jack's", "The Plank", "Treasure Island"];

var bartenderNameArr = ["One Eye Pete", "The Captain", "Jim.... What!? Think ye that every pirate needs a silly name!?"];

var drinkIngredients = {
  strong: ["Glug of rum", "Splash of whisky", "Slug of gin"],
  salty: ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
  bitter: ["Shake of bitters", "Splash of tonic", "Twist of lemon"],
  sweet: ["Sugar cube", "Spoonful of honey", "Splash of cola"],
  fruity: ["Slice of orange", "Dash of cassis", "Cherry on top"]
};

var pantryIngredients = {
  drinks: ["Rum", "Whisky", "Gin", "Tonic", "Cola", "Water"],
  food: []
};

var menuQuestionsArr = ["Do ye like yer drinks strong?", "Do ye like it with a salty tang?", "Are ye a lubber who likes it bitter?", "Would you like a little sweetness with yer poison?", "Are ye one for a fruity finish?"];

$(document).ready(function(){
  //debugger;
  //creates a new global bar object with everything we need to know about the bar.
  bar = new Bar(barNameArr, new Bartender(bartenderNameArr, menuQuestionsArr), new Pantry(pantryIngredients), new Ingredients(drinkIngredients));
  //Display the name of the bar, bartender, and ask a question for the user to answer.
  $('.main__welcome-text').text(bar.barName);
  $('.main__bartender-name').append(" " + bar.bartender.name);

  $('.main__question-text').text(bar.bartender.askQuestion(menuQuestionsArr));

  //
  $('.main__answers-button').on('click', function(){
    //var customerAnswer;
    if ($('.main__answers-button').html() === 'Yes'){
      // var customerAnswer = bar.bartender.questionArr.indexOf($('.main__question-text').text());
      // console.log(customerAnswer);
      $('.main__answers').append('Hold on' + bar.bartender.getCustomerAnswer());
      debugger;
    } else {
      $('.main__question-text').text(bar.bartender.askQuestion(menuQuestionsArr));
    }
  });
});

function Bar(barNameArr, bartender, pantry, ingredients){
  //var self = this;

  this.userAnswer = '';
  this.barNameArr = barNameArr;
  this.barName = barNameArr[Math.floor(Math.random() * barNameArr.length)];
  this.bartender = bartender;
  this.pantry = pantry;
  this.ingredients = ingredients;
}

function Ingredients(ingredients){
  this.availableIngredients = ingredients;
}

function Pantry(pantryIngredients){
  this.pantryIngredients = pantryIngredients;
}

function Bartender(bartenderNameArr, questionArr){
  //self makes sure that this keeps its context
  var self = this;
  this.nameArr = bartenderNameArr;
  this.name = bartenderNameArr[Math.floor(Math.random() * bartenderNameArr.length)];
  this.questionArr = questionArr;
  this.askQuestion = function(questionArr){
    var question = questionArr[Math.floor(Math.random() * questionArr.length)];
    return question;
  };

  this.getCustomerAnswer = function(){
    return self.questionArr.indexOf($('.main__question-text').text());
  };

  this.makeDrink = function(drinkIngredients, pantryIngredients){
    //match the customerAnswer index to the index of the drink ingredients plus one random pantry ingredient.
  };
}
