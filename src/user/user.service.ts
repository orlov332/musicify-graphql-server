import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserDto } from './user.dto';

const { USERS_URL } = process.env;

type UserInput = Omit<UserDto, '_id'>;

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

  async register(user: UserInput): Promise<UserDto> {
    return await axios
      .post<UserDto>(`${USERS_URL}/register`, user)
      .then((res) => res.data);
  }
}
