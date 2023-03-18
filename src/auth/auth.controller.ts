import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body('cookies') cookies: string,
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
  async verify(@Body('cookies') cookies: string) {
    return this.authService.verify(cookies);
  }
}
