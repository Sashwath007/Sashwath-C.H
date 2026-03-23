let quiz = JSON.parse(localStorage.getItem("quiz")) || [];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
    if (quiz.length === 0) {
        document.body.innerHTML = "<h2>No questions found. Please create quiz first.</h2>";
        return;
    }

    let current = quiz[currentIndex];

    document.getElementById("question").innerText = current.question;
    document.getElementById("btn1").innerText = current.options[0];
    document.getElementById("btn2").innerText = current.options[1];
    document.getElementById("btn3").innerText = current.options[2];
    document.getElementById("btn4").innerText = current.options[3];
}

function checkAnswer(ans) {
    let current = quiz[currentIndex];

    if (ans === current.answer) {
        score++;
    }

    currentIndex++;

    if (currentIndex < quiz.length) {
        loadQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
}

loadQuestion();