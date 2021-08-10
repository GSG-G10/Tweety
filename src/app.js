const express = require('express');
const app = express();
const controllers = require('./controllers/routers');
const path = require('path');



app.use(controllers);

app.disable('x-powered-by');
app.use(
    express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
  );
app.listen(5000, () => {
    console.log('listen');
})