(function (exports) {
  setupPageDivs = function () {
    var headerDiv = _setUpHeaderDiv();
    document.body.appendChild(headerDiv);

    var subtitleDiv = _setUpSubtitleDiv();
    document.body.appendChild(subtitleDiv);

    var textInputDiv = document.createElement('div');
    textInputDiv.setAttribute('class', 'text-input-div');
    textInputDiv.setAttribute('id', 'text-input-div');

    document.body.appendChild(textInputDiv);

    var uploadInputDiv = document.createElement('div');
    uploadInputDiv.setAttribute('class', 'upload-input-div');
    uploadInputDiv.setAttribute('type', 'file');
    uploadInputDiv.setAttribute('id', 'upload-input-div');

    document.body.appendChild(uploadInputDiv);

    var analysisHeaderDiv = _setUpAnalysisHeaderDiv();
    document.body.appendChild(analysisHeaderDiv);

    var wordCountDiv = document.createElement('div');
    wordCountDiv.setAttribute('class', 'wordcount-div');
    wordCountDiv.setAttribute('id', 'wordcount-div');

    document.body.appendChild(wordCountDiv);
  };

  function _setUpHeaderDiv () {
    var headerDiv = document.createElement('div');
    headerDiv.setAttribute('class', 'title-div');
    headerDiv.setAttribute('id', 'header');

    var pageTitle = document.createElement('H1');
    var titleText = document.createTextNode('Compare the Word Counter');
    pageTitle.appendChild(titleText);
    pageTitle.setAttribute('id', 'page-title');

    headerDiv.appendChild(pageTitle);
    return headerDiv;
  }

  function _setUpSubtitleDiv () {
    var subtitleDiv = document.createElement('div');
    subtitleDiv.setAttribute('class', 'title-div');
    subtitleDiv.setAttribute('id', 'header');

    var pageSubtitle = document.createElement('H4');
    var subtitleText = document.createTextNode('Type text into text box or upload text file');
    pageSubtitle.appendChild(subtitleText);
    pageSubtitle.setAttribute('id', 'page-subtitle');

    subtitleDiv.appendChild(pageSubtitle);
    return subtitleDiv;
  }

  function _setUpAnalysisHeaderDiv () {
    var analysisHeaderDiv = document.createElement('div');
    analysisHeaderDiv.setAttribute('class', 'title-div');
    analysisHeaderDiv.setAttribute('id', 'analysis-div');
    var analysisTitle = document.createElement('H2');
    var titleText = document.createTextNode('Words and their occurances');

    analysisTitle.setAttribute('id', 'analysisTitle');
    analysisTitle.appendChild(titleText);

    analysisHeaderDiv.appendChild(analysisTitle);
    return analysisHeaderDiv;
  }

exports.setupPageDivs = setupPageDivs;
})(this);
