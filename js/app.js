

var drinkIngredients = {
  strong: ["Glug of rum", "Splash of whisky", "Slug of gin"],
  salty: ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
  bitter: ["Shake of bitters", "Splash of tonic", "Twist of lemon"],
  sweet: ["Sugar cube", "Spoonful of honey", "Splash of cola"],
  fruity: ["Slice of orange", "Dash of cassis", "Cherry on top"]
};

var pantryIngredients = {
  drinks: ["Rum", "Whisky", "Gin", "Tonic", "Cola", "Water"]
};

var menuQuestionsArr = ["Do ye like yer drinks strong?", "Do ye like it with a salty tang?", "Are ye a lubber who likes it bitter?", "Would you like a little sweetness with yer poison?", "Are ye one for a fruity finish?"];

$(document).ready(function(){
  bar = new Bar(barName, new Bartender('Joe'), new Pantry(pantryIngredients), new Ingredients(drinkIngredients));
  // drinkIngredients = new Ingredients(drinkIngredients);
  // menuQuestions = new Question(menuQuestionsArr);
  // pantry = new Pantry(pantryIngredients);
});

function Bar(barName, bartender, pantry, ingredients){
  this.barName = barName;
  this.bartender = bartender;
  this.pantry = pantry;
  this.ingredients = ingredients;
}

function Question(questionArr){
  this.questions = questionArr;
  //console.log(this.questions);
  this.randomQuestion = this.questions[Math.floor(Math.random()*this.questions.length)];
  console.log(this.randomQuestion);
}

function Ingredients(ingredients){
  this.availableIngredients = ingredients;
  // console.log('ingredients');
  // console.log(this.availableIngredients);
}

function Pantry(pantryIngredients){
  this.pantryIngredients = pantryIngredients;
}

function Bartender(name){
  this.name = name;
}

//ask questions randomly without repeats, responds to y/n input
function randmomQuestion(inputQuestionArr){

}
