
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
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): string | Promise<string>;
}

export interface IMutation {
    createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;
    updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;
    removeArtist(id: number): Nullable<Artist> | Promise<Nullable<Artist>>;
    register(user: UserInput): User | Promise<User>;
}

export interface User {
    id: string;
    firstName: string;
    secondName: string;
    password: string;
    email: string;
}

type Nullable<T> = T | null;
