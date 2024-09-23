// script.js
const questions = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 2
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Iron"],
        answer: 0
    },
    {
        question: "Which ocean is the deepest in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        answer: 2
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option');
const submitButton = document.getElementById('submit-button');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => selectAnswer(index);
    });
}

function selectAnswer(selectedOptionIndex) {
    const correctAnswerIndex = questions[currentQuestionIndex].answer;
    if (selectedOptionIndex === correctAnswerIndex) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect!";
        feedbackElement.style.color = "red";
    }
    scoreElement.textContent = `Score: ${score}`;
}

submitButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        feedbackElement.textContent = "";
    } else {
        feedbackElement.textContent = "Quiz Over!";
        submitButton.disabled = true;
    }
});

// Initial load
loadQuestion();

