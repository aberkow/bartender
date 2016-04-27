var drinkIngredients = {
  strong: ["Glug of rum", "Splash of whisky", "Slug of gin"],
  salty: ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
  bitter: ["Shake of bitters", "Splash of tonic", "Twist of lemon"],
  sweet: ["Sugar cube", "Spoonful of honey", "Splash of cola"],
  fruity: ["Slice of orange", "Dash of cassis", "Cherry on top"]
};

var pantryIngredients = {
  drinks: ["Rum", "Whisky", "Gin", "Tonic", "Cola", "Water"],
  food: ''
};

var menuQuestionsArr = ["Do ye like yer drinks strong?", "Do ye like it with a salty tang?", "Are ye a lubber who likes it bitter?", "Would you like a little sweetness with yer poison?", "Are ye one for a fruity finish?"];

$(document).ready(function(){
  //creates a new global bar object with everything we need to know about the bar.
  bar = new Bar("Dive Bar", new Bartender('Joe', menuQuestionsArr), new Pantry(pantryIngredients), new Ingredients(drinkIngredients));

  //Display the name of the bartender and ask a question for the user to answer.
  $('.main__bartender-name').text(bar.bartender.name);
  $('.main__question-text').text(bar.bartender.askQuestion);

  $('.main__answers-button').on('click', function(){
    if ($(this).html() === 'Yes'){
      $('.main__answers').append('Hold on');
    } else {
      debugger;
      bar.bartender.askQuestion;
    }
  });
});

function Bar(barName, bartender, pantry, ingredients){
  this.userAnswer = '';
  this.barName = barName;
  this.bartender = bartender;
  this.pantry = pantry;
  this.ingredients = ingredients;
}

// function Question(questionArr){
//   this.questions = questionArr;
//   this.randomQuestion = this.questions[Math.floor(Math.random()*this.questions.length)];
//   console.log(this.randomQuestion);
// }

function Ingredients(ingredients){
  this.availableIngredients = ingredients;
}

function Pantry(pantryIngredients){
  this.pantryIngredients = pantryIngredients;
}

function Bartender(name, questionArr){
  this.name = name;
  this.askQuestion = questionArr[Math.floor(Math.random() * questionArr.length)];
  //this.askQuestion(questionArr);
}

// Bartender.prototype.askQuestion = function(questionArr){
//   this.askQuestion = questionArr[Math.floor(Math.random() * questionArr.length)];
// };

// function askQuestion(questionArr){
//
// }
