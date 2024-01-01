import { IsString } from 'class-validator';
export class LoginDto {
  @IsString()
  uid: string;

  @IsString()
  password: string;
}
