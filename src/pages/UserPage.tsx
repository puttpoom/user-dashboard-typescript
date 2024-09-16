import React, { useEffect, useState } from "react";
import { getUserById } from "../services/user";
import { useParams } from "react-router-dom";
import UserCard from "../components/UserCard";
import { TUserCard } from "../components/UserCard";

export default function UserPage() {
  const { userId } = useParams<{ userId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<TUserCard | null>(null);

  useEffect(() => {
    async function getUser() {
      try {
        const res = (await getUserById(Number(userId))) as any;
        setUserData(res.data);
        setIsLoading(false);
        console.log(userId);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [userId]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && userData && (
        <UserCard
          id={userData.id}
          name={userData.name}
          avatar={userData.avatar}
          email={userData.email}
          address={userData.address}
          gender={userData.gender}
          aboutme={userData.aboutme}
          createdAt={userData.createdAt}
        />
      )}
    </div>
  );
}
