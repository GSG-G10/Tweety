const request = require('supertest');
const app = require('../src/app.js');

test('route /anything return 404html page', (done) => {
    request(app)
      .get('/hi')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        // eslint-disable-next-line no-console
        console.log(res.body);
        done();
      });
  });


  test('route to the home page', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // eslint-disable-next-line no-console
        console.log(res.body);
        done();
      });
  });  