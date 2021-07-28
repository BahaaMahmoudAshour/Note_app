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
    if (!title | !content){
        return res.status(500).send({ error: "title and content shouldn't be empty"})

    }  
    var noteobj = new model.Note(seqId , title, content, ctreatedBy ,ctreatedOn);  
    memstorage.store.setItem(seqId,noteobj); 
    return res.status(201).send("Saved note successfully");
}

exports.updateNote = (req , res)=>{
    res.send("Updated note  ya 7ag");
}

exports.deleteNote = (req , res)=>{
    res.send("Deleted note  ya 7ag");
}