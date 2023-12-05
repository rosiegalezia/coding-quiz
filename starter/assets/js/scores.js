// global variables for scores
var initials = document.getElementById("initials")
var submitButton = document.querySelector("#submit")
var clearButton = document.getElementById("clear");
var scoresList = document.getElementById("highscores")
var scoreBoard = document.getElementById("highscore-list")
var scoresArray = []

function saveUserData() {

    // make sure initials input isn't empty
    if (initials.value !== "") {

        // read the values at the right time (ie at end of game)
        scoresArray = [
            {
                user: initials.value,
                score: sec
            }]

        // display confirmation message
        document.getElementById("feedback").classList.remove("hide");
        document.getElementById("feedback").textContent = "Thanks, now see how you compare in the 'view highscores' page"
        // clear the input box
        initials.value = ""

        // get stored scores from storage and parse JSON string to an object
        var storedScores = JSON.parse(localStorage.getItem("scores"));

        // update the array to the scores if they were retrieved
        if (storedScores !== null) {
            scoresArray = storedScores;
            scoresArray.push({
                user: initials.value,
                score: sec
            })
        }

        // Stringify and set "scores" key in localStorage to scores array
        localStorage.setItem("scores", JSON.stringify(scoresArray))

    }
    console.log(scoresArray)
}


function clearHighScores() {
    localStorage.removeItem('scores')
    scoresArray = []
}


