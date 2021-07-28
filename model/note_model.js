exports.Note = class Note{

    constructor(noteId , title , content, createdBy,ctreatedOn ){
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.ctreatedBy= createdBy;
        this.ctreatedOn = ctreatedOn;
    }
}