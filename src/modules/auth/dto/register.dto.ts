import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender } from 'common/enums';

export class RegisterDto {
  @IsEmail()
  @ApiProperty({
    example: 'example@example.com',
    description: 'The email of the User',
    format: 'email',
    type: String,
    uniqueItems: true,
  })
  email: string;

  @IsString()
  @IsAlphanumeric('en-US')
  @MinLength(3)
  @MaxLength(20)
  @ApiProperty({
    example: 'example',
    description: 'The username of the User',
    type: String,
    uniqueItems: true,
    minLength: 3,
    maxLength: 20,
  })
  username: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
  })
  @ApiProperty({
    example: 'qqwe!!qqwQv',
    description: 'The password of the User, must contain at least 1 lowercase letter, 1 uppercase letter, and 1 number',
    type: String,
  })
  password: string;

  @IsString()
  @IsAlpha('ar')
  @MinLength(3)
  @MaxLength(30)
  @ApiProperty({
    example: 'محمد',
    description: 'The first name of the User, must be arabic name',
    type: String,
    minLength: 3,
    maxLength: 30,
  })
  firstname: string;

  @IsString()
  @IsAlpha('ar')
  @MinLength(3)
  @MaxLength(30)
  @ApiProperty({
    example: 'محمد',
    description: 'The last name of the User, must be arabic name',
    type: String,
    minLength: 3,
    maxLength: 30,
  })
  lastname: string;

  @IsEnum(Object.values(Gender))
  @ApiProperty({
    description: 'The gender of the User',
    enum: Gender,
    type: String,
  })
  gender: Gender;
}
