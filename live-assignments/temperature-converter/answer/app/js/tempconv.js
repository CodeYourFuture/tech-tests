function TemperatureConverter() { 
	this.supportedConversions = {
		C: {
			F: function(val) { return val * 9 / 5 + 32; },
			K: function(val) { return val + 273; }
		},
		F: {
			C: function(val) { return (val-32) * 5 / 9; },
			K: function(val) { return (val-32) * 5 / 9 + 273; }
		},
		K: {
			F: function(val) { return (val-273) * 9 / 5 + 32; },
			C: function(val) { return val - 273; }
		}
	};
}

TemperatureConverter.prototype.lookupConversionFor = function(fromTemp, toTemp) {
	try {
		var conversionFunction = this.supportedConversions[fromTemp][toTemp];
		if (typeof(conversionFunction) === 'function') {
			return conversionFunction;
		}
	} catch (typeError) { }

	console.error("No supported conversion from:" + fromTemp + " to " + toTemp);
	return function(value) { /* no-op */ };
};

TemperatureConverter.prototype.convert = function(fromTemp, toTemp, value) {
	if (fromTemp == null || toTemp == null || value == null) {
		return undefined;
	}
	if (fromTemp == "K" && value < 0) {
		return undefined;
	}
	if (fromTemp == toTemp) {
		return value;
	}
	return this.lookupConversionFor(fromTemp, toTemp)(value); 
};

if (module) {
	module.exports = TemperatureConverter;
}
