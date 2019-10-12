$(document).ready(function() {

    // I was lost for hours on this assignment. It's not pretty but I think I got it.
	
	var rand = [];

	for (var r = 19; r < 121; r++) {
		rand.push(r);
	}

	var infinitystones = [];

	for (var c = 1; c < 13; c++) {

		infinitystones.push(c);
	}

	var randNumber; 
	var stoneNumbers = [];

	var c1;
	var c2;
	var c3;
    var c4;
    
var audioThanos = new Audio("iamainevitablethanos.mp3");

var audioAvengers = new Audio("avengers_assemble.mp3");

  var totalScore = 0;

	var wins = 0;
	var losses = 0;

	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	}

	function pickRandomStones(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			stoneNumbers.push(a);
		}
		console.log("crystal numbers: " + stoneNumbers);

	}

	function stoneValues(arr) {

		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
    } 
    
	function gameReset(x) {

		stoneNumbers = []; 

		pickRandomNumber(rand);

		pickRandomStones(infinitystones);

		stoneValues(stoneNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} 

	pickRandomNumber(rand);
	pickRandomStones(infinitystones); 
	stoneValues(stoneNumbers);


		$("#button-1").on("click", function() {

			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);

            audioAvengers.play();
			setTimeout(function() {gameReset("YOU WIN!! THE UNIVERSE IS SAVED")}, 200);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

            audioThanos.play();
			setTimeout(function() {gameReset("THANOS IS INEVITABLE...")}, 200);
		}
	});

});