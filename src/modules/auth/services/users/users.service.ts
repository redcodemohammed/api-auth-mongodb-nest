import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'common/helpers';
import { UserRepository } from 'modules/auth/repositories';
import { type User } from 'modules/auth/schemas';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser({
    email,
    username,
    password,
    profile: { firstname, gender, lastname },
  }: Omit<User, 'emailVerifiedAt'>) {
    // check if the email is taken
    const emailIsTaken = await this.isTaken({ email: email });
    if (emailIsTaken) {
      throw new ConflictException('email is taken');
    }

    // check if the username is taken
    const usernameIsTaken = await this.isTaken({ username });
    if (usernameIsTaken) {
      throw new ConflictException('username is taken');
    }

    // create the user
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

  async localLogin(uid: string, password: string) {
    // find the user by email or username
    const user = await this.userRepository.findOne({ $or: [{ email: uid }, { username: uid }] });
    if (!user) {
      throw new UnauthorizedException('invalid credentials');
    }

    // check if the password is valid
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('invalid credentials');
    }

    return user.toObject();
  }

  async isTaken(data: Record<string, unknown>) {
    const user = await this.userRepository.findOne(data);

    return user !== null;
  }
}
