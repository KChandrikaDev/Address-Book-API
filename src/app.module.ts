import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressListModule } from './address-list/address-list.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AddressListModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:password%40123@cluster0.wwvgf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
