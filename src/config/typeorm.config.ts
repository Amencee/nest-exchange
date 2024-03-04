import { ConfigEnum } from '@/enum/config.enum';
import { resolve } from '@/utils';
import { AES_KEY, securityAESDecrypt } from '@/utils/common';
import { registerAs } from '@nestjs/config';
import * as config from 'config';

const dbConfig: any = config.get('db');
const entities = [resolve('dist') + '/**/*.entity{.ts,.js}']; // 生产环境这里一定要注意是dist目录，否则会报连接异常
export default registerAs(ConfigEnum.DB_CONFIG, () => {
  const connection = {
    type: dbConfig.type,
    host: securityAESDecrypt(dbConfig.host, AES_KEY),
    port: dbConfig.port,
    charset: dbConfig.charset,
    timezone: dbConfig.timezone,
    username: securityAESDecrypt(dbConfig.username, AES_KEY),
    password: securityAESDecrypt(dbConfig.password, AES_KEY),
    database: securityAESDecrypt(dbConfig.database, AES_KEY),
    entities,
    // autoLoadEntities: true, // 自动链接被 forFeature 注册的实体
    synchronize: dbConfig.synchronize, // 同步本地的schema与数据库-初始化数据库的时候使用，生产环境建议关闭
    logging: dbConfig.logging, // 是否打印日志,执行sql语句时候输出原生sql,也可以配置成一个数组["query", "error", "schema"]指定sql的执行类型
  }
  return connection
});
