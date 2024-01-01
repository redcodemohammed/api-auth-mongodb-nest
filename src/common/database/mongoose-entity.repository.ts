import { AnyKeys, Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

export abstract class MongooseEntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(entityFilterQuery: FilterQuery<T>, projection?: Record<string, unknown>): Promise<T | null> {
    return this.entityModel.findOne(entityFilterQuery, { __v: 0, _id: 0, ...projection }).exec();
  }
  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery).exec();
  }

  async create(createEntityData: T | AnyKeys<T>): Promise<T> {
    return this.entityModel.create(createEntityData);
  }

  async fineOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityQuery: UpdateQuery<T | AnyKeys<T>>,
  ): Promise<T | null> {
    return this.entityModel.findOneAndUpdate(entityFilterQuery, updateEntityQuery, { new: true }).exec();
  }

  async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery).exec();

    return deleteResult.deletedCount >= 1;
  }
}
