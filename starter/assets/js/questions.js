var questions = document.querySelector("#questions")
var questionTitle = document.getElementById("question-title")
var questionChoices = document.getElementById("choices")

// Define the questions and the choices and the answers
// array of objects, each object is a question
var questionArray = [
    {
        title: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "both of the above", "none of the above"],
        correctAnswer: choices[2] // why does this not work??????????????
    },

    {
        title: "How do we write a comment in javascript?",
        choices: ["/* */", "//", "#", "$$"],
        correctAnswer: choices[1]
    },

    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        correctAnswer: choices[0]
    },
]

// function to render a question
function renderQuestion(){

    for (let i = 0; i < questionArray.length; i++){
    

    // render questionArray[i].title
    questionTitle.textContent = questionArray[i].title

    // render questionArray[i].choices
    questionChoices.textContent = questionArray[i].choices
    }
}

// every time user answers a question, increment currentquestionindex to render next question
var currentQuestionIndex = 0

// similar to todo list activity from Thurs 05