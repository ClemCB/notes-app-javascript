"use strict";
(function(exports) {

  var controller;

  function NoteController(noteList) {
    controller = this;
    controller.noteList = noteList;
  }

  NoteController.prototype.createNoteListView = function(noteListView = new NoteListView(this.noteList)) {
    controller.noteListView = noteListView;
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
      controller.saveNoteFromHtmlForm();
    });
  };

  NoteController.prototype.saveNoteFromHtmlForm = function() {
    var saveNoteValue = text.elements["text2"].value
    controller.addNoteToList(saveNoteValue);
    controller.insertHTML();
    controller.clearTextAreaOfHtmlForm();
  };

  NoteController.prototype.clearTextAreaOfHtmlForm = function() {
    text.elements["text2"].value = ''
  };

  exports.NoteController = NoteController;
})(this);
