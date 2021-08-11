const express = require('express');
const app = express();
const path = require('path');
let flash = require('connect-flash');



const routers = require('./controllers/routers');


app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
);
app.use(flash());


app.use(routers);

app.listen(app.get('port'), () => {
    console.log('listen');
});

module.exports = app;