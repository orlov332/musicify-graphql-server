import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  async user(@Args('id') id: string) {
    return this.userService.findOneById(id);
  }

  @Query()
  async jwt(@Args('email') email: string, @Args('password') password: string) {
    return this.userService.generateJwt(email, password);
  }
}
