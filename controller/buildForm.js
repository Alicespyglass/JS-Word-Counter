(function (exports) {
  buildForm = function () {
    var div = document.getElementById('text-input-div');
    div.appendChild(_addTextArea());
    div.appendChild(_addTextButton());
  };

  function _addTextArea () {
    var textarea = document.createElement('textarea');
    textarea.setAttribute('rows', '10');
    textarea.setAttribute('cols', '50');
    textarea.setAttribute('id', 'text-input-field');
    return textarea;
  }

  function _addTextButton () {
    var button = document.createElement('button');
    var buttonName = document.createTextNode('Submit text');
    button.appendChild(buttonName);
    button.setAttribute('id', 'submit-text-button');
    return button;
  }

  exports.buildForm = buildForm;
})(this);
