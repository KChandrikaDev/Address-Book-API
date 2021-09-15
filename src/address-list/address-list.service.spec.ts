import { Test, TestingModule } from '@nestjs/testing';
import { AddressListService } from './address-list.service';

describe('AddressListService', () => {
  let service: AddressListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressListService],
    }).compile();

    service = module.get<AddressListService>(AddressListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
