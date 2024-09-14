import React, { useEffect, useState } from "react";
import { UserCredential } from "../types/User";
import { login } from "../services/user";

export default function LoginPage() {
  const [auth, setAuth] = useState<UserCredential | null>(null);
  const [user, setUser] = useState<UserCredential>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [user]);

  const handleLogin = async () => {
    try {
      const userData = await login(user);
      setAuth(userData);
      setError("Login Sucessfully");
      console.log(userData, "userData -----");
    } catch (error) {
      console.log(error);
      setError("Login Failed");
      setAuth(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      LoginPage
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <label>{error}</label>}
      <p>{auth && <>{auth.username}</>}</p>
    </div>
  );
}
