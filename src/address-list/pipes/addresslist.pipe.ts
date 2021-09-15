import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class ValidateObjectId implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    const isVaild = mongoose.Types.ObjectId.isValid(value);
    if (!isVaild) {
      throw new BadRequestException('Invaild ID!');
    }
    return value;
  }
}
