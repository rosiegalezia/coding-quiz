//* A start button that when clicked a timer starts and the first question appears.
var startButton = document.getElementById("start");
var timeEl = document.querySelector("#time");
var sec = 75;
var feedbackMessage = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen")
var finalScore = document.querySelector("final-score")
var initials = document.getElementById("initials")
// var choicesButton = document.getElementById("choices");

startButton.addEventListener("click", function () {
    // timer function
    var timer = setInterval(function () {
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
        // display the time remaining
        timeEl.textContent = sec
    }, 1000);
    console.log(sec)

    // quiz function
    renderQuestion()
    // display the first question based on the questions that we have defined

    // hide the start screen
    document.getElementById("start-screen").classList.add("hide");

    // show questions screen and populate it with questions and the choices
    document.getElementById("questions").classList.remove("hide");
    // renderQuestion();
    console.log(questionArray)
})

// Questions contain buttons for each answer.
// When answer (choice button) is clicked, the next question appears

// Add click event listener for choices, check if answer is correct
function evaluateQuestion(event) {

    for (let i = 0; i < questionArray.length; i++) {

        // Check if the answer is correct
        if (event.target.value == questionArray[currentQuestionIndex].correctAnswer) {

            // display "correct answer" in feedback div
            document.getElementById("feedback").classList.remove("hide");
            document.getElementById("feedback").textContent = "Correct!"

            // then display next question
            // currentQuestionIndex++
        }

        // If the answer is incorrect
        else {
            
            // subtract the timer
            sec = sec - 10;

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

            // // calculate final score
            // finalScore.textContent = sec

            // // get initials
            // // initials = ??? how do I get a text entry box
            // localStorage.setItem(initials)
        }

        // }
        renderQuestion()
        
    }

    

}

questionChoices.addEventListener("click", function(){
currentQuestionIndex++
})

// if ((evaluateQuestion.i = questionArray.length) || (sec = 0)) {
//     // hide questions questions screen show end screen
//     document.getElementById("questions").classList.add("hide");
//     document.getElementById("end-screen").classList.remove("hide");
// }


// The quiz should end when all questions are answered or the timer reaches 0.
// When the game ends, it should display their score and give the user the ability to save their initials and their score




// highscores.html
// - Retrieve highscores from local storage
// - sort the scores from higher score to Lower score
// - Display the highscores as a list
// - When the user click on "Clear Highscores", clear local storage



// to add audio:

// const correctAudio = new Audio('assets/sfx/correct.wav');
// const incorrectAudio = new Audio('assets/sfx/incorrect.wav');
// document.getElementById('start').addEventListener('click', function() {
// ....incorrectAudio.play();
// });


