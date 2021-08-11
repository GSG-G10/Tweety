// handle '/fruit' get and post requests
const express = require('express');
const path = require('path');
const router = express.Router();


const mainRoute =  require('./main');
const searchResponse =  require('./twitter-endpoints/search');

const error = require('./error');

router.get('/', mainRoute);
router.get('/search/:userName', searchResponse);

router.use(error.notFound);
router.use(error.serverError);

module.exports= router;