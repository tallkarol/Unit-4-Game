        

// Initialize Variables

var playerScore;
var crystalOneScore;
var crystalTwoScore;
var crystalThreeScore;
var crystalFourScore;

// Function to generate a number between a min and max

var generateScore = function (min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var resetScores = function () {
    var perfectScore = generateScore(9,120);
    $("#perfectScore").text("Perfect Score: " + perfectScore);
    crystalOneScore = generateScore(1,12);
    crystalTwoScore = generateScore(1,12);
    crystalThreeScore = generateScore(1,12);
    crystalFourScore = generateScore(1,12);
}


// Start the game

resetScores()
console.log(crystalOneScore)

// $("#crystalOne").on("click", function {

// })

// var resetGame = function() {
//     playerScore = 0;
//     perfectScore = Math.floor(Math.Random)
// }

// Using jQuery render a random number into perfectScore. Show player perfectScore.



// When the player click