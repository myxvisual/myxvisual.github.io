var md = window.markdownit();
var $ = function (element) {
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
};

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
