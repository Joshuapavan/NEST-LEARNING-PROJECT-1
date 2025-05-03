import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey 👋🏻, Welcome to my User Management API';
  }
}
