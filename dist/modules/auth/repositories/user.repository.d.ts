import { MongooseEntityRepository } from 'common/database';
import { Model } from 'mongoose';
import { UserDocument } from '../schemas';
export declare class UserRepository extends MongooseEntityRepository<UserDocument> {
    constructor(userModel: Model<UserDocument>);
}
