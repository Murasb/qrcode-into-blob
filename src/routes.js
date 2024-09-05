
const express = require('express');
const fileController = require('./controllers/fileController');

const router = express.Router();


router.post('/process-file', fileController.processFile);

module.exports = router;
