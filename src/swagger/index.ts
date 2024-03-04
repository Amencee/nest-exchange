/**
 * swagger配置文件
 */
import type { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * @description: 设置swagger
 * @param {NestExpressApplication} app 应用程序
 */
export const setupSwagger = (app: NestExpressApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Exchange')
    .setDescription('Exchange 接口文档')
    .setVersion('v1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/swagger', app, document);
};
