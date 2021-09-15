import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { AddressListService } from './address-list.service';
import { CreateAddressListDto } from './dto/create-address-list.dto';
import { UpdateAddressListDto } from './dto/update-address-list.dto';
import { ValidateObjectId } from './pipes/addresslist.pipe';

@Controller('address-list')
export class AddressListController {
  constructor(private readonly addressListService: AddressListService) {}
  // creating addresslist endpoint
  @Post()
  async createAddressList(
    @Res() res,
    @Body() createAddressListDto: CreateAddressListDto,
  ) {
    const addAddessList = await this.addressListService.createAddressList(
      createAddressListDto,
    );
    return res.status(HttpStatus.OK).json({
      message: 'we have added successfully',
      addAddessList: addAddessList,
    });
  }
  // fetching all address list here
  @Get('list')
  async findAllAddressList(@Res() res) {
    const getAddressList = await this.addressListService.findAllAddressList();
    return res.status(HttpStatus.OK).json({
      totalAddressList: getAddressList.length,
      getAddressList: getAddressList,
    });
  }
  // fetching by object ID
  @Get(':id')
  async findOneAddressList(
    @Res() res,
    @Param('id', new ValidateObjectId()) id: string,
  ) {
    const fetchAddresslistById =
      await this.addressListService.findOneAddressList(id);
    if (!fetchAddresslistById) {
      throw new NotFoundException('Address list does not exist ');
    }
    return res.status(HttpStatus.OK).json(fetchAddresslistById);
  }
  // Pagination limit
  @Get()
  async paginationIndex(@Res() res, @Query('page') page, limit) {
    const fectpaginationResult = await this.addressListService.paginationList(
      page,
      limit,
    );
    return res.status(HttpStatus.OK).json({
      paginationCount: fectpaginationResult.length,
      fectpaginationResult: fectpaginationResult,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAddressListDto: UpdateAddressListDto,
  ) {
    return this.addressListService.update(+id, updateAddressListDto);
  }
  // deleting by object ID
  @Delete()
  async removeAddressList(@Res() res, @Query('id', new ValidateObjectId()) id) {
    const deleteAddressList = await this.addressListService.removeAddressList(
      id,
    );
    console.log('controller');
    if (!deleteAddressList) {
      throw new NotFoundException('Address list does not exist ');
    }
    return res.status(HttpStatus.OK).json({
      message: 'we have deleted address list successfully',
      deleteAddressList: deleteAddressList,
    });
  }
}
