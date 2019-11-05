var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")
var secondsLeft = (questions.length * 15 + 1);
var timerEl = document.getElementById("timer");
var submitScoreEl = document.querySelector("#submit-score");
var userScore = document.getElementById("user-score");
var newScore = document.getElementById("new-score").value;
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");


var questionNumber = -1;
var answer;


function startTimer() {
    // swap welcome msg w/ questions
    document.getElementById("home").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');

    // timer set and begins 90s countdown
    setTimer();
    // create questions to display
    makeQuestions();
}

function setTimer() {

    var countdown = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || questionNumber === questions.length) {
            setTimeout(displayScore, 1250);
            clearInterval(countdown);
        }

    }, 1000);
}

function makeQuestions() {
    questionNumber++;
    answer = questions[questionNumber].answer

    questionHead.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[q]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
}

// display option to enter name to scoreboard
function displayScore() {
    document.getElementById("quiz").classList.add('d-none');
    document.getElementById("submit-score").classList.remove('d-none');
    userScore.textContent = "Your score is " + secondsLeft + ".";
}

function clearScores() {
    event.stopPropagation;
    localStorage.clear();
}
 
// Event Listeners for Main Buttons
startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    localStorage.setItem(newScore, secondsLeft)
    window.location.href = './highscores.html'
})

function hideFeedback(){
    var pEl= document.getElementsByClassName("feedback")[0]
    pEl.style.display='none'
}

function showFeedback(){
    var pEl= document.getElementsByClassName("feedback")[0]
    pEl.removeAttribute('style');
}

answerChoices.addEventListener("click", function (event) {
    var pEl= document.getElementsByClassName("feedback")[0]
    
    // evaluation of user's answer choices & feedback
    if (answer === event.target.textContent) {   
        pEl.innerHTML = "Correct!";
        setTimeout(hideFeedback,1000);
        makeQuestions();
        showFeedback();   
    } else {
        pEl.innerHTML = "Sorry, that's incorrect.";
        setTimeout(hideFeedback,1000);
        makeQuestions();
        secondsLeft = secondsLeft - 10;
        showFeedback();
    }
});