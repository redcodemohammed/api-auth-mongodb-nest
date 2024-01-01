import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from 'common/enums';
import { HydratedDocument } from 'mongoose';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema({ timestamps: true })
export class Profile {
  @Prop()
  firstname: string;
  @Prop()
  lastname: string;
  @Prop()
  avatar?: string;
  @Prop()
  bio?: string;
  @Prop()
  gender: Gender;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
