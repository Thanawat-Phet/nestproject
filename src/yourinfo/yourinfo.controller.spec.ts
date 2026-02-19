import { Test, TestingModule } from '@nestjs/testing';
import { YourinfoController } from './yourinfo.controller';

describe('YourinfoController', () => {
  let controller: YourinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YourinfoController],
    }).compile();

    controller = module.get<YourinfoController>(YourinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
