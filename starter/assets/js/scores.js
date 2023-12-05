// global variables for scores
var initials = document.getElementById("initials")
var submitButton = document.querySelector("#submit")
var clearButton = document.getElementById("clear");
var scoresList = document.getElementById("highscores")


function saveUserData() {
    console.log('hi')
    localStorage.setItem('initials', initials.value);
    localStorage.setItem('score', sec);
}

// // give the user the ability to save their initials and their score
// submitButton.addEventListener("submit", function() {
//     console.log("submit event listener working")
//     // console.log(localStorage)

//     // // clear the input box
//     // initials.value = ""
// })

// // // retrieve highscores from local storage
// // localStorage.getItem(scoresList)

// // // sort the scores from high to low
// // scoresList.sort(function (a, b) {
// //     return b - a;
// // });

// // // display the highscores as a list

// // // when the user click on "Clear Highscores", clear local storage
// // clearButton.addEventListener("click", function () {
// //     localStorage.clear();
// // })

