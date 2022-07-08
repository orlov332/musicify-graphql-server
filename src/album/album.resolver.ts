import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AlbumService } from './album.service';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { IdResolver } from '../common/id-resolver';

@Resolver('Album')
export class AlbumResolver extends IdResolver {
  constructor(private readonly albumService: AlbumService) {
    super();
  }

  @Mutation('createAlbum')
  create(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
    return this.albumService.create(createAlbumInput);
  }

  @Query('albums')
  findAll(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('filter') filter: string,
  ) {
    return this.albumService.findAll(limit, offset, filter);
  }

  @Query('album')
  findOne(@Args('id') id: string) {
    return this.albumService.findOne(id);
  }

  @Mutation('updateAlbum')
  update(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput) {
    return this.albumService.update(updateAlbumInput);
  }

  @Mutation('deleteAlbum')
  remove(@Args('id') id: string) {
    return this.albumService.remove(id);
  }
}
