import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
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

  @Post('verify')
  async verify(@Headers('X-Cookie') cookies: string) {
    return this.authService.verify(cookies);
  }
}
