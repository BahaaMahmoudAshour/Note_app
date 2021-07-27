var express = require('express');
const router = express.Router();
var noteContl= require('../controller/noteController');

router.get('/notes' , noteContl.getAllNotes)

module.exports = router