App = (function() {
	let temperatureConverter = new TemperatureConverter();

	let setOutput = function(text) {
		document.querySelector("#output").innerText = text;
	};

	let displayTemperatureUnits = function(tempCode) {
		return (tempCode == 'F' || tempCode == 'C') ? '°' + tempCode : tempCode;
	};

	let performConversionAndShowResult = function(fromTempCode, toTempCode, value) {
		let converted = temperatureConverter.convert(fromTempCode, toTempCode, value);
		setOutput(value + displayTemperatureUnits(fromTempCode) 
				+ " is equivalent to " + converted + displayTemperatureUnits(toTempCode));
	};

	return {
		initialise: function() {
			let fromTempControl = document.getElementById("fromTemp");
			let toTempControl = document.getElementById("toTemp");
			let valueControl = document.getElementById("tempValue");

			let submitControl = document.querySelector('#submit');
			submitControl.onclick = function() { 
				performConversionAndShowResult(fromTempControl.value, toTempControl.value, Number(valueControl.value)); 
			};
			console.log("Application initialised.");
		}
	};
})();
