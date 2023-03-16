import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('auth/session')
  async session(@Response() response) {
    const sessionId = await this.appService.getSession();
    response.cookie('JSESSIONID', sessionId);
    response.json({ code: 200, message: 'success' });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
