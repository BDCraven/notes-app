(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.viewNoteHTML = function() {
    var noteText = this.note.getText();
    return "<div>" + noteText + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
