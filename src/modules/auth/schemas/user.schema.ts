import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Profile, ProfileSchema } from './profile.schema';
import { hash } from 'common/helpers';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  // account
  @Prop({ index: true, unique: true })
  email: string;
  @Prop({ index: true, unique: true })
  username: string;
  @Prop({ select: false })
  password: string;

  @Prop()
  emailVerifiedAt: Date;

  @Prop({ type: ProfileSchema })
  profile: Profile;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password);
  }

  next();
});
