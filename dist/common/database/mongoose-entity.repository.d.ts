import { AnyKeys, Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
export declare abstract class MongooseEntityRepository<T extends Document> {
    protected readonly entityModel: Model<T>;
    constructor(entityModel: Model<T>);
    findOne(entityFilterQuery: FilterQuery<T>, projection?: Record<string, unknown>): Promise<T | null>;
    find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null>;
    create(createEntityData: T | AnyKeys<T>): Promise<T>;
    fineOneAndUpdate(entityFilterQuery: FilterQuery<T>, updateEntityQuery: UpdateQuery<T | AnyKeys<T>>): Promise<T | null>;
    deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean>;
}
