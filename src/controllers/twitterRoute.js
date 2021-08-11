const fetch= require('node-fetch');
const { URL, URLSearchParams } = require('url');
require('env2')('.env');
const BearerToken =  process.env.TOKEN;


const twitterRoute = (url,params, jsonRes) => {
    const router =(req, res, next) => {

        const userName= req.params.userName;
        const headers=  {
            "authorization":  `Bearer ${BearerToken}`
        }

        url = url + new URLSearchParams(params(userName)).toString();

        // use fetch
        fetch(url, {headers: headers})
        .then(response => response.json())
        .then(response =>{
            let jsonResult = jsonRes(response);   
            res.json(jsonResult)
        })
        .catch(err =>{
            console.log(err);
            res.json(err)
        });
        
    };

 
    return router;
};

module.exports= twitterRoute;