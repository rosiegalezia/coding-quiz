// global variables for scores
var initials = document.getElementById("initials")
var submitButton = document.querySelector("#submit")
var clearButton = document.getElementById("clear");
var scoresList = document.getElementById("highscores")


// function renderScores() {
//     // Render a new li for each score
//     for (var i = 0; i < scoresArray.length; i++) {
//         var score = scoresArray[i];

//         var li = document.createElement("li");
//         li.textContent = score;
//         li.setAttribute("data-index", i);

//         scoresList.appendChild(li);
//     }
// }

function saveUserData() {
    
    // read the values at the right time (ie at end of game)
    var scoresArray = [
    {
        user: initials.value,
        score: sec
    }
    ]

    // display confirmation message
    document.getElementById("feedback").classList.remove("hide");
    document.getElementById("feedback").textContent = "Thanks, now see how you compare in the 'view highscores' page"


    // get stored scores from storage and parse JSON string to an object
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    // update the array to the scores if they were retrieved
    if (storedScores !== null) {
        scoresArray = storedScores;
        scoresArray.push(    {
            user: initials.value,
            score: sec
        })
    }

    // Stringify and set "scores" key in localStorage to scores array
    localStorage.setItem("scores", JSON.stringify(scoresArray))


    renderScores()
}



scoresList.textContent = renderScores()


function clearHighScores() {
    localStorage.removeItem('scores')
    scoresArray = []
}





