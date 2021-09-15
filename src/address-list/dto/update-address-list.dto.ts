import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressListDto } from './create-address-list.dto';

export class UpdateAddressListDto extends PartialType(CreateAddressListDto) {}
