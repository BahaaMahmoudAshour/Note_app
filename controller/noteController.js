const { json } = require('body-parser');
var generator = require('../utill/generator')
var memstorage = require('../utill/memory_storage')
var model = require('../model/note_model')


exports.getAllNotes = (req , res)=>{
    var values = memstorage.getValues(memstorage.store);
    console.log("Values = " +JSON.stringify(values));
    return res.status(200).send(JSON.stringify(values));
}

exports.saveNotes = (req , res)=>{
    var seqId   = generator.generate();
    var title =req.body.title;
    var content =req.body.content;
    var ctreatedBy ="admin";      
    var ctreatedOn =new Date();      

    var title =req.body.title;        
    if (!title || !content){
        return res.status(500).send({ error: "title and content shouldn't be empty"})

    }  
    var noteobj = new model.Note(seqId , title, content, ctreatedBy ,ctreatedOn);  
    memstorage.store.setItem(seqId,noteobj); 
    return res.status(201).send("Saved note successfully");
}

exports.updateNote = (req , res)=>{
    var noteId =req.body.noteId;
    var title =req.body.title;
    var content =req.body.content;
    var ctreatedBy ="admin";      
    var ctreatedOn =new Date();  

    if(!noteId){ 
        return res.status(500).send({ error: "Note ID shouldn't be empty"})}
    if (!title || !content){
        return res.status(500).send({ error: "title and content shouldn't be empty"})}
    
       var noteItem=  memstorage.store.getItem(noteId);
       if(!noteItem)
       {
        return res.status(500).send({ error: "Note ID is not exists"})}

    var Note = model.Note;
    var noteobj = Note(noteId , title, content, ctreatedBy ,ctreatedOn);  
    memstorage.store.setItem(noteId,noteobj); 
    return res.status(200).send("update note successfully");
}

exports.deleteNote = (req , res)=>{
    var noteId = req.params.noteId;
    if(!noteId)
    { 
        return res.status(500).send({ error: "Note ID shouldn't be empty"})
    }

    var noteItem=  memstorage.store.getItem(noteId);

    if(!noteItem)
    {
     return res.status(500).send({ error: "Note ID is not exists"})
    }
    memstorage.store.removeItem(noteId); 
    return res.status(200).send("Deleted note successfully");
}