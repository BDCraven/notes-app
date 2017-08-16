(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  }
  NoteListView.prototype.viewHTML = function() {
    var notes = this.notelist.getNotes();

    var htmlString = "<ul>" + notes.map(function (note) {
      return "<li><div>" + note.getText() + "</div></li>";
    }).join("") + "</ul>";
    return htmlString;
  };
  exports.NoteListView = NoteListView;
})(this);
