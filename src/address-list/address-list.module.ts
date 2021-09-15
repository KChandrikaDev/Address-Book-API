import { Module } from '@nestjs/common';
import { AddressListService } from './address-list.service';
import { AddressListController } from './address-list.controller';
import { AddressListSchema } from './schemas/address-list.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AddressList', schema: AddressListSchema },
    ]),
  ],
  controllers: [AddressListController],
  providers: [AddressListService],
})
export class AddressListModule {}
