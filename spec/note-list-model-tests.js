
function testNoteListHasEmptyNoteList() {
  var noteList = new NoteList();
  notes = noteList.getNotes();
  assert.isTrue(noteList.getNotes().length === 0);
}
testNoteListHasEmptyNoteList();

function testNoteListCreatesNote() {
  var noteList = new NoteList();
  noteList.createNote("Javascript");
  assert.isTrue(noteList.getNotes()[0].getText() === "Javascript");
}
testNoteListCreatesNote();
