const twitterRoute = require('../twitterRoute.js');

const url = `https://api.twitter.com/1.1/followers/list.json?`;
const params= (user) => {return {'screen_name': user}};
let jsonFormat = (response, i) => {
    return {
            screen_name: response[i].screen_name,
            profile_image_url: response[i].profile_image_url
    }; 
}

let jsonRes = (response)=> {
    let res= [];

    for(let i = 0; i< response.users.length; i++)
        res.push(jsonFormat(response.users, i));
    return res;
}


const followerResponse = twitterRoute(url, params, jsonRes);
module.exports= followerResponse;