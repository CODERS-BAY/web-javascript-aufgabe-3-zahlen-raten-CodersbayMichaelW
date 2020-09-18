var startButton = document.getElementById("start");
var checkButton = document.getElementById("checkGuess");
var numberToGuess;
var currentTry;
var possibletrys;

$(document).ready(function() {
    $("#guess").prop("disabled", true);
    $("#checkGuess").prop("disabled", true);
    $("#guess").prop("value", "");
});


function startGame() {
    possibletrys = Number(document.getElementById("trys").value);
    if (possibletrys > 0) {
        $("#guess").prop("disabled", false);
        $("#checkGuess").prop("disabled", false);
        $("main").css("opacity", "1");
        $("h1").html("Try 1");
        document.getElementById("resultText").innerHTML = "";

        let upperLimit = Number(document.getElementById("upperLimit").value) + 1;
        numberToGuess = Math.floor(Math.random() * upperLimit);
        currentTry = 1;
    }
}

function checkGuess() {
    if (currentTry <= possibletrys) {
        let guess = document.getElementById("guess").value;

        // guessed the number -> Won game
        if (guess == numberToGuess) {
            won();
            $("#guess").prop("disabled", true);
            $("#checkGuess").prop("disabled", true);
        }
        // number to low or to high
        else {
            helpForTheUser(guess);

            currentTry++;

            // stops the visual update from going on step to far
            if(currentTry != possibletrys+1) {
                $("h1").html("Try " + (currentTry));
            }
    
            //
            if(currentTry == possibletrys + 1) {
                lostGame();
            }
        }
    }
}

function won() {
    document.getElementById("resultText").innerHTML = "You guessed the number! :)";
}

function helpForTheUser(guess) {
    if (guess < numberToGuess) {
        document.getElementById("resultText").innerHTML = "You guessed to low";
    }
    // guess is higher
    else {
        document.getElementById("resultText").innerHTML = "You guessed to high!";
    }
}

function lostGame() {
    $("#guess").prop("disabled", true);
    $("#checkGuess").prop("disabled", true);
    $("main").css("opacity", "0.5");
    document.getElementById("resultText").innerHTML = "You didn't guessed the number right :(";
}

startButton.addEventListener("click", startGame);
checkButton.addEventListener("click", checkGuess);