var cm = CodeMirror($('#editor').get(0), {
  mode: 'python',
});

cm.setSize("100%", "500px");

// When we submit, take the code from codemirror and put it in the form
$('#submit').on('click', function(e) {
  $('#code').val(cm.getValue());
}.bind(cm));
