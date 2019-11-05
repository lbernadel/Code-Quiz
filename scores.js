var restartBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn");
    
var scoreList = document.getElementById("score-list"),
name = JSON.parse(localStorage.getItem("userName")) || [],
score = JSON.parse(localStorage.getItem("lastScore")) || [];

highScore = name + ' - ' + score;
scoreItem = document.createElement('li')










// click handlers for restart and clearing scoreboard
clearBtn.addEventListener("click", function () {
    localStorage.clear();
});
restartBtn.addEventListener("click", function () {
    history.back();
});
