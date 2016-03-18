var languageOverrides = {
  js: 'javascript',
  html: 'xml',
  markdown: 'markdown',
};

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
}

function syncScroll(element) {
  element.scrollTop < element.scrollHeight / 2
  ?
    $('#preview').scrollTop = $('#preview').scrollHeight * element.scrollTop / element.scrollHeight
  :
    $('#preview').scrollTop = ($('#preview').scrollHeight * ((element.scrollTop + $('#preview').clientHeight) / element.scrollHeight)) - $('#preview').offsetHeight;
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
        + '![image](http://myxvisual.github.io/image/grass.jpg)\n'
        + $('#mdbody').value.substring(endPos, $('#mdbody').value.length);
      $('#mdbody').selectionStart = startPos + 9;
      $('#mdbody').selectionEnd = endPos + 51;
      renderMD(this.$('#mdbody').value);
      break;

    case type = 'code':
      window.setTimeout(function () {
        $('#mdbody').focus();
      }, 100);
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
