var md = window.markdownit();
function $(element) {
  var selector = element.match(/([.#])*(.+)/);
  switch (selector[1]) {
    case '.':
      return document.getElementsByClassName(selector[2]);
      break;
    case '#':
      return document.getElementById(selector[2]);
      break;
    default:
      return document.getElementsByTagName(selector[2]);
  }
}

function renderMD(data) {
  function replacer(match, p1, offset, string) {
    return katex.renderToString(p1);
  }
  var mdData = (md.render(data)).toString();
  preview.innerHTML = mdData;

  var maths = $('.language-math');
  for (var i = 0; i < maths.length; i++) {
    var noWrap = (maths[i].innerText).split('\n\n');
    maths[i].innerHTML = null;
    noWrap.map(function (element) {
      var children = katex.renderToString(element);
      maths[i].innerHTML += '\n\n' + children;
    })
  }
}

function syncScroll(element) {
  var scrollSynctor = element.scrollTop / element.scrollHeight;
  $('#preview').scrollTop = $('#preview').scrollHeight * scrollSynctor;
}

function createString(type) {
  switch (type) {
    case type = 'bold':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '****'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 2;
      $('#mdbody').selectionEnd = endPos + 2;
      break;

    case type = 'italic':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '**'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 1;
      $('#mdbody').selectionEnd = endPos + 1;
      break;

    case type = 'strikethrough':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '~~~~'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 2;
      $('#mdbody').selectionEnd = endPos + 2;
      break;

    case type = 'underline':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '++++'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 2;
      $('#mdbody').selectionEnd = endPos + 2;
      break;

    case type = 'h1':
      window.setTimeout(function () {
          $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '# '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 2;
      $('#mdbody').selectionEnd = endPos + 2;
      break;

    case type = 'h2':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '## '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 3;
      $('#mdbody').selectionEnd = endPos + 3;
      break;

    case type = 'h3':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '### '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 4;
      $('#mdbody').selectionEnd = endPos + 4;
      break;

    case type = 'h4':
      window.setTimeout(function () {
          $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '#### '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 5;
      $('#mdbody').selectionEnd = endPos + 5;
      break;

    case type = 'h5':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '##### '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 6;
      $('#mdbody').selectionEnd = endPos + 6;
      break;

    case type = 'h6':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '###### '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 7;
      $('#mdbody').selectionEnd = endPos + 7;
      break;




    default:

  }
}



function iconDown(element) {
  element.style.cssText += ';color:rgba(158, 238, 255, 0.7)';
}
function iconUp(element) {
  element.style.cssText -= ';color:rgba(158, 238, 255, 0.7)';
}
