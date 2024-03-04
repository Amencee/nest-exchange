import { SetMetadata } from '@nestjs/common';

export type INoAuth = 'ALL' | 'ROLES';

export const IS_AUTH = 'isAuth';

export const NoAuth = (name: INoAuth) => SetMetadata(IS_AUTH, name); 
