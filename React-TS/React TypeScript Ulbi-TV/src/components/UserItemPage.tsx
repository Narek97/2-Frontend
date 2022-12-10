import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserItemPage: FC = () => {
  const { id } = useParams();

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>User</h1>
      {user?.name} - {user?.email}
    </div>
  );
};

export default UserItemPage;
