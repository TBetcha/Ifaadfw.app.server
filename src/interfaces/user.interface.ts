/** @format */

export interface IUser {
  firstName: string
  lastName: string
  email: string
  birthday: string
}

export interface IDbUser extends IUser {
  id: string
  createdAt: Date
}
