(function (exports) {
  buildUpload = function () {
    var div = document.getElementById('upload-input-div');
    div.appendChild(_addInput());
    div.appendChild(_addLinkButton());
  };

  function _addInput () {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('id', 'input');
    return input;
  }

  function _addLinkButton () {
    var button = document.createElement('button');
    var buttonName = document.createTextNode('Upload text file');
    button.appendChild(buttonName);
    button.setAttribute('id', 'submit-link-button');
    return button;
  }

  exports.buildUpload = buildUpload;
})(this);
