// Global variables
var questions = document.querySelector("#questions")
var questionTitle = document.getElementById("question-title")
var questionChoices = document.getElementById("choices")
var currentQuestionIndex = 0 // every time user answers a question, increment currentquestionindex to render next question

// Define the questions and the choices (answers) in an array of objects

var questionArray = [
    {
        title: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "both of the above", "none of the above"],
        correctAnswer: "both of the above"
    },

    {
        title: "How do we write a comment in javascript?",
        choices: ["/* */", "//", "#", "$$"],
        correctAnswer: "//"
    },

    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        correctAnswer: "<script>"
    },

    {
        title: "How would you create a function in JavaScript?",
        choices: ["function myFunction()", "function:myFunction()", "function=myFunction()", "myFunction()"],
        correctAnswer: "function myFunction()"
    },
]


// function to render a question
function renderQuestion(){
    
    // clear the choices from last question
    questionChoices.innerHTML = ""

    // go through question array and render questions and answer options
    for (let i = 0; i <= questionArray.length; i++){
    
    var choice = document.createElement("button");
    questionChoices.appendChild(choice);

    choice.addEventListener("click", evaluateQuestion)

    // render questionArray[i].title
    questionTitle.textContent = questionArray[currentQuestionIndex].title

    // render questionArray[i].choices
    choice.textContent = questionArray[currentQuestionIndex].choices[i]
    choice.value = questionArray[currentQuestionIndex].choices[i]
    // console.log(choice.value)
    }

}



// similar to todo list activity from Thurs 05