"use strict";
(function(exports) {

  var controller;

  function NoteController(noteList) { //Should I be passing in NoteListView instead to adhere to SRP?
    controller = this;
    controller.noteList = noteList;
  }

  // Interaction directly with the controller
  NoteController.prototype.createNoteListView = function(noteListView = new NoteListView(this.noteList)) {
    controller.noteListView = noteListView
  };

  NoteController.prototype.addNoteToList = function(text) {
    controller.noteList.addNote(text);
  };

  NoteController.prototype.insertHTML = function(element = document.getElementById("app")) {
    var element = element;
    element.innerHTML = controller.noteListView.generateHTML();
  };

  // Hash change for selecting notes and seeing corresponding text:
  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", controller.showNoteForCurrentPage.bind(this));
  };

  NoteController.prototype.showNoteForCurrentPage = function(){
    controller.showNote(controller.getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    return location.hash.split("#")[1];
  };

  NoteController.prototype.showNote = function() {
    var noteID = location.hash.replace( /^\D+/g, '');
    var correspondingNoteText = controller.noteList.viewNotes()[noteID].text;
    document
      .getElementById("note-content")
      .innerHTML = correspondingNoteText;
  };

  // Note Controller takes user note
  NoteController.prototype.userWriteAndSaveNoteOnForm = function() {
      document.querySelector("#text").addEventListener("submit", function(onsubmit) {
      onsubmit.preventDefault();
      controller.saveNoteAndClearTextAreaOfHtmlForm();
    });
  };

  NoteController.prototype.saveNoteAndClearTextAreaOfHtmlForm = function() {
    var saveNoteValue = text.elements["text2"].value
    controller.addNoteToList(saveNoteValue);
    controller.insertHTML();
    text.elements["text2"].value = ''
  };

  exports.NoteController = NoteController;
})(this);
