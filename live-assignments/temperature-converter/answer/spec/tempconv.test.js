const TemperatureConverter = require("../app/js/tempconv.js");
const converter = new TemperatureConverter();

test("should convert Celcius to Farenheit", function() {
	expect(converter.convert("C", "F", 100.0)).toBe(212);
	expect(converter.convert("C", "F", 0)).toBe(32);
});

test("should convert Celcius to Kelvin", function() {
	expect(converter.convert("C", "K", 25)).toBe(298);
	expect(converter.convert("C", "K", -17.0)).toBe(256);
});

test("should convert Farenheit to Kelvin", function() {
	expect(converter.convert("F", "K", 50)).toBe(283);
});

test("should convert Farenheit to Celcius", function() {
	expect(converter.convert("F", "C", 212.0)).toBe(100);
	expect(converter.convert("F", "C", 32)).toBe(0);
});

test("should convert Kelvin to Celcius", function() {
	expect(converter.convert("K", "C", 333)).toBe(60);
});

test("should convert Kelvin to Farenheit", function() {
	expect(converter.convert("K", "F", 273)).toBe(32);
});

test("should return the input value if temperature codes are the same", function() {
	expect(converter.convert("K", "K", 300)).toBe(300);
	expect(converter.convert("F", "F", 200)).toBe(200);
	expect(converter.convert("C", "C", -12)).toBe(-12);
});

test("should return undefined if a negative value of Kelvins is entered", function() {
	expect(converter.convert("C", "K", -1)).toBe(272);
	expect(converter.convert("K", "C", -1)).toBeUndefined();
});

test("should return undefined if value or temperature code is not specified", function() {
	expect(converter.convert("F", "K", null)).toBeUndefined();
	expect(converter.convert("C")).toBeUndefined();
	expect(converter.convert(null, "C")).toBeUndefined();
	expect(converter.convert()).toBeUndefined();
});

test("should return undefined if temperature code is not valid", function() {
	expect(converter.convert("A", "B", 20)).toBeUndefined();
	expect(converter.convert("B", "C", 20)).toBeUndefined();
	expect(converter.convert("C", "A", 20)).toBeUndefined();
});
