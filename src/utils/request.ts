import axios from 'axios';
import * as http from 'http';

export function createAxios() {
  return axios.create({
    baseURL: 'https://jxfw.gdut.edu.cn',
    timeout: 5000,
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
    withCredentials: true,
  });
}
