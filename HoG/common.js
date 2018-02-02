function arr(v) { return Array.prototype.slice.call(v); }
function appendTo(a) { return function(b) { return a.appendChild(b); }; }
function el(tag, contents) { var el = document.createElement(tag); if(contents) contents.map(appendTo(el)); return el; }
function txt() { return document.createTextNode(arr(arguments).join()); }
function div() { return el("div", arr(arguments)); }
function span() { return el("span", arr(arguments)); }
function label() { return el("label", arr(arguments)); }
function tr() { return el("TR", arr(arguments)); }
function td() { return el("TD", arr(arguments)); }
function th() { return el("TH", arr(arguments)); }

function dmgred(armor) {
  return 1 - 1 / (1 + Math.log(1 + armor / 1E4) / Math.log(2));
}
function dmgredPercent(armor) {
  return dmgred(armor) * 100;
}
function speedred(def, atk, weight) {
  var a = def / atk * 4.6 / Math.log(weight) - 2;
  var b = 2 * a / (1 + Math.abs(2 * a));
  return .5 * (1.1 - .9 * b);
}
