(function (exports) {
  function Analysis () {
    this.results = [];
  }

  Analysis.prototype.storeAnalysis = function (countsResult) {
    for(var i in countsResult) {
      this.results.push(i + ": " + countsResult[i]);
    }
  };

  Analysis.prototype.resetResults = function () {
    this.results = [];
  };

exports.Analysis = Analysis;
})(this);
