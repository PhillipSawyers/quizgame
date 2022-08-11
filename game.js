const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is the term given for non identical Twins?",
    choice1: "Fraternal Twins",
    choice2: "None identical Twins",
    choice3: "Conjoined Twins",
    choice4: "Siamese Twins",
    answer: 1,
  },
  {
    question: "What percentage of Twins are indentical?",
    choice1: "25%",
    choice2: "15%",
    choice3: "37%",
    choice4: "65%",
    answer: 3,
  },
  {
    question: "When trimester are women notified of a Twin or multiple birth?",
    choice1: "In the First trimester",
    choice2: "In the Second trimester",
    choice3: "In the Third trimester",
    choice4: "In any of the three timesters",
    answer: 1,
  },
  {
    question:
      "Which of these nutrients in a healthy diet is especially important for a women with multiple births?",
    choice1: "Iron",
    choice2: "Protein",
    choice3: "Vitamin C",
    choice4: "A and B",
    answer: 4,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("/end.html");
  }

  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
startGame();
