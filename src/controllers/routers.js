// handle '/fruit' get and post requests
const express = require('express');
const router = express.Router();


const {homePage, profilePage} =  require('./main');
const searchRouter =  require('./search');

const error = require('./error');

router.get('/', homePage);
router.get('/profile',profilePage);
router.get('/search/:userName', searchRouter);

router.use(error.notFound);
router.use(error.serverError);

module.exports= router;