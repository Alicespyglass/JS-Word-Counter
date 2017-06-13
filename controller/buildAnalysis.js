(function (exports) {
  buildAnalysis = function () {
    var list = document.createElement('ul');
    var div = document.getElementById('wordcount-div');
    list.setAttribute('id', 'wordcount-analysis');
    div.appendChild(list);
  };

  exports.buildAnalysis = buildAnalysis;
})(this);
