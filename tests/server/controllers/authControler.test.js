const { welcome, authorize, callback } = require('../../../server/controllers/authController'); // Adjust the path as necessary
const httpMocks = require('node-mocks-http');
import mockAxios from 'jest-mock-axios';

afterEach(() => {
  mockAxios.reset();
});

//welcome function test
describe('Welcome Controller', () => {
  it('should send welcome message', () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    welcome(req, res);
    expect(res._getData()).toBe(`Welcome to Erika's Whoop Stats!`);
  });
});

//authorize controller test
describe('Authorize Controller', () => {
    it('redirects to authorization URL with correct parameters', () => {
      const req = httpMocks.createRequest();
      req.session = {}; 
      const res = httpMocks.createResponse();
      
      authorize(req, res);
      
      // Check if the redirection URL is correctly formed
      const locationHeader = res._getRedirectUrl();
      expect(locationHeader).toContain(`https://api.prod.whoop.com/oauth/oauth2`)
      expect(locationHeader).toContain('client_id=' + CLIENT_ID); 
  });
});

//callback controller test
describe('Callback Controller', () => {
    beforeEach(() => {
      req = httpMocks.createRequest({
        method: 'GET',
        url: '/callback',
        query: {
          code: 'authorization_code_here',
          state: 'mocked_state'
        }
      });
      req.session = { oauthState: 'mocked_state' }; // Simulating session state
      res = httpMocks.createResponse();
      next = jest.fn();
    });
  
    it('exchanges code for token on successful callback', async () => {
      // Mock axios response
      mockAxios.post.mockResolvedValue({ data: { access_token: 'mocked_access_token' } });
      
      await callback(req, res, next);
      
      expect(next).toHaveBeenCalledWith(); 
      expect(res.locals.access_token).toEqual('mocked_access_token');
    });
  
    it('handles errors when state does not match', async () => {
        // Simulating incorrect state
      req.query.state = 'wrong_state'; 
  
      await callback(req, res, next);
  
      // Check if the next function was called with an error
      expect(next).toHaveBeenCalledWith(expect.any(Error));
      expect(next.mock.calls[0][0].status).toBe(400);
    });
    
  });