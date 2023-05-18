const request = require('supertest');
const app = require('../../server/index');

let server;
beforeAll(() => {
  server = app.listen(3001);
});
afterAll((done) => {
  server.close(done);
});

describe('API routes', () => {
  describe('Reviews', () => {
    // it('should respond with 200 status code ', async () => {
    //   const agent = request.agent(app);
    //   const res = await agent
    //     .get('/api/questions')
    //     .expect(200);
    // });

    it('should respond with 204 status code', async () => {
      const agent = request.agent(app);
      const res = await agent
        .post('/api/questions/question')
        .send({
          product_id: 40345,
          body: 'I like how it looks and I will bay another one',
          name: 'Falafel',
          email: 'falafel@gmail.com',
        })
        .expect(204);
    });

    it('should respond with 204 status code', async () => {
      const agent = request.agent(app);
      const res = await agent
        .post('/api/questions/answer')
        .send({
          product_id: 40420,
          body: 'I like how it looks and I will bay another one',
          name: 'Falafel',
          email: 'falafel@gmail.com',
          question_id: 329705,
        })
        .expect(204);
    });

    // it('should respond with 204 status code', async () => {
    //   const agent = request.agent(app);
    //   const res = await agent
    //     .put('/api/questions/question/helpful')
    //     .send({ question_id: 329705 })
    //     .expect(204);
    // });

    // it('should respond with 204 status code', async () => {
    //   const agent = request.agent(app);
    //   const res = await agent
    //     .put('/api/questions/answer/helpful')
    //     .send({ question_id: 329705 })
    //     .expect(204);
    // });

    // it('should respond with 204 status code', async () => {
    //   const agent = request.agent(app);
    //   const res = await agent
    //     .put('/api/questions/answer/report')
    //     .send({ question_id: 329705 })
    //     .expect(204);
    // });
  });
});
