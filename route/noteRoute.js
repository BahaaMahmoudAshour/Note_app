var express = require('express');
const router = express.Router();
var noteContl= require('../controller/noteController');

router.get('/notes' , noteContl.getAllNotes)
router.post('/notes/save' , noteContl.saveNotes)
router.put('/notes/update' , noteContl.updateNote)
router.delete('/notes/delete' , noteContl.deleteNote)


module.exports = router