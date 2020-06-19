const server = require('../api/server');
const request = require('supertest');


describe('server.js', () => {
    test(' should be the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });
    describe('api/auth/register',  () => {
        test('should return 500', async () => {
            const res = await request(server)
            .post('/api/auth/register')
            .send({ username: 'dcooper',
                    password: 'password'
        })
        expect(res.status).toEqual(500);
        })
        test('should be json', async () => {
            const res = await request(server)
            .post('/api/auth/register')
            .send({ username: 'dcooper',
                    password: 'password'
        })
        expect(res.type).toBe('application/json');
        })
        
    })

    
})
describe('api/auth/login',  () => {
    test('should return 200', async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send({ username: 'dcooper',
                password: 'password'
    })
    expect(res.status).toEqual(200);
    })
    test('should be json', async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send({ username: 'dcooper',
                password: 'password'
    })
    expect(res.type).toBe('application/json');
    })
    
})


