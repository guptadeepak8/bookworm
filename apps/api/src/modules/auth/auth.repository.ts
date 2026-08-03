import { UserModel } from "./auth.model";


interface CreateUserDto  {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function findUserByEmail(email: string) {
  return UserModel.findOne({
    email,
  });
}

export async function createUser(data: CreateUserDto) {
  return UserModel.create(data);
}

export async function findUserById(id: string) {
  return UserModel.findById(id).select("-password");
}

export async function updateRefreshToken() {}
