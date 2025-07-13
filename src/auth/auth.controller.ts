import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authSerivce: AuthService) {}

  @Post('signup')
  signup(@Body() dto: RegisterDto) {
    return this.authSerivce.signup(dto);
  }

  @Post('signin')
  signin() {
    return this.authSerivce.signin();
  }
}
