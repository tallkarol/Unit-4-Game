// Initialize Variables
window.onload = function() {

var playerScore;
var perfectScore;
var crystalOneScore;
var crystalTwoScore;
var crystalThreeScore;
var crystalFourScore;
var winCount = 0;
var lossCount = 0;

$("#totalWins").text("Total Wins: " + winCount)
$("#totalLosses").text("Total Losses: " + lossCount)

$("#crystalOne").click(function() {
    playerScore = playerScore + crystalOneScore;
    $("#currentScore").text("Current Score: " + playerScore);
    runGame()
});

$("#crystalTwo").click(function() {
    playerScore = playerScore + crystalTwoScore;
    $("#currentScore").text("Current Score: " + playerScore);
    runGame()
});

$("#crystalThree").click(function() {
    playerScore = playerScore + crystalThreeScore;
    $("#currentScore").text("Current Score: " + playerScore);
    runGame();
});

$("#crystalFour").click(function() {
    playerScore = playerScore + crystalFourScore;
    $("#currentScore").text("Current Score: " + playerScore);
    runGame();
});
}

// Function to generate a number between a min and max

var generateScore = function (min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Function to reset the scores (player, perfect, and each crystal) without a page reload

var resetScores = function () {
    playerScore = 0;
    $("#currentScore").text("Current Score: " + playerScore);
    perfectScore = generateScore(9,120);
    $("#perfectScore").text("Perfect Score: " + perfectScore);
    crystalOneScore = generateScore(1,12);
    crystalTwoScore = generateScore(1,12);
    crystalThreeScore = generateScore(1,12);
    crystalFourScore = generateScore(1,12);
}

// Function to test if player wins or loses

var runGame = function() {
    resetScores()
    if (playerScore === perfectScore) {
        alert("Congratulations, you've achieved a balance");
        winCount++;
        $("#totalWins").text("Total Wins: " + winCount);
        resetScores();
    } else if (playerScore >= perfectScore) {
        alert("Sorry, looks like you're not quite getting it.");
        lossCount++;
        $("#totalLosses").text("Total Losses: " + lossCount);
        resetScores();
    } else {
    }
}



// Start the game

runGame()