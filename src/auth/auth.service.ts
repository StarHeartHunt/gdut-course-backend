import { Injectable, StreamableFile } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { Readable } from 'stream';
import { createAxios } from 'src/utils/request';

@Injectable()
export class AuthService {
  axiosRef: AxiosInstance;

  constructor() {
    this.axiosRef = createAxios();
  }

  async initCookies(): Promise<string> {
    const response = await this.axiosRef.get('/login!welcome.action');

    return response.headers['set-cookie']
      .map((cookie) => {
        const [key, value] = cookie.split(';')[0].split('=');
        return `${key}=${value}`;
      })
      .join(';');
  }

  async login(
    cookies: string,
    account: string,
    pwd: string,
    verifycode: string,
  ): Promise<Record<string, string>> {
    const params = new URLSearchParams();
    params.append('account', account);
    params.append('pwd', pwd);
    params.append('verifycode', verifycode);

    return {
      cookies: cookies,
      data: (
        await this.axiosRef.post('/new/login', params, {
          headers: {
            Cookie: cookies,
          },
        })
      ).data,
    };
  }

  async verify(cookies: string) {
    const response = await this.axiosRef.get('/yzm', {
      headers: {
        Cookie: cookies,
      },
      params: {
        d: Date.now(),
      },
      responseType: 'arraybuffer',
    });

    return new StreamableFile(Readable.from(response.data));
  }
}
