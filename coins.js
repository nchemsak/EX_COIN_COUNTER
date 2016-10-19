
var outputQt = document.getElementById("quartersFINAL");
var outputDi = document.getElementById("dimesFINAL");
var outputNi = document.getElementById("nickelsFINAL");
var outputPe = document.getElementById("penniesFINAL");


function coinCounter() {
		var answer = prompt("Type in a dollar amount.");
		var newDollarAmount = parseFloat(answer);
		var coinPurse2 = {
			pennies : .01,
			nickels : .05,
			dimes : .10,
			quarters : .25
		}

		var quarters1 = (newDollarAmount / coinPurse2.quarters);
		var quarters2 = (newDollarAmount % coinPurse2.quarters);
		var nickels2 = (newDollarAmount % coinPurse2.nickels);

	if ( quarters2 === 0 ) {
		outputQt.innerHTML =  "Quarters: " + quarters1;
		outputDi.innerHTML =  "Dimes: 0" + "";
		outputNi.innerHTML =  "Nickels: 0" ;
		outputPe.innerHTML =  "Pennies: 0" ;


	} else if ( quarters2 !== 0 ) {
		outputQt.innerHTML = ("Quarters:  " + Math.floor(quarters1));


	// Quarters Remainder
		var qr = quarters2.toFixed(parseFloat(2));
		var qr = parseFloat(qr);


	// Dimes
		var dimes3 = (qr / coinPurse2.dimes);
		var dimes4 = (Math.floor(dimes3));
		outputDi.innerHTML =  "Dimes: " + dimes4;


	// Dimes Remainder
		var dr = qr % coinPurse2.dimes;


	// Nickels
		var nickels3 = Math.floor(qr % coinPurse2.dimes);
		var test3 = (qr % coinPurse2.dimes) * (100);
		var test4 = (Math.ceil(test3-.1));
		if (test4 >= 5 && test4 <=9 ) {
			outputNi.innerHTML =  "Nickels: 1";

		} else {
			outputNi.innerHTML =  "Nickels: 0";
		}


	// Nickels Remainder
		var nr = dr + coinPurse2.nickels;


	// Pennies
		if (dr === 0 | dr === 0.05) {
			outputPe.innerHTML =  "Pennies: 0";
		} else  {
		var three =	nickels2 * 100;
			if (three <= 2) {
				outputPe.innerHTML =  "Pennies: "+ Math.ceil(three);
			} else if (three > 5 && three < 9) {
				outputPe.innerHTML =  "Pennies: "+ Math.ceil(three);
			} else if (three > 4 && three < 4) {
				outputPe.innerHTML =  "Pennies: "+ Math.floor(three);
			} else if (three === 4) {
				outputPe.innerHTML =  "Pennies: "+ three;
			} else if (three > 2 && three < 2.5 ) {
				outputPe.innerHTML =  "Pennies: "+ Math.floor(three);
			} else if (three === 3) {
				outputPe.innerHTML =  "Pennies: "+ three;
			} else if (three < 2.5 && three > 2) {
				outputPe.innerHTML =  "Pennies: "+ Math.floor(three);
			} else if (three > 3.5 && three < 4) {
				outputPe.innerHTML =  "Pennies: "+ Math.ceil(three);
			} else if (three > 4 && three < 4.5) {
				outputPe.innerHTML =  "Pennies: "+ Math.floor(three);
			} else if (three > 2.5 && three < 3) {
				outputPe.innerHTML =  "Pennies: "+ Math.ceil(three);
			} else if (three > 3 && three < 3.5) {
				outputPe.innerHTML =  "Pennies: "+ Math.floor(three);
			} else {
				outputPe.innerHTML =  "Pennies: 0";

			}

		}
	}
}

coinCounter();
