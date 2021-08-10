const express = require('express');
const router = express.Router();
const path =require('path');


// put router in router . js here just call the function 
const mainRouter =(req, res, next) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

module.exports= mainRouter;