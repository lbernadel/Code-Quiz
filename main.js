var startBtn = document.getElementById("startBtn"),
    restartBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn"),
    submitBtn = document.querySelector("button.submitBtn"),
    secondsLeft = (questions.length * 15 + 1),
    timerEl = document.getElementById("timer"),
    submitScoreEl = document.querySelector("#submit-score"),
    userScore = document.getElementById("user-score"),
    newScore = document.getElementsByClassName("new-score"),
    questionHead = document.getElementById("questions"),
    answerChoices = document.getElementById("answers");


function startTimer () {
    // event.stopPropagation;
// swap welcome msg w/ questions
    document.getElementById("home").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');

// timer set and begins 90s countdown
    setTimer();
    // display questions individually
    makeQuestions();

}

function setTimer(){
    
    var countdown = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(countdown);
            // display option to enter name to scoreboard
            // display score
        }

    }, 1000);
}
function makeQuestions (){    
    questionHead.textContent = questions[0].title;
    answerChoices.innerHTML = "";
    var choices = questions[0].choices;
    
    for (var q = 0; q < choices.length; q++)  {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[q]
        answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block") = answerBtn;
    };
}

function clearScores () {
    event.stopPropagation;
    localStorage.clear();
}

function quizRestart () {
    // event.stopPropagation;
    window.location.pathname = "/index.html";
}

// Event Listeners for Buttons
startBtn.addEventListener("click", startTimer);
clearBtn.addEventListener("click", clearScores);
restartBtn.addEventListener("click", quizRestart);