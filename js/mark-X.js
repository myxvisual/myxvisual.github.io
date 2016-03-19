var languageOverrides = {
  js: 'javascript',
  html: 'xml',
  markdown: 'markdown',
};

var syncToggle = true;

document.addEventListener("DOMContentLoaded", function(event) {
  var xmlhttp = new XMLHttpRequest();
  var url = 'http://myxvisual.github.io/doc/defult.md';
  xmlhttp.onreadystatechange = function() {
    $('#mdbody').value = xmlhttp.responseText;
    renderMD($('#mdbody').value);
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
});

function shortcutKey(key) {
  var customKey = {
    bold: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyB'},
    italic: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyI'},
    strikethrough: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyS'},
    h1: {ctrlKey: false, shiftKey: false, altKey: true, code: 'Digit1'},
    h2: {ctrlKey: false, shiftKey: false, altKey: true, code: 'Digit2'},
    h3: {ctrlKey: false, shiftKey: false, altKey: true, code: 'Digit3'},
    h4: {ctrlKey: false, shiftKey: false, altKey: true, code: 'Digit4'},
    h5: {ctrlKey: false, shiftKey: false, altKey: true, code: 'Digit5'},
    h6: {ctrlKey: false, shiftKey: false, altKey: true, code: 'Digit6'},
    table: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyT'},
    image: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyP'},
    code: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyC'},
    link: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyL'},
    math: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyM'},
    horizontal: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyH'},
    quote: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyQ'},
    list: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyV'},
    unchecked: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyU'},
    checked: {ctrlKey: false, shiftKey: false, altKey: true, code: 'KeyD'},
    newline: {ctrlKey: false, shiftKey: false, altKey: false, code: 'Enter'},
    softNewline: {ctrlKey: false, shiftKey: true, altKey: false, code: 'Enter'}
  };

String('bold');
  var keyCompare = JSON.stringify({ctrlKey: key.ctrlKey, shiftKey: key.shiftKey, altKey: key.altKey, code: key.code});
  // console.log(keyCompare);
  switch (keyCompare) {
    case JSON.stringify(customKey.bold):
      createString('bold');
    break;
    case JSON.stringify(customKey.italic):
      createString('italic');
    break;
    case JSON.stringify(customKey.strikethrough):
      createString('strikethrough');
    break;
    case JSON.stringify(customKey.h1):
      createString('h1');
    break;
    case JSON.stringify(customKey.h2):
      createString('h2');
    break;
    case JSON.stringify(customKey.h3):
      createString('h3');
    break;
    case JSON.stringify(customKey.h4):
      createString('h4');
    break;
    case JSON.stringify(customKey.h5):
      createString('h5');
    break;
    case JSON.stringify(customKey.h6):
      createString('h6');
    break;
    case JSON.stringify(customKey.table):
      createString('table');
    break;
    case JSON.stringify(customKey.image):
      createString('image');
    break;
    case JSON.stringify(customKey.code):
      createString('code');
    break;
    case JSON.stringify(customKey.link):
      createString('link');
    break;
    case JSON.stringify(customKey.math):
      createString('math');
    break;
    case JSON.stringify(customKey.horizontal):
      createString('horizontal');
    break;
    case JSON.stringify(customKey.quote):
      createString('quote');
    break;
    case JSON.stringify(customKey.list):
      createString('list');
    break;
    case JSON.stringify(customKey.unchecked):
      createString('unchecked');
    break;
    case JSON.stringify(customKey.checked):
      createString('checked');
    break;
    case JSON.stringify(customKey.newline):
      $('#mdbody').scrollTop += 20;
    break;
    case JSON.stringify(customKey.softNewline):
      $('#mdbody').scrollTop += 20;
    break;

    default:
  }
}

document.addEventListener('keyup', shortcutKey, false);

var md = window.markdownit({
      html: true,
      linkify: true,
      highlight: function(code, lang){
        if(languageOverrides[lang]) lang = languageOverrides[lang];
        if(lang && hljs.getLanguage(lang)){
          try {
            return hljs.highlight(lang, code).value;
          }catch(e){}
        }
        return '';
      }
    })
      .use(window.markdownitCheckbox);

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

function checkedHeight() {
  console.log('#mdbody height is ' + $('#mdbody').clientHeight);
  console.log('#preview height is ' + $('#preview').offsetHeight);
  console.log('#mdbody scrollTop is ' + $('#mdbody').scrollTop);
  console.log('#preview scrollTop is ' + $('#preview').scrollTop);
  console.log('#mdbody scrollHeight is ' + $('#mdbody').scrollHeight);
  console.log('#preview scrollHeight is ' + $('#preview').scrollHeight);
  console.log('#mdbody scrollBootom is ' + ($('#mdbody').scrollTop + $('#mdbody').clientHeight));
  console.log('#preview scrollBootom is ' + ($('#preview').scrollTop + $('#preview').offsetHeight));
}

function renderMD(data) {
  // checkedHeight();
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
  syncScroll && syncScroll($('#preview'));
}

function syncScroll(element) {
  element.scrollTop < ((element.scrollHeight - element.clientHeight) / 2)
  ?
    $('#preview').scrollTop = $('#preview').scrollHeight * element.scrollTop / element.scrollHeight
  :
    $('#preview').scrollTop = $('#preview').scrollHeight - $('#preview').offsetHeight - ($('#mdbody').scrollHeight - $('#mdbody').clientHeight - $('#mdbody').scrollTop) * ($('#preview').scrollHeight - $('#preview').offsetHeight) / ($('#mdbody').scrollHeight - $('#mdbody').clientHeight);
}

function createString(type) {
  switch (type) {
    case type = 'bold':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '**' + $('#mdbody').value.substring(startPos, endPos) + '**'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 2;
      $('#mdbody').selectionEnd = endPos + 2;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'italic':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '*' + $('#mdbody').value.substring(startPos, endPos) + '*'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 1;
      $('#mdbody').selectionEnd = endPos + 1;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'strikethrough':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '~~' + $('#mdbody').value.substring(startPos, endPos) + '~~'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 2;
      $('#mdbody').selectionEnd = endPos + 2;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'h1':
      window.setTimeout(function () {
          $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '# '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 2;
      $('#mdbody').selectionEnd = endPos + 2;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'h2':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '## '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 3;
      $('#mdbody').selectionEnd = endPos + 3;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'h3':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '### '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 4;
      $('#mdbody').selectionEnd = endPos + 4;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'h4':
      window.setTimeout(function () {
          $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '#### '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 5;
      $('#mdbody').selectionEnd = endPos + 5;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'h5':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '##### '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 6;
      $('#mdbody').selectionEnd = endPos + 6;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'h6':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '###### '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 7;
      $('#mdbody').selectionEnd = endPos + 7;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'table':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      window.setTimeout(function () {
        $('#mdbody').scrollTop += 100;
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '\nheader | header\n---|---\nrow1 col 1 | row1 col2\nrow2 col1 | row2 col2\n'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 70;
      $('#mdbody').selectionEnd = endPos + 70;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'image':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '![image](http://myxvisual.github.io/image/grass.jpg)'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 9;
      $('#mdbody').selectionEnd = endPos + 51;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'code':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      window.setTimeout(function () {
        $('#mdbody').scrollTop += 60;
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '```\n\n```'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 4;
      $('#mdbody').selectionEnd = endPos + 4;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'link':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '[link](http://myxvisual.github.io)'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 7;
      $('#mdbody').selectionEnd = endPos + 33;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'math':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      window.setTimeout(function () {
        $('#mdbody').scrollTop += 100;
      }, 0);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '``` math\nf(x) = \\int\_\{\-\\infty\}\^\\infty\n    \\hat f\(\\xi\)\\\,e\^\{2 \\pi i \\xi x\}\n    \\\,d\\xi\n```\n'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 9;
      $('#mdbody').selectionEnd = endPos + 83;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'horizontal':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '\n---\n\n'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 6;
      $('#mdbody').selectionEnd = endPos + 6;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'quote':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '> '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 2;
      $('#mdbody').selectionEnd = endPos + 2;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'list':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '- '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 2;
      $('#mdbody').selectionEnd = endPos + 2;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'unchecked':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '- [ ] '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 6;
      $('#mdbody').selectionEnd = endPos + 6;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'checked':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
      var startPos = $('#mdbody').selectionStart;
      var endPos = $('#mdbody').selectionEnd;
      $('#mdbody').value = $('#mdbody').value.substring(0, startPos)
        + '- [x] '
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 6;
      $('#mdbody').selectionEnd = endPos + 6;
      renderMD(this.$('#mdbody').value);
      break;

    default:

  }
}



function iconDown(element) {
  element.style.cssText += ';opacity: 0.7';
}
function iconUp(element) {
  element.style.cssText -= ';opacity: 0.7';
}
