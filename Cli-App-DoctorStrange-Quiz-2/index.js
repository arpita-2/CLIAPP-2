

var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hello! my friend, please enter your name ");
console.log(userName);

var score = 0;

var welcomeMessage = ("Welcome " + userName + " to THE DOCTOR STRANGE QUIZ");
console.log("--------------");
console.log("About the game: Iam going to ask you some questions related to 'THE DOCTOR STRANGE' and you will get marks based on your answers");
console.log("---------------");

console.log("So let's start the quiz and all the best " + userName);
console.log("--------------");
console.log("Please enter the answers in small letters");
console.log("---------------");

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer)
  {
    console.log("Wow! you are absolutely right");
    score = score + 1;
    console.log("Your current score: " + score);
    console.log("------------");
  }
  else{
    console.log("Ooops! you have given wrong answer");
    score = score - 1;
    console.log("Your current score: " + score);
    console.log("-------------");
  }
}


play("1. What was the name of Dr.Strange's trainer? ","karl mordo");

play("2. Who played the role of Dr.Stephen Strange in the movie? ","benedict cumberbatch");

play("3. Where does Dr.Strange go to get himself healed after the accident? ","kamar taj");

play("What does 'The Ancient One' mix in Stephen Strange's tea? ","hallucinogens");

console.log("---------------");
console.log("try to give ansewer in a,b,c format");

var questions = [{
  question: "4. What was the wi-fi password that Mordo gave Strange?\n a. Kaecillius\n b. Dormammu\n c. Shamballa\n ",
answer: "c"
},
{
  question: "5. Which relic chooses Dr.Strange?\n a. The Eye of Agamotto\n b. The Infinity Stone\n c. The Cloak of Levitation\n",

  answer: "c"
},{
  question: "6. What was Stephen Strange's occupation?\n a. Artist\n b. Neurosurgeon\n c. Racecar Driver\n",

  answer: "b"
},
{
  question:"7. How many dimensions are there in Dr.Strange?\n a. 9\n b. 15\n c. 8\n",

  answer: "a"
},
{
  question: "8. What does Dr.Strange fight against?\n a. Bankruptcy\n b. Sadness\n c. Dark Magic\n",

  answer: "c"
},
{
  question: "9. Who did Dr.Strange travel across the world to find?\n a. The Avengers\n b. The Ancient One\n c. His mother\n",

  answer: "b"
}];

for(var i=0; i<questions.length; i++)
{
  var currentQuestion = questions[i];

  play(currentQuestion.question, currentQuestion.answer)
}

console.log("you scored: " + score);
console.log("----------");

console.log("Highscores\n");
var highscores = [{
  name: "Arpita",
  score: "7"

}];

highscores.map(score => console.log(score.name, ":", score.score));
console.log("-----------");
console.log("Thank you my friend for playing this Quiz");
console.log("DEVELOPED BY ARPITA DASGUPTA");