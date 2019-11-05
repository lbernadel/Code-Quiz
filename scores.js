var restartBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn");

clearBtn.addEventListener("click", function () {
    localStorage.clear();
});
restartBtn.addEventListener("click", function () {
    history.back();
});
