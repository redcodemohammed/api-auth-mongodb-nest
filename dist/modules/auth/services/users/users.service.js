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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../../../common/helpers");
const repositories_1 = require("../../repositories");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser({ email, username, password, profile: { firstname, gender, lastname }, }) {
        const emailIsTaken = await this.isTaken({ email: email });
        if (emailIsTaken) {
            throw new common_1.ConflictException('email is taken');
        }
        const usernameIsTaken = await this.isTaken({ username });
        if (usernameIsTaken) {
            throw new common_1.ConflictException('username is taken');
        }
        const user = await this.userRepository.create({
            email,
            username,
            password,
            profile: {
                firstname,
                gender,
                lastname,
                avatar: null,
                bio: '',
            },
        });
        return user.toObject();
    }
    async localLogin(uid, password) {
        const user = await this.userRepository.findOne({ $or: [{ email: uid }, { username: uid }] });
        if (!user) {
            throw new common_1.UnauthorizedException('invalid credentials');
        }
        const isPasswordValid = await (0, helpers_1.compare)(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('invalid credentials');
        }
        return user.toObject();
    }
    async isTaken(data) {
        const user = await this.userRepository.findOne(data);
        return user !== null;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map