import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas';
import { UsersService } from './services';
import { UserRepository } from './repositories';
import { AuthController } from './auth.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UsersService, UserRepository],
  controllers: [AuthController],
})
export class AuthModule {}
