(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.shortenToTwentyCharacters = function () {
    return this.noteList.viewNotes().map(function(note) {
      return note.text.slice(0, 20);
    })
  };

  NoteListView.prototype.generateHTML = function () {
    return "<ul>" + this.shortenToTwentyCharacters().map(function(note, id) {
      return "<li><div><a href=\"#notes/" + id + "\">" + note + "</a></div></li>"
    }).join("") + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
