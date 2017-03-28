"use strict";
(function(exports) {

  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.addNote = function(text) {
    this._notes.push(new Note(text))
  };

  NoteList.prototype.viewNotes = function() {
    return this._notes;
  };

  exports.NoteList = NoteList;
})(this);
