/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { RegisterDto } from './dto';
import { UsersService } from './services';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register({ email, firstname, gender, lastname, password, username }: RegisterDto): Promise<{
        email: string;
        username: string;
        emailVerifiedAt: Date;
        profile: import("./schemas").Profile;
        _id: import("mongoose").Types.ObjectId;
    }>;
    login({ password, uid }: LoginDto): Promise<{
        email: string;
        username: string;
        emailVerifiedAt: Date;
        profile: import("./schemas").Profile;
        _id: import("mongoose").Types.ObjectId;
    }>;
}
