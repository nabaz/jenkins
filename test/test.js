var request = require('supertest');
var app = require('../app.js');
describe('GET /', function() {
  it('hello github test', function(done) {
    request(app).get('/').expect('hello github test', done);
  });
});
