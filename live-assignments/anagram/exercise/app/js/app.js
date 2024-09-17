function App() { 
	this.anagramChecker = new AnagramChecker();

	var submitControl = document.querySelector('#submit');
	var self = this;
	submitControl.onclick = function() { self.checkForAnagrams() };

	console.debug("Application initialised.");
}

App.prototype.setOutput = function(text) {
	document.querySelector("#output").innerText = text;
};

App.prototype.checkForAnagrams = function() {
	var firstWord = document.getElementById("word1").value;
	var secondWord = document.getElementById("word2").value;
	if (firstWord == "" || secondWord == "") {
		this.setOutput("");
	} else {
		if (this.anagramChecker.checkAnagrams(firstWord, secondWord)) {
			this.setOutput("These words are anagrams of each other.");
		} else {
			this.setOutput("These words are not anagrams of each other.");
		}
	}
};
