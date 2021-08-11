const express = require('express');
const router = express.Router();
const path =require('path');


const homePage =(req, res, next) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

const profilePage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'profile.html'));
}

module.exports= {
    homePage,
    profilePage
};