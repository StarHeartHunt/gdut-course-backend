import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as http from 'http';

@Injectable()
export class AuthService {
  axiosRef: any;

  constructor() {
    this.axiosRef = axios.create({
      baseURL: 'https://jxfw.gdut.edu.cn',
      timeout: 1000,
      httpAgent: new http.Agent({ keepAlive: true }),
      headers: {
        Accept: 'text/plain, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
        'sec-ch-ua':
          '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': 'Windows',
        'X-Requested-With': 'XMLHttpRequest',
        Referer: 'https://jxfw.gdut.edu.cn/login!welcome.action',
      },
    });
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
          withCredentials: true,
        })
      ).data,
    };
  }

  async verify(cookies): Promise<string> {
    const response = await this.axiosRef.get(`/yzm?d=${Date.now()}`, {
      headers: {
        Cookie: cookies,
      },
      withCredentials: true,
      responseType: 'arraybuffer',
    });

    return (
      'data:image/png;base64,' +
      Buffer.from(response.data, 'binary').toString('base64')
    );
  }
}
