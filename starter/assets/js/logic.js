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
var initials = document.getElementById("initials")
var clearButton = document.getElementById("clear");
var scoresList = document.getElementById("highscores")
var submitButton = document.getElementById("submit")
var atEndPage = false

startButton.addEventListener("click", function () {
    // timer function
    var timer = setInterval(function () {
        sec--;
        if (sec < 1 || atEndPage) {
            clearInterval(timer);
            document.getElementById("questions").classList.add("hide");
            document.getElementById("end-screen").classList.remove("hide");

            // display score when game ends
            finalScore.textContent = sec
        }
        // display the time remaining
        timeEl.textContent = sec
    }, 1000);
    console.log(sec)

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
        console.log("here is current index: " + currentQuestionIndex)
        // Check if the answer is correct
        if (event.target.value == questionArray[currentQuestionIndex].correctAnswer) {

            // display "correct answer" in feedback div
            document.getElementById("feedback").classList.remove("hide");
            document.getElementById("feedback").textContent = "Correct!"
        }

        // If the answer is incorrect
        else {

            // subtract the timer
            sec = sec - 5;

            // display "wrong answer" in feedback div
            document.getElementById("feedback").classList.remove("hide");
            document.getElementById("feedback").textContent = "Wrong Answer :("

            // check the timer,
            // if timer > 0. hide feedback div then display next question
            // if timer <= 0, hide feedback div then go display "end-screen" screen and hide question screen
            // continue.....


            // if (timer > 0) {
            //     currentQuestionIndex ++
            // }
            // else {
            // document.getElementById("feedback").classList.add("hide");
            // document.getElementById("end-screen").classList.remove("hide");
            // }
            // }

        }

    }
        // increment to next question and render
        currentQuestionIndex++
        renderQuestion()
}




// // give the user the ability to save their initials and their score
// submitButton.addEventListener("click", function () {

//     localStorage.setItem("initials", initials);

//     // append this score to the list in highscores.html
//     // scoresList.appendChild('initials', 'sec')

//     console.log(localStorage)
//     console.log(scoresList)

//     // clear the input box
//     initials.value = ""
// })

// // retrieve highscores from local storage
// localStorage.getItem(scoresList)

// // sort the scores from high to low
// scoresList.sort(function (a, b) {
//     return b - a;
// });

// display the highscores as a list

// // when the user click on "Clear Highscores", clear local storage
// clearButton.addEventListener("click", function () {
//     localStorage.clear();
// })



// to add audio:

// const correctAudio = new Audio('assets/sfx/correct.wav');
// const incorrectAudio = new Audio('assets/sfx/incorrect.wav');
// document.getElementById('start').addEventListener('click', function() {
// ....incorrectAudio.play();
// });


