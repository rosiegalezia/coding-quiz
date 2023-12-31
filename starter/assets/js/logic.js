// Global variables
var startButton = document.getElementById("start");
var timeEl = document.querySelector("#time");
var sec = 75;
var feedbackMessage = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen")
// var choiceButton = renderQuestion.choice
var quizLength = questionArray.length //variable for quesiton array length
var correctAnswer = questionArray[currentQuestionIndex].correctAnswer
// global variables for high scores
var finalScore = document.querySelector("#final-score")
var atEndPage = false
// global variables for scores
var initials = document.getElementById("initials")
var submitButton = document.querySelector("#submit")
var clearButton = document.getElementById("clear");
var scoresList = document.getElementById("highscores")

startButton.addEventListener("click", function () {
    // timer function
    var timer = setInterval(function () {
        sec--;
        // when the timer runs our OR all the questions are finished
        if (sec < 1 || atEndPage) {

            // stop the countdown
            clearInterval(timer);

            // hide the questions and feedback and show the end screen
            document.getElementById("questions").classList.add("hide");
            document.getElementById("feedback").classList.add("hide");
            document.getElementById("end-screen").classList.remove("hide");

            // display score when game ends
            finalScore.textContent = sec
        }

        // display the time remaining
        timeEl.textContent = sec
    }, 1000);

    // display the first question using the questions defined in questions.js
    renderQuestion()

    // hide the start screen
    document.getElementById("start-screen").classList.add("hide");

    // show questions screen and populate it with questions and the choices
    document.getElementById("questions").classList.remove("hide");

    // renderQuestion();
    console.log(questionArray)
    console.log(currentQuestionIndex)
})

// Add click event listener for choices, check if answer is correct
function evaluateQuestion(event) {

    for (let i = 0; i < questionArray.length; i++) {

        // clear 'feedback' between questions??
        document.getElementById("feedback").textContent = ""
        // Check if the answer is correct
        if (event.target.value == questionArray[currentQuestionIndex].correctAnswer) {

            // display "correct answer" in feedback div
            document.getElementById("feedback").classList.remove("hide");
            document.getElementById("feedback").textContent = "Correct!"
        }

        // If the answer is incorrect
        else {

            // display "wrong answer" in feedback div
            document.getElementById("feedback").classList.remove("hide");
            document.getElementById("feedback").textContent = "Wrong Answer :( -5 second penalty"
            // subtract the timer
            sec -= 1.25;
        }

    }
    // increment to next question and render
    currentQuestionIndex++
    renderQuestion()
}


