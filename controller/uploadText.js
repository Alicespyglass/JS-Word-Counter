(function (exports) {
  uploadText = function () {
    resetResultsArea();
    openFileAndAnalyseAndPrint();
  };

  function openFileAndAnalyseAndPrint () {
    var textType = /text.*/;
    var file = document.getElementById('input').files[0];
    if (file.type.match(textType)) {
      var reader = new FileReader();
      reader.onload = function (e) {
        runAnalysis(reader.result);
        printAnalysis();
      };
      reader.readAsText(file);
    } else {
      alert('File type not supported');
    }
  }

  exports.uploadText = uploadText;
})(this);
