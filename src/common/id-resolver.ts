import { Parent, ResolveField } from '@nestjs/graphql';

export class IdResolver {
  @ResolveField('id')
  getId(@Parent() { _id }) {
    return _id;
  }
}
