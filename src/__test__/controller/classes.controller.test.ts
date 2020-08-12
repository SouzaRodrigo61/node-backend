import request from 'supertest';
import app from '../../app';

describe('Test about api of classes', () => {
    it('should be test create new classes', async () => {
        const res = await request(app)
            .post('/classes')
            .send({
                name: 'Rodrigo Santos',
                avatar:
                    'https://avatars3.githubusercontent.com/u/31740435?s=460&u=04dc45253af26ee97beee719d09d6032b1b37fb4&v=4',
                whatsapp: '61983467980',
                bio:
                    'Formado em sistema da informação. E cursando desenvolvimento de app na UCB (universidade católica de brasilia). Trabalhando em projetos em diversas linguagens',
                subject: 'Fisica',
                cost: '80',
                schedule: [
                    {
                        week_day: 1,
                        from: '8:00',
                        to: '12:00',
                    },
                    {
                        week_day: 3,
                        from: '10:00',
                        to: '18:00',
                    },
                    {
                        week_day: 4,
                        from: '8:00',
                        to: '12:00',
                    },
                ],
            });

        expect(res.status).toEqual(201);
    });

    it('should be test create new classes', async () => {
        const res = await request(app).post('/classes').send({
            name: 'Rodrigo Santos',
            avatar:
                'https://avatars3.githubusercontent.com/u/31740435?s=460&u=04dc45253af26ee97beee719d09d6032b1b37fb4&v=4',
            whatsapp: '61983467980',
            bio:
                'Formado em sistema da informação. E cursando desenvolvimento de app na UCB (universidade católica de brasilia). Trabalhando em projetos em diversas linguagens',
            subject: 'Fisica',
            cost: '80',
        });

        expect(res.status).toEqual(400);
    });

    it('should be test get new classes', async () => {
        const res = await request(app).get('/classes').send({
            subject: 'Fisica',
        });

        expect(res.status).toEqual(400);
    });

    it('should be test get new classes', async () => {
        const res = await request(app).get('/classes').query({
            subject: 'Fisica',
            week_day: '1',
        });

        expect(res.status).toEqual(400);
    });

    it('should be test get new classes', async () => {
        const res = await request(app).get('/classes').query({
            subject: 'Fisica',
            week_day: '1',
        });

        expect(res.status).toEqual(400);
    });

    it('should be test get new classes', async () => {
        const res = await request(app).get('/classes').query({
            subject: 'Fisica',
            week_day: '1',
            time: '08:00',
        });

        expect(res.status).toEqual(200);
    });
});
