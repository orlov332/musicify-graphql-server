
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    password: string;
    email: string;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export interface IQuery {
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): string | Promise<string>;
}

export interface IMutation {
    register(user: UserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
