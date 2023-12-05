// global variables for scores
var initials = document.getElementById("initials")
var submitButton = document.querySelector("#submit")
var clearButton = document.getElementById("clear");
var scoresList = document.getElementById("highscores")

var scoresArray = []

function renderScores() {
    // Render a new li for each score
    for (var i = 0; i < scoresArray.length; i++) {
        var score = scoresArray[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        scoresList.appendChild(li);
    }

}


function saveUserData() {
    // display confirmation message
    document.getElementById("feedback").classList.remove("hide");
    document.getElementById("feedback").textContent = "Thanks, now see how you compare in the 'view highscores' page"


    // get stored scores from storage and parse JSON string to an object
    var storedScores = JSON.parse(localStorage.getItem("scoresArray"));

    // update the array to the scores if they were retrieved
    if (storedScores !== null) {
        scoresArray = storedScores;
    }

    // Stringify and set "scores" key in localStorage to scores array
    localStorage.setItem("scores", JSON.stringify(scoresArray))


    renderScores()
}


// // convert back to JSON -> json.stringify
// localStorage.setItem('score', JSON.stringify(scoresArray));


// scoresArray = scoresArray.sort((a, b) => {
//     if (b.score < a.score) {
//         return -1
//     }
// })


// to sort the array
// retrieve from storage and convert to an objecta again
// sort the scores from high to low where a and b are objects
// JSON.parse(localStorage.sort(function (a, b)) {
//     return: b.score - a.score
// });






// parseJOSNfromlocalstorage.sort(function (a, b) {
//     return b.score - a.score;
// });


// scoresList.textContent = JSON.parse(scoresArray);




function clearHighScores() {
    localStorage.removeItem('score')
    localStorage.removeItem('initials')
    scoresArray = []
}





