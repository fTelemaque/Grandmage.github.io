
// Variables
const guessInput = document.getElementById('guessinput');
const guessButton = document.getElementById('guessbuttonsite');
const messageAlert = document.getElementById("messagealert");


// Arrow function
const play = () => {
    const userGuess = guessInput.value;
    if (userGuess < 1 || isNaN(userGuess)) {
       messageAlert.innerHTML = "Please enter a valid age!"; 
    } else if (userGuess <= 30 ) {
     window.location.href = "bornyesterday.html";
    } else if (userGuess <= 40 ) {
        window.location.href = "happygranny.html";
    } else if (userGuess <= 50 ) {
        window.location.href = "dancinggranny.html";
    } else if (userGuess <= 60 ) {
        window.location.href = "hellurmadea.html";
    }  else if (userGuess <= 70 ) {
        window.location.href = "heyjay.html";
    }  else if (userGuess <= 80 ) {
        window.location.href = "oldlady.html";
    } else if (userGuess <= 122 ) {
        window.location.href = "grumpy.html";
    } else messageAlert.innerHTML = "The world’s oldest person on record was 122 years old. Please enter any age between 1 and 122."; 
    return;
}   

guessButton.addEventListener("click", play);

// The end


