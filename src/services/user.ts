import { any } from "joi";
import { UserCredential } from "../types/User";
import mockUser from "../utils/mockData";

export const loginService = ({ email, password }: UserCredential) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = mockUser.filter(
        (user) => user.email === email && user.password === password
      );
      if (userData.length === 1) {
        resolve({
          status: 200,
          data: userData[0],
          message: "Login Sucessfully",
        });
      } else {
        reject({ status: 400, data: null, message: "Login Failed" });
      }
    }, 1000);
  });
};

export const getAllUser = (): any => {
  const userData = mockUser;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, 1000);
  });
};

export const getUserById = (userId: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredUserId = mockUser.filter((user) => user.id === +userId);
      if (filteredUserId.length === 1) {
        resolve({
          status: 200,
          data: filteredUserId[0],
          message: "Founded User",
        });
      } else {
        reject({
          status: 404,
          data: null,
          message: `Not Found User ${userId}`,
        });
      }
    }, 1000);
  });
};
