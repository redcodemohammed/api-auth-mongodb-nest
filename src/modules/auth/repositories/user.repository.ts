import { InjectModel } from '@nestjs/mongoose';
import { MongooseEntityRepository } from 'common/database';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends MongooseEntityRepository<UserDocument> {
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
