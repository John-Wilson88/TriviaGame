// on page load start count down timer.

$(" document ").ready( function () {

	// Variables
	var correct = 0;
	var incorrect = 0;
	var timeLeft = 30;
	var gameClock = setInterval(timer, 1000);

	function timer() {

		if (timeLeft == 0){

			clearTimeout(gameClock);

			// when timer runs out load results page with user results
			GameOver();

		}

		else {

			document.getElementById("timeRemaining").innerHTML = "Time Remaing " + timeLeft;

			timeLeft = timeLeft - 1;

		}				
	}



// check questions for user picks, determin if pick is correct, increment either "correct" "incorrect" or "unanswered"

	$(".Cor").click(function() {
		correct++;
		//console.log(correct);
		return correct;
	});

	$(".Wrong").click(function() {
		incorrect++;
		//console.log(incorrect);
		return incorrect;
	});


// or when submit button is clicked

document.getElementById("done").addEventListener("click", GameOver);

function GameOver() {

	clearTimeout(gameClock);
	document.getElementById("game").innerHTML = " ";

	$("#wins").append("correct " + correct);
	$("#losses").append("incorrect " + incorrect);

	if(correct > incorrect) {
		document.getElementById("gameOver").innerHTML = "You Win!";
		var song = document.getElementById("winnerSong");
		song.play();
	}
	else {
		document.getElementById("gameOver").innerHTML = "Game Over!";
	}
}

});