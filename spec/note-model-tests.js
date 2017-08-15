(function(exports) {
  function testNoteText() {
    var note = new Note("My favourite language is JavaScript");

    isTrue(note.getText() === "My favourite language is JavaScript");
  }

  testNoteText();
})(this);
