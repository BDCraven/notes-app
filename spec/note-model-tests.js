(function(exports) {
  function testNoteText() {
    var note = new Note("My favourite language is JavaScript");

    if (note.getText() !== "My favourite language is JavaScript") {
      throw new Error("Unable to find text 'My favourite language is JavaScript'");
    }
  }

  testNoteText();
})(this);
