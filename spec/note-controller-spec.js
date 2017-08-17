(function(exports) {
  function testNoteControllerCreation() {
    var noteController = new NoteController();
    assert.isTrue(noteController);
  }
testNoteControllerCreation();
})(this);

(function(exports) {
  function testNoteControllerInsertsHTML() {
    var noteList = new NoteList();
    noteList.createNote("Favourite drink: seltzer");
    var noteController = new NoteController(noteList);
    noteController.insertHtml();
    var actualInnerHTML = document.getElementById('app').innerHTML;
    assert.isEqual(actualInnerHTML, "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  }
  testNoteControllerInsertsHTML();
})(this);
