const request = require('supertest');
const app = require('../../../server/routes/index'); 

//get callback test
describe('GET /callback', () => {
    it('should respond with a 200 status and the access token', async () => {
      const response = await request(app)
        .get('/callback?code=somecode&state=somestate')
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('accessToken');
      expect(response.body.accessToken).toBe('mocked_access_token');
    });

  });
  