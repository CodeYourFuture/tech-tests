class App { 

	constructor() {
		this.centuryFinder = new CenturyFinder();

		var submitControl = document.querySelector('#submit');
		var self = this;
		submitControl.onclick = function() { self.findAndPrintCentury(); };

		console.info("Application initialised.");
	}

	setOutput(text) {
		document.querySelector("#output").innerText = text;
	}

	findAndPrintCentury() {
		let inputYear = Number(document.getElementById("yearField").value);
		let inputMonth = document.getElementById("monthField").value;
		let inputDay = Number(document.getElementById("dayField").value);
		if (isNaN(inputYear) || isNaN(inputMonth) || isNaN(inputDay)) {
			this.setOutput("Please enter a valid date.");
		}
		else {
			let date = new Date();
			date.setFullYear(inputYear);
			date.setMonth(inputMonth);
			date.setDate(inputDay);
			let century = this.centuryFinder.findCenturyOf(date);
			this.setOutput("The date " + date.toLocaleDateString() + " is in the " + century + " century.");
		}
	}

}
