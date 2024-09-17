function AnagramChecker () { }

AnagramChecker.prototype.checkAnagrams = function(word1, word2) {
	if (word1 == null || word2 == null) {
		return false;
	}
	return this.prepareWord(word1) === this.prepareWord(word2);
};

AnagramChecker.prototype.prepareWord = function(word) {
	return word.split('').sort().join('');
};

if (module) {
	// this exists in the Node/Jest environment but not in the browser.
	module.exports = AnagramChecker;
}
