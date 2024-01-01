import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from 'config';
import { AuthModule } from 'modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    MongooseModule.forRoot(databaseConfig().url),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
