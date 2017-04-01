"use strict";
(function(exports) {
  function NoteController(noteList) { //Should I be passing in NoteListView instead to adhere to SRP?
    this.noteList = noteList;
    // controller = this;
  }

  NoteController.prototype.createNoteListView = function(noteListView = new NoteListView(this.noteList)) {
    this.noteListView = noteListView
  };

  NoteController.prototype.addNoteToList = function(text) {
    this.noteList.addNote(text);
  };

  NoteController.prototype.insertHTML = function(element = document.getElementById("app")) {
    var element = element;
    element.innerHTML = this.noteListView.generateHTML();
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage.bind(this));
  };

  NoteController.prototype.showNoteForCurrentPage = function(){
    this.showNote(this.getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    return location.hash.split("#")[1];
  };

  NoteController.prototype.showNote = function(id) {
    var noteID = location.hash.replace( /^\D+/g, '');
    document
      .getElementById("note-content")
      .innerHTML = this.noteList._notes[noteID].text;
  };

  exports.NoteController = NoteController;
})(this);
