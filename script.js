let questions = [
    {q:"2+2?", a:["4","5"], correct:0},
    {q:"Capital of India?", a:["Delhi","Chennai"], correct:0},
    {q:"5x3?", a:["15","10"], correct:0},
    {q:"Sun rises from?", a:["East","West"], correct:0},
    {q:"HTML is?", a:["Markup","Programming"], correct:0},
    {q:"CSS used for?", a:["Styling","Logic"], correct:0},
    {q:"JS used for?", a:["Logic","Design"], correct:0},
    {q:"10/2?", a:["5","2"], correct:0},
    {q:"Earth is?", a:["Planet","Star"], correct:0},
    {q:"Water formula?", a:["H2O","CO2"], correct:0}
];

questions.sort(() => Math.random() - 0.5);

let index = 0;
let score = 0;
let timer = 10;

function loadQuestion() {
    let q = questions[index];

    document.getElementById("question").innerText = q.q;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.a.forEach((ans, i) => {
        let btn = document.createElement("button");
        btn.innerText = ans;
        btn.onclick = () => checkAnswer(i);
        answersDiv.appendChild(btn);
    });

    document.getElementById("progressText").innerText =
        (index+1) + "/" + questions.length;

    document.getElementById("progressBar").style.width =
        ((index)/questions.length)*100 + "%";

    timer = 10;
}

function checkAnswer(i) {
    if (i === questions[index].correct) {
        score++;
        document.getElementById("correctSound").play();
    } else {
        document.getElementById("wrongSound").play();
    }

    next();
}

function next() {
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
}

setInterval(() => {
    document.getElementById("timer").innerText = timer;
    timer--;

    if (timer < 0) next();
}, 1000);

function toggleDark() {
    document.body.classList.toggle("dark");
}

loadQuestion();