import { ConfigEnum } from '@/enum/config.enum';
import { registerAs } from '@nestjs/config';
import * as config from 'config';

const jwtConfig: any = config.get('jwt');

export default registerAs(ConfigEnum.JWT_CONFIG, () => ({
  ...jwtConfig,
}));
