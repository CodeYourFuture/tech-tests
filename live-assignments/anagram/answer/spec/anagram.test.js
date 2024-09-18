const AnagramChecker = require("../app/js/anagram.js");
const anagramChecker = new AnagramChecker();

test("should return false if arguments are of different lengths", function() {
	expect(anagramChecker.checkAnagrams("desk", "table")).toBe(false);
	expect(anagramChecker.checkAnagrams("happy", "unhappy")).toBe(false);
});

test("should return false if arguments contain different letters", function() {
	expect(anagramChecker.checkAnagrams("poke", "pork")).toBe(false);
});

test("should return true if arguments are anagrams of each other", function() {
	expect(anagramChecker.checkAnagrams("bus", "sub")).toBe(true);
	expect(anagramChecker.checkAnagrams("silent", "listen")).toBe(true);
	expect(anagramChecker.checkAnagrams("complaint", "compliant")).toBe(true);
});

test("should return true regardless of which way round anagrams are presented", function() {
	expect(anagramChecker.checkAnagrams("bleat", "table")).toBe(true);
	expect(anagramChecker.checkAnagrams("table", "bleat")).toBe(true);
});

test("should handle nulls and undefined values by returning false", function() {
	expect(anagramChecker.checkAnagrams("", null)).toBe(false);
	expect(anagramChecker.checkAnagrams(null, "")).toBe(false);
	expect(anagramChecker.checkAnagrams()).toBe(false);
});
