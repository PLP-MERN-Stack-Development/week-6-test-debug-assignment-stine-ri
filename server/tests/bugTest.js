const request = require('supertest');
const app = require('../server');
const Bug = require('../models/bug');

jest.mock('../models/Bug');

describe('Bug API', () => {
  it('GET /api/bugs - should fetch all bugs', async () => {
    const mockBugs = [{ title: 'Test Bug', status: 'open' }];
    Bug.find.mockResolvedValue(mockBugs);

    const res = await request(app).get('/api/bugs');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockBugs);
  });

  it('POST /api/bugs - should create a new bug', async () => {
    const mockBug = { title: 'New Bug', status: 'open' };
    Bug.prototype.save.mockResolvedValue(mockBug);

    const res = await request(app)
      .post('/api/bugs')
      .send(mockBug);
    
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('New Bug');
  });
});