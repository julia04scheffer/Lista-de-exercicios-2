function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Sua pontuação:" + quiz.score +  "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};



 
// create questions here
var questions = [
    new Question("Quanto é 2+2?", ["8", "4","3", "9"], "4"),
    new Question("Quanto é 6+8?", ["20", "14","4", "7"], "14"),
    new Question("Quanto é 16+4?", ["20", "23","16", "18"], "20"),
    new Question("Quanto é 22+13?", ["30", "26","35", "40"], "35"),
    new Question("Quanto é 85+62?", ["147", "130","100", "160"], "147"),
    new Question("Quanto é 287+111?", ["400", "330","225", "398"], "398"),
    new Question("Quanto é 666+666?", ["1.012", "1.240","1.400", "1.332"], "1.332"),
    new Question("Quanto é 2.000+6.500?", ["8.500", "7.654","8.000", "9.876"], "8.500"),
    new Question("Quanto é 10.000+7.432?", ["17.432", "13.000","1.250", "61.983"], "17.432"),
    new Question("Quanto é 789.456+32.000?", ["8", "821.456","987.567", "765.876"], "4")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();

Window-alert("Se sua pontuação for maior que 5 você sera aprovado")
window-confirm( "BOA SORTE")