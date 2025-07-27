import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtConfigModule } from 'src/common/jwt/jwt-config.module';
import { JwtStrategy } from './strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [JwtConfigModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
