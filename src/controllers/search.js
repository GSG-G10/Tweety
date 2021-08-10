// use express.Router() class and load it with controllers
const express = require('express');
const router = express.Router();
const path =require('path');
const fetch= require('node-fetch');


const BearerToken =  "AAAAAAAAAAAAAAAAAAAAAHyeSQEAAAAAyKVnk8WiMYY0OOqEMmG%2Fge3PK9o%3Dx6eC85BME6x1QVZCihrjn2qVb6yogZyKjLXT6NbiTMwSsoLoc9";
// put router in router . js here just call the function 
const searchRouter =(req, res, next) => {

    console.log('eman');
    const userName= req.params.userName;
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${userName}`;

    const headers=  {
        "authorization": `Bearer ${BearerToken}`
    }

    // use fetch
    fetch(url, {headers: headers})
  .then(response => response.json())
  .then(response => {
    res.json(response);
  }).catch(console.log);
    
};

module.exports= searchRouter;