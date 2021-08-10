const moment = require('moment');
const fetch= require('node-fetch');


const BearerToken =  "AAAAAAAAAAAAAAAAAAAAAHyeSQEAAAAAyKVnk8WiMYY0OOqEMmG%2Fge3PK9o%3Dx6eC85BME6x1QVZCihrjn2qVb6yogZyKjLXT6NbiTMwSsoLoc9";
// put router in router . js here just call the function 
const searchRouter =(req, res, next) => {

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
        created_at : moment(new Date(response.statuses[i].created_at)).fromNow(),
        text: response.statuses[i].text,
        entities: response.statuses[i].entities,
        user : {
          screen_name: response.statuses[i].user.screen_name,
          name: response.statuses[i].user.name,
          profile_image_url: response.statuses[i].user.profile_image_url
        }
      }; 

      resObj.push(item);
    }
    res.json(resObj);
  }).catch(err => {
    res.json(err);
  });
    
};

module.exports= searchRouter;