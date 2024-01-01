"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseEntityRepository = void 0;
class MongooseEntityRepository {
    constructor(entityModel) {
        this.entityModel = entityModel;
    }
    async findOne(entityFilterQuery, projection) {
        return this.entityModel.findOne(entityFilterQuery, { __v: 0, _id: 0, ...projection }).exec();
    }
    async find(entityFilterQuery) {
        return this.entityModel.find(entityFilterQuery).exec();
    }
    async create(createEntityData) {
        return this.entityModel.create(createEntityData);
    }
    async fineOneAndUpdate(entityFilterQuery, updateEntityQuery) {
        return this.entityModel.findOneAndUpdate(entityFilterQuery, updateEntityQuery, { new: true }).exec();
    }
    async deleteMany(entityFilterQuery) {
        const deleteResult = await this.entityModel.deleteMany(entityFilterQuery).exec();
        return deleteResult.deletedCount >= 1;
    }
}
exports.MongooseEntityRepository = MongooseEntityRepository;
//# sourceMappingURL=mongoose-entity.repository.js.map