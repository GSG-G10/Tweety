const twitterRoute = require('../twitterRoute.js');
const moment = require('moment');
const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?`;

let count = 5;
const params= (user) => {return {'screen_name': user, 'count' : count, 'exclude_replies': true}};


let jsonFormat = (response, i) => {
    
    return {
        created_at : moment(new Date(response[i].created_at)).fromNow(),
        text: response[i].text,
        entities: response[i].entities,
        user : {
          screen_name: response[i].user.screen_name,
          name: response[i].user.name,
          profile_image_url: response[i].user.profile_image_url
    
        }
    }
};

let jsonRes = (response)=> {
    let res= [];

    for(let i = 0; i< count; i++){
        res.push(jsonFormat(response, 0 ));
    }
        return res;
}


const twitterResponse = twitterRoute(url, params, jsonRes);
module.exports= twitterResponse;