import { Test, TestingModule } from '@nestjs/testing';
import { YourinfoService } from './yourinfo.service';

describe('YourinfoService', () => {
  let service: YourinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YourinfoService],
    }).compile();

    service = module.get<YourinfoService>(YourinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
