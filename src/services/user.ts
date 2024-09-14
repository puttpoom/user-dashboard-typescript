import axios from "axios";
import { UserCredential } from "../types/User";
const API_BASEURL = import.meta.env.VITE_API_BASEURL;

export const login = async ({ username, password }: UserCredential) => {
  try {
    const res = await axios.get(`${API_BASEURL}/users`);
    const users = res.data;
    const authUser = users.filter(
      (u: any) => u.username === username && u.password === password
    );
    console.log(authUser);
    return authUser[0];
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async () => {
  try {
    const res = await axios.get(`${API_BASEURL}/users`);
    const users = res.data;
    return users;
  } catch (error) {
    console.log(error);
  }
};
