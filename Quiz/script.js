const questions = [
  {
    question: "¿Quién ganó el campeonato mundial de F1 en 2021?",
    answers: ["Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Charles Leclerc"],
    correct: [1]
  },
  {
    question: "¿Qué equipo tiene más títulos de constructores en la historia?",
    answers: ["Ferrari", "Mercedes", "Red Bull", "McLaren"],
    correct: [0]
  },
  {
    question: "¿En qué circuito se corre el Gran Premio de Mónaco?",
    answers: ["Spa-Francorchamps", "Monza", "Monte Carlo", "Silverstone"],
    correct: [2]
  },
  {
    question: "¿Cuál es el piloto con más campeonatos mundiales ganados?",
    answers: ["Ayrton Senna", "Lewis Hamilton", "Juan Manuel Fangio", "Michael Schumacher"],
    correct: [1, 3]
  },
  {
    question: "¿Qué escudería debutó en la F1 en 2021 como Aston Martin?",
    answers: ["Racing Point", "AlphaTauri", "Renault", "Alfa Romeo"],
    correct: [0]
  },
  {
    question: "¿Cuántas vueltas tiene el Gran Premio de Bélgica en Spa-Francorchamps?",
    answers: ["44", "52", "66", "Spa no tiene un número fijo de vueltas"],
    correct: [0]
  },
  {
    question: "¿Qué piloto argentino ganó 5 campeonatos mundiales de F1?",
    answers: ["Carlos Reutemann", "Juan Manuel Fangio", "José Froilán González", "Oscar Galvez"],
    correct: [1]
  },
  {
    question: "¿Qué equipo dominó la era híbrida desde 2014 hasta 2020?",
    answers: ["Ferrari", "Mercedes", "Red Bull", "McLaren"],
    correct: [1]
  },
  {
    question: "¿En qué año debutó Lewis Hamilton en la Fórmula 1?",
    answers: ["2005", "2006", "2007", "2008"],
    correct: [2]
  },
  {
    question: "¿Cuál es el circuito más corto del calendario de F1?",
    answers: ["Mónaco", "Red Bull Ring", "Hungaroring", "Zandvoort"],
    correct: [0]
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-container").classList.add("hidden");
  document.getElementById("question-container").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  document.getElementById("progress").textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
  const answersList = document.getElementById("answers");
  answersList.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => selectAnswer(index, button);
    li.appendChild(button);
    answersList.appendChild(li);
  });
}

function selectAnswer(index, selectedButton) {
  const buttons = document.querySelectorAll("#answers button");
  const correctAnswers = questions[currentQuestion].correct;
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (correctAnswers.includes(i)) {
      btn.classList.add("correct");
    } else if (btn === selectedButton && !correctAnswers.includes(i)) {
      btn.classList.add("incorrect");
    }
  });

  if (correctAnswers.includes(index)) {
    score++;
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").classList.remove("hidden");
  document.getElementById("score").textContent = score;

  const msg = score === questions.length ? "¡Increíble! Sos un experto en F1." :
               score >= questions.length * 0.6 ? "¡Buen trabajo! Tenés buenos conocimientos." :
               "Podés hacerlo mejor, ¡volvé a intentarlo!";
  document.getElementById("final-message").textContent = msg;
}

document.addEventListener("DOMContentLoaded", startQuiz);
