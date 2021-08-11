const moment = require('moment');
const twitterRoute = require('../twitterRoute.js');

const url = `https://api.twitter.com/1.1/users/lookup.json?`;
const params= (user) => {return {'screen_name': user}};
let jsonFormat = (response) => {
    return {
            id: response[0].id,
            name: response[0].name,
            screen_name: response[0].screen_name,
            location: response[0].location,
            description: response[0].description,
            url : response[0].url,
            followers_count: response[0].followers_count,
            friends_count: response[0].friends_count,  
            created_at: response[0].created_at,
            profile_image_url: response[0].profile_image_url
    }; 
}

let jsonRes = (response)=> {
    let res= [];
        res.push(jsonFormat(response));
    return res;
}


const searchResponse = twitterRoute(url, params, jsonRes);
module.exports= searchResponse;