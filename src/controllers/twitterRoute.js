const fetch= require('node-fetch');
const { URL, URLSearchParams } = require('url');
const BearerToken =  "AAAAAAAAAAAAAAAAAAAAAHyeSQEAAAAAyKVnk8WiMYY0OOqEMmG%2Fge3PK9o%3Dx6eC85BME6x1QVZCihrjn2qVb6yogZyKjLXT6NbiTMwSsoLoc9";
// put router in router . js here just call the function 



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