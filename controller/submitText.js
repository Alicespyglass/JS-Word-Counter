(function (exports) {
  submitText = function () {
    resetResultsArea();
    getTextAndAnalyse();
    printAnalysis();
  };

  function getTextAndAnalyse () {
    var text = document.getElementById('text-input-field').value;
    runAnalysis(text);
  }

  exports.submitText = submitText;
})(this);
