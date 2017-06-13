(function (exports) {
  runAnalysis = function (text) {
    var sampleText = text
    var wordCounter = new WordCounter(sampleText);
    wordCounter.cleanString();
    wordCounter.count();
    var result = wordCounter.countsResult;
    analysis.storeAnalysis(result);
  };

  exports.runAnalysis = runAnalysis;
})(this);
