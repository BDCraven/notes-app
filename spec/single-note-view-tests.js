function testSingleNoteVewCreation() {
  var singleNoteView = new SingleNoteView();
  assert.isTrue(singleNoteView);
}
testSingleNoteVewCreation();


function testViewNoteHTML() {
  function NoteDouble() {}

  NoteDouble.prototype = {
    getText: function() {
      return 'Favourite drink: seltzer';
    }
  };

  var note = new NoteDouble();
  var singleNoteView = new SingleNoteView(note);
  var actualReturn = singleNoteView.viewNoteHTML();
  var expectedReturn = '<div>Favourite drink: seltzer</div>';
  assert.isEqual(actualReturn, expectedReturn);
}
testViewNoteHTML();
