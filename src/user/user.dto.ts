export interface UserDto {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface UserInput {
  firstName: string;
  secondName: string;
  password: string;
  email: string;
}
