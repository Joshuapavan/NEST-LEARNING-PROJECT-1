import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hii 👋🏻, Welcome to my User Management API!!';
  }
}
