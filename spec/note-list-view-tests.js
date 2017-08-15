function testViewHTMLString() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.createNote("Javascript");
  noteList.createNote("Ruby");
  isTrue(noteListView.viewHTML() === "<ul><li><div>Javascript</div></li><li><div>Ruby</div></li></ul>");
}
testViewHTMLString();
