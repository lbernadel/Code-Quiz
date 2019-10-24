var questions = [
    {
        title: "Inside which tag of an HTML document do you put the JavaScript?",
        choices: ["<java>", "<body>", "<script>", "<head>"],
        answer: "<script>"
    },
    {
        title: "The condition in an if/else statement is enclosed within ______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What is the syntax for referencing an external script called 'abc.js'?",
        choices: ["<script class='abc.js'>", "<script href='abc.js'>", "<script link='abc.js'>", "<script src='abc.js'>"],
        answer: "<script src='abc.js'>"
    },
    {
        title: "Which type of pop up box will allow a user to type a response?",
        choices: ["input", "prompt", "alert", "confirm"],
        answer: "prompt"
    },
    {
        title: "What is a DOM in JavaScript?",
        choices: ["Data of Mine", "Document of Master", "Data Object Modal", "Document Object Model"],
        answer: "Document Object Model"
    },
    {
        title: "Is JS case-sensitive?",
        choices: ["Yes", "No"],
        answer: "Yes"
    },
];

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
    document.getElementById("questions").setAttribute("hidden", false);

// timer set and begins 90s countdown
    setTimer();

    while (setTimer) {
        // display questions individually
        makeQuestions(questions); 
        
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

function makeQuestions (questions) {
    var qList = quizDiv.createElement("ol"),
        qArray = JSON.parse(questions);
        
    for (var q = 0; q < qArray.length; q++)  {
        var question = quizDiv.createElement("li");

        question.appendChild(document.createTextNode(questions[q]));
        qList.appendChild(question);
    }
    return qList;
}








startBtn.addEventListener("click", startTimer);
