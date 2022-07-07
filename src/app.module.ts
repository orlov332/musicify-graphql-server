import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { ArtistModule } from './artist/artist.module';
import { GenreModule } from './genre/genre.module';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
      },
      formatError: ({ extensions, locations, message, path }: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            extensions?.exception?.['response']?.data?.message ?? message,
          locations,
          path,
        };
        return graphQLFormattedError;
      },
    }),
    UserModule,
    ArtistModule,
    GenreModule,
  ],
})
export class AppModule {}
