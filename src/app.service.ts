import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getSession(): Promise<string> {
    const cookie = await this.httpService.axiosRef.get(
      'https://jxfw.gdut.edu.cn/login!welcome.action',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
        },
        withCredentials: true,
      },
    );
    return cookie.headers['set-cookie'][0].split(';')[0].split('=')[1];
  }

  getHello(): string {
    return 'Hello World!';
  }
}
