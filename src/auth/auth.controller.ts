import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Post,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Headers('X-Cookie') cookies: string,
    @Body('account') account: string,
    @Body('pwd') pwd: string,
    @Body('verifycode') verifycode: string,
  ) {
    return this.authService.login(cookies, account, pwd, verifycode);
  }

  @Get('init')
  async init() {
    return await this.authService.initCookies();
  }

  @Get('verify')
  @Header('Content-Type', 'image/jpeg;charset=UTF-8')
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate')
  async verify(@Query('cookie') cookies: string) {
    return this.authService.verify(cookies);
  }
}
