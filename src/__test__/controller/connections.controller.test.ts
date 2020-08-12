import request from 'supertest';
import app from '../../app';

describe('shoud be test about api get of connections', () => {
    it('should be test ', async () => {
        const res = await request(app).get('/connections');

        expect(res.status).toEqual(200);
    });

    it('shoud be test about api post of connections ', async () => {
        const res = await request(app)
            .post('/connections')
            .send({ user_id: 1 });

        expect(res.status).toEqual(201);
    });
});
