
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateArtistInput {
    exampleField?: Nullable<number>;
}

export interface UpdateArtistInput {
    id: number;
}

export interface MemberInput {
    artist: string;
    instrument?: Nullable<string>;
    years?: Nullable<string[]>;
}

export interface CreateBandInput {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<MemberInput[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<string[]>;
}

export interface UpdateBandInput {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<MemberInput[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<string[]>;
}

export interface CreateGenreInput {
    name: string;
    description: string;
    country: string;
    year: number;
}

export interface UpdateGenreInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UserInput {
    firstName: string;
    secondName: string;
    password: string;
    email: string;
}

export interface List {
    limit: number;
    offset: number;
    total: number;
}

export interface Artist {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    artists(): Nullable<Artist>[] | Promise<Nullable<Artist>[]>;
    artist(id: number): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(limit: number, offset: number, filter: string): BandList | Promise<BandList>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    genres(limit: number, offset: number, filter: string): GenreList | Promise<GenreList>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): string | Promise<string>;
}

export interface IMutation {
    createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;
    updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;
    deleteArtist(id: number): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(createBandInput: CreateBandInput): Band | Promise<Band>;
    updateBand(updateBandInput: UpdateBandInput): Band | Promise<Band>;
    deleteBand(id: string): Nullable<DeleteResult> | Promise<Nullable<DeleteResult>>;
    createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;
    deleteGenre(id: string): Nullable<DeleteResult> | Promise<Nullable<DeleteResult>>;
    register(user: UserInput): User | Promise<User>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Member[]>;
    website?: Nullable<string>;
    genres?: Nullable<Genre[]>;
}

export interface Member {
    artist: string;
    instrument?: Nullable<string>;
    years?: Nullable<string[]>;
}

export interface BandList extends List {
    items: Band[];
    limit: number;
    offset: number;
    total: number;
}

export interface DeleteResult {
    acknowledged: boolean;
    deletedCount: number;
}

export interface Genre {
    id: string;
    name: string;
    description: string;
    country: string;
    year: number;
}

export interface GenreList extends List {
    items: Genre[];
    limit: number;
    offset: number;
    total: number;
}

export interface User {
    id: string;
    firstName: string;
    secondName: string;
    password: string;
    email: string;
}

type Nullable<T> = T | null;
