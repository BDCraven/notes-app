(function(exports) {
  function testNoteControllerCreation() {
    var noteController = new NoteController();
    assert.isTrue(noteController);
  }
testNoteControllerCreation();
})(this);

(function(exports) {
  function testNoteControllerInsertsHTML() {

    function NoteDouble() {}

    NoteDouble.prototype = {
      getText: function() {
        return 'Favourite drink: seltzer';
      }
    };

    function NoteListDouble() {}

    NoteListDouble.prototype = {
      getNotes: function() {
        return [note];
      },
    };

    var note = new NoteDouble();
    var noteList = new NoteListDouble();
    var noteController = new NoteController(noteList);
    var expectedReturn = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";
    noteController.insertHtml();
    var actualReturn = document.getElementById('app').innerHTML;
    assert.isEqual(actualReturn, expectedReturn);
  }
  testNoteControllerInsertsHTML();
})(this);
