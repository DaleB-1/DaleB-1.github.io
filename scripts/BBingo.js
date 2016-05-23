//set up a list of bullshit expressions
var bs = new Array (
"At The End Of The Day",
"Ball Park",
"Big Picture",
"Bottom Line",
"Brain Storm",
"Closure",
"Communi- cation",
"Contractual Issue",
"Cost Analysis",
"Critical Path",
"Days Ahead",
"Deliver- ables",
"Downsize",
"Draw A Line In the Sand",
"Driver",
"Dynamic",
"Empower",
"Fast Track",
"Flag",
"Focussed",
"Frame",
"Generally Speaking",
"Goal Setting",
"Heads Up",
"In Terms Of",
"Knowledge Base",
"Long Term",
"Opportunity",
"Optimise",
"Osmosis",
"Out Of The Loop",
"Outside The Box",
"P10",
"P50",
"P90",
"Pass The Buck",
"Performance Indicators",
"Proactive",
"Push Back",
"Quantum Leap",
"Restructure",
"Results Driven",
"Revert",
"Revisit",
"Risk Analysis",
"Robust Philosophy",
"Scenario",
"Show and Tell",
"Stake Holders",
"Step Change",
"Step Up To The Plate",
"Stretch Target",
"Synergy",
"Take Owner ship",
"Team Driven",
"Team Player",
"Touch Base",
"Tweak",
"Value Added",
"Vision",
"Win-Win",
"With Respect To",
"Zero Tolerance"
);

//set up a corresponding list of random numbers
var bsIndex = new Array (bs.length);
	for (var i=0; i<bs.length-1; i++) {
		bsIndex[i] = Math.floor(Math.random() * 1000);
	}
	
//bubble sort the random numbers in ascending order and sort the expressions at the same time
var bsIndexTemp = "";
var bsTemp = "";

for (var i=0; i<bsIndex.length-1; i++) {
	for (var j=i+1; j<bs.length-1; j++) {
		if (bsIndex[i] > bsIndex[j]) {
			bsIndexTemp = bsIndex[i];
			bsIndex[i] = bsIndex[j];
			bsIndex[j] = bsIndexTemp;
			bsTemp = bs[i];
			bs[i] = bs[j];
			bs[j] = bsTemp;
		}
	}	
}
	
window.onload = initAll;

function initAll() {
	newCard();
}

function newCard() {
	for (var i=0; i<24; i++) {
		setSquare(i);
	}
}
function setSquare(thisSquare) {
	var currSquare = "square" + thisSquare;
	var newNum = thisSquare % bs.length; //in case there are less than 24 expressions
	document.getElementById(currSquare).innerHTML = bs[newNum];
	document.getElementById(currSquare).className = "";
	document.getElementById(currSquare).onmousedown = toggleColor;
}

function toggleColor(evt) {
	if (evt) {
		var thisSquare = evt.target;
	}
	else {
		var thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}
	else {
		thisSquare.className = "";
	}
	checkWin();
}

function checkWin() {
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

	for (var i=0; i<24; i++) {
		var currSquare = "square" + i;
		if (document.getElementById(currSquare).className != "") {
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2,i);
		}
	}

	for (var i=0; i<winners.length; i++) {
		if ((winners[i] & setSquares) == winners[i]) {
			winningOption = i;
		}
	}
	
	if (winningOption > -1) {
		for (var i=0; i<24; i++) {
			if (winners[winningOption] & Math.pow(2,i)) {
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
}

