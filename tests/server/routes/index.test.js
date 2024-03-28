const request = require('supertest');
const app = require('../../../server/routes/index'); // Adjust the path to where your Express app is defined


describe('GET /callback', () => {
    it('should respond with a 200 status and the access token', async () => {
      const response = await request(app)
        .get('/callback?code=somecode&state=somestate')
        // Add any necessary headers or additional query parameters here
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('accessToken');
      // Assuming your mock setup for the callback sets a specific token value
      expect(response.body.accessToken).toBe('mocked_access_token');
    });
  
    // Add more tests as needed to cover different scenarios, including failure cases
  });
  