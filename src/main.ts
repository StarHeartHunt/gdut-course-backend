import { NestFactory } from '@nestjs/core';

//import { createProxyMiddleware } from 'http-proxy-middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*
  app.use(
    '/proxy/jxfw/',
    createProxyMiddleware({
      target: 'https://jxfw.gdut.edu.cn/',
      pathRewrite: {
        '/proxy/jxfw/': '',
      },
      changeOrigin: true,
      secure: false,
    }),
  );
  */
  await app.listen(3000);
}
bootstrap();
