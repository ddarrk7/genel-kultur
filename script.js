let username = "";
let currentQuestionIndex = 0;

const questions = [
    { question: "Türkiye'nin başkenti neresidir?", options: ["İstanbul", "Ankara", "İzmir", "Bursa"], answer: "Ankara" },
    { question: "Dünyanın en büyük okyanusu hangisidir?", options: ["Atlas", "Hint", "Pasifik", "Arktik"], answer: "Pasifik" },
    { question: "Ay'ın yüzeyine ilk ayak basan insan kimdir?", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"], answer: "Neil Armstrong" }
];

function startQuiz() {
    username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Lütfen adınızı girin!");
        return;
    }
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        alert(username + ", testi tamamladınız!");
        return;
    }

    let questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected) {
    let correct = questions[currentQuestionIndex].answer;
    if (selected === correct) {
        alert("Doğru cevap!");
    } else {
        alert("Yanlış cevap! Doğru cevap: " + correct);
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById("next-btn").style.display = "none";
    loadQuestion();
}
