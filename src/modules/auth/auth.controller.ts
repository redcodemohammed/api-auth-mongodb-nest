import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto';
import { UsersService } from './services';
import { ApiConflictResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

// /v1/auth
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  // POST - /v1/auth/register
  @Post('register')
  @ApiCreatedResponse()
  @ApiConflictResponse()
  public async register(@Body() { email, firstname, gender, lastname, password, username }: RegisterDto) {
    const user = await this.usersService.createUser({
      email,
      password,
      profile: {
        firstname,
        gender,
        lastname,
      },
      username,
    });

    //TODO - send email verification
    //TODO - in the future check why @UseInterceptors(ClassSerializerInterceptor) doesn't work
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  //POST - /v1/auth/login
  @Post('login')
  @ApiCreatedResponse()
  @ApiConflictResponse()
  public async login(@Body() { password, uid }: LoginDto) {
    const user = await this.usersService.localLogin(uid, password);

    //TODO - send email verification
    //TODO - in the future check why @UseInterceptors(ClassSerializerInterceptor) doesn't work
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}
