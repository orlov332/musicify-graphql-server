
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
    exampleField?: Nullable<number>;
}

export interface UpdateGenreInput {
    id: number;
}

export interface UserInput {
    firstName: string;
    secondName: string;
    password: string;
    email: string;
}

export interface Artist {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    artists(): Nullable<Artist>[] | Promise<Nullable<Artist>[]>;
    artist(id: number): Nullable<Artist> | Promise<Nullable<Artist>>;
    genres(): Nullable<Genre>[] | Promise<Nullable<Genre>[]>;
    genre(id: number): Nullable<Genre> | Promise<Nullable<Genre>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): string | Promise<string>;
}

export interface IMutation {
    createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;
    updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;
    deleteArtist(id: number): Nullable<Artist> | Promise<Nullable<Artist>>;
    createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;
    removeGenre(id: number): Nullable<Genre> | Promise<Nullable<Genre>>;
    register(user: UserInput): User | Promise<User>;
}

export interface Genre {
    exampleField?: Nullable<number>;
}

export interface User {
    id: string;
    firstName: string;
    secondName: string;
    password: string;
    email: string;
}

type Nullable<T> = T | null;
