import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserDto } from './user.dto';

const { USERS_URL } = process.env;

@Injectable()
export class UserService {
  async findOneById(id: string) {
    return axios.get<UserDto>(`${USERS_URL}/${id}`).then((res) => res.data);
  }

  async login(email: string, password: string): Promise<string> {
    return axios
      .post(`${USERS_URL}/login`, { email, password })
      .then((res) => res.data.jwt);
  }
}
