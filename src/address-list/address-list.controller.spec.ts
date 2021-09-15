import { Test, TestingModule } from '@nestjs/testing';
import { AddressListController } from './address-list.controller';
import { AddressListService } from './address-list.service';

describe('AddressListController', () => {
  let controller: AddressListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressListController],
      providers: [AddressListService],
    }).compile();

    controller = module.get<AddressListController>(AddressListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
