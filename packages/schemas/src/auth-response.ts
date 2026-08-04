export interface AuthUser {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  createdAt: Date;
}

export interface MeResponse {
  success: true;

  data: AuthUser;
}