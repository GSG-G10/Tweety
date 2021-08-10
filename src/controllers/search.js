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
    let resObj = [];
    for(let i =0; i< response.statuses.length; i++){
    let item = {
        created_at : response.statuses[0].created_at,
        text: response.statuses[0].text,
        entities: response.statuses[0].entities,
        user : {
          screen_name: response.statuses[0].user.screen_name,
          name: response.statuses[0].user.name,
          profile_image_url: response.statuses[0].user.profile_image_url
        }
      }; 

      resObj.push(item);
    }
    res.json(resObj);
  }).catch(console.log);
    
};

module.exports= searchRouter;