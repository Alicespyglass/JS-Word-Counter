setupPageDivs();
buildForm();
buildUpload();
buildAnalysis();
var analysis = new Analysis();

var form = document.getElementById('submit-text-button');
form.addEventListener('click', submitText, false);

var file = document.getElementById('submit-link-button');
file.addEventListener('click', uploadText, false);
