(function (exports) {
  function WordCounter (string) {
    this.input = string;
    this.cleanedString = [];
    this.countsResult = {};
  }

  WordCounter.prototype.cleanString = function () {
    var string = this.input.toLowerCase();
    var words = string.replace(/[^\w\s']/gi, '').split(/\s/);
    this.cleanedString = words;
  };

  WordCounter.prototype.count = function () {
    var cleanedString = this.cleanedString;
    var freqMap = {};
    cleanedString.forEach(function (w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    this.countsResult = freqMap;
  };

  exports.WordCounter = WordCounter;
})(this);
