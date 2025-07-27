import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Public } from '../../common/decorations/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authSerivce: AuthService) {}

  @Public()
  @Post('signup')
  signup(@Body() dto: RegisterDto) {
    return this.authSerivce.signup(dto);
  }

  @Public()
  @Post('signin')
  signin(@Body() dto: LoginDto) {
    return this.authSerivce.signin(dto);
  }
}
