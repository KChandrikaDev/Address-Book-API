import { Injectable } from '@nestjs/common';
import { CreateAddressListDto } from './dto/create-address-list.dto';
import { UpdateAddressListDto } from './dto/update-address-list.dto';
import { Model } from 'mongoose';
import { AddressList } from './schemas/address-list.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AddressListService {
  constructor(
    @InjectModel('AddressList')
    private readonly addressListModel: Model<AddressList>,
  ) {}
  async createAddressList(
    createAddressListDto: CreateAddressListDto,
  ): Promise<any> {
    const addedAddressList = new this.addressListModel(createAddressListDto);
    return addedAddressList.save();
  }

  async findAllAddressList(): Promise<AddressList[]> {
    const getAddressList = await this.addressListModel.find().exec();
    return getAddressList;
  }

  async findOneAddressList(id: string): Promise<any> {
    const fetchAddresslistById = await this.addressListModel
      .findById(id)
      .exec();
    return fetchAddresslistById;
  }
  async paginationList(page = 1, limit = 10): Promise<any> {
    const fetchPaginationResults = await this.addressListModel
      .find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    return fetchPaginationResults;
  }

  update(id: number, updateAddressListDto: UpdateAddressListDto) {
    return `This action updates a #${id} addressList`;
  }

  async removeAddressList(id: string): Promise<AddressList> {
    const deleteAddressList = await this.addressListModel.findByIdAndRemove(id);
    console.log('service');
    return deleteAddressList;
  }
}
