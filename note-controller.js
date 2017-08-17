(function(exports) {
  function changeText(newText) {
    var elem = document.getElementById('app');
    elem.innerHTML = newText;
  }
  // exports.changeText = changeText;
  changeText('howdy');
})(this);
