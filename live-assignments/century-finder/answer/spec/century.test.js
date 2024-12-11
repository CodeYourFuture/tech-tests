const CenturyFinder = require("../app/js/century.js");
const centuryFinder = new CenturyFinder();

test("should correctly determine corresponding century for date", function() {
	// remember months in JavaScript are 0-11, not 1-12
	expect(centuryFinder.findCenturyOf(new Date(1776, 6, 4))).toEqual("18th");
	expect(centuryFinder.findCenturyOf(new Date(1215, 5, 15))).toEqual("13th");
	expect(centuryFinder.findCenturyOf(new Date(1945, 4, 8))).toEqual("20th");
	expect(centuryFinder.findCenturyOf(new Date(2000, 11, 31))).toEqual("20th");
	expect(centuryFinder.findCenturyOf(new Date(2001, 0, 1))).toEqual("21st");
	expect(centuryFinder.findCenturyOf(new Date(799, 7, 1))).toEqual("8th");
});
