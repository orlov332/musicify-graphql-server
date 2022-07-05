import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { IQuery, User } from '../graphql.schema';

@Resolver('User')
export class UserResolver implements IQuery {
  constructor(private userService: UserService) {}

  @Query()
  async user(@Args('id') id: string): Promise<User> {
    return this.userService.findOneById(id).then((res) => ({
      ...res,
      id: res._id,
      secondName: res.lastName,
    }));
  }

  @Query()
  async jwt(@Args('email') email: string, @Args('password') password: string) {
    return this.userService.login(email, password);
  }
}
