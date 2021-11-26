import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UserModule } from './../src/user/user.module';
import { UserService } from '../src/user/user.service';

describe('User Controller (e2e)', () => {
  let app: INestApplication;

  const mockUserService = {
    create: (dto) => dto,
    findAll: () => ['user1', 'user2', 'user3'],
    findOne: (id, dto) => dto,
    findByAccountCode: (accountCode, dto) => dto,
    updatefindByAccountCode: (id, dto) => dto,
    remove: (id, dto) => null,
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (POST)', () => {
    const name = 'test';
    const cpf = '023.506.861-67';
    const email = 'luis@example.com';
    const phone = '(61) 992795899';

    return request(app.getHttpServer())
      .post('/user')
      .send({
        name,
        cpf,
        email,
        phone,
      })
      .expect(201)
      .expect({
        data: {
          id: expect.any(String),
          name: name,
          accountCode: expect.any(String),
          cpf: cpf,
          email: email,
          phone: phone,
          balance: 0,
          extract: [],
          created_at: expect.any(Date),
          updated_at: expect.any(Date),
        },
      });
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .send({})
      .expect(200)
      .expect(mockUserService.findAll);
  });
});
