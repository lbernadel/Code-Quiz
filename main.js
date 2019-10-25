var startBtn = document.getElementById("startBtn"),
    redoBtn = document.getElementsByClassName("redoBtn"),
    clearBtn = document.getElementsByClassName("clearBtn"),
    timerEl = document.getElementById("timer"),
    submitScoreEl = document.querySelector("#submit-score"),
    userScore = document.getElementById("user-score"),
    newScore = document.getElementsByClassName("new-score"),
    submitBtn = document.querySelector("button.submitBtn"),
    quizDiv = document.getElementById("questions"),
    secondsLeft = (questions.length * 15 + 1);

function startTimer () {
    event.stopPropagation;
// swap welcome msg w/ questions
    document.getElementById("home").setAttribute("hidden", true);
    document.getElementById("questions").removeAttribute("hidden");

// timer set and begins 90s countdown
    setTimer();

    while (setTimer) {
        // display questions individually
        makeQuestions();
    };

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
        
    for (var q = 0; q < questions.length; q++)  {
        var whichQ = document.createElement("ul"),
            qText = document.createTextNode(questions[q]);

        whichQ.appendChild(qText);
        quizDiv.appendChild(whichQ);
    };
}

function clearScores () {
    event.stopPropagation;
    localStorage.clear();
}

function quizRestart () {
    event.stopPropagation;
    window.location = "/index.html";
}

startBtn.addEventListener("click", startTimer);
clearBtn.addEventListener("click", clearScores);
redoBtn.addEventListener("click", quizRestart);