import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDto, UserInput } from './user.dto';

const convertUserFromDto = (userDto: UserDto) => {
  const { lastName, email, password, firstName, _id } = userDto;
  return {
    email,
    firstName,
    password,
    id: _id,
    secondName: lastName,
  };
};

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  async user(@Args('id') id: string) {
    return this.userService.findOneById(id).then(convertUserFromDto);
  }

  @Query()
  async jwt(@Args('email') email: string, @Args('password') password: string) {
    return this.userService.login(email, password);
  }

  @Mutation()
  async register(@Args('user') user: UserInput) {
    const { secondName, email, password, firstName } = user;
    return this.userService
      .register({ email, password, firstName, lastName: secondName })
      .then(convertUserFromDto);
  }
}
