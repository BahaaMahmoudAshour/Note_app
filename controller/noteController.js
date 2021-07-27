const { json } = require('body-parser');
var generator = require('../utill/generator')
var memstorage = require('../utill/memory_storage')


exports.getAllNotes = (req , res)=>{
    var seqId   = generator.generate();      
    memstorage.store.setItem(seqId,"1st key ..."); 
    var seqId_2   = generator.generate();   
    memstorage.store.setItem(seqId_2,"2nd key ...");
    
    var keys = memstorage.getkeys(memstorage.store);
    var values = memstorage.getValues(memstorage.store);
    console.log("Values = "+ JSON.stringify(values));// => AAB - 001
    // => AAB - 001
    res.send("get all notes keys "+JSON.stringify(keys));
}

exports.saveNotes = (req , res)=>{
    res.send("Saved note  ya 7ag");
}

exports.updateNote = (req , res)=>{
    res.send("Updated note  ya 7ag");
}

exports.deleteNote = (req , res)=>{
    res.send("Deleted note  ya 7ag");
}