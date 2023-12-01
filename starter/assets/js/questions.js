// - Define the questions and the choices and the answers, put it in a variable in questions.js file

var questions = document.querySelector("#questions")

// array of objects, each object is a question
var questionArray = [
    {
        "title": "",
        "choices": ["answer 1", "answer 2", "answer 3", "answer 4"],
        "correct answer": ""
    },

    {
        "title": "",
        "choices": ["answer 1", "answer 2", "answer 3", "answer 4"],
        "correct answer": ""
    },

    {
        "title": "",
        "choices": ["answer 1", "answer 2", "answer 3", "answer 4"],
        "correct answer": ""
    },

]


// function to render a question
function renderQuestion(){

    for (let i = 0; i < questionArray.length; i++){
    }

    // render questionArray[i].title
    // render questionArray[i].choices
}

// every time user answers a question, increment currentquestionindex to render next question
var currentQuestionIndex = 0

// similar to todo list activity from Thurs 05