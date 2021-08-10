// handle '/fruit' get and post requests
const express = require('express');
const path = require('path');
const router = express.Router();


const mainRoute =  require('./main.js');
const searchRouter =  require('./search.js');


router.get('/', mainRoute);
router.get('/search/:userName', searchRouter);

module.exports= router;