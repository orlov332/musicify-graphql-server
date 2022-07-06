
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

export interface CreateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<string>;
}

export interface UpdateGenreInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<string>;
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
    genres(limit: number, offset: number, filter: string): GenreList | Promise<GenreList>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): string | Promise<string>;
}

export interface IMutation {
    createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;
    updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;
    deleteArtist(id: number): Nullable<Artist> | Promise<Nullable<Artist>>;
    createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;
    deleteGenre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    register(user: UserInput): User | Promise<User>;
}

export interface Genre {
    id: string;
    name: string;
    description: string;
    country: string;
    year: string;
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
