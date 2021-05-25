import axios from 'axios';

describe('Auth API Endpoints', () => {

    beforeAll( async () => {
        //TODO: hit our server and see if it's live, otherwise chuck it out.
        //TODO: hit our delete for testUser if live
    })

    test('POST /api/register', async () => {
        const requestBody = { email: "test@gmail.com", password: "test" }
        const response = await axios.post('http://localhost:5757/api/register', requestBody)

        expect(response.status).toBe(400);
    })

})