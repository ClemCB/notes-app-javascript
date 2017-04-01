(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.generateHtmlForSingleNote = function () {
    return "<div>" + this.note.text + "</div>"
  };

  exports.SingleNoteView = SingleNoteView
})(this);
