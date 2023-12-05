// global variables for scores
var initials = document.getElementById("initials")
var submitButton = document.querySelector("#submit")
var clearButton = document.getElementById("clear");
var scoresList = document.getElementById("highscores")

function saveUserData() {
    
    // display confirmation message
    document.getElementById("feedback").classList.remove("hide");
    document.getElementById("feedback").textContent = "Thanks, see how you compare to others in the 'view highscores' page"

    // get array from local storage if it exists
    if (localStorage.getItem(scoresArray) == null) {

        // else make the array and store to local storage
    } else {
        var scoresArray = localStorage.getItem(scoresArray)
        // use 'parse' from JSON to convert to js object/array
        // should now have array
        scoresArray = JSON.parse(scoresArray)
    }
    // push scores to array
    scoresArray.push({
        'initials': initials.value,
        'score': sec
    })
}

// convert back to JSON -> json.stringify
localStorage.setItem(score, json.stringify(array));

scoresArray = scoresArray.sort((a, b) => {
    if (b.score < a.score) {
        return -1
    }
}

// to sort the array
// retrieve from storage and convert to an objecta again
// sort the scores from high to low where a and b are objects
JSON.parse(localStorage.sort(function (a, b)) {
    return: b.score - a.score
});



// parseJOSNfromlocalstorage.sort(function (a, b) {
//     return b.score - a.score;
// });







function clearHighScores() {
    localStorage.removeItem('score')
    localStorage.removeItem('initials')
    scoresArray = []
}

