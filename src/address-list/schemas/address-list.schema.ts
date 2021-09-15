import * as mongoose from 'mongoose';
export const AddressListSchema = new mongoose.Schema({
  name: String,
  mobileNumber: Number,
  email: String,
  addressLine1: String,
  city: String,
  country: String,
  state: String,
  postalCode: Number,
});

import { Document } from 'mongoose';
export interface AddressList extends Document {
  name: string;
  mobileNumber: number;
  email: string;
  addressLine1: string;
  city: string;
  country: string;
  state: string;
  postalCode: number;
}
