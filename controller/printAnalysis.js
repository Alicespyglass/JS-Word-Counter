(function (exports) {
  function printAnalysis () {
    var resultsList = document.getElementById('wordcount-analysis'),
    li = document.createElement('li'),
    clone;
    analysis.results.forEach(function (word) {
      clone = li.cloneNode();
      clone.textContent = word;
      resultsList.appendChild(clone);
    });
  }

  exports.printAnalysis = printAnalysis;
})(this);
