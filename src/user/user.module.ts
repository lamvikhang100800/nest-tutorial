import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserQuery } from './queries/user.query';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserService , UserQuery],
  controllers: [UserController]
})
export class UserModule {}
