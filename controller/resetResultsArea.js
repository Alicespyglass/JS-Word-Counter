(function (exports) {
  function resetResultsArea () {
    var resultsArea = document.getElementById('wordcount-analysis');
    while(resultsArea.firstChild) {
      resultsArea.removeChild(resultsArea.firstChild);
    }
    analysis.resetResults();
  }

  exports.resetResultsArea = resetResultsArea;
})(this);
