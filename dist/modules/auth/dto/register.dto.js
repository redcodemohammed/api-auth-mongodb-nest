"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../common/enums");
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({
        example: 'example@example.com',
        description: 'The email of the User',
        format: 'email',
        type: String,
        uniqueItems: true,
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsAlphanumeric)('en-US'),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(20),
    (0, swagger_1.ApiProperty)({
        example: 'example',
        description: 'The username of the User',
        type: String,
        uniqueItems: true,
        minLength: 3,
        maxLength: 20,
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
    }),
    (0, swagger_1.ApiProperty)({
        example: 'qqwe!!qqwQv',
        description: 'The password of the User, must contain at least 1 lowercase letter, 1 uppercase letter, and 1 number',
        type: String,
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsAlpha)('ar'),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    (0, swagger_1.ApiProperty)({
        example: 'محمد',
        description: 'The first name of the User, must be arabic name',
        type: String,
        minLength: 3,
        maxLength: 30,
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "firstname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsAlpha)('ar'),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    (0, swagger_1.ApiProperty)({
        example: 'محمد',
        description: 'The last name of the User, must be arabic name',
        type: String,
        minLength: 3,
        maxLength: 30,
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Object.values(enums_1.Gender)),
    (0, swagger_1.ApiProperty)({
        description: 'The gender of the User',
        enum: enums_1.Gender,
        type: String,
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "gender", void 0);
//# sourceMappingURL=register.dto.js.map