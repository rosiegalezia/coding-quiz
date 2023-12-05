// global variables for scores
var initials = document.getElementById("initials")
var submitButton = document.querySelector("#submit")
var clearButton = document.getElementById("clear");
var scoresList = document.getElementById("highscores")

function saveUserData() {
    console.log('hi')
    // save initials (convert to string???)
    localStorage.setItem('initials', initials.value);
    // save user score
    localStorage.setItem('score', sec);
    // clear the input box
    initials.value = ""

    // display confirmation message
    document.getElementById("feedback").classList.remove("hide");
    document.getElementById("feedback").textContent = "Thanks, see how you compare to others in the 'view highscores' page"

}

// retrieve highscores from local storage
var userInitials = localStorage.getItem('initials')
var userScore = localStorage.getItem('score')

scoresList.append(userInitials, userScore)

// sort the scores from high to low
scoresList.sort(function (a, b) {
    return b - a;
});


// // // display the highscores as a list

// when the user click on "Clear Highscores", clear local storage
clearButton.addEventListener("click", function () {
    localStorage.clear();
})

