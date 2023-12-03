var questions = document.querySelector("#questions")
var questionTitle = document.getElementById("question-title")
var questionChoices = document.getElementById("choices")
var currentQuestionIndex = 0 // every time user answers a question, increment currentquestionindex to render next question

// Define the questions and the choices and the answers
// array of objects, each object is a question
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
]


// function to render a question
function renderQuestion(){
    
    // clear the choices
    questionChoices.innerHTML = ""

    for (let i = 0; i <= questionArray.length; i++){
    
    var choice = document.createElement("button");
    questionChoices.appendChild(choice);

    choice.addEventListener("click", evaluateQuestion)

    // render questionArray[i].title
    questionTitle.textContent = questionArray[currentQuestionIndex].title

    // render questionArray[i].choices
    choice.textContent = questionArray[currentQuestionIndex].choices[i]
    choice.value = questionArray[currentQuestionIndex].choices[i]
    console.log(choice.value)
    // do I need to make an array??????????

    }


}



// similar to todo list activity from Thurs 05