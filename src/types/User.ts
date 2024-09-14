export type UserCredential = {
  username: string;
  password: string;
};

export type UserData = UserCredential & {
  createdAt: string;
  name: string;
  avatar: string;
  aboutme: string;
  address: string;
  gender: string;
  email: string;
  id: string;
};
