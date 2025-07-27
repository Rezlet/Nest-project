import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersRepository } from './user.repository';

@Module({
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UserModule {}
