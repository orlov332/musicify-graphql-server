import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOneById(id: string) {
    return Promise.resolve(undefined);
  }

  generateJwt(email: string, password: string) {
    return Promise.resolve(undefined);
  }
}
